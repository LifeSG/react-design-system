import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        name: "OTPInput specific props",
        attributes: [
            {
                name: "id",
                description: "The unique identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "errorMessage",
                description: "Indicates if an error message is to be display.",
                propTypes: ["boolean"],
            },
            {
                name: "value",
                description: "The OTP input value",
                propTypes: ["string"],
            },
            {
                name: "cooldownDuration",
                description:
                    "The count down duration value before the next OTP request can be made",
                propTypes: ["number"],
            },
            {
                name: "numOfInput",
                description: "The number of input field box",
                propTypes: ["number"],
            },
            {
                name: "actionButtonProps",
                description: "The call to action custom button props",
                propTypes: ["ButtonProps"],
            },

            {
                name: "onChange",
                description: "Called when a change is made on the input field",
                propTypes: ["(value: string) => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
