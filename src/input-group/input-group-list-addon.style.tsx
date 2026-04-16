import styled, { css } from "styled-components";

import { Input } from "../input";
import { ExpandableElement } from "../shared/dropdown-list";
import { InputBox } from "../shared/input-wrapper";
import { V3_Colour, V3_Spacing } from "../v3_theme";
import type { InputGroupAddonPosition } from "./types";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $readOnly?: boolean;
    $expanded?: boolean;
    $position?: InputGroupAddonPosition;
    $noBorder?: boolean;
}

interface DividerStyleProps {
    $readOnly?: boolean;
    $position?: InputGroupAddonPosition;
}

// =============================================================================
// STYLING
// =============================================================================
export const FieldWrapper = styled(InputBox)<StyleProps>`
    display: flex;
    align-items: center;

    ${(props) => {
        switch (props.$position) {
            case "right":
                return css`
                    flex-direction: row-reverse;
                `;
            default:
                return css`
                    flex-direction: row;
                `;
        }
    }}
`;

export const StyledExpandableElement = styled(ExpandableElement)<StyleProps>`
    ${(props) => {
        if (props.$noBorder) {
            switch (props.$position) {
                case "right":
                    return css`
                        padding-right: 0;
                    `;
                default:
                    return css`
                        padding-left: 0;
                    `;
            }
        }
    }}
`;

export const FieldSelector = styled.div`
    flex: 0 0 auto;
`;

export const FieldInput = styled(Input)<StyleProps>`
    ${(props) => {
        if (props.readOnly) {
            return css`
                padding: 0;
            `;
        }

        if (props.$noBorder) {
            switch (props.$position) {
                case "right":
                    return css`
                        padding-left: 0;
                    `;
                default:
                    return css`
                        padding-right: 0;
                    `;
            }
        }

        switch (props.$position) {
            case "right":
                return css`
                    padding-left: ${V3_Spacing["spacing-16"]};
                `;
            default:
                return css`
                    padding-right: ${V3_Spacing["spacing-16"]};
                `;
        }
    }}
`;

export const SelectorReadOnly = styled.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${V3_Spacing["spacing-12"]};
    color: ${V3_Colour["text"]};
`;

export const Divider = styled.div<DividerStyleProps>`
    width: 1px;
    background: ${V3_Colour["border"]};
    flex-shrink: 0;
    height: 1.25rem;

    ${(props) => {
        if (props.$readOnly) {
            return css`
                display: none;
            `;
        }
    }}

    ${(props) => {
        switch (props.$position) {
            case "right":
                return css`
                    margin-left: ${V3_Spacing["spacing-12"]};
                `;
            default:
                return css`
                    margin-right: ${V3_Spacing["spacing-12"]};
                `;
        }
    }}
`;
