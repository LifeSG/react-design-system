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
                            href="https://developer.mozilla.org/en-US/docs/Web/API/SVGElement"
                            rel="noreferrer"
                            target="_blank"
                        >
                            HTMLSVGElement
                        </a>
                    </>
                ),
            },
            {
                name: "type",
                mandatory: true,
                description: "The icon type",
                propTypes: (
                    <>
                        Refer to the <em>Collections</em> section above
                    </>
                ),
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
