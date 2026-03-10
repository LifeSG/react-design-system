import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "show",
                mandatory: true,
                description: (
                    <>
                        Toggles the visibility of the <code>Overlay</code>
                    </>
                ),
                propTypes: ["boolean"],
            },
            {
                name: "id",
                description: (
                    <>
                        The unique identifier of the <code>Overlay</code>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "rootId",
                description: (
                    <>
                        The identifier of the element to inject the{" "}
                        <code>Overlay</code> into. Not specifying the root
                        element will make <code>{`<body>`}</code> the root
                        element.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "backgroundOpacity (deprecated)",
                description: (
                    <>
                        The opacity value of the <code>Overlay</code>
                        <br />
                        <strong>Note:</strong> This attribute has no effect and
                        will be removed in a future version
                    </>
                ),
                propTypes: ["number"],
            },
            {
                name: "backgroundBlur",
                description: "Specifies if the background should be blurred",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "disableTransition",
                description:
                    "Toggle the animation of the appearance and dismissal",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "zIndex",
                description: (
                    <>
                        Allows a custom <code>z-index</code> to be specified
                        (useful for overlay stacking)
                    </>
                ),
                propTypes: ["number"],
            },
            {
                name: "enableOverlayClick",
                description:
                    "Toggles whether child contents can be dismissed by clicking on the overlay",
                propTypes: ["boolean"],
            },
            {
                name: "onOverlayClick",
                description: (
                    <>
                        The callback when the overlay is being clicked on. Will
                        be triggered if <code>enableOverlayClick</code> is
                        specified to <code>true</code>
                    </>
                ),
                propTypes: ["() => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
