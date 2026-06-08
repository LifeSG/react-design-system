import { Unstyled } from "@storybook/addon-docs/blocks";
import orderBy from "lodash/orderBy";
import { Fragment } from "react";

import {
    DefaultCol,
    DescriptionCol,
    NameCol,
    Section,
    Table,
} from "./api-table-components";
import type { ApiTableAttributeRowProps, ApiTableProps } from "./types";

export const ApiTable = (props: ApiTableProps): JSX.Element => {
    const renderSection = (
        attributes: ApiTableAttributeRowProps[],
        sectionKey: string
    ) => {
        const sortedAttributes = orderBy(attributes, ["name"], ["asc"]);
        const reorderedAttributes = [
            ...sortedAttributes.filter(
                (attribute) => !attribute.name.startsWith("on")
            ),
            ...sortedAttributes.filter((attribute) =>
                attribute.name.startsWith("on")
            ),
        ];

        return reorderedAttributes.map((attribute) => {
            return (
                <tr key={`${sectionKey}-${attribute.name}`}>
                    <NameCol mandatory={attribute.mandatory}>
                        {attribute.name}
                    </NameCol>
                    <DescriptionCol propTypes={attribute.propTypes}>
                        {attribute.description}
                    </DescriptionCol>
                    <DefaultCol>{attribute.defaultValue}</DefaultCol>
                </tr>
            );
        });
    };

    const renderContents = () => {
        return props.sections.map((section) => {
            const sectionKey =
                section.name ||
                section.attributes.map((attribute) => attribute.name).join("|");

            return (
                <Fragment key={sectionKey}>
                    {section.name && (
                        <Section key={`section-${sectionKey}`}>
                            {section.name}
                        </Section>
                    )}
                    {renderSection(section.attributes, sectionKey)}
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
