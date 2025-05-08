import styled, { css } from "styled-components";
import { DocTable } from "../doc-table";
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

const StyledTable = styled(DocTable)`
    td {
        :first-child {
            width: 20%;
        }

        :last-child {
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
    color: #333333;
    ${(props) => {
        if (props.$isFunction) {
            return css`
                color: #1768be;
            `;
        }
    }}
`;

const Mandatory = styled.td<NameColStyleProps>`
    font-weight: bold;
    :after {
        content: " *";
        color: #9e130f;
    }

    ${(props) => {
        if (props.$isFunction) {
            return css`
                color: #1768be;
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
    flex-wrap: wrap;
    code {
        :not(:last-child) {
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
