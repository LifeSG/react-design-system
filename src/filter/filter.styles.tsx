import styled from "styled-components";
import { Button } from "../button";
import { ButtonWithIcon } from "../button-with-icon";
import { ClickableIcon } from "../shared/clickable-icon";
import { Border, Colour, MediaQuery, Radius, Spacing } from "../theme";
import { Typography } from "../typography";

// =============================================================================
// CONTAINER STYLES
// =============================================================================

export const DesktopContainer = styled.div`
    background-color: ${Colour["bg"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["md"]};
    overflow: hidden;
    width: 100%;
`;

export const MobileContainer = styled.div`
    background-color: ${Colour["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MobileOverlayContainer = styled.div`
    background-color: ${Colour["bg"]};
    height: 100%;
    width: 100%;
`;

export const FilterBody = styled.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`;

// =============================================================================
// HEADER STYLES
// =============================================================================

export const FilterHeader = styled.div`
    display: flex;
    align-items: center;

    background-color: ${Colour["bg"]};

    ${MediaQuery.MaxWidth.lg} {
        border-bottom: ${Border["width-010"]} ${Border["solid"]}
            ${Colour["border"]};
    }
`;

export const FilterTitle = styled(Typography.HeaderXS).attrs({ as: "p" })`
    flex: 1;
    margin: ${Spacing["spacing-24"]} 0 ${Spacing["spacing-24"]}
        ${Spacing["spacing-20"]};

    ${MediaQuery.MaxWidth.lg} {
        text-align: center;
        margin: ${Spacing["spacing-24"]} 0;
    }
`;

export const FilterHeaderButton = styled(ClickableIcon)`
    padding: ${Spacing["spacing-24"]} ${Spacing["spacing-20"]};
    margin-right: auto;
    color: ${Colour["icon"]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${Colour["icon-hover"]};
    }
`;

export const FilterClearButton = styled(Button.Small)`
    background-color: transparent;
    padding-right: ${Spacing["spacing-20"]};
    padding-left: ${Spacing["spacing-20"]};
    height: 100%;

    ${MediaQuery.MaxWidth.lg} {
        padding: ${Spacing["spacing-24"]} ${Spacing["spacing-20"]};
    }
`;

// =============================================================================
// COMPONENT STYLES
// =============================================================================

export const FilterButton = styled(ButtonWithIcon.Default)`
    width: 100%;
`;

export const FilterFooter = styled.div`
    padding: ${Spacing["spacing-24"]} ${Spacing["spacing-20"]};
    background-color: ${Colour["bg"]};
    border-top: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
`;

export const FilterDoneButton = styled(Button.Default)`
    width: 100%;
`;
