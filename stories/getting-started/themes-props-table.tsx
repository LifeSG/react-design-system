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
            <NameCol mandatory>colorScheme</NameCol>
            <DescriptionCol propTypes={[`"base"`, `"bookingsg"`]}>
                Specifies the color scheme of the theme
            </DescriptionCol>
            <DefaultCol>
                <span>-</span>
            </DefaultCol>
        </tr>
        <tr>
            <NameCol mandatory>textStyleScheme</NameCol>
            <DescriptionCol propTypes={[`"base"`]}>
                The text style of the theme that will affect headings, body and
                hyperlinks
            </DescriptionCol>
            <DefaultCol>
                <span>-</span>
            </DefaultCol>
        </tr>
        <tr>
            <NameCol>options</NameCol>
            <DescriptionCol propTypes={[`ThemeSpecOptions`]}>
                The options to customise the color scheme or the text style
                scheme
            </DescriptionCol>
            <DefaultCol>
                <span>-</span>
            </DefaultCol>
        </tr>

        <Section>ThemeSpecOptions</Section>
        <tr>
            <NameCol>options.color</NameCol>
            <DescriptionCol propTypes={[`ColorSetOptions`]}>
                The modified color set values
            </DescriptionCol>
            <DefaultCol>
                <span>-</span>
            </DefaultCol>
        </tr>
        <tr>
            <NameCol>options.textStyle</NameCol>
            <DescriptionCol propTypes={[`TextStyleSetOptionsType`]}>
                The modified text style set values
            </DescriptionCol>
            <DefaultCol>
                <span>-</span>
            </DefaultCol>
        </tr>

        <Section>ColorSetOptions</Section>
        <tr>
            <NameCol>ColorSetOptions</NameCol>
            <DescriptionCol>
                You may refer to the ColorSet specifications.
            </DescriptionCol>
            <DefaultCol>
                <span>-</span>
            </DefaultCol>
        </tr>

        <Section>TextStyleSetOptionsType</Section>
        <tr>
            <NameCol>key in TextSizeType</NameCol>
            <DescriptionCol propTypes={[`TextStyleSpec`]}>
                The attributes to modify the text style
            </DescriptionCol>
            <DefaultCol>
                <span>-</span>
            </DefaultCol>
        </tr>

        <Section>TextStyleSpec</Section>
        <tr>
            <NameCol>key.fontFamily</NameCol>
            <DescriptionCol propTypes={[`string`]} />
            <DefaultCol>
                <span>-</span>
            </DefaultCol>
        </tr>
        <tr>
            <NameCol>key.fontSize</NameCol>
            <DescriptionCol propTypes={[`number`]} />
            <DefaultCol>
                <span>-</span>
            </DefaultCol>
        </tr>
        <tr>
            <NameCol>key.fontWeight</NameCol>
            <DescriptionCol propTypes={[`number`]} />
            <DefaultCol>
                <span>-</span>
            </DefaultCol>
        </tr>
        <tr>
            <NameCol>key.lineHeight</NameCol>
            <DescriptionCol propTypes={[`number`]} />
            <DefaultCol>
                <span>-</span>
            </DefaultCol>
        </tr>
        <tr>
            <NameCol>key.letterSpacing</NameCol>
            <DescriptionCol propTypes={[`number`]} />
            <DefaultCol>
                <span>-</span>
            </DefaultCol>
        </tr>
    </Table>
);
