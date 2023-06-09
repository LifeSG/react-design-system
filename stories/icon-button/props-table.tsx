import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement"
                            rel="noreferrer"
                            target="_blank"
                        >
                            HTMLButtonElement
                        </a>
                    </>
                ),
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },

            {
                name: "styleType",
                description: "The style of the button",
                propTypes: [
                    `"primary"`,
                    `"secondary"`,
                    `"light"`,
                    `"disabled"`,
                ],
                defaultValue: `"primary"`,
            },
            {
                name: "sizeType",
                description: "The size of the button",
                propTypes: [`"large"`, `"default"`, `"small"`],
                defaultValue: `"default"`,
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
