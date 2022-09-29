import React from "react";
import styled from "styled-components";
import { Color } from "../../../src/color";
import { DefaultColProps, DescriptionColProps } from "./types";

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

const StyledTable = styled.table`
    width: 100%;
    position: relative;

    td,
    th {
        padding: 0.5rem;
        font-size: 14px;
    }

    td {
        :first-child {
            width: 20%;
        }

        :last-child {
            width: 20%;
        }
    }

    tbody {
        tr {
            border: none;
            border-bottom: 1px solid ${Color.Neutral[6]};
            :nth-child(even) {
                background: ${Color.Neutral[7]};
            }
        }
    }

    thead {
        tr {
            border-bottom: 2px solid ${Color.Primary};
        }

        th {
            color: ${Color.Primary};
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
    background: ${Color.Neutral[3]} !important;
    color: white;
    font-weight: bold;
`;

// =============================================================================
// NAME COLUMN
// =============================================================================
interface NameColProps {
    children: string;
    mandatory?: boolean;
}

export const NameCol = ({ children, mandatory = false }: NameColProps) => {
    if (mandatory) {
        return <Mandatory>{children}</Mandatory>;
    }

    return <Label>{children}</Label>;
};

const Label = styled.td`
    font-weight: bold;
`;

const Mandatory = styled.td`
    font-weight: bold;
    :after {
        content: " *";
        color: ${Color.Validation.Red.Text};
    }
`;

// =============================================================================
// DESCRIPTION COLUMN
// =============================================================================
export const DescriptionCol = ({
    children,
    propTypes,
}: DescriptionColProps) => {
    let component = propTypes;

    if (
        propTypes &&
        Array.isArray(propTypes) &&
        typeof propTypes[0] === "string"
    ) {
        component = (
            <PropsContainer>
                {propTypes.map((prop, index) => (
                    <code key={index}>{prop}</code>
                ))}
            </PropsContainer>
        );
    }

    return (
        <td>
            {children && (
                <>
                    {children}
                    <br />
                </>
            )}
            {component}
        </td>
    );
};

const PropsContainer = styled.div`
    display: flex;
    code {
        :not(:last-child) {
            margin-right: 0.25rem;
        }
    }
`;

// =============================================================================
// DEFAULT VALUE COLUMN
// =============================================================================
export const DefaultCol = ({ children }: DefaultColProps) => {
    if (!children) {
        return (
            <td>
                <code>-</code>
            </td>
        );
    }

    if (Array.isArray(children) && typeof children[0] === "string") {
        return (
            <td>
                <PropsContainer>
                    {children.map((value, index) => (
                        <code key={index}>{value}</code>
                    ))}
                </PropsContainer>
            </td>
        );
    }

    if (typeof children === "string") {
        return (
            <td>
                <code>{children}</code>
            </td>
        );
    }

    return <td>{children}</td>;
};
