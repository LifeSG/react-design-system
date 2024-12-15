import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "items",
                mandatory: true,
                description: "The items to be displayed",
                propTypes: ["LinkListItemProps<T>[]"],
            },
            {
                name: "maxShown",
                description:
                    "The maximum number of items to be shown, while the rest are minimized",
                propTypes: ["number"],
            },
            {
                name: "style",
                description: "The text size style",
                propTypes: [`"default"`, `"small"`],
                defaultValue: `"default"`,
            },
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "onItemClick",
                description: (
                    <>
                        Called when an item is clicked. The event handler is on
                        a component level and &nbsp;
                        <strong>affects all items</strong>. For specific
                        item&rsquo;s click handling, specify the&nbsp;
                        <code>onClick</code> property in each item instead
                    </>
                ),
                propTypes: [
                    "(item: LinkListItemProps<T>, event: React.MouseEvent<HTMLAnchorElement>) => void",
                ],
            },
        ],
    },
    {
        name: "LinkListItemProps",
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement"
                            rel="noreferrer"
                            target="_blank"
                        >
                            HTMLAnchorElement
                        </a>
                    </>
                ),
            },
            {
                name: "title",
                mandatory: true,
                description: "The title of the item",
                propTypes: ["string"],
            },
            {
                name: "description",
                description: "The first level description of the item",
                propTypes: ["string"],
            },
            {
                name: "secondaryDescription",
                description: "The second level description of the item",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the item",
                propTypes: ["string"],
            },
            {
                name: "options",
                description: "Any other custom properties to pass to the item",
                propTypes: ["T"],
            },
            {
                name: "onClick",
                description: (
                    <>
                        Called when an item is clicked.{" "}
                        <strong>
                            This overrides the&nbsp;
                            <code>onItemClick</code> event handler
                        </strong>
                        .
                    </>
                ),
                propTypes: [
                    "(event: React.MouseEvent<HTMLAnchorElement>) => void",
                ],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
