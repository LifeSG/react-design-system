import styled, { css } from "styled-components";

import { Button } from "../button/button";
import { Typography } from "../typography";
import { V3_Border, V3_Colour, V3_MediaQuery, V3_Spacing } from "../v3_theme";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface ActionButtonSectionStyleProps {
    $thumbnail?: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    padding: ${V3_Spacing["spacing-32"]} 0;
    background: transparent;

    &:not(:last-child) {
        border-bottom: ${V3_Border["width-010"]} ${V3_Border.solid}
            ${V3_Colour.border};
    }
`;

export const ContentSection = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${V3_Spacing["spacing-16"]};
    width: 100%;
`;

export const DetailsSection = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const NameSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${V3_Spacing["spacing-16"]};

    ${V3_MediaQuery.MaxWidth.md} {
        flex-direction: column;
        justify-content: flex-start;
    }
`;

export const FileNameText = styled(Typography.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${V3_Spacing["spacing-16"]};

    ${V3_MediaQuery.MaxWidth.md} {
        margin-right: 0;
        margin-bottom: ${V3_Spacing["spacing-8"]};
    }
`;

export const FileSizeText = styled(Typography.BodyMD)``;

export const ActionButtonsSection = styled.div<ActionButtonSectionStyleProps>`
    display: flex;
    ${V3_MediaQuery.MaxWidth.md} {
        flex-direction: column;
    }

    ${(props) => {
        if (props.$thumbnail) {
            return css`
                margin-left: calc(
                    96px + ${V3_Spacing["spacing-32"]}
                ); // thumbnail width + right margin

                ${V3_MediaQuery.MaxWidth.md} {
                    margin-left: 0;
                }
            `;
        }
    }}
`;

export const ActionButton = styled(Button.Small)`
    width: 7.5rem;
    &:not(:last-of-type) {
        margin-right: ${V3_Spacing["spacing-16"]};
    }

    ${V3_MediaQuery.MaxWidth.md} {
        width: 100%;
        &:not(:last-of-type) {
            margin-bottom: ${V3_Spacing["spacing-16"]};
        }
    }
`;
