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
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"
                            target="_blank"
                            rel="noreferrer"
                        >
                            HTMLAttributes&lt;HTMLElement&gt;
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
                name: "menu",
                description: "Optional dropdown menu configuration",
                propTypes: ["AvatarMenuProps"],
            },
            {
                name: "mobile",
                description:
                    "Applies mobile-specific styles for the avatar and badge",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "badge",
                description: (
                    <>
                        Optional badge overlay on the avatar. Inherits
                        from&nbsp;
                        <a
                            href="/?path=/docs/feedback-indicators-badge--docs"
                            target="_blank"
                            rel="noreferrer"
                        >
                            BadgeProps
                        </a>
                    </>
                ),
                propTypes: ['Omit<BadgeProps, "isOverlay" | "variant">'],
            },
            {
                name: "data-testid",
                description: "Test ID used for targeting elements in tests",
                propTypes: ["string"],
                defaultValue: `"avatar"`,
            },
        ],
    },
    {
        name: "AvatarMenuProps",
        attributes: [
            {
                name: "alignment",
                description: "Alignment of the menu relative to the avatar",
                propTypes: [`"left"`, `"right"`],
                defaultValue: `"right"`,
            },
            {
                name: "items",
                description: (
                    <>
                        Array of menu items. Each item should follow&nbsp;
                        <a
                            href="/?path=/docs/navigation-navbar--docs"
                            target="_blank"
                            rel="noreferrer"
                        >
                            NavItemProps
                        </a>
                        .
                    </>
                ),
                propTypes: ["NavItemProps[]"],
                mandatory: true,
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
