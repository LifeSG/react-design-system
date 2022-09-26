import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { OverlayProps } from "./types";
import { Root, Wrapper } from "./overlay.styles";

export const Overlay = ({
    show = false,
    rootId,
    onOverlayClick,
    children,
    backgroundOpacity,
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
        if (show) {
            const isStacked = checkIfStacked();
            setStacked(isStacked);

            if (!isStacked) {
                const timerId = setTimeout(() => {
                    applyBodyStyleClass("add");
                }, 200); // Allow overlay animations to complete
                return () => clearTimeout(timerId);
            }
        } else {
            /**
             * Here we have to used the ref value to know if it is stacked
             * rather than checking for the presence of the overlay class
             * on <body>
             */
            if (!stacked.current) {
                const timerId = setTimeout(() => {
                    applyBodyStyleClass("add");
                }, 200); // Allow overlay animations to complete
                return () => clearTimeout(timerId);
            }
        }
    }, [show]);

    useEffect(() => {
        setRootElement(getRootElement());

        /**
         * Only add stylesheet for a non-stacked overlay
         */
        const isStacked = checkIfStacked();
        setStacked(isStacked);
        if (!isStacked) addStylesheetForDocumentBody();

        return () => {
            applyBodyStyleClass("remove");
        };
    }, []);

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
        /**
         * Check if the body style was altered before. If it was, then this is
         * a stacked overlay
         */
        return document.body.classList.contains(OVERLAY_OPEN_CLASSNAME);
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

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();

        const modal = childRef.current?.firstChild;
        if (modal && (modal as any).contains(event.target)) {
            return;
        } else if (onOverlayClick && enableOverlayClick) {
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
            $backgroundOpacity={backgroundOpacity || (isStacked ? 0.5 : 0.8)}
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
