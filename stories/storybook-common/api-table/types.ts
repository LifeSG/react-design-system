export interface DescriptionColProps {
    children: string | JSX.Element | JSX.Element[];
    propTypes?: string[] | JSX.Element | undefined;
}

export interface DefaultColProps {
    children?: string | string[] | JSX.Element | undefined;
}

export interface ApiTableAttributeRowProps {
    name: string;
    description: string | JSX.Element | JSX.Element[];
    propTypes?: string[] | JSX.Element | undefined;
    defaultValue?: string | JSX.Element | undefined;
    /** States if atrribute is mandatory */
    mandatory?: boolean | undefined;
}

export interface ApiTableSectionProps {
    name?: string | undefined;
    attributes: ApiTableAttributeRowProps[];
}

export interface ApiTableProps {
    sections: ApiTableSectionProps[];
}
