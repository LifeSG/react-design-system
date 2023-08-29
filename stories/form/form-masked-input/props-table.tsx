import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "MaskedInput specific props",
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This also inherits props from&nbsp;
                        <a
                            href="/?path=/docs/form-input--field#component-api"
                            rel="noreferrer"
                        >
                            Input
                        </a>
                    </>
                ),
            },
            {
                name: "maskRange",
                description: "The range (start and end index) to mask",
                propTypes: ["number[]"],
            },
            {
                name: "unmaskRange",
                description: "The range (start and end index) to NOT mask",
                propTypes: ["number[]"],
            },
            {
                name: "maskRegex",
                description:
                    "The regular expression to be replaced / masked with <maskChar>",
                propTypes: ["RegExp"],
            },
            {
                name: "maskTransformer",
                description: "The function to transform the value",
                propTypes: ["(value) => string"],
            },
            {
                name: "iconMask",
                description: "The mask icon",
                defaultValue: "<EyeSlashIcon />",
                propTypes: ["string"],
            },
            {
                name: "iconUnmask",
                description: "The unmask icon",
                defaultValue: "<EyeIcon />",
                propTypes: ["string"],
            },
            {
                name: "iconActiveColor",
                description: "The active color of the mask icon",
                defaultValue: "${Color.Primary}",
                propTypes: ["string"],
            },
            {
                name: "iconInactiveColor",
                description: "The active color of the mask icon",
                defaultValue: "${Color.Neutral[3]}",
                propTypes: ["string"],
            },
            {
                name: "maskChar",
                description: "The character to mask with",
                defaultValue: "•",
                propTypes: ["string"],
            },
            {
                name: "onMask",
                description: "The callback function when field is masked",
                propTypes: ["() => void"],
            },
            {
                name: "onUnmask",
                description: "The callback function when field is not masked",
                propTypes: ["() => void"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
