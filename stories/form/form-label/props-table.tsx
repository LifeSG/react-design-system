import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";

export const FORM_LABEL_USED_WITH_WRAPPER_PROPS_DATA: ApiTableSectionProps = {
    attributes: [
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
};

export const FORM_LABEL_PROPS_DATA: ApiTableSectionProps = {
    attributes: [
        ...FORM_LABEL_USED_WITH_WRAPPER_PROPS_DATA.attributes,
        {
            name: "disabled",
            description: "Indicates if a disabled display should be applied",
            propTypes: ["string"],
        },
        {
            name: "subtitle",
            description: (
                <>
                    The subtitle for the <code>Form.Label</code>
                </>
            ),
            propTypes: ["string", "JSX.Element"],
        },
    ],
};

export const FORM_LABEL_ADDON_PROPS_DATA: ApiTableSectionProps = {
    name: "FormLabelAddonProps",
    attributes: [
        {
            name: "content",
            mandatory: true,
            description: (
                <>
                    Since the addon is either a <code>Tooltip</code> or{" "}
                    <code>Popover</code>, this attribute controls the content
                    within their bubble display
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
            propTypes: ["JSX.Element"],
            defaultValue: `<ICircleFillIcon />`,
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
};

const FORM_LABEL_DATA: ApiTableSectionProps[] = [
    FORM_LABEL_PROPS_DATA,
    FORM_LABEL_ADDON_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={FORM_LABEL_DATA} />;
