import React from "react";
import { Color, Text } from "src/components";
import { ITextAttributes } from "src/components/styles/spec/types";
import styled from "styled-components";

interface Props {
    children: JSX.Element;
    attributes: ITextAttributes;
}

export const FontSizeDisplay = (args: Props) => {
    const { children, attributes } = args;

    return (
        <Container>
            <LabelContainer>{children}</LabelContainer>
            <DescriptionContainer>
                <Label>
                    <LabelHead weight="semibold">Font size: </LabelHead>
                    {`${attributes.size}rem ( ${attributes.size * 16}px )`}
                </Label>
                <Label>
                    <LabelHead weight="semibold">Line height: </LabelHead>
                    {`${attributes.lineHeight}rem ( ${
                        attributes.lineHeight * 16
                    }px )`}
                </Label>
                <Label>
                    <LabelHead weight="semibold">Letter Spacing: </LabelHead>
                    {attributes.letterSpacing
                        ? `${attributes.letterSpacing}rem ( ${
                              attributes.letterSpacing * 16
                          }px )`
                        : 0}
                </Label>
            </DescriptionContainer>
        </Container>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const Container = styled.div`
    display: flex;
    height: 5.5rem;
    width: 24rem;
    padding: 0 1rem;
    align-items: center;
    border-bottom: 1px solid ${Color.Neutral[5]};
`;

const LabelContainer = styled.div`
    display: flex;
    margin-right: 2rem;
    width: 20%;

    span {
        margin-bottom: 0;
    }
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled(Text.XSmall)`
    display: flex;
    &:last-child {
        margin-bottom: 0;
    }
`;

const LabelHead = styled(Label)`
    margin-right: 0.5rem;
    min-width: 6rem;
`;
