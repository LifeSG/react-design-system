import React from "react";
import styled, { css } from "styled-components";
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
    border-collapse: collapse;
    border-spacing: 0;
    line-height: 1.5;

    a {
        color: ${Color.Primary};
        cursor: pointer;
        text-decoration: none;
    }

    code {
        background-color: #f5f5f5;
        color: #d0021b;
        font-size: 0.875rem;
        font-weight: 400;
        padding: 0.25rem 0.5rem;
        white-space: pre-wrap;
    }

    td,
    th {
        padding: 0.5rem;
        font-size: 14px;
        text-align: left;
        vertical-align: top;
    }

    thead,
    th {
        font-weight: bold;
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

interface NameColStyleProps {
    $isFunction?: boolean;
}

export const NameCol = ({ children, mandatory = false }: NameColProps) => {
    const isFunction = children.substring(0, 2) === "on";

    if (mandatory) {
        return <Mandatory $isFunction={isFunction}>{children}</Mandatory>;
    }

    return <Label $isFunction={isFunction}>{children}</Label>;
};

const Label = styled.td<NameColStyleProps>`
    font-weight: bold;
    ${(props) => {
        if (props.$isFunction) {
            return css`
                color: ${Color.PrimaryDark};
            `;
        }
    }}
`;

const Mandatory = styled.td<NameColStyleProps>`
    font-weight: bold;
    :after {
        content: " *";
        color: ${Color.Validation.Red.Text};
    }

    ${(props) => {
        if (props.$isFunction) {
            return css`
                color: ${Color.PrimaryDark};
            `;
        }
    }}
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
