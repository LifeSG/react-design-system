import { ArrowRightIcon } from "@lifesg/react-icons";
import styled, { css } from "styled-components";
import { V2_Color } from "../../v2_color";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface GeneralStyleProps {
    $wrap?: boolean;
}

interface IndicatorStyleProps extends GeneralStyleProps {
    $position: "start" | "end" | "none";
    $error: boolean;
}

// =============================================================================
// STYLING
// =============================================================================

export const Wrapper = styled.div<GeneralStyleProps>`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${(props) => {
        if (props.$wrap) {
            return css`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(100% - 1.125rem - 1rem);
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: 0.5rem;
                }
            `;
        }
    }}
`;

export const Break = styled.div`
    width: 100%; // Force next flex item to break to next line
`;

export const ElementContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`;

export const ArrowRight = styled(ArrowRightIcon)`
    color: ${V2_Color.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`;

export const Indicator = styled.div<IndicatorStyleProps>`
    position: absolute;
    background: ${(props) =>
        props.$error
            ? V2_Color.Validation.Red.Border(props)
            : V2_Color.Primary(props)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${(props) => {
        switch (props.$position) {
            case "start":
                return css`
                    opacity: 1;
                `;
            case "end":
                return css`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;
            case "none":
                return css`
                    opacity: 0;
                `;
        }
    }}

    ${(props) => {
        if (props.$wrap) {
            return css`
                display: none;
            `;
        }
    }}
`;
