import styled, { css } from "styled-components";
import { Border, Colour, MediaQuery, Spacing } from "../theme";
import { Typography } from "../typography";

// 367px max content width (Figma) + 8px padding per side; used to cap the panel maxWidth in MenuContent
export const GRID_COLUMN_WIDTH_PX = 383;
// matches Spacing["spacing-8"]
export const GRID_COLUMN_GAP_PX = 8;

// =============================================================================
// STYLES INTERFACE
// =============================================================================
interface MenuSectionWrapperStyleProps {
    $showDivider?: boolean;
}

interface MenuSectionListStyleProps {
    $columns?: number;
    $gridRows?: number;
}

// =============================================================================
// MENU SECTION STYLES
// =============================================================================
export const SectionWrapper = styled.div<MenuSectionWrapperStyleProps>`
    ${(props) =>
        props.$showDivider &&
        css`
            border-top: ${Border["width-010"]} ${Border["solid"]}
                ${Colour["border"]};
        `}
    padding: ${Spacing["spacing-8"]} 0;
`;

export const List = styled.ul<MenuSectionListStyleProps>`
    margin: 0;
    list-style: none;

    ${(props) =>
        props.$columns &&
        css`
            display: grid;
            grid-template-rows: repeat(${props.$gridRows}, auto);
            grid-auto-flow: column;
            grid-auto-columns: minmax(0, 1fr);
            column-gap: ${Spacing["spacing-8"]};

            ${MediaQuery.MaxWidth.lg} {
                grid-template-rows: none;
                grid-auto-flow: row;
            }
        `}
`;

export const Label = styled(Typography.BodyXS)`
    margin: 0 ${Spacing["spacing-16"]} ${Spacing["spacing-8"]};
    color: ${Colour["text-subtler"]};
`;
