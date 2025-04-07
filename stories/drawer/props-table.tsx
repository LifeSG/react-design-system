import { ApiTable, ApiTableSectionProps, code } from "stories/storybook-common";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: <>The contents of the {code("Drawer")}</>,
                propTypes: ["React.ReactNode"],
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
                name: "heading",
                description: <>The header text of the {code("Drawer")}</>,
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The unique identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "show",
                description: (
                    <>Toggles the visibility of the {code("Drawer")}</>
                ),
                propTypes: ["boolean"],
            },
            {
                name: "onClose",
                description: "Called when the close button is clicked",
                propTypes: ["() => void"],
            },
            {
                name: "onOverlayClick",
                description: (
                    <>
                        Called when the overlay of the {code("Drawer")} is
                        clicked
                    </>
                ),
                propTypes: ["() => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
