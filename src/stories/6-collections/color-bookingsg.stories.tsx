import { Description, Subtitle, Title } from "@storybook/addon-docs";
import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { BookingSGColorSet } from "src/components/styles/spec";
import { ColorPalette, SingleColor } from "./doc-elements/color-palette";
import { Header } from "./doc-elements/labels";

export default {
    title: "Collections/Colors/BookingSG Color Set",
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>BookingSG Color Set</Title>
                    <Subtitle>User interface colors</Subtitle>
                    <Description>
                        This is the visual identity of the LifeSG app. The color
                        references are shown below:
                    </Description>
                    <Header>Brand</Header>
                    <ColorPalette set={BookingSGColorSet.Brand} />

                    <Header>Primary</Header>
                    <Description>
                        These are usually used for call-to-action (CTA) elements
                    </Description>
                    <SingleColor color={BookingSGColorSet.Primary} />

                    <Header>Primary Dark</Header>
                    <Description>
                        These are usually used to highlight call-to-action (CTA)
                        elements
                    </Description>
                    <SingleColor color={BookingSGColorSet.PrimaryDark} />

                    <Header>Secondary</Header>
                    <Description>
                        These are usually used for a darker shade of Primary
                    </Description>
                    <SingleColor color={BookingSGColorSet.Secondary} />

                    <Header>Neutrals</Header>
                    <Description>
                        These are usually used for backgrounds and borders
                    </Description>
                    <ColorPalette set={BookingSGColorSet.Neutral} />

                    <Header>Accent</Header>
                    <Subtitle>Light</Subtitle>
                    <ColorPalette set={BookingSGColorSet.Accent.Light} />
                    <Subtitle>Dark</Subtitle>
                    <ColorPalette set={BookingSGColorSet.Accent.Dark} />

                    <Header>Validation</Header>
                    <Subtitle>Green</Subtitle>
                    <ColorPalette set={BookingSGColorSet.Validation.Green} />
                    <Subtitle>Orange</Subtitle>
                    <ColorPalette set={BookingSGColorSet.Validation.Orange} />
                    <Subtitle>Red</Subtitle>
                    <ColorPalette set={BookingSGColorSet.Validation.Red} />
                </>
            ),
        },
        docsOnly: true,
    },
} as Meta;

// Note: This is needed for the doc page to render
export const StoryPlaceholder = () => null;
