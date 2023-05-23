import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";
import styled, { css } from "styled-components";
import { Color } from "../color";
import { DesignToken } from "../design-token";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface ContainerStyleProps {
    $disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
}

interface IndicateBarStyleProps {
    $position: "start" | "end" | "none";
    $error: boolean;
}

// =============================================================================
// STYLING
// =============================================================================

export const Container = styled.div<ContainerStyleProps>`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 0.25rem;
    background: ${Color.Neutral[8]};
    min-height: 3rem;
    width: 100%;
    padding: 0 1rem;
    gap: 0.5rem;

    :focus,
    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: ${DesignToken.InputBoxShadow};
    }

    ${(props) => {
        if (props.$readOnly) {
            return css`
                border: none;
                padding-left: 0rem;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `;
        } else if (props.$disabled) {
            return css`
                background: ${Color.Neutral[6](props)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Color.Neutral[5](props)};
                    box-shadow: none;
                }
            `;
        } else if (props.$error) {
            return css`
                border: 1px solid ${Color.Validation.Red.Border(props)};

                :focus-within {
                    border: 1px solid ${Color.Validation.Red.Border(props)};
                    box-shadow: ${DesignToken.InputErrorBoxShadow};
                }
            `;
        }
    }}
`;

export const ArrowRight = styled(ArrowRightIcon)`
    color: ${Color.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
`;

export const IndicateBar = styled.div<IndicateBarStyleProps>`
    position: absolute;
    background-color: ${(props) =>
        props.$error ? Color.Validation.Red.Border : Color.Primary};
    height: 0.125rem;
    width: calc(100% - 50% - 2rem); // paddingX is 2rem,
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 1rem;
    bottom: 0;

    ${(props) => {
        switch (props.$position) {
            case "start":
                return css`
                    left: 1rem;
                    opacity: 1;
                `;
            case "end":
                return css`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;
            case "none":
                return css`
                    left: 1rem;
                    opacity: 0;
                `;
        }
    }}

    @media screen and (max-width: 374px) {
        display: none;
    }
`;
