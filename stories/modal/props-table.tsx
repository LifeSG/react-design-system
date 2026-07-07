import type {
    ApiTableSectionProps,
    TabAttribute,
} from "stories/storybook-common";
import { ApiTable, Tabs } from "stories/storybook-common";

const MODAL_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: (
                    <>
                        The content of the modal. The parent element must be a
                        valid HTML element or a component that forwards a ref to
                        a valid HTML element. This element is used to determine
                        the boundaries for overlay click detection. Note:
                        Fragments are not supported.
                    </>
                ),
                propTypes: ["JSX.Element"],
            },
            {
                name: "show",
                mandatory: true,
                description: (
                    <>
                        Toggles the visibility of the <code>Modal</code>
                    </>
                ),
                propTypes: ["boolean"],
            },
            {
                name: "rootComponentId",
                description: (
                    <>
                        The identifier of the element to inject the{" "}
                        <code>Modal</code> into. Not specifying the root element
                        will make <code>{`<body>`}</code> the root element.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "animationFrom",
                description: (
                    <>
                        The animation direction of which the <code>Modal</code>{" "}
                        will appear
                    </>
                ),
                propTypes: [`"top"`, `"bottom"`, `"left"`, `"right"`],
                defaultValue: `"bottom"`,
            },
            {
                name: "enableOverlayClick",
                description: (
                    <>
                        Toggles whether <code>Modal</code> can be dismissed by
                        clicking on the overlay
                    </>
                ),
                propTypes: ["boolean"],
            },
            {
                name: "zIndex",
                description: (
                    <>
                        Allows a custom <code>z-index</code> to be specified
                        (useful for modal stacking)
                    </>
                ),
                propTypes: ["number"],
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
            {
                name: "dismissKeyboardOnShow",
                description: "Dismisses keyboard when modal is shown",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
        ],
    },
];

const MODAL_BOX_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "showCloseButton",
                description: "This toggles the visibility of the close button",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "onClose",
                description:
                    "Callback when the close button is clicked. Will be triggered if the close button is visible",
                propTypes: ["() => void"],
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "Modal",
        component: <ApiTable sections={MODAL_DATA} />,
    },
    {
        title: "Modal.Box",
        component: <ApiTable sections={MODAL_BOX_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
