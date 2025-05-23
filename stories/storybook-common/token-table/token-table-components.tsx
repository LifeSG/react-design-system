import React from "react";
import { StyledComponentProps } from "src/theme/helpers";
import styled, { DefaultTheme, useTheme } from "styled-components";
import { DocTable, DocTextStyle } from "../doc-table";
import { ColourTokenInspector } from "../token-inspector";
import {
    TokenTableDefaultValueColourTokenProps,
    TokenTableDefaultValueDefaultProps,
} from "./types";

export const Usage = styled.div`
    margin: 16px 0;
    ${DocTextStyle}

    svg {
        width: 0.75lh;
        height: 0.75lh;
        vertical-align: middle;
    }
`;

// =============================================================================
// TABLE
// =============================================================================
interface TableProps {
    children: JSX.Element | JSX.Element[];
}

export const Table = ({ children }: TableProps) => {
    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Default value</th>
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </StyledTable>
    );
};

const StyledTable = styled(DocTable)`
    td {
        :first-child {
            width: 20%;
        }

        :last-child {
            width: 25%;
        }
    }
`;

// =============================================================================
// SECTION
// =============================================================================

interface SectionProps {
    children: string;
}

export const Section = ({ children }: SectionProps) => (
    <SectionRow>
        <td colSpan={3}>{children}</td>
    </SectionRow>
);

const SectionRow = styled.tr`
    background: #686868 !important;
    color: white;
    font-weight: bold;
`;

// =============================================================================
// NAME COLUMN
// =============================================================================
interface NameColProps {
    children: string;
}

export const NameCol = ({ children }: NameColProps) => {
    return (
        <td>
            <Label>{children}</Label>
        </td>
    );
};

const Label = styled.div`
    font-weight: bold;
    color: #333333;
`;

// =============================================================================
// DESCRIPTION COLUMN
// =============================================================================
interface DescriptionColProps {
    children: React.ReactNode;
}

export const DescriptionCol = ({ children }: DescriptionColProps) => {
    return (
        <td>
            <Description>{children}</Description>
        </td>
    );
};

const Description = styled.div`
    color: #333333;

    code {
        :not(:last-child) {
            margin-right: 0.25rem;
        }
    }
`;

// =============================================================================
// DEFAULT VALUE COLUMN
// =============================================================================
interface DefaultColProps {
    attributes?:
        | TokenTableDefaultValueColourTokenProps
        | TokenTableDefaultValueDefaultProps
        | undefined;
}

interface SwatchColourProps {
    $colour: string;
}

export const DefaultCol = ({ attributes }: DefaultColProps) => {
    const theme = useTheme();

    if (!attributes) {
        return (
            <td>
                <Default>
                    <code>-</code>
                </Default>
            </td>
        );
    }

    if (attributes.type === "colour-token") {
        const {
            primitive,
            semantic,
            result: value,
        } = ColourTokenInspector.from(theme).inspect(
            () => getTokenValue(attributes.token, theme) as string
        );

        const display = semantic
            ? `Colour["${semantic}"]`
            : primitive
            ? `Colour.Primitive["${primitive}"]`
            : value;

        return (
            <td>
                <Default>
                    <SwatchColour $colour={value} />
                    <code>{display}</code>
                </Default>
            </td>
        );
    } else {
        const value = getTokenValue(attributes.token, theme);

        return (
            <td>
                <Default>
                    <code>{value}</code>
                </Default>
            </td>
        );
    }
};

const getTokenValue = (
    token: string | number | ((props: StyledComponentProps) => string | number),
    theme: DefaultTheme
): string | number => {
    if (typeof token === "function") {
        return getTokenValue(token({ theme }), theme);
    }

    return token;
};

const Default = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: #333333;
`;

const SwatchColour = styled.div<SwatchColourProps>`
    flex-shrink: 0;
    height: 1.5rem;
    width: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background: repeating-linear-gradient(
        135deg,
        #edefef 0px,
        #edefef 10px,
        #dde1e2 10px,
        #dde1e2 20px
    );
    background: ${(props) => props.$colour};

    margin-right: 4px;
`;
