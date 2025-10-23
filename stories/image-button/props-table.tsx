import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";

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
