import styled from "styled-components";
import { Button } from "../button/button";
import { V2_Color } from "../v2_color/color";
import { V2_MediaQuery } from "../v2_media/media";
import { ClickableIcon } from "../shared/clickable-icon";
import { V2_Text } from "../v2_text/text";
import { ButtonWithIcon } from "../button-with-icon";

// =============================================================================
// CONTAINER STYLES
// =============================================================================

export const DesktopContainer = styled.div`
    background-color: ${V2_Color.Neutral[8]};
    border: 1px solid ${V2_Color.Neutral[5]};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
`;

export const MobileContainer = styled.div`
    background-color: ${V2_Color.Neutral[7]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MobileOverlayContainer = styled.div`
    background-color: ${V2_Color.Neutral[8]};
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

    background-color: ${V2_Color.Neutral[8]};

    ${V2_MediaQuery.MaxWidth.tablet} {
        border-bottom: 1px solid ${V2_Color.Neutral[5]};
    }
`;

export const FilterTitle = styled(V2_Text.H4)`
    flex: 1;
    margin: 1.5rem 0 1rem 1.25rem;

    ${V2_MediaQuery.MaxWidth.tablet} {
        text-align: center;
        margin: 1.5rem 0;
    }
`;

export const FilterHeaderButton = styled(ClickableIcon)`
    padding: 1.5rem 1.25rem;
    margin-right: auto;
    color: ${V2_Color.Neutral[3]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${V2_Color.Neutral[2]};
    }
`;

export const FilterClearButton = styled(Button.Small)`
    background-color: transparent;
    padding: 1.5rem 1.25rem 1rem 1.25rem;
    height: auto;

    ${V2_MediaQuery.MaxWidth.tablet} {
        padding: 1.5rem 1.25rem;
    }
`;

// =============================================================================
// COMPONENT STYLES
// =============================================================================

export const FilterButton = styled(ButtonWithIcon.Default)`
    width: 100%;
`;

export const FilterFooter = styled.div`
    padding: 1.5rem 1.25rem;
    background-color: ${V2_Color.Neutral[8]};
    border-top: 1px solid ${V2_Color.Neutral[5]};
`;

export const FilterDoneButton = styled(Button.Default)`
    width: 100%;
`;
