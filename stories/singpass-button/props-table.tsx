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
                name: "styleType",
                mandatory: true,
                description: (
                    <>
                        The style of the <code>Singpass Button</code>
                    </>
                ),
                propTypes: [`"red-filled"`, `"white-filled"`],
                defaultValue: `"white-filled"`,
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
