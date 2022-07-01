import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { OverlayProps } from "./types";
import { Root, Wrapper } from "./overlay.styles";

export const Overlay = ({
    show = false,
    rootId,
    onOverlayClick,
    children,
    backgroundOpacity = 0.8,
    backgroundBlur = true,
    disableTransition = false,
    stacked = false,
    enableOverlayClick = false,
    id,
}: OverlayProps): JSX.Element | null => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

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
        if (!stacked) {
            setTimeout(() => {
                applyBodyStyleClass(show ? "add" : "remove");
            }, 200); // Allow overlay animations to complete
        }
    }, [show]);

    useEffect(() => {
        /**
         * Mount actions
         * - set root element to inject Overlay
         * - add stylesheet to manipulate <body> only if it is not a stacked modal
         */
        setRootElement(getRootElement());
        if (!stacked) addStylesheetForDocumentBody();

        return () => {
            applyBodyStyleClass("remove");
        };
    }, []);

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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            show={show}
            backgroundOpacity={backgroundOpacity}
            backgroundBlur={backgroundBlur}
            disableTransition={disableTransition}
            enableOverlayClick={enableOverlayClick}
            onClick={handleWrapperClick}
        >
            {childWithRef}
        </Wrapper>
    );

    const renderComponent = () => (
        <Root id={overlayRootId} data-testid={overlayRootId} show={show}>
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
