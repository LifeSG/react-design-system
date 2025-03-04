import { Unstyled } from "@storybook/blocks";
import orderBy from "lodash/orderBy";
import { Fragment } from "react";
import {
    DefaultCol,
    DescriptionCol,
    NameCol,
    Section,
    Table,
} from "./api-table-components";
import { ApiTableAttributeRowProps, ApiTableProps } from "./types";

export const ApiTable = (props: ApiTableProps): JSX.Element => {
    const renderSection = (
        attributes: ApiTableAttributeRowProps[],
        sectionIndex: number
    ) => {
        const sortedAttributes = orderBy(attributes, ["name"], ["asc"]);
        const normalAttributes: ApiTableAttributeRowProps[] = [];
        const callbackAttributes: ApiTableAttributeRowProps[] = [];

        sortedAttributes.forEach((attribute) => {
            if (attribute.name.startsWith("on")) {
                callbackAttributes.push(attribute);
            } else {
                normalAttributes.push(attribute);
            }
        });

        const newArr = [...normalAttributes, ...callbackAttributes];

        return newArr.map((attribute, index) => {
            return (
                <tr key={`${sectionIndex}-${index}`}>
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
