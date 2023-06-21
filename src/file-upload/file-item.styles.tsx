import styled, { css } from "styled-components";
import { Color } from "../color";
import { Text } from "../text";
import { Button } from "../button";
import { ClickableIcon } from "../shared/clickable-icon";
import { MediaQuery } from "../media";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface ItemStyleProps {
    $sortable: boolean;
    $error?: boolean | undefined;
    $loading?: boolean | undefined;
    $editable?: boolean | undefined;
}

interface ItemActionContainerStyleProps {
    $editable?: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const Item = styled.li<ItemStyleProps>`
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    background: ${Color.Accent.Light[6]};
    padding: 1rem 2rem;
    display: flex;
    align-items: center;

    :not(:last-child) {
        margin-bottom: 1rem;
    }

    ${(props) => {
        if (props.$error) {
            return css`
                background: ${Color.Validation.Red.Background};
                border-color: ${Color.Validation.Red.Border};
            `;
        }

        if (props.$loading || props.$editable) {
            return css`
                ${MediaQuery.MaxWidth.mobileL} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `;
        }
    }}

    ${(props) => {
        if (props.$sortable) {
            return css`
                :focus {
                    cursor: grabbing;
                }

                :hover {
                    cursor: grab;
                }
            `;
        }
    }}

    ${MediaQuery.MaxWidth.mobileL} {
        padding: 1rem;
    }
`;

export const Content = styled.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${MediaQuery.MaxWidth.mobileL} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }
`;

export const ItemText = styled(Text.BodySmall)``;
export const ItemDescriptionText = styled(ItemText)`
    margin-top: 0.25rem;
`;
export const ItemFileSizeText = styled(ItemText)`
    width: 5rem;
    padding-left: 0.5rem;
    text-align: right;

    ${MediaQuery.MaxWidth.mobileL} {
        width: 100%;
        padding-left: 0;
        text-align: left;
        margin-top: 0.5rem;
    }
`;

export const ItemNameSection = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`;

export const ItemActionContainer = styled.div<ItemActionContainerStyleProps>`
    width: 6rem;
    margin-left: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${MediaQuery.MaxWidth.mobileL} {
        ${(props) => {
            if (props.$editable) {
                return css`
                    margin-left: 0;
                    margin-top: 1rem;
                    width: fit-content;
                    align-self: flex-end;
                `;
            } else {
                return css`
                    width: fit-content;
                    margin-left: 1rem;
                `;
            }
        }}
    }
`;

export const LoadingActionContainer = styled(ItemActionContainer)`
    ${MediaQuery.MaxWidth.mobileL} {
        width: 100%;
        margin-left: 0;
    }
`;

// TODO: Replace with new IconButton when ready
export const IconButton = styled(Button.Small)`
    height: 2.5rem;
    width: 2.5rem;
    min-width: unset;
    svg {
        height: 1rem;
        width: 1rem;
    }

    :not(:last-child) {
        margin-right: 1rem;
    }
`;

export const BaseErrorMessage = styled(Text.XSmall)`
    font-size: 0.875rem !important;
    color: ${Color.Validation.Red.Text};
`;

export const DesktopErrorMessage = styled(BaseErrorMessage)`
    margin-top: 0.25rem;
    ${MediaQuery.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`;

export const MobileErrorMessage = styled(BaseErrorMessage)`
    display: none;
    visibility: hidden;
    ${MediaQuery.MaxWidth.mobileL} {
        display: block;
        visibility: visible;
        margin-top: 0.5rem;
    }
`;

export const ErrorIconButton = styled(ClickableIcon)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${Color.Neutral[3]};
    }
`;
