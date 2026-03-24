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
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement"
                            target="_blank"
                            rel="noreferrer"
                        >
                            HTMLAttributes&lt;HTMLDivElement&gt;
                        </a>
                    </>
                ),
            },
            {
                name: "children",
                mandatory: true,
                description:
                    "Content to display in the avatar, typically an initial or a custom element",
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "sizeType",
                description: "Size of avatar",
                propTypes: [`"default"`, `"small"`],
                defaultValue: `"default"`,
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
                defaultValue: `"avatar"`,
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
