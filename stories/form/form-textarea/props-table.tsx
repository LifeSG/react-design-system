import React from "react";
import styled from "styled-components";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";
import { Text } from "../../../src/text/text";

const DATA: ApiTableSectionProps[] = [
    {
        name: "Textarea specific props",
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement"
                            rel="noreferrer"
                            target="_blank"
                        >
                            HTMLTextareaElement
                        </a>
                    </>
                ),
            },
            {
                name: "error",
                description: (
                    <>
                        Indicates if an error display is to be set&nbsp; (Not
                        needed if you indicated <code>errorMessage</code>)
                    </>
                ),
                propTypes: ["boolean"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;

export const counterLabelFunction = (
    maxLength: number,
    currentValueLength: number
): JSX.Element => {
    const CustomCounterLabel = styled(Text.H6)`
        text-align: right;
        color: #a4a4a4 !important;
        font-size: 14px;
    `;
    return (
        <CustomCounterLabel data-testid={"counter-label"} weight="semibold">
            {currentValueLength}/{maxLength}
        </CustomCounterLabel>
    );
};
