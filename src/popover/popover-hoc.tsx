import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MediaWidths } from "../v2_spec/media-spec";
import { Popover } from "./popover";
import { HOCTrigger, HOCWrapper } from "./popover.styles";
import { PopoverHOCOptionsProps, PopoverHOCProps } from "./types";

/** @deprecated Use `PopoverTrigger` for improved positioning behaviour. This component will be removed in DS v3. */
export const withPopover =
    <T,>(Component: React.ComponentType<T>, options: PopoverHOCOptionsProps) =>
    // eslint-disable-next-line react/display-name
    (props: T & PopoverHOCProps): JSX.Element => {
        // =============================================================================
        // CONST, STATE, REF
        // =============================================================================
        const { onPopoverAppear, onPopoverDismiss, ...otherProps } = props;
        const triggerBehaviour = options.trigger || "click";
        const innerProps = otherProps as T;
        const [visible, setVisible] = useState<boolean>(false);
        const nodeRef = useRef<HTMLDivElement>(null);
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
            if (triggerBehaviour === "click" || isMobile) {
                setVisible(!visible);

                if (!visible && onPopoverAppear) onPopoverAppear();
                if (visible && onPopoverDismiss) onPopoverDismiss();
            }
        };

        const handleOnMouseEnter = () => {
            if (triggerBehaviour === "hover" && !isMobile) {
                setVisible(true);
            }
        };

        const handleOnMouseLeave = () => {
            if (triggerBehaviour === "hover" && visible && !isMobile) {
                setVisible(false);
            }
        };

        // =============================================================================
        // RENDER
        // =============================================================================
        return (
            <HOCWrapper id="popover-hoc-wrapper" ref={nodeRef}>
                <HOCTrigger
                    id={`popover-hoc-trigger${
                        options["data-testid"] && `-${options["data-testid"]}`
                    }`}
                    type="button"
                    onClick={handleTriggerClick}
                    onMouseEnter={handleOnMouseEnter}
                    onMouseLeave={handleOnMouseLeave}
                    aria-label="popover-button"
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
