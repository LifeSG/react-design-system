import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { animated } from "@react-spring/web";
import styled from "styled-components";

import {
    Border,
    Colour,
    Font,
    MediaQuery,
    Motion,
    Radius,
    Spacing,
} from "../theme";

export const tokens = {
    handleIconContainer: {
        rotation: "--fds-internal-boxContainer-handleIcon-rotation",
    },
};

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.section`
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    margin-bottom: ${Spacing["spacing-32"]};
`;

export const Expandable = animated(styled.div`
    overflow: hidden;
`);

export const NonExpandable = styled.div`
    height: max-content;
`;

export const ChildContainer = styled.div`
    border-top: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
`;

export const Header = styled.div`
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-32"]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${MediaQuery.MaxWidth.sm} {
        padding: ${Spacing["spacing-16"]} ${Spacing["spacing-20"]};
        display: block;
    }

    &.headerInteractive {
        cursor: pointer;
    }
`;

export const LabelText = styled.div`
    ${Font["heading-sm-semibold"]}
    color: ${Colour["text"]};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${Spacing["spacing-16"]};
`;

export const LabelWrapper = styled.div`
    display: flex;
`;

export const AlertIcon = styled(ExclamationCircleFillIcon)`
    height: ${Font.Spec["heading-size-sm"]};
    width: ${Font.Spec["heading-size-sm"]};
    align-self: center;
    margin-right: ${Spacing["spacing-40"]};
    flex-shrink: 0;

    ${MediaQuery.MaxWidth.sm} {
        margin-right: 0;
    }

    &.alertIconError {
        color: ${Colour["icon-error"]};
    }

    &.alertIconWarning {
        color: ${Colour["icon-warning"]};
    }
`;

export const CallToActionContainer = styled.div`
    display: flex;
    margin-left: auto;

    ${MediaQuery.MaxWidth.sm} {
        flex-direction: column;
    }

    &.callToActionContainerCollapsible {
        margin-right: ${Spacing["spacing-40"]};

        ${MediaQuery.MaxWidth.sm} {
            margin-right: 0;
            margin-top: ${Spacing["spacing-16"]};
        }
    }
`;

export const Handle = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${Spacing["spacing-16"]};
    margin: -${Spacing["spacing-16"]};
    display: flex;
    align-items: center;

    ${MediaQuery.MaxWidth.sm} {
        margin: -${Spacing["spacing-16"]} -${Spacing["spacing-16"]} -${Spacing[
                "spacing-16"
            ]} 0;
        margin-left: auto;
    }
`;

export const HandleIconContainer = styled.div`
    /* reset variable to prevent leaking to child components */
    ${tokens.handleIconContainer.rotation}: initial;
    transform: rotate(var(${tokens.handleIconContainer.rotation}, 0deg));
    transition: ${Motion["duration-250"]} ${Motion["ease-default"]};
`;

export const HandleIcon = styled(ChevronDownIcon)`
    color: ${Colour["icon"]};
    height: ${Font.Spec["heading-size-sm"]};
    width: ${Font.Spec["heading-size-sm"]};
`;
