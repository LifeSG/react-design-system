import { animated } from "@react-spring/web";
import styled from "styled-components";

import { Button } from "../button";
import { ClickableIcon } from "../shared/clickable-icon";
import { Colour, Font, MediaQuery, Radius } from "../theme";
import { Typography } from "../typography";

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = animated(styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 0;
    top: 0;
    right: 0;
    padding: 1rem;
    border-radius: ${Radius["md"]};
    z-index: 10;
    align-items: center;
    gap: 2rem;

    ${MediaQuery.MaxWidth.lg} {
        left: 0;
    }

    &.toastWrapperFixed {
        position: fixed;
        margin: 1rem;
    }

    &.toastWrapperSuccess {
        background: ${Colour["bg-success"]};
        border: 1px solid ${Colour["border-success"]};
        color: ${Colour["text-success"]};
    }

    &.toastWrapperWarning {
        background: ${Colour["bg-warning"]};
        border: 1px solid ${Colour["border-warning"]};
        color: ${Colour["text-warning"]};
    }

    &.toastWrapperError {
        background: ${Colour["bg-error"]};
        border: 1px solid ${Colour["border-error"]};
        color: ${Colour["text-error"]};
    }

    &.toastWrapperInfo {
        background: ${Colour["bg-info"]};
        border: 1px solid ${Colour["border-info"]};
        color: ${Colour["text-info"]};
    }
`);

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${MediaQuery.MaxWidth.sm} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`;

export const TextIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    & > svg {
        flex-shrink: 0;
        width: 1.5rem;
        height: 1.5rem;
        margin-top: 0.0625rem;
        margin-right: 0.5rem;
    }

    &.toastTextIconWrapperSuccess > svg {
        color: ${Colour["icon-success"]};
    }

    &.toastTextIconWrapperWarning > svg {
        color: ${Colour["icon-warning"]};
    }

    &.toastTextIconWrapperError > svg {
        color: ${Colour["icon-error"]};
    }

    &.toastTextIconWrapperInfo > svg {
        color: ${Colour["icon-info"]};
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    display: flex;
    ${Font["body-baseline-semibold"]}

    &.toastTextSuccess {
        color: ${Colour["text-success"]};
    }

    &.toastTextWarning {
        color: ${Colour["text-warning"]};
    }

    &.toastTextError {
        color: ${Colour["text-error"]};
    }

    &.toastTextInfo {
        color: ${Colour["text-info"]};
    }
`;

export const DescriptionMD = styled(Typography.BodyMD)`
    &.toastTextSuccess {
        color: ${Colour["text-success"]};
    }

    &.toastTextWarning {
        color: ${Colour["text-warning"]};
    }

    &.toastTextError {
        color: ${Colour["text-error"]};
    }

    &.toastTextInfo {
        color: ${Colour["text-info"]};
    }
`;

export const DescriptionBL = styled(Typography.BodyBL)`
    &.toastTextSuccess {
        color: ${Colour["text-success"]};
    }

    &.toastTextWarning {
        color: ${Colour["text-warning"]};
    }

    &.toastTextError {
        color: ${Colour["text-error"]};
    }

    &.toastTextInfo {
        color: ${Colour["text-info"]};
    }
`;

export const ActionButton = styled(Button.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${MediaQuery.MaxWidth.sm} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`;

export const DismissButton = styled(ClickableIcon)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    &.toastDismissButtonSuccess svg {
        color: ${Colour["text-success"]};
    }

    &.toastDismissButtonWarning svg {
        color: ${Colour["text-warning"]};
    }

    &.toastDismissButtonError svg {
        color: ${Colour["text-error"]};
    }

    &.toastDismissButtonInfo svg {
        color: ${Colour["text-info"]};
    }

    &:hover {
        background: transparent;
    }

    ${MediaQuery.MaxWidth.sm} {
        align-self: center;
    }
`;
