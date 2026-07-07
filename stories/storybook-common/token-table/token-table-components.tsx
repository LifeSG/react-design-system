import { css } from "@linaria/core";
import clsx from "clsx";
import { useDesignToken } from "src/theme";

import { DocTable, docText } from "../docs/doc-table";
import { useInspectColour } from "../inspectors/token-inspector";
import type {
    TokenTableDefaultValueColourTokenProps,
    TokenTableDefaultValueDefaultProps,
} from "./types";

export const Usage = ({ children }: React.ComponentProps<"div">) => {
    return <div className={clsx(usage, docText)}>{children}</div>;
};

const usage = css`
    margin: 16px 0;

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
}

export const NameCol = ({ children }: NameColProps) => {
    return (
        <td>
            <div className={label}>{children}</div>
        </td>
    );
};

const label = css`
    font-weight: bold;
    color: #333333;
`;

// =============================================================================
// DESCRIPTION COLUMN
// =============================================================================
export const DescriptionCol = ({ children }: React.ComponentProps<"div">) => {
    return (
        <td>
            <div className={description}>{children}</div>
        </td>
    );
};

const description = css`
    color: #333333;

    code {
        &:not(:last-child) {
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
        | TokenTableDefaultValueDefaultProps;
}

interface SwatchColourProps {
    colour: string;
}

const ColourDisplay = ({
    attributes,
}: {
    attributes: TokenTableDefaultValueColourTokenProps;
}) => {
    const { value, reference } = useInspectColour(attributes.token);
    return (
        <Default>
            <SwatchColour colour={value} />
            <code>{reference || value}</code>
        </Default>
    );
};

const DefaultDisplay = ({
    attributes,
}: {
    attributes: TokenTableDefaultValueDefaultProps;
}) => {
    const value = useDesignToken(attributes.token);
    return (
        <Default>
            <code>{value}</code>
        </Default>
    );
};

export const DefaultCol = ({ attributes }: DefaultColProps) => {
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
        return (
            <td>
                <ColourDisplay attributes={attributes} />
            </td>
        );
    }

    return (
        <td>
            <DefaultDisplay attributes={attributes} />
        </td>
    );
};

const Default = ({ children }: React.ComponentProps<"div">) => {
    return <div className={defaultContainer}>{children}</div>;
};

const defaultContainer = css`
    display: flex;
    flex-wrap: wrap;
    color: #333333;
`;

const SwatchColour = ({ colour }: SwatchColourProps) => {
    return <div className={swatchColour} style={{ background: colour }} />;
};

const swatchColour = css`
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
    margin-right: 4px;
`;
