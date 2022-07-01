import { Description, Subtitle, Title } from "@storybook/addon-docs";
import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { BaseColorSet } from "src/components/styles/spec";
import { ColorPalette, SingleColor } from "./doc-elements/color-palette";
import { Header } from "./doc-elements/labels";

export default {
    title: "Collections/Colors/LifeSG Color Set",
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>LifeSG Color Set</Title>
                    <Subtitle>User interface colors</Subtitle>
                    <Description>
                        This is the visual identity of the LifeSG app. The color
                        references are shown below:
                    </Description>
                    <Header>Brand</Header>
                    <ColorPalette set={BaseColorSet.Brand} />

                    <Header>Primary</Header>
                    <Description>
                        These are usually used for call-to-action (CTA) elements
                    </Description>
                    <SingleColor color={BaseColorSet.Primary} />

                    <Header>Primary Dark</Header>
                    <Description>
                        These are usually used to highlight call-to-action (CTA)
                        elements
                    </Description>
                    <SingleColor color={BaseColorSet.PrimaryDark} />

                    <Header>Secondary</Header>
                    <Description>
                        These are usually used for a darker shade of Primary
                    </Description>
                    <SingleColor color={BaseColorSet.Secondary} />

                    <Header>Neutrals</Header>
                    <Description>
                        These are usually used for backgrounds and borders
                    </Description>
                    <ColorPalette set={BaseColorSet.Neutral} />

                    <Header>Accent</Header>
                    <Subtitle>Light</Subtitle>
                    <ColorPalette set={BaseColorSet.Accent.Light} />
                    <Subtitle>Dark</Subtitle>
                    <ColorPalette set={BaseColorSet.Accent.Dark} />

                    <Header>Validation</Header>
                    <Subtitle>Green</Subtitle>
                    <ColorPalette set={BaseColorSet.Validation.Green} />
                    <Subtitle>Orange</Subtitle>
                    <ColorPalette set={BaseColorSet.Validation.Orange} />
                    <Subtitle>Red</Subtitle>
                    <ColorPalette set={BaseColorSet.Validation.Red} />
                </>
            ),
        },
        docsOnly: true,
    },
} as Meta;

// Note: This is needed for the doc page to render
export const StoryPlaceholder = () => null;
