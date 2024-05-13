import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";
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
                            HTMLDivAttributes
                        </a>
                    </>
                ),
            },
            {
                name: "type",
                mandatory: true,
                description: "Indicates the style type of the component ",
                propTypes: [
                    `"warning"`,
                    `"error"`,
                    `"success"`,
                    `"info"`,
                    `"description"`,
                ],
            },
            {
                name: "actionLink",
                description:
                    "The attributes of an action link that performs an action on click",
                propTypes: (
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <code>HTMLAnchorAttributes</code>
                    </a>
                ),
            },
            {
                name: "sizeType",
                description: "Specifies the size of the component",
                propTypes: [`"default"`, `"small"`],
                defaultValue: `"default"`,
            },
            {
                name: "showIcon",
                description: "Specifies if the icon will be displayed",
                propTypes: ["boolean"],
                defaultValue: `false`,
            },
            {
                name: "actionLinkIcon",
                description: "Specifies a custom icon for the action link",
                propTypes: ["JSX.Element"],
                defaultValue: (
                    <>
                        <div style={{ marginRight: "1rem" }}>
                            <code>{`<ArrowRightIcon />`}</code>
                        </div>
                        <ArrowRightIcon />
                    </>
                ),
            },
            {
                name: "customIcon",
                description:
                    "Specifies a custom replacement icon for the alert",
                propTypes: ["JSX.Element"],
            },
            {
                name: "maxCollapsedHeight",
                description:
                    "Specifies the maximum visible height of the content in px",
                propTypes: ["number"],
            },
        ],
    },
];
export const PropsTable = () => <ApiTable sections={DATA} />;
