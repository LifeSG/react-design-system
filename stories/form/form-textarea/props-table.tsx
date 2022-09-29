import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "disabled",
                description:
                    "Indicates if a disabled display should be applied",
                propTypes: ["string"],
            },
            {
                name: "addon",
                description: (
                    <>
                        The addon attributes for the <code>Form.Label</code>
                    </>
                ),
                propTypes: ["FormLabelAddonProps"],
            },
        ],
    },
    {
        name: "FormLabelAddonProps",
        attributes: [
            {
                name: "content",
                mandatory: true,
                description: (
                    <>
                        Since the addon is either a <code>Tooltip</code> or{" "}
                        <code>Popover</code>, this attribute controls the
                        content within their bubble display
                    </>
                ),
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "type",
                description: "The type of addon",
                propTypes: [`"tooltip"`, `"popover"`],
                defaultValue: `"popover"`,
            },
            {
                name: "icon",
                description: "The type of icon used in the addon trigger",
                propTypes: ["IconType", "JSX.Element"],
                defaultValue: `"info"`,
            },
            {
                name: "id",
                description: "The unique identifier of the addon",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the addon",
                propTypes: ["string"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
