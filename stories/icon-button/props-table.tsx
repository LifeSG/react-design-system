import type { ApiTableSectionProps } from "stories/storybook-common";
import { ApiTable } from "stories/storybook-common";

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
                description:
                    "An icon element rendered inside the button. The icon is automatically marked aria-hidden.",
                propTypes: ["JSX.Element"],
            },
            {
                name: "styleType",
                description: "The style of the button",
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
