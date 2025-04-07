import React from "react";
import {
    DefaultCol,
    DescriptionCol,
    NameCol,
    Table,
} from "../storybook-common/api-table";

export const PropsTable = () => (
    <Table>
        <tr>
            <NameCol mandatory>show</NameCol>
            <DescriptionCol propTypes={["boolean"]}>
                <>
                    Toggles the visibility of the <code>Overlay</code>
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>id</NameCol>
            <DescriptionCol propTypes={["string"]}>
                <>
                    The unique identifier of the <code>Overlay</code>
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>rootId</NameCol>
            <DescriptionCol propTypes={["string"]}>
                <>
                    The identifier of the element to inject the{" "}
                    <code>Overlay</code> into. Not specifying the root element
                    will make <code>{`<body>`}</code> the root element.
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>backgroundOpacity (deprecated)</NameCol>
            <DescriptionCol propTypes={["number"]}>
                <>
                    The opacity value of the <code>Overlay</code>
                    <br />
                    <strong>Note:</strong> This attribute has no effect and will
                    be removed in a future version
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>backgroundBlur</NameCol>
            <DescriptionCol propTypes={["boolean"]}>
                Specifies if the background should be blurred
            </DescriptionCol>
            <DefaultCol>{["true"]}</DefaultCol>
        </tr>
        <tr>
            <NameCol>disableTransition</NameCol>
            <DescriptionCol propTypes={["boolean"]}>
                Toggle the animation of the appearance and dismissal
            </DescriptionCol>
            <DefaultCol>{["false"]}</DefaultCol>
        </tr>
        <tr>
            <NameCol>zIndex</NameCol>
            <DescriptionCol propTypes={["number"]}>
                <>
                    Allows a custom <code>z-index</code> to be specified (useful
                    for overlay stacking)
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>enableOverlayClick</NameCol>
            <DescriptionCol propTypes={["boolean"]}>
                <>
                    Toggles whether child contents can be dismissed by clicking
                    on the overlay
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
    </Table>
);
