import React from "react";
import {
    DefaultCol,
    DescriptionCol,
    NameCol,
    Table,
} from "../storybook-common/api-table";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

export const ModalTable = () => (
    <Table>
        <tr>
            <NameCol mandatory>show</NameCol>
            <DescriptionCol propTypes={["boolean"]}>
                <>
                    Toggles the visibility of the <code>Modal</code>
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>rootComponentId</NameCol>
            <DescriptionCol propTypes={["string"]}>
                <>
                    The identifier of the element to inject the{" "}
                    <code>Modal</code> into. Not specifying the root element
                    will make <code>{`<body>`}</code> the root element.
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>animationFrom</NameCol>
            <DescriptionCol
                propTypes={[`"top"`, `"bottom"`, `"left"`, `"right"`]}
            >
                <>
                    The animation direction of which the <code>Modal</code> will
                    appear
                </>
            </DescriptionCol>
            <DefaultCol>{[`"bottom"`]}</DefaultCol>
        </tr>
        <tr>
            <NameCol>enableOverlayClick</NameCol>
            <DescriptionCol propTypes={["boolean"]}>
                <>
                    Toggles whether <code>Modal</code> can be dismissed by
                    clicking on the overlay
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>zIndex</NameCol>
            <DescriptionCol propTypes={["number"]}>
                <>
                    Allows a custom <code>z-index</code> to be specified (useful
                    for modal stacking)
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>onOverlayClick</NameCol>
            <DescriptionCol propTypes={["() => void"]}>
                <>
                    The callback when the overlay is being clicked on. Will be
                    triggered if <code>enableOverlayClick</code>
                    is specified to <code>true</code>
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>dismissKeyboardOnShow</NameCol>
            <DescriptionCol propTypes={["boolean"]}>
                <>Dismisses keyboard when modal is shown</>
            </DescriptionCol>
            <DefaultCol>{["true"]}</DefaultCol>
        </tr>
    </Table>
);

export const ModalBoxTable = () => (
    <Table>
        <tr>
            <NameCol>showCloseButton</NameCol>
            <DescriptionCol propTypes={["boolean"]}>
                This toggles the visibility of the close button
            </DescriptionCol>
            <DefaultCol>{["true"]}</DefaultCol>
        </tr>
        <tr>
            <NameCol>onClose</NameCol>
            <DescriptionCol propTypes={["() => void"]}>
                Callback when the close button is clicked. Will be triggered if
                the close button is visible
            </DescriptionCol>
            <DefaultCol />
        </tr>
    </Table>
);

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "Modal",
        component: <ModalTable />,
    },
    {
        title: "Modal.Box",
        component: <ModalBoxTable />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
