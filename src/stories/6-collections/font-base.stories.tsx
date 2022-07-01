import { Description, Subtitle, Title } from "@storybook/addon-docs";
import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { TextAttributes } from "src/components/styles/spec";
import { FontFamily, Header, TextSizes } from "./doc-elements";

export default {
    title: "Collections/Fonts/LifeSG Font Set",
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>LifeSG Font Set</Title>
                    <Subtitle>User interface text</Subtitle>
                    <Description>
                        This describes the typography used in LifeSG
                        applications.
                    </Description>
                    <Header>Font Family</Header>
                    <FontFamily />
                    <br />
                    <Header>Font Sizes</Header>
                    <TextSizes sizeAttributes={TextAttributes} />
                </>
            ),
        },
        docsOnly: true,
    },
} as Meta;

// Note: This is needed for the doc page to render
export const StoryPlaceholder = () => null;
