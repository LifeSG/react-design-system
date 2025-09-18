import { CrossIcon } from "@lifesg/react-icons/cross";
import styled, { css } from "styled-components";
import { BasicButton, BasicInput, InputBox } from "../shared/input-wrapper";
import { Colour, Spacing } from "../theme";
import { InputStyleType } from "./types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
export interface InputStyleProps {
    $showClear?: boolean | undefined;
    $styleType?: InputStyleType | undefined;
    $visuallyReadOnly?: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const InputElement = styled(BasicInput)<InputStyleProps>`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${(props) =>
        props.$styleType !== "no-border" &&
        css`
            padding: ${Spacing["spacing-16"]}
                ${props.$visuallyReadOnly
                    ? 0
                    : props.$showClear
                    ? Spacing["spacing-16"]
                    : Spacing["spacing-16"]};
        `}
`;

export const ClearButton = styled(BasicButton)<InputStyleProps>`
    height: auto;
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};

    cursor: pointer;
    color: ${Colour["icon"]};

    ${(props) =>
        props.$styleType === "no-border" &&
        css`
            margin-right: -${Spacing["spacing-12"]};
        `}
`;

export const ClearIcon = styled(CrossIcon)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;

export const NoBorderWrapper = styled.div`
    display: flex;
    width: 100%;
`;

export const DefaultWrapper = styled(InputBox)`
    display: flex;
    align-items: center;
    width: 100%;
`;
