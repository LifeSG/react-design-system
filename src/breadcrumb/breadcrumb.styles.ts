import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import styled from "styled-components";

import { Colour, Font, MediaQuery, Spacing } from "../theme";
import { Typography } from "../typography";

export const tokens = {
    fade: {
        backgroundColor: "--fds-internal-breadcrumb-fade-backgroundColor",
    },
    item: {
        customStyles: "--fds-internal-breadcrumb-item-customStyles",
    },
};

// =============================================================================
// STYLE COMPONENTS
// =============================================================================
export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: ${Spacing["spacing-32"]} 0;

    ${MediaQuery.MaxWidth.xl} {
        margin: ${Spacing["spacing-24"]} 0;
    }

    ${MediaQuery.MaxWidth.lg} {
        margin: ${Spacing["spacing-16"]} 0;
    }
`;

export const Content = styled.ul`
    ${tokens.item.customStyles}: initial;
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${Spacing["spacing-8"]};
    font-size: ${Font["body-md-regular"]};
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${MediaQuery.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`;

export const Fade = styled.div`
    ${tokens.fade.backgroundColor}: initial;
    width: ${Spacing["spacing-64"]};
    height: calc(1lh + ${Spacing["spacing-4"]});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${MediaQuery.MaxWidth.lg} {
        &.fadeLeft {
            left: -8px;
            background-image: linear-gradient(
                to right,
                var(${tokens.fade.backgroundColor}, ${Colour.bg}),
                rgba(255, 255, 255, 0.001)
            );
        }

        &.fadeRight {
            right: 8px;
            background-image: linear-gradient(
                to left,
                var(${tokens.fade.backgroundColor}, ${Colour.bg}),
                rgba(255, 255, 255, 0.001)
            );
        }
    }
`;

export const Item = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${tokens.item.customStyles};
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
