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
                name: "imgSrc",
                description: "The image source to be rendered",
                propTypes: ["string"],
            },
            {
                name: "selected",
                description: "Specifies to show selected state or not",
                propTypes: ["boolean"],
            },
            {
                name: "error",
                description: "Specifies to show error state or not",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
