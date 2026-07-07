import { ApiTable } from "stories/storybook-common/api-table";
import type { ApiTableSectionProps } from "stories/storybook-common/api-table/types";

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
                name: "styleType",
                description: (
                    <>
                        The style of the <code>SingpassButton</code>
                    </>
                ),
                propTypes: [`"red-filled"`, `"white-filled"`],
                defaultValue: `"white-filled"`,
            },
            {
                name: "sizeType",
                description: (
                    <>
                        The size of the <code>SingpassButton</code>
                    </>
                ),
                propTypes: [`"default"`, `"small"`, `"large"`],
                defaultValue: `"default"`,
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
