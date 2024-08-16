import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { V2_MediaQuery } from "../../src/v2_media";
import {
    V2_Text,
    V2_TextStyleHelper,
    V2_TextStyleSetType,
} from "../../src/v2_text";
import { V2_BaseTheme, V2_ThemeSpec } from "../../src";

export const FontDisplay = () => {
    return (
        <FontDisplayContainer>
            <V2_Text.H2 weight="light">Light</V2_Text.H2>
            <V2_Text.H2 weight="regular">Regular</V2_Text.H2>
            <V2_Text.H2 weight="semibold">Semibold</V2_Text.H2>
            <V2_Text.H2 weight="bold">Bold</V2_Text.H2>
        </FontDisplayContainer>
    );
};

const FontDisplayContainer = styled.div`
    display: flex;
    margin: 1rem 0 4rem;

    h2 {
        :not(:last-child) {
            margin-right: 1rem;
        }
    }
`;

// =============================================================================
// FONT SIZE DISPLAY
// =============================================================================
interface FontSizeDisplayProps {
    textStyles: V2_TextStyleSetType;
    theme?: V2_ThemeSpec;
}

export const FontSizeDisplay = ({
    textStyles,
    theme,
}: FontSizeDisplayProps) => {
    const getComponent = (key: string) => {
        switch (key) {
            case "D1":
                return V2_Text.D1;
            case "D2":
                return V2_Text.D2;
            case "D3":
                return V2_Text.D3;
            case "D4":
                return V2_Text.D4;
            case "DBody":
                return V2_Text.DBody;
            case "H1":
                return V2_Text.H1;
            case "H2":
                return V2_Text.H2;
            case "H3":
                return V2_Text.H3;
            case "H4":
                return V2_Text.H4;
            case "H5":
                return V2_Text.H5;
            case "H6":
                return V2_Text.H6;
            case "BodySmall":
                return V2_Text.BodySmall;
            case "XSmall":
                return V2_Text.XSmall;
            default:
                return V2_Text.Body;
        }
    };

    const renderFontSizes = () => {
        return Object.entries(textStyles).map(([key, value], index) => {
            const TextComponent = getComponent(key);

            return (
                <FontSizeItem key={key}>
                    <FontComponentContainer>
                        <TextComponent>{key}</TextComponent>
                    </FontComponentContainer>

                    <FontSpecContainerList>
                        <FontSpecContainerItem>
                            <FontSpecLabelContainer>
                                Size
                            </FontSpecLabelContainer>
                            <SpecValueLabel>
                                {value.fontSize} rem
                            </SpecValueLabel>
                        </FontSpecContainerItem>

                        <FontSpecContainerItem>
                            <FontSpecLabelContainer>
                                Line Height
                            </FontSpecLabelContainer>
                            <SpecValueLabel>
                                {value.lineHeight} rem
                            </SpecValueLabel>
                        </FontSpecContainerItem>

                        <FontSpecContainerItem>
                            <FontSpecLabelContainer>
                                Letter Spacing
                            </FontSpecLabelContainer>
                            <SpecValueLabel>
                                {value.letterSpacing || 0} rem
                            </SpecValueLabel>
                        </FontSpecContainerItem>
                    </FontSpecContainerList>
                </FontSizeItem>
            );
        });
    };

    return (
        <FontSizeDisplayWrapper>
            <ThemeProvider theme={theme || V2_BaseTheme}>
                <FontSizeList>{renderFontSizes()}</FontSizeList>
            </ThemeProvider>
        </FontSizeDisplayWrapper>
    );
};

const FontSizeDisplayWrapper = styled.div`
    display: flex;
`;

const FontSizeList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const FontSizeItem = styled.li`
    display: flex;
    width: 50%;
    :not(:last-child) {
        margin-bottom: 1rem;
    }

    :nth-child(odd) {
        padding-right: 0.5rem;
    }

    ${V2_MediaQuery.MaxWidth.tablet} {
        width: 100%;
        :not(:last-child) {
            margin-bottom: 2rem;
        }
    }
`;

const FontComponentContainer = styled.div`
    width: 5rem;
    height: 4rem;
`;

const FontSpecContainerList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;
`;

const FontSpecContainerItem = styled.li`
    display: flex;
`;

const SpecValueLabel = styled(V2_Text.BodySmall)`
    ${V2_MediaQuery.MaxWidth.mobileM} {
        font-size: 0.75rem !important;
    }
`;

const FontSpecLabelContainer = styled.div`
    width: 8rem;
    margin-right: 1rem;
    ${V2_TextStyleHelper.getTextStyle("BodySmall", "semibold")}

    ${V2_MediaQuery.MaxWidth.mobileM} {
        width: 5rem;
        ${V2_TextStyleHelper.getTextStyle("XSmall", "semibold")}
    }
`;
