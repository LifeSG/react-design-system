import styled from "styled-components";
import { MediaQuery } from "../../src/media";
import { Text, TextStyleHelper, TextStyleSetType } from "../../src/text";

export const FontDisplay = () => {
    return (
        <FontDisplayContainer>
            <Text.H2 weight="light">Light</Text.H2>
            <Text.H2 weight="regular">Regular</Text.H2>
            <Text.H2 weight="semibold">Semibold</Text.H2>
            <Text.H2 weight="bold">Bold</Text.H2>
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
    textStyles: TextStyleSetType;
}

export const FontSizeDisplay = ({ textStyles }: FontSizeDisplayProps) => {
    const getComponent = (key: string) => {
        switch (key) {
            case "D1":
                return Text.D1;
            case "D2":
                return Text.D2;
            case "D3":
                return Text.D3;
            case "D4":
                return Text.D4;
            case "DBody":
                return Text.DBody;
            case "H1":
                return Text.H1;
            case "H2":
                return Text.H2;
            case "H3":
                return Text.H3;
            case "H4":
                return Text.H4;
            case "H5":
                return Text.H5;
            case "H6":
                return Text.H6;
            case "BodySmall":
                return Text.BodySmall;
            case "XSmall":
                return Text.XSmall;
            default:
                return Text.Body;
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
            <FontSizeList>{renderFontSizes()}</FontSizeList>
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

    ${MediaQuery.MaxWidth.tablet} {
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

const SpecValueLabel = styled(Text.BodySmall)`
    ${MediaQuery.MaxWidth.mobileM} {
        font-size: 0.75rem !important;
    }
`;

const FontSpecLabelContainer = styled.div`
    width: 8rem;
    margin-right: 1rem;
    ${TextStyleHelper.getTextStyle("BodySmall", "semibold")}

    ${MediaQuery.MaxWidth.mobileM} {
        width: 5rem;
        ${TextStyleHelper.getTextStyle("XSmall", "semibold")}
    }
`;
