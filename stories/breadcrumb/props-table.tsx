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
            <NameCol mandatory>links</NameCol>
            <DescriptionCol
                propTypes={
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement"
                        target="_blank"
                        rel="noreferrer"
                    >
                        HTMLAnchorElement
                    </a>
                }
            >
                The links for the breadcrumbs
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>fadeColor</NameCol>
            <DescriptionCol propTypes={["string[]"]}>
                When the breadcrumbs are too long, there will be a fade effect
                at the ends of the breadcrumb. This will control the color of
                the fade.
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>fadePosition</NameCol>
            <DescriptionCol propTypes={[`"left"`, `"right"`]}>
                When the breadcrumbs are too long, there will be a fade effect
                at the ends of the breadcrumb. This will control the color of
                the fade.
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>itemStyle</NameCol>
            <DescriptionCol propTypes={["CSS-JS string"]}>
                Custom style that can be passed to the Breadcrumb items
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>id</NameCol>
            <DescriptionCol propTypes={["string"]}>
                A unique identifier for each Breadcrumb item
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
