import styled, { css } from "styled-components";
import { TextStyleHelper } from "../../src";
import { Color } from "../../src/color/color";
import { Text } from "../../src/text/text";

// =============================================================================
// TEXT DISPLAY LABEL
// =============================================================================
interface TextDisplayLabelProps {
    variant: string;
}

const TextDisplayLabel = ({ variant }: TextDisplayLabelProps) => {
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

// =============================================================================
// TEXT DISPLAY
// =============================================================================

interface TextDisplayProps {
    variant: string;
    children: JSX.Element;
}

export const TextDisplay = ({ variant, children }: TextDisplayProps) => {
    return (
        <tr>
            <td>
                <TextDisplayLabel variant={variant} />
            </td>
            <td>{children}</td>
        </tr>
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
export const DisplayContainer = styled.table`
    tr {
        :not(:last-child) {
            border-bottom: 1px solid ${Color.Neutral[5]};
        }
    }

    tr td {
        padding: 1rem 0;
        vertical-align: middle;

        :first-child {
            vertical-align: top;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }
`;

const LabelContainer = styled.div<LabelContainerStyleProps>`
    display: flex;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    margin: 0 1.5rem 0 0;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;

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

const Label = styled(Text.BodySmall)`
    color: ${Color.Neutral[8]};
    margin: 0;
`;

export const LinkDiv = styled.div`
    display: flex;
    flex-direction: column;
    a {
        :not(:last-child) {
            margin-bottom: 1rem;
        }
    }
`;

export const ButtonContainer = styled.button`
    ${TextStyleHelper.getTextStyle("BodySmall", "bold")}
    padding: 0.5rem;
`;
