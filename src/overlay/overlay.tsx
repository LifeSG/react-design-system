import {
    FloatingNode,
    FloatingTree,
    useFloatingNodeId,
} from "@floating-ui/react";
import clsx from "clsx";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import { useApplyStyle, useInheritedThemeScope } from "../theme";
import { SimpleIdGenerator } from "../util";
import * as styles from "./overlay.styles";
import type { OverlayProps } from "./types";
import { useFloatingParent } from "./use-floating-context";

const OverlayComponent = ({
    show = false,
    rootId,
    onOverlayClick,
    children,
    backgroundOpacity: _backgroundOpacity,
    backgroundBlur = true,
    disableTransition = false,
    enableOverlayClick = false,
    zIndex: customZIndex,
    id,
    containerRef,
}: OverlayProps): JSX.Element | null => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
    const [isStacked, _setIsStacked] = useState<boolean>();
    const [uid] = useState(() => SimpleIdGenerator.generate());
    const nodeId = useFloatingNodeId();

    const stacked = useRef<boolean>();
    // Track where mousedown started to prevent closing drawer during text selection drag
    const mouseDownInsideModalRef = useRef(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const overlayRootId = id
        ? `lifesg-ds-overlay-root-${id}`
        : "lifesg-ds-overlay-root";
    const zIndex = customZIndex ?? (isStacked ? 99999 : 99998);
    const { themeProps, themeStyle } = useInheritedThemeScope(show);

    useFloatingParent(zIndex);

    useApplyStyle(rootRef, { [styles.tokens.root.zIndex]: zIndex });

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        initialiseStylesForDocumentBody();
        setRootElement(getRootElement());

        return () => {
            removeOverlay();

            if (getOverlayOrder().length < 1) {
                if (isIOS()) {
                    applyScrollLockClassForIOS("remove");
                    scrollToLastScrollPositionForIOS();
                }

                applyBodyStyleClass("remove");
            }
        };
    }, []);

    useEffect(() => {
        if (show) {
            const isStacked = checkIfStacked();
            setStacked(isStacked);

            addOverlay();

            if (isIOS() && getOverlayOrder().length === 1) {
                saveScrollPosition();
                applyScrollLockClassForIOS("add");
            }

            const timerId = setTimeout(() => {
                applyBodyStyleClass("add");
            }, 200); // Allow overlay animations to complete

            return () => clearTimeout(timerId);
        } else {
            removeOverlay();

            if (isIOS() && getOverlayOrder().length < 1) {
                applyScrollLockClassForIOS("remove");
                scrollToLastScrollPositionForIOS();
            }

            const timerId = setTimeout(() => {
                if (getOverlayOrder().length < 1) {
                    applyBodyStyleClass("remove");
                }
            }, 200); // Allow overlay animations to complete

            return () => clearTimeout(timerId);
        }
    }, [show]);

    // Track mousedown origin to distinguish clicks from text selection drags
    useEffect(() => {
        if (!show) return;

        document.addEventListener("mousedown", handleDocumentMouseDown, true);
        return () => {
            document.removeEventListener(
                "mousedown",
                handleDocumentMouseDown,
                true
            );
        };
    }, [show]);

    // =============================================================================
    // REF FUNCTIONS
    // =============================================================================
    const setStacked = (data: boolean) => {
        stacked.current = data;
        _setIsStacked(data);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const isIOS = () => /(iPad|iPhone|iPod)/g.test(navigator.userAgent);

    const getRootElement = (): HTMLElement | null => {
        if (document && rootId) {
            return document.getElementById(rootId);
        } else if (document) {
            // If rootId not specified, we'll use body
            return document.body;
        } else {
            return null;
        }
    };

    const checkIfStacked = () => {
        return getOverlayOrder().length > 0;
    };

    const initialiseStylesForDocumentBody = () => {
        const documentWidth = document.documentElement.clientWidth;
        const windowWidth = window.innerWidth;
        const scrollBarWidth = windowWidth - documentWidth;

        document.documentElement.style.setProperty(
            styles.tokens.global.scrollbarWidth,
            `${scrollBarWidth}px`
        );
    };

    /**
     * This sets the style of <body> to hide the scrollbar
     */
    const applyBodyStyleClass = (action: "add" | "remove") => {
        const isOverlayStyleClassApplied = document.body.classList.contains(
            styles.tokens.global.overlayOpenClass
        );

        if (action === "add" && !isOverlayStyleClassApplied) {
            document.body.classList.add(styles.tokens.global.overlayOpenClass);
        } else if (action === "remove" && isOverlayStyleClassApplied) {
            document.body.classList.remove(
                styles.tokens.global.overlayOpenClass
            );
        }
    };

    const getOverlayOrder = () => {
        const attr = document.body.dataset.lifesgDsOverlayOrder;
        return attr ? attr.split(",") : [];
    };

    const addOverlay = () => {
        const order = getOverlayOrder();
        document.body.dataset.lifesgDsOverlayOrder = [...order, uid].join(",");
    };

    const removeOverlay = () => {
        const order = getOverlayOrder();
        document.body.dataset.lifesgDsOverlayOrder = order
            .filter((o) => o !== uid)
            .join(",");
    };

    /**
     * This sets the style of <body> to further prevent scrolling on iOS
     *
     * ref: https://stackoverflow.com/a/57455820/3932279
     * `overflow: hidden` and `overscroll-behavior` is ignored by iOS, this is
     * an alternative solution
     *
     * as a side effect this causes the scroll position to reset, so additional
     * logic to restore the scroll on close is required
     */
    const applyScrollLockClassForIOS = (action: "add" | "remove") => {
        if (!isIOS()) {
            return;
        }

        const isClassApplied = document.body.classList.contains(
            styles.tokens.global.overlayScrollLockClass
        );

        if (action === "add" && !isClassApplied) {
            document.body.classList.add(
                styles.tokens.global.overlayScrollLockClass
            );
        } else if (action === "remove" && isClassApplied) {
            document.body.classList.remove(
                styles.tokens.global.overlayScrollLockClass
            );
        }
    };

    const saveScrollPosition = () => {
        const bodyStyle = document.body.style;
        const scrollY = bodyStyle.top ? bodyStyle.top : window.scrollY + "px";

        document.body.style.setProperty(styles.tokens.global.scrollY, scrollY);
    };

    const scrollToLastScrollPositionForIOS = () => {
        if (!isIOS()) {
            return;
        }

        const scrollY = document.body.style.getPropertyValue(
            styles.tokens.global.scrollY
        );
        requestAnimationFrame(() => {
            window.scrollTo({
                top: parseFloat(scrollY),
            });
        });
    };

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDocumentMouseDown = (e: MouseEvent) => {
        const container = containerRef?.current ?? wrapperRef.current;
        const wrapper = wrapperRef.current;
        if (!container) {
            mouseDownInsideModalRef.current = false;
            return;
        }

        const target = e.target as Node;
        const clickedOnWrapper = wrapper === target;
        const clickedOnContainer = container === target;
        const clickedInsideContainer = container.contains(target);

        // Track if mousedown started inside modal content
        mouseDownInsideModalRef.current =
            !clickedOnWrapper && (clickedOnContainer || clickedInsideContainer);
    };

    const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const container = containerRef?.current ?? wrapperRef.current;
        const wrapper = wrapperRef.current;
        if (!container) {
            mouseDownInsideModalRef.current = false;
            return;
        }

        const target = event.target as Node;
        const clickedOnWrapper = wrapper === target;
        const clickedOnContainer = container === target;
        const clickedInsideContainer = container.contains(target);
        const clickedInsideModal = clickedOnContainer || clickedInsideContainer;

        // Only close if both mousedown AND click happened outside modal
        if (
            (clickedOnWrapper || !clickedInsideModal) &&
            !mouseDownInsideModalRef.current &&
            onOverlayClick &&
            enableOverlayClick
        ) {
            event.preventDefault();
            onOverlayClick();
        }

        mouseDownInsideModalRef.current = false;
    };

    // =============================================================================
    // RENDER
    // =============================================================================
    const renderWrapper = () => (
        <FloatingNode id={nodeId}>
            <div
                ref={wrapperRef}
                data-testid="overlay-wrapper"
                className={clsx(
                    styles.wrapper,
                    show ? styles.wrapperShow : styles.wrapperHide,
                    isStacked && styles.wrapperStacked,
                    backgroundBlur && styles.wrapperBackgroundBlur,
                    disableTransition && styles.wrapperDisableTransition
                )}
                onClick={handleWrapperClick}
            >
                {children}
            </div>
        </FloatingNode>
    );

    const renderComponent = () => (
        <div
            ref={rootRef}
            id={overlayRootId}
            data-testid={overlayRootId}
            className={clsx(styles.root, show && styles.rootShow)}
            {...themeProps}
            style={themeStyle}
        >
            {children && renderWrapper()}
        </div>
    );

    return rootElement
        ? ReactDOM.createPortal(renderComponent(), rootElement)
        : null;
};

export const Overlay = (props: OverlayProps) => {
    return (
        <FloatingTree>
            <OverlayComponent {...props} />
        </FloatingTree>
    );
};
