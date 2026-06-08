import { css } from "@linaria/core";
import type { ReactNode } from "react";

import { DocTable } from "../docs/doc-table";
import type { DefaultColProps, DescriptionColProps } from "./types";

// =============================================================================
// TABLE
// =============================================================================
interface TableProps {
    children: JSX.Element | JSX.Element[];
}

export const Table = ({ children }: TableProps) => {
    return (
        <DocTable className={styledTable}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Default value</th>
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </DocTable>
    );
};

const styledTable = css`
    td {
        &:first-child {
            width: 20%;
        }

        &:last-child {
            width: 20%;
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
    <tr className={sectionRow}>
        <td colSpan={3}>{children}</td>
    </tr>
);

const sectionRow = css`
    background: #686868 !important;
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
    const isFunction = children.startsWith("on");

    if (mandatory) {
        return (
            <td className={`${mandatoryCol} ${isFunction ? functionCol : ""}`}>
                {children}
            </td>
        );
    }

    return (
        <td className={`${labelCol} ${isFunction ? functionCol : ""}`}>
            {children}
        </td>
    );
};

const labelCol = css`
    font-weight: bold;
    color: #333333;
`;

const mandatoryCol = css`
    font-weight: bold;
    &:after {
        content: " *";
        color: #9e130f;
    }
`;

const functionCol = css`
    color: #1768be;
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
                {propTypes.map((prop) => (
                    <code key={prop}>{prop}</code>
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

const PropsContainer = ({ children }: { children: ReactNode }) => (
    <div className={propsContainer}>{children}</div>
);

const propsContainer = css`
    display: flex;
    flex-wrap: wrap;

    code {
        &:not(:last-child) {
            margin-right: 0.25rem;
        }
    }

    td {
        color: #333333;
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
                    {children.map((value) => (
                        <code key={value}>{value}</code>
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
