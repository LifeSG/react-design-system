import {
    ApiTable,
    ApiTableSectionProps,
    TabAttribute,
    Tabs,
} from "stories/storybook-common";

const MODAL_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
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
                defaultValue: "true",
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
                name: "onClose",
                description: (
                    <>
                        Callback when the modal is closed. Can be triggered by
                        the close button or pressing the Escape key while the
                        modal is open.
                    </>
                ),
                propTypes: ["() => void"],
            },
            {
                name: "onOverlayClick",
                description: (
                    <>
                        Callback when the overlay outside of the modal is
                        clicked. Triggered if <code>enableOverlayClick</code>
                        is <code>true</code>
                    </>
                ),
                propTypes: ["() => void"],
            },
            {
                name: "dismissKeyboardOnShow",
                description: <>Dismisses keyboard when modal is shown</>,
                propTypes: ["boolean"],
                defaultValue: "true",
            },
        ],
    },
];

const MODAL_CARD_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
        ],
    },
];

const MODAL_CONTENT_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
        ],
    },
];

const MODAL_CLOSE_BUTTON_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
        ],
    },
];

const MODAL_FOOTER_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "primaryButton",
                description: (
                    <>
                        The primary call-to-action <code>{"<button>"}</code>
                    </>
                ),
                propTypes: ["React.ReactNode"],
            },
            {
                name: "secondaryButton",
                description: (
                    <>
                        The secondary call-to-action <code>{"<button>"}</code>
                    </>
                ),
                propTypes: ["React.ReactNode"],
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "ModalV2",
        component: <ApiTable sections={MODAL_DATA} />,
    },
    {
        title: "ModalV2.Card",
        component: <ApiTable sections={MODAL_CARD_DATA} />,
    },
    {
        title: "ModalV2.Content",
        component: <ApiTable sections={MODAL_CONTENT_DATA} />,
    },
    {
        title: "ModalV2.CloseButton",
        component: <ApiTable sections={MODAL_CLOSE_BUTTON_DATA} />,
    },
    {
        title: "ModalV2.Footer",
        component: <ApiTable sections={MODAL_FOOTER_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
