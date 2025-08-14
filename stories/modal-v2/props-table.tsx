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
            <NameCol mandatory>onClose</NameCol>
            <DescriptionCol propTypes={["() => void"]}>
                <>
                    Callback to close the modal. Called when using the `esc` key
                    while the modal is open.
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

export const ModalCardTable = () => (
    <Table>
        <tr>
            <NameCol>customStyle</NameCol>
            <DescriptionCol propTypes={["React.CSSProperties"]}>
                Custom styles for the modal dialog box
            </DescriptionCol>
            <DefaultCol />
        </tr>
    </Table>
);

export const ModalContentTable = () => (
    <Table>
        <tr>
            <NameCol>customStyle</NameCol>
            <DescriptionCol propTypes={["React.CSSProperties"]}>
                Custom styles for the modal content container
            </DescriptionCol>
            <DefaultCol />
        </tr>
    </Table>
);

export const ModalCloseButtonTable = () => (
    <Table>
        <tr>
            <NameCol>customStyle</NameCol>
            <DescriptionCol propTypes={["React.CSSProperties"]}>
                Custom styles for the modal close Button
            </DescriptionCol>
            <DefaultCol />
        </tr>
    </Table>
);

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "ModalV2",
        component: <ModalTable />,
    },
    {
        title: "ModalV2.Card",
        component: <ModalCardTable />,
    },
    {
        title: "ModalV2.Content",
        component: <ModalContentTable />,
    },
    {
        title: "ModalV2.CloseButton",
        component: <ModalCloseButtonTable />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
