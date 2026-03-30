import styled from "styled-components";

import { Button } from "../button";
import { Markup } from "../markup";
import { Font } from "../theme";
import { V3_Colour, V3_MediaQuery, V3_Spacing } from "../v3_theme";

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

    ${V3_MediaQuery.MaxWidth.sm} {
        width: 320px;
    }

    ${V3_MediaQuery.MaxWidth.xs} {
        width: 288px;
    }

    ${V3_MediaQuery.MaxWidth.xxs} {
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

export const Title = styled.h2`
    font-size: ${Font.Spec["heading-size-md"]};
    line-height: ${Font.Spec["heading-lh-md"]};
    letter-spacing: ${Font.Spec["heading-ls-md"]};
    font-weight: ${Font.Spec["weight-semibold"]};
    margin: ${V3_Spacing["spacing-32"]} 0 ${V3_Spacing["spacing-16"]};
    text-align: center;
`;

export const DescriptionContainer = styled(Markup)`
    color: ${V3_Colour.text};
    text-align: center;

    p + p {
        margin-top: ${V3_Spacing["spacing-16"]};
    }
`;

export const ActionButton = styled(Button.Default)`
    margin: ${V3_Spacing["spacing-32"]} auto 0;
    width: 21rem;

    ${V3_MediaQuery.MaxWidth.sm} {
        width: 100%;
    }
`;
