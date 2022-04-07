import React from "react";
import styled, { css } from "styled-components";
import { Color, Text } from "src/components";

interface Props {
    variant: string;
}

const EXAMPLE_TEXT = "A quick brown fox jumps over the lazy dog";

export const TextDisplay = ({ variant }: Props) => {
    const renderTextComponent = () => {
        switch (variant) {
            case "D1":
                return <Text.D1>{EXAMPLE_TEXT}</Text.D1>;
            case "D2":
                return <Text.D2>{EXAMPLE_TEXT}</Text.D2>;
            case "DBody":
                return <Text.DBody>{EXAMPLE_TEXT}</Text.DBody>;
            case "H1":
                return <Text.H1>{EXAMPLE_TEXT}</Text.H1>;
            case "H2":
                return <Text.H2>{EXAMPLE_TEXT}</Text.H2>;
            case "H3":
                return <Text.H3>{EXAMPLE_TEXT}</Text.H3>;
            case "H4":
                return <Text.H4>{EXAMPLE_TEXT}</Text.H4>;
            case "H5":
                return <Text.H5>{EXAMPLE_TEXT}</Text.H5>;
            case "H6":
                return <Text.H6>{EXAMPLE_TEXT}</Text.H6>;
            case "Body":
                return <Text.Body>{EXAMPLE_TEXT}</Text.Body>;
            case "BodySmall":
                return <Text.BodySmall>{EXAMPLE_TEXT}</Text.BodySmall>;
            case "XSmall":
                return <Text.XSmall>{EXAMPLE_TEXT}</Text.XSmall>;
            default:
                return <Text.Body>{EXAMPLE_TEXT}</Text.Body>;
        }
    };

    const renderLabel = () => {
        let type;

        switch (variant) {
            case "D1":
            case "D2":
            case "DBody":
                type = "display";
                break;
            case "H1":
            case "H2":
            case "H3":
            case "H4":
            case "H5":
            case "H6":
                type = "header";
                break;
            default:
                type = "general";
                break;
        }

        return (
            <LabelContainer type={type}>
                <Label>{variant}</Label>
            </LabelContainer>
        );
    };

    return (
        <Container>
            {renderLabel()}
            {renderTextComponent()}
        </Container>
    );
};

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface LabelContainerStyleProps {
    type: "display" | "header" | "general";
}

// =============================================================================
// STYLING
// =============================================================================
const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
`;

const LabelContainer = styled.div<LabelContainerStyleProps>`
    display: flex;
    justify-content: center;
    width: fit-content;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    margin-bottom: 1rem;

    ${(props) => {
        let color;
        switch (props.type) {
            case "display":
                color = Color.Secondary(props);
                break;
            case "header":
                color = Color.Accent.Light[1](props);
                break;
            default:
                color = Color.Accent.Dark[2](props);
                break;
        }

        return css`
            background: ${color};
        `;
    }}
`;

const Label = styled(Text.H5)`
    color: ${Color.Neutral[8]};
`;
