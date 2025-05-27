import { ArrowRightIcon } from "@lifesg/react-icons";
import styled, { css } from "styled-components";
import { Colour, Font, Motion, Spacing } from "@/theme";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface GeneralStyleProps {
    $wrap?: boolean;
}

interface IndicatorStyleProps extends GeneralStyleProps {
    $position: "start" | "end" | "none";
    $error: boolean | undefined;
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
                    max-width: calc(
                        100% - ${Font.Spec["body-size-baseline"]} -
                            ${Spacing["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Spacing["spacing-8"]};
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
    color: ${Colour["icon"]};
    width: ${Font.Spec["body-size-baseline"]};
    height: ${Font.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Spacing["spacing-8"]};
    align-self: center;
`;

export const Indicator = styled.div<IndicatorStyleProps>`
    position: absolute;
    background: ${(props) =>
        props.$error
            ? Colour["border-error-focus-strong"]
            : Colour["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Spacing["spacing-8"]} - (${Font.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Motion["duration-350"]} ${Motion["ease-standard"]},
        opacity ${Motion["duration-350"]} ${Motion["ease-standard"]};
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
                    left: calc(50% + ${Spacing["spacing-16"]});
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
