import { Unstyled } from "@storybook/blocks";
import { Fragment } from "react";
import {
    DefaultCol,
    DescriptionCol,
    NameCol,
    Section,
    Table,
} from "./token-table-components";
import { TokenTableAttributeRowProps, TokenTableProps } from "./types";

export const TokenTable = (props: TokenTableProps): JSX.Element => {
    const renderSection = (
        attributes: TokenTableAttributeRowProps[],
        sectionIndex: number
    ) => {
        return attributes.map((attribute, index) => {
            return (
                <tr key={`${sectionIndex}-${index}`}>
                    <NameCol>{attribute.name}</NameCol>
                    <DescriptionCol>{attribute.description}</DescriptionCol>
                    <DefaultCol attributes={attribute.defaultValue} />
                </tr>
            );
        });
    };

    const renderContents = () => {
        return props.sections.map((section, index) => {
            return (
                <Fragment key={index}>
                    {section.name && (
                        <Section key={`section-${index + 1}`}>
                            {section.name}
                        </Section>
                    )}
                    {renderSection(section.attributes, index)}
                </Fragment>
            );
        });
    };

    return (
        <Unstyled style={{ width: "100%" }}>
            <Table>{renderContents()}</Table>
        </Unstyled>
    );
};
