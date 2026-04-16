import {
    ArrowRight,
    Break,
    ElementContainer,
    Indicator,
    Wrapper,
} from "./range-input-inner-container.styles";
import type { RangeInputInnerContainerProps } from "./types";

/**
 * This component allows for input fields to be added within the containers
 * and renders the slider based on the focused element.
 */
export const RangeInputInnerContainer = ({
    children,
    currentActive,
    error,
    className,
    wrap,
}: RangeInputInnerContainerProps) => {
    // =========================================================================
    // CONST, STATE
    // =========================================================================
    const [elem1, elem2] = children;

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <Wrapper className={className} data-wrap={wrap ? "true" : undefined}>
            <ElementContainer data-id="range-container-elem1-container">
                {elem1}
            </ElementContainer>
            <ArrowRight aria-hidden="true" />
            {wrap && <Break />}
            <ElementContainer data-id="range-container-elem2-container">
                {elem2}
            </ElementContainer>
            <Indicator
                data-id="range-container-indicator"
                data-error={error ? "true" : undefined}
                data-position={currentActive}
                data-wrap={wrap ? "true" : undefined}
            />
        </Wrapper>
    );
};
