import React, { useEffect, useRef, useState } from "react";
import { Popover } from "./popover";
import { HOCTrigger, HOCWrapper } from "./popover.styles";
import { PopoverHOCOptionsProps, PopoverHOCProps } from "./types";
import { MediaWidths } from "../styles/spec";
import { useMediaQuery } from "react-responsive";

export const withPopover = <T,>(
    Component: React.ComponentType<T>,
    options: PopoverHOCOptionsProps
) => {
    const ComponentToReturn = (props: T & PopoverHOCProps) => {
        // =============================================================================
        // CONST, STATE, REF
        // =============================================================================
        const { onPopoverAppear, onPopoverDismiss, ...otherProps } = props;
        const triggerBehaviour = options.trigger || "click";
        const innerProps = otherProps as T;
        const [visible, setVisible] = useState<boolean>(false);
        const nodeRef = useRef<HTMLDivElement>();
        const isMobile = useMediaQuery({
            maxWidth: MediaWidths.mobileL,
        });

        // =============================================================================
        // EFFECTS
        // =============================================================================
        useEffect(() => {
            // NOTE: Do not add mouse down event if it's mobile
            if (isMobile) {
                return;
            }
            document.addEventListener("mousedown", handleMouseDownEvent);

            return () => {
                document.removeEventListener("mousedown", handleMouseDownEvent);
            };
        }, [visible]);

        // =============================================================================
        // EVENT HANDLERS
        // =============================================================================
        const handleMouseDownEvent = (event: MouseEvent) => {
            if (nodeRef && !(nodeRef.current as any).contains(event.target)) {
                // outside click
                if (visible) {
                    setVisible(false);
                }

                if (onPopoverDismiss) onPopoverDismiss();
            }
        };

        const handlePopoverMobileClose = () => {
            setVisible(false);
        };

        const handleTriggerClick = (event: React.MouseEvent) => {
            event.preventDefault();
            if (triggerBehaviour === "click") {
                setVisible(!visible);

                if (!visible && onPopoverAppear) onPopoverAppear();
                if (visible && onPopoverDismiss) onPopoverDismiss();
            }
        };

        const handleOnMouseEnter = (enter: boolean) => {
            if (triggerBehaviour === "hover") {
                setVisible(enter);
            }
        };

        // =============================================================================
        // RENDER
        // =============================================================================
        return (
            <HOCWrapper id="popover-hoc-wrapper" ref={nodeRef}>
                <HOCTrigger
                    id="popover-hoc-trigger"
                    type="button"
                    onClick={handleTriggerClick}
                    onMouseEnter={() => handleOnMouseEnter(true)}
                    onMouseLeave={() => handleOnMouseEnter(false)}
                >
                    <Component {...innerProps} />
                </HOCTrigger>
                <Popover
                    visible={visible}
                    id={options.id}
                    data-testid={options["data-testid"]}
                    onMobileClose={handlePopoverMobileClose}
                >
                    {options.content}
                </Popover>
            </HOCWrapper>
        );
    };

    return ComponentToReturn;
};
