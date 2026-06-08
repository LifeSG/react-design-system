import { DocIcon } from "@lifesg/react-icons/doc";
import { Unstyled } from "@storybook/addon-docs/blocks";
import { Fragment } from "react";

import { StorybookLink } from "../docs/storybook-link";
import {
    DefaultCol,
    DescriptionCol,
    NameCol,
    Section,
    Table,
    Usage,
} from "./token-table-components";
import type { TokenTableAttributeRowProps, TokenTableProps } from "./types";

export const TokenTable = (props: TokenTableProps): JSX.Element => {
    const renderSection = (
        attributes: TokenTableAttributeRowProps[],
        sectionKey: string
    ) => {
        return attributes.map((attribute) => {
            return (
                <tr key={`${sectionKey}-${attribute.name}`}>
                    <NameCol>{attribute.name}</NameCol>
                    <DescriptionCol>{attribute.description}</DescriptionCol>
                    <DefaultCol attributes={attribute.defaultValue} />
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
        <>
            <Usage>
                For more information on usage, refer to the{" "}
                <StorybookLink path="/docs/foundations-component-tokens-introduction--docs">
                    <DocIcon /> documentation
                </StorybookLink>
                .
            </Usage>
            <Unstyled style={{ width: "100%" }}>
                <Table>{renderContents()}</Table>
            </Unstyled>
        </>
    );
};
