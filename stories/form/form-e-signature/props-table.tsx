import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const STRING_FORMAT = <>string format (PNG format encoded in base64)</>;

const DATA: ApiTableSectionProps[] = [
    {
        name: "E-signature specific props",
        attributes: [
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "description",
                description:
                    "The description to be displayed below the signature area",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The unique identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "loadingProgress",
                description:
                    "Number between 0 and 1 to mark the progress in a progress indicator",
                propTypes: ["number"],
            },
            {
                name: "loadingLabel",
                description: (
                    <>
                        Text above progress indicator, requires{" "}
                        <code>loadingProgress</code> prop to be defined.
                    </>
                ),
                propTypes: ["string"],
                defaultValue: `"Uploading..."`,
            },
            {
                name: "value",
                description: <>The signature data in {STRING_FORMAT}</>,
                propTypes: ["string"],
            },
            {
                name: "onChange",
                description: (
                    <>
                        Called when a selection is made. Returns the signature
                        data in {STRING_FORMAT}
                    </>
                ),
                propTypes: ["(value: string) => void"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
