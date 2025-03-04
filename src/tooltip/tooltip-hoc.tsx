import React from "react";
import { Tooltip } from "./tooltip";
import { HOCWrapper } from "./tooltip.styles";
import { TooltipHOCOptionsProps, TooltipHOCProps } from "./types";

export const withTooltip =
    <T extends object>(
        Component: React.ComponentType<T>,
        options: TooltipHOCOptionsProps
    ) =>
    // eslint-disable-next-line react/display-name
    (props: T & TooltipHOCProps): JSX.Element => {
        const { tooltipVisible, position, ...otherProps } = props;
        const innerProps = otherProps as T;

        return (
            <HOCWrapper>
                <Component {...innerProps} />
                <Tooltip visible={tooltipVisible} position={position}>
                    {options.content}
                </Tooltip>
            </HOCWrapper>
        );
    };
