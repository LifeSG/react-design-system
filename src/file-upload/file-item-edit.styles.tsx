import styled, { css } from "styled-components";
import { v2_MediaQuery } from "../v2_media/media";
import { Button } from "../button/button";
import { Text } from "../text/text";
import { v2_Color } from "../v2_color/color";

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
    padding: 2rem 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: 1px solid ${v2_Color.Neutral[5]};
    }
`;

export const ContentSection = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
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
    margin-bottom: 1rem;

    ${v2_MediaQuery.MaxWidth.mobileL} {
        flex-direction: column;
        justify-content: flex-start;
    }
`;

export const FileNameText = styled(Text.BodySmall)`
    display: flex;
    flex: 1;
    margin-right: 1rem;

    ${v2_MediaQuery.MaxWidth.mobileL} {
        margin-right: 0;
        margin-bottom: 0.5rem;
    }
`;

export const FileSizeText = styled(Text.BodySmall)``;

export const ActionButtonsSection = styled.div<ActionButtonSectionStyleProps>`
    display: flex;
    ${v2_MediaQuery.MaxWidth.mobileL} {
        flex-direction: column;
    }

    ${(props) => {
        if (props.$thumbnail) {
            return css`
                margin-left: 8rem; // 6rem width + 2rem gap

                ${v2_MediaQuery.MaxWidth.mobileL} {
                    margin-left: 0;
                }
            `;
        }
    }}
`;

export const ActionButton = styled(Button.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${v2_MediaQuery.MaxWidth.mobileL} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: 1rem;
        }
    }
`;
