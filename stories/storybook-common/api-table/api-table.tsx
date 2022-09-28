import React from "react";
import { DefaultCol, DescriptionCol, NameCol, Section, Table } from "./api-table-components";
import { ApiTableAttributeRowProps, ApiTableProps } from "./types";

export const ApiTable = (props: ApiTableProps): JSX.Element => {
	const renderSection = (attributes: ApiTableAttributeRowProps[], sectionIndex: number) => {
		return attributes.map((attribute, index) => {
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
				<>
					{section.name && <Section key={`section-${index + 1}`}>{section.name}</Section>}
					{renderSection(section.attributes, index)}
				</>
			);
		});
	};

	return (
		<Table>
			{renderContents()}
		</Table>
	);
};
