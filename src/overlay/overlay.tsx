import {
    FloatingNode,
    FloatingTree,
    useFloatingNodeId,
} from "@floating-ui/react";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { SimpleIdGenerator } from "../util";
import { Root, Wrapper } from "./overlay.styles";
import { OverlayProps } from "./types";
import { useFloatingParent } from "./use-floating-context";

const OverlayComponent = ({
    show = false,
    rootId,
    onOverlayClick,
    children,
    backgroundOpacity,
    backgroundBlur = true,
    disableTransition = false,
    enableOverlayClick = false,
    zIndex: customZIndex,
    id,
}: OverlayProps): JSX.Element | null => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
    const [isStacked, _setIsStacked] = useState<boolean>();
    const [uid] = useState(() => SimpleIdGenerator.generate());
    const nodeId = useFloatingNodeId();

    const stacked = useRef<boolean>();

    const childRef = useRef<HTMLDivElement>(null);
    const childWithRef =
        children && React.cloneElement(children, { ref: childRef });

    const overlayRootId = id
        ? `lifesg-ds-overlay-root-${id}`
        : "lifesg-ds-overlay-root";
    const zIndex = customZIndex ?? (isStacked ? 99999 : 99998);

    useFloatingParent(zIndex);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        addStylesheetForDocumentBody();
        setRootElement(getRootElement());

        return () => {
            removeOverlay();
            if (getOverlayOrder().length < 1) {
                applyScrollLockClass("remove");
                scrollToLastScrollPosition();
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
                applyScrollLockClass("add");
            }

            const timerId = setTimeout(() => {
                applyBodyStyleClass("add");
            }, 200); // Allow overlay animations to complete

            return () => clearTimeout(timerId);
        } else {
            removeOverlay();

            if (isIOS() && getOverlayOrder().length < 1) {
                applyScrollLockClass("remove");
                scrollToLastScrollPosition();
            }

            const timerId = setTimeout(() => {
                if (getOverlayOrder().length < 1) {
                    applyBodyStyleClass("remove");
                }
            }, 200); // Allow overlay animations to complete

            return () => clearTimeout(timerId);
        }
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

    const addStylesheetForDocumentBody = () => {
        /**
         * This stylesheet is to manipulate the <body>. We only add once
         */
        if (!document.getElementById(STYLESHEET_ID)) {
            const overlayStyleSheet = document.createElement("style");
            overlayStyleSheet.id = STYLESHEET_ID;

            const documentWidth = document.documentElement.clientWidth;
            const windowWidth = window.innerWidth;
            const scrollBarWidth = windowWidth - documentWidth;

            overlayStyleSheet.innerHTML = `
				.${OVERLAY_OPEN_CLASSNAME} {
					overflow: hidden;
					padding-right: ${scrollBarWidth}px !important;
					-ms-overflow-style: none;
					scrollbar-width: none;
				}

				.${OVERLAY_OPEN_CLASSNAME}::-webkit-scrollbar {
					display: none;
				}

				.${OVERLAY_SCROLL_LOCK_CLASSNAME} {
					position: fixed;
					top: var(${SCROLL_POSITION_VAR}, 0);
					bottom: 0;
				}
			`;

            document.body.appendChild(overlayStyleSheet);
        }
    };

    /**
     * This sets the style of <body> to hide the scrollbar
     */
    const applyBodyStyleClass = (action: "add" | "remove") => {
        const isOverlayStyleClassApplied = document.body.classList.contains(
            OVERLAY_OPEN_CLASSNAME
        );

        if (action === "add" && !isOverlayStyleClassApplied) {
            document.body.classList.add(OVERLAY_OPEN_CLASSNAME);
        } else if (action === "remove" && isOverlayStyleClassApplied) {
            document.body.classList.remove(OVERLAY_OPEN_CLASSNAME);
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
    const applyScrollLockClass = (action: "add" | "remove") => {
        if (!isIOS()) {
            return;
        }

        const isClassApplied = document.body.classList.contains(
            OVERLAY_SCROLL_LOCK_CLASSNAME
        );

        if (action === "add" && !isClassApplied) {
            document.body.classList.add(OVERLAY_SCROLL_LOCK_CLASSNAME);
        } else if (action === "remove" && isClassApplied) {
            document.body.classList.remove(OVERLAY_SCROLL_LOCK_CLASSNAME);
        }
    };

    const saveScrollPosition = () => {
        const bodyStyle = document.body.style;
        const scrollY = bodyStyle.top ? bodyStyle.top : window.scrollY + "px";

        document.body.style.setProperty(SCROLL_POSITION_VAR, scrollY);
    };

    const scrollToLastScrollPosition = () => {
        const scrollY =
            document.body.style.getPropertyValue(SCROLL_POSITION_VAR);
        requestAnimationFrame(() => {
            window.scrollTo({
                top: parseFloat(scrollY),
            });
        });
    };

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const modal = childRef.current?.firstChild;
        if (modal && (modal as Node).contains(event.target as Node)) {
            return;
        } else if (onOverlayClick && enableOverlayClick) {
            event.preventDefault();
            onOverlayClick();
        }
    };

    // =============================================================================
    // RENDER
    // =============================================================================
    const renderWrapper = () => (
        <FloatingNode id={nodeId}>
            <Wrapper
                data-testid={"overlay-wrapper"}
                $show={show}
                $backgroundOpacity={
                    backgroundOpacity || (isStacked ? 0.5 : 0.8)
                }
                $backgroundBlur={backgroundBlur}
                $disableTransition={disableTransition}
                onClick={handleWrapperClick}
            >
                {childWithRef}
            </Wrapper>
        </FloatingNode>
    );

    const renderComponent = () => (
        <Root
            id={overlayRootId}
            data-testid={overlayRootId}
            $show={show}
            $zIndex={zIndex}
        >
            {children && renderWrapper()}
        </Root>
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

// =============================================================================
// CONSTANTS
// =============================================================================
const STYLESHEET_ID = "lifesg-ds-overlay-stylesheet";
const OVERLAY_OPEN_CLASSNAME = "lifesg-ds-overlay-open";
const OVERLAY_SCROLL_LOCK_CLASSNAME = "lifesg-ds-overlay-scroll-lock";
const SCROLL_POSITION_VAR = "--lifesg-ds-overlay-scroll-y";
