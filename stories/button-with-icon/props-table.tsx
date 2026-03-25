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
                        The style of the <code>Button</code>
                    </>
                ),
                propTypes: [`"default"`, `"secondary"`, `"light"`, `"link"`],
                defaultValue: `"default"`,
            },
            {
                name: "size",
                description: "The size of the button",
                propTypes: [`"large"`, `"default"`, `"small"`],
                defaultValue: `"default"`,
            },
            {
                name: "icon",
                description:
                    "An icon element rendered inside the button. When provided without children, the button renders in icon-only (square) mode. Provide aria-label on the button for accessibility when in icon-only mode.",
                propTypes: ["JSX.Element"],
            },
            {
                name: "iconPosition",
                description:
                    "Position of the icon relative to the label. Only applies when children are also provided.",
                propTypes: [`"left"`, `"right"`],
                defaultValue: `"left"`,
            },
            {
                name: "loading",
                description: "Setting will display a loading spinner",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "danger",
                description:
                    "If specified, the component will have a red color scheme being applied",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "focusableWhenDisabled",
                description:
                    "Allows the button to remain focusable when disabled",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
