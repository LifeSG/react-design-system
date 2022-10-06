import React from "react";
import {
    DefaultCol,
    DescriptionCol,
    NameCol,
    Section,
    Table,
} from "../storybook-common/api-table";

export const PropsTable = () => (
    <Table>
        <tr>
            <NameCol mandatory>title</NameCol>
            <DescriptionCol propTypes={["string"]}>
                The label text for the header
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol mandatory>children</NameCol>
            <DescriptionCol propTypes={["JSX.Element", "JSX.Element[]"]}>
                The content of the component
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>collapsible</NameCol>
            <DescriptionCol propTypes={["boolean"]}>
                Specifies if the contents can be collapsed or expanded
            </DescriptionCol>
            <DefaultCol>{["true"]}</DefaultCol>
        </tr>
        <tr>
            <NameCol>expanded</NameCol>
            <DescriptionCol propTypes={["boolean"]}>
                <>
                    Specifies if contents are expanded. Only valid if
                    <code>collapsible</code> is set to <code>true</code>
                </>
            </DescriptionCol>
            <DefaultCol>{["false"]}</DefaultCol>
        </tr>
        <tr>
            <NameCol>callToActionComponent</NameCol>
            <DescriptionCol propTypes={["JSX.Element"]}>
                A custom call to action component for the header
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>displayState</NameCol>
            <DescriptionCol propTypes={[`"default"`, `"error"`, `"warning"`]}>
                Specifies the display state which renders an icon
            </DescriptionCol>
            <DefaultCol>{[`"default"`]}</DefaultCol>
        </tr>
        <tr>
            <NameCol>className</NameCol>
            <DescriptionCol propTypes={["string"]}>
                The style class to override the default styling
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>data-testid</NameCol>
            <DescriptionCol propTypes={["string"]}>
                The id used for testing purposes
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>subComponentTestIds</NameCol>
            <DescriptionCol propTypes={["BoxContainerSubComponentTestIds"]}>
                The id used for testing the label and handle button
            </DescriptionCol>
            <DefaultCol />
        </tr>

        <Section>BoxContainerSubComponentTestIds</Section>

        <tr>
            <NameCol>title</NameCol>
            <DescriptionCol propTypes={["string"]}>
                The id used for the header title
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>displayStateIcon</NameCol>
            <DescriptionCol propTypes={["string"]}>
                The id used for the display state icon in the header
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>handle</NameCol>
            <DescriptionCol propTypes={["string"]}>
                The id used for the expand and collapse handle
            </DescriptionCol>
            <DefaultCol />
        </tr>
    </Table>
);

export const AccordionItemPropsTable = () => (
    <Table>
        <tr>
            <NameCol mandatory>children</NameCol>
            <DescriptionCol propTypes={["JSX.Element", "JSX.Element[]"]}>
                The content of the Accordion.Item
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>actionLink</NameCol>
            <DescriptionCol
                propTypes={
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <code>HTMLAnchorAttributes</code>
                    </a>
                }
            >
                The attributes of an action link that performs an action on
                click
            </DescriptionCol>
            <DefaultCol />
        </tr>
    </Table>
);
