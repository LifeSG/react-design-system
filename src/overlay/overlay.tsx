import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { SimpleIdGenerator } from "../util";
import { Root, Wrapper } from "./overlay.styles";
import { OverlayProps } from "./types";

export const Overlay = ({
    show = false,
    rootId,
    onOverlayClick,
    children,
    backgroundBlur = true,
    disableTransition = false,
    enableOverlayClick = false,
    zIndex,
    id,
}: OverlayProps): JSX.Element | null => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
    const [isStacked, _setIsStacked] = useState<boolean>();
    const [uid] = useState(() => SimpleIdGenerator.generate());

    const stacked = useRef<boolean>();

    const childRef = useRef<HTMLDivElement>(null);
    const childWithRef =
        children && React.cloneElement(children, { ref: childRef });

    const overlayRootId = id
        ? `lifesg-ds-overlay-root-${id}`
        : "lifesg-ds-overlay-root";

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        addStylesheetForDocumentBody();
        setRootElement(getRootElement());

        return () => {
            removeOverlay();
            if (getOverlayOrder().length < 1) {
                applyBodyStyleClass("remove");
            }
        };
    }, []);

    useEffect(() => {
        if (show) {
            const isStacked = checkIfStacked();
            setStacked(isStacked);

            addOverlay();

            const timerId = setTimeout(() => {
                applyBodyStyleClass("add");
            }, 200); // Allow overlay animations to complete

            return () => clearTimeout(timerId);
        } else {
            removeOverlay();

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

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const modal = childRef.current?.firstChild;
        if (modal && (modal as any).contains(event.target)) {
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
        <Wrapper
            data-testid={"overlay-wrapper"}
            $show={show}
            $stacked={isStacked}
            $backgroundBlur={backgroundBlur}
            $disableTransition={disableTransition}
            $enableOverlayClick={enableOverlayClick}
            onClick={handleWrapperClick}
        >
            {childWithRef}
        </Wrapper>
    );

    const renderComponent = () => (
        <Root
            id={overlayRootId}
            data-testid={overlayRootId}
            $show={show}
            zIndex={zIndex}
            $stacked={isStacked}
        >
            {children && renderWrapper()}
        </Root>
    );

    return rootElement
        ? ReactDOM.createPortal(renderComponent(), rootElement)
        : null;
};

// =============================================================================
// CONSTANTS
// =============================================================================
const STYLESHEET_ID = "lifesg-ds-overlay-stylesheet";
const OVERLAY_OPEN_CLASSNAME = "lifesg-ds-overlay-open";
