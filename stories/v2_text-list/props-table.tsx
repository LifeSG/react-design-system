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
            <NameCol mandatory>children</NameCol>
            <DescriptionCol propTypes={["JSX.Element", "JSX.Element[]"]}>
                The content of the list
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>bottomMargin</NameCol>
            <DescriptionCol propTypes={["number"]}>
                <>
                    Specifies if the list is to have a margin below (in{" "}
                    <code>rem</code> with base pixel of <code>16</code>)
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>size</NameCol>
            <DescriptionCol propTypes={[`TextSizeType`]}>
                <>Text size of the list</>
            </DescriptionCol>
            <DefaultCol>{["Body"]}</DefaultCol>
        </tr>

        <Section>Unordered List props</Section>

        <tr>
            <NameCol>bulletType</NameCol>
            <DescriptionCol
                propTypes={[`"disc"`, `"circle"`, `"square"`, `"none"`]}
            >
                The bullet type for the unordered list
            </DescriptionCol>
            <DefaultCol>{[`"disc"`]}</DefaultCol>
        </tr>

        <Section>Ordered List props</Section>

        <tr>
            <NameCol>counterSeparator</NameCol>
            <DescriptionCol propTypes={[`string`]}>
                The separator between the button and the text. It can be any
                string value specified
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>counterType</NameCol>
            <DescriptionCol
                propTypes={[`"lower-alpha"`, `"decimal"`, `"lower-roman"`]}
            >
                The numbering system for the list
            </DescriptionCol>
            <DefaultCol>{[`"decimal"`]}</DefaultCol>
        </tr>
        <tr>
            <NameCol>start</NameCol>
            <DescriptionCol propTypes={[`number`]}>
                The start value of the list counter
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>reversed</NameCol>
            <DescriptionCol propTypes={[`boolean`]}>
                Specifies if list counting should be reversed (e.g. 5, 4, 3...)
            </DescriptionCol>
            <DefaultCol>{[`false`]}</DefaultCol>
        </tr>
    </Table>
);
