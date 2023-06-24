import styled from "styled-components";
import { MediaQuery } from "../media/media";
import { Button } from "../button/button";
import { Text } from "../text/text";
import { Color } from "../color/color";

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: 1px solid ${Color.Neutral[5]};
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

    ${MediaQuery.MaxWidth.mobileL} {
        flex-direction: column;
        justify-content: flex-start;
    }
`;

export const FileNameText = styled(Text.BodySmall)`
    display: flex;
    flex: 1;
    margin-right: 1rem;

    ${MediaQuery.MaxWidth.mobileL} {
        margin-right: 0;
        margin-bottom: 0.5rem;
    }
`;

export const FileSizeText = styled(Text.BodySmall)``;

export const ActionButtonsSection = styled.div`
    display: flex;
    margin-left: 8rem; // 6rem width + 2rem gap

    ${MediaQuery.MaxWidth.mobileL} {
        flex-direction: column;
        margin-left: 0;
    }
`;

export const ActionButton = styled(Button.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: 1rem;
        }
    }
`;
