import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { animated } from "@react-spring/web";
import styled from "styled-components";

import { Button } from "../button";
import { ClickableIcon } from "../shared/clickable-icon";
import { Colour, Font, Motion, Spacing } from "../theme";

export const tokens = {
    minimisableContent: {
        height: "--fds-internal-filter-minimisableContent-height",
    },
} as const;

// =============================================================================
// FILTER ITEM STYLES
// =============================================================================

export const FilterItemWrapper = styled.div`
    background-color: ${Colour["bg"]};

    &.filterItemWrapperCollapsible {
        background-color: ${Colour["bg-strong"]};
    }

    &.filterItemWrapperMobile {
        background-color: ${Colour["bg-strong"]};
    }
`;

export const Divider = styled.div`
    display: none;
    height: 1px;
    background-color: ${Colour["border"]};

    &.dividerVisible {
        display: block;
    }

    &.dividerMobile {
        margin: 0 ${Spacing["spacing-16"]};
    }
`;

// -----------------------------------------------------------------------------
// HEADER STYLES
// -----------------------------------------------------------------------------

export const FilterItemHeader = styled.div`
    display: flex;
    align-items: center;

    background-color: ${Colour["bg"]};

    &.filterItemHeaderMobile {
        background-color: transparent;
    }
`;

export const FilterItemExpandButton = styled(ClickableIcon)`
    margin: 0 0 0 auto;

    color: ${Colour["icon"]};
    &:hover {
        color: ${Colour["icon-hover"]};
    }
`;

export const ChevronIcon = styled(ChevronDownIcon)`
    height: ${Font.Spec["body-size-baseline"]};
    width: ${Font.Spec["body-size-baseline"]};

    transform: rotate(0deg);
    transition: transform ${Motion["duration-350"]} ${Motion["ease-standard"]};

    &.chevronIconExpanded {
        transform: rotate(180deg);
    }
`;

export const FilterItemTitle = styled.h3`
    ${Font["heading-xs-semibold"]}
    color: ${Colour["text"]};

    margin: ${Spacing["spacing-24"]} 0 ${Spacing["spacing-24"]}
        ${Spacing["spacing-20"]};

    &.filterItemTitleMobile {
        ${Font["body-md-semibold"]}
        color: ${Colour["text-subtle"]};

        margin: ${Spacing["spacing-24"]} ${Spacing["spacing-20"]} 0
            ${Spacing["spacing-20"]};
    }
`;

// -----------------------------------------------------------------------------
// CONTENT STYLES
// -----------------------------------------------------------------------------

export const ExpandableItem = animated(styled.div`
    overflow: hidden;
`);

export const FilterItemBody = styled.div`
    padding: ${Spacing["spacing-24"]} ${Spacing["spacing-20"]};
`;

export const MinimisableContent = animated(styled.div`
    ${tokens.minimisableContent.height}: initial;
    height: var(${tokens.minimisableContent.height});

    &.minimisableContentMinimisable {
        overflow: hidden;
    }
`);

export const FilterItemMinimiseButton = styled(Button.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Spacing["spacing-16"]} 0 0 0;
`;
