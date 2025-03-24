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
                name: "icon",
                description: <>The icon component to be rendered</>,
                propTypes: ["JSX.Element"],
            },
            {
                name: "iconPosition",
                description:
                    "Specifies whether the icon is rendered on the left or right of the label",
                propTypes: [`"left"`, `"right"`],
                defaultValue: `"left"`,
            },
            {
                name: "styleType",
                mandatory: true,
                description: (
                    <>
                        The style of the <code>ButtonWithIcon</code>
                    </>
                ),
                propTypes: [`"default"`, `"secondary"`, `"light"`, `"link"`],
                defaultValue: `"default"`,
            },
            {
                name: "danger",
                description:
                    "If specified, the component will have a red color scheme being applied",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "loading",
                description: "The icon will become a loading spinner",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
