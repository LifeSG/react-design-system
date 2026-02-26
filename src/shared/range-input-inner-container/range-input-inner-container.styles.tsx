import { ArrowRightIcon } from "@lifesg/react-icons";
import styled, { css } from "styled-components";
import { V3_Colour, V3_Font, V3_Motion, V3_Spacing } from "../../v3_theme";

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
                        100% - ${V3_Font.Spec["body-size-baseline"]} -
                            ${V3_Spacing["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${V3_Spacing["spacing-8"]};
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
    color: ${V3_Colour["icon"]};
    width: ${V3_Font.Spec["body-size-baseline"]};
    height: ${V3_Font.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${V3_Spacing["spacing-8"]};
    align-self: center;
`;

export const Indicator = styled.div<IndicatorStyleProps>`
    position: absolute;
    background: ${(props) =>
        props.$error
            ? V3_Colour["border-error-focus-strong"]
            : V3_Colour["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${V3_Spacing["spacing-8"]} -
            (${V3_Font.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${V3_Motion["duration-350"]} ${V3_Motion["ease-standard"]},
        opacity ${V3_Motion["duration-350"]} ${V3_Motion["ease-standard"]};
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
                    left: calc(50% + ${V3_Spacing["spacing-16"]});
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
