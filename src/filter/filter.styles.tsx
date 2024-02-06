import { FilterIcon } from "@lifesg/react-icons/filter";
import styled from "styled-components";
import { Button } from "../button/button";
import { Color } from "../color/color";
import { MediaQuery } from "../media/media";
import { ClickableIcon } from "../shared/clickable-icon";
import { Text } from "../text/text";

// =============================================================================
// CONTAINER STYLES
// =============================================================================

export const DesktopContainer = styled.div`
    background-color: ${Color.Neutral[8]};
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
`;

export const MobileContainer = styled.div`
    background-color: ${Color.Neutral[7]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MobileOverlayContainer = styled.div`
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

    background-color: ${Color.Neutral[8]};

    ${MediaQuery.MaxWidth.tablet} {
        border-bottom: 1px solid ${Color.Neutral[5]};
    }
`;

export const FilterTitle = styled(Text.H4)`
    flex: 1;
    margin: 1.5rem 0 1rem 1.25rem;

    ${MediaQuery.MaxWidth.tablet} {
        text-align: center;
        margin: 1.5rem 0;
    }
`;

export const FilterHeaderButton = styled(ClickableIcon)`
    padding: 1.5rem 1.25rem;
    margin-right: auto;
    color: ${Color.Neutral[3]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${Color.Neutral[2]};
    }
`;

export const FilterClearButton = styled(Button.Small)`
    background-color: transparent;
    padding: 1.5rem 1.25rem 1rem 1.25rem;
    height: auto;

    ${MediaQuery.MaxWidth.tablet} {
        padding: 1.5rem 1.25rem;
    }
`;

// =============================================================================
// COMPONENT STYLES
// =============================================================================

export const FilterButton = styled(Button.Default)`
    width: 100%;
    span {
        display: flex;
        align-items: center;
    }
`;

export const StyledFilterIcon = styled(FilterIcon)`
    margin-right: 0.625rem;
`;

export const FilterFooter = styled.div`
    padding: 1.5rem 1.25rem;
    background-color: ${Color.Neutral[8]};
    border-top: 1px solid ${Color.Neutral[5]};
`;

export const FilterDoneButton = styled(Button.Default)`
    width: 100%;
`;
