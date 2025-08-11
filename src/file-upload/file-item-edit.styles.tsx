import styled, { css } from "styled-components";
import { Button } from "../button/button";
import { Border, Colour, MediaQuery, Spacing } from "../theme";
import { Typography } from "../typography";

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
    padding: ${Spacing["spacing-32"]} 0;
    background: transparent;

    &:not(:last-child) {
        border-bottom: ${Border["width-010"]} ${Border.solid} ${Colour.border};
    }
`;

export const ContentSection = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${Spacing["spacing-16"]};
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
    margin-bottom: ${Spacing["spacing-16"]};

    ${MediaQuery.MaxWidth.sm} {
        flex-direction: column;
        justify-content: flex-start;
    }
`;

export const FileNameText = styled(Typography.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${Spacing["spacing-16"]};

    ${MediaQuery.MaxWidth.sm} {
        margin-right: 0;
        margin-bottom: ${Spacing["spacing-8"]};
    }
`;

export const FileSizeText = styled(Typography.BodyMD)``;

export const ActionButtonsSection = styled.div<ActionButtonSectionStyleProps>`
    display: flex;
    ${MediaQuery.MaxWidth.sm} {
        flex-direction: column;
    }

    ${(props) => {
        if (props.$thumbnail) {
            return css`
                margin-left: calc(
                    96px + ${Spacing["spacing-32"]}
                ); // thumbnail width + right margin

                ${MediaQuery.MaxWidth.sm} {
                    margin-left: 0;
                }
            `;
        }
    }}
`;

export const ActionButton = styled(Button.Small)`
    width: 7.5rem;
    &:not(:last-of-type) {
        margin-right: ${Spacing["spacing-16"]};
    }

    ${MediaQuery.MaxWidth.sm} {
        width: 100%;
        &:not(:last-of-type) {
            margin-bottom: ${Spacing["spacing-16"]};
        }
    }
`;
