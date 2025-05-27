import styled from "styled-components";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { Button } from "../button";
import { Colour, MediaQuery, Spacing } from "@/theme";
import { Typography } from "../typography";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const Img = styled.img`
    position: relative;
    width: 400px;
    height: auto;

    ${MediaQuery.MaxWidth.sm} {
        width: 320px;
    }

    ${MediaQuery.MaxWidth.xs} {
        width: 288px;
    }

    ${MediaQuery.MaxWidth.xxs} {
        width: 240px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`;

export const Title = styled(Typography.HeadingMD)`
    margin: ${Spacing["spacing-32"]} 0 ${Spacing["spacing-16"]};
    text-align: center;
`;

export const DescriptionContainer = styled.div`
    color: ${Colour.text};
    text-align: center;

    ${applyHtmlContentStyle({ textSize: "body-baseline" })}
`;

export const ActionButton = styled(Button.Default)`
    margin: ${Spacing["spacing-32"]} auto 0;
    width: 21rem;

    ${MediaQuery.MaxWidth.sm} {
        width: 100%;
    }
`;
