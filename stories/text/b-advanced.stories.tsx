import type { Meta, StoryObj } from "@storybook/react";
import { v2_Text } from "src/v2_text";
import { ButtonContainer } from "./doc-elements";

const meta: Meta = {
    title: "General/Text/Advanced Usage",
};

export default meta;

export const Combined: StoryObj = {
    render: () => {
        return (
            <v2_Text.Body>
                The quick brown fox&nbsp;
                <v2_Text.Hyperlink.Default href="https://www.google.com">
                    jumps over
                </v2_Text.Hyperlink.Default>
                &nbsp;the lazy dog
            </v2_Text.Body>
        );
    },
    tags: ["pattern"],
};

export const Inline: StoryObj = {
    render: () => {
        return (
            <v2_Text.Body>
                The quick&nbsp;
                <v2_Text.Body weight="light" inline={true}>
                    brown fox
                </v2_Text.Body>
                &nbsp;
                <v2_Text.Body weight="semibold" inline={true}>
                    jumps over
                </v2_Text.Body>
                &nbsp;the lazy dog
            </v2_Text.Body>
        );
    },
    tags: ["pattern"],
};

export const Paragraph: StoryObj = {
    render: () => {
        return (
            <>
                <v2_Text.Body paragraph={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi euismod quam eget ex tincidunt dapibus. Donec vitae
                    leo vehicula, fermentum urna vitae, gravida ex.
                </v2_Text.Body>
                <v2_Text.Body paragraph={true}>
                    Aenean imperdiet faucibus velit, eu maximus libero facilisis
                    ut. Donec nulla nisi, fermentum eget lorem at, feugiat
                    ultricies ex. Aliquam volutpat nibh non suscipit rhoncus.
                </v2_Text.Body>
            </>
        );
    },
    tags: ["pattern"],
};

export const RenderAs: StoryObj = {
    render: () => {
        return (
            <>
                <v2_Text.Body>This is the original</v2_Text.Body>
                <br />
                <v2_Text.Body as="span">
                    This becomes a span under the hood
                </v2_Text.Body>
            </>
        );
    },
    tags: ["pattern"],
};

export const TextStyleHelper: StoryObj = {
    render: () => {
        return (
            <ButtonContainer>
                The quick brown fox jumps over the lazy dog
            </ButtonContainer>
        );
    },
    tags: ["pattern"],
};
