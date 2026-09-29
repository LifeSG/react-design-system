import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import styled from "styled-components";
import { Colour, Font, MediaQuery, Spacing } from "../theme";
import { Typography } from "../typography/typography";
import { FadeWrapper } from "../shared/fade-wrapper";

// =============================================================================
// STYLE TYPES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface ItemStyleProps {
    $styleProps?: string;
}

// =============================================================================
// STYLE COMPONENTS
// =============================================================================
export const Wrapper = styled(FadeWrapper)`
    z-index: 1;
    margin: ${Spacing["spacing-32"]} 0;

    ${MediaQuery.MaxWidth.xl} {
        margin: ${Spacing["spacing-24"]} 0;
    }

    ${MediaQuery.MaxWidth.lg} {
        margin: ${Spacing["spacing-16"]} 0;
    }

    [data-id="left-fade"],
    [data-id="right-fade"] {
        height: calc(1lh + ${Spacing["spacing-4"]});
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const Content = styled.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${Spacing["spacing-8"]};
    font-size: ${Font.Spec["body-size-md"]};
    ${MediaQuery.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`;

export const Item = styled.li<ItemStyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${(props) => {
        return props.$styleProps || ``;
    }};
`;

export const Caret = styled(ChevronRightIcon)`
    height: 1em;
    width: 1em;
    color: ${Colour["icon-subtle"]};
`;

export const Slash = styled(Typography.BodyMD)`
    display: inline-block;
    color: ${Colour["text-subtlest"]};
`;

export const CurrentLabel = styled(Typography.BodyMD)`
    margin: ${Spacing["spacing-8"]} !important;
`;

export const PreviousLink = styled(Typography.LinkMD)`
    margin: ${Spacing["spacing-8"]} !important;
`;
