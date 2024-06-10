import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "src/text";
import { ButtonContainer } from "./doc-elements";

const meta: Meta = {
    title: "General/Text/Advanced Usage",
};

export default meta;

export const Combined: StoryObj = {
    render: () => {
        return (
            <Text.Body>
                The quick brown fox&nbsp;
                <Text.Hyperlink.Default href="https://www.google.com">
                    jumps over
                </Text.Hyperlink.Default>
                &nbsp;the lazy dog
            </Text.Body>
        );
    },
    tags: ["pattern"],
};

export const Inline: StoryObj = {
    render: () => {
        return (
            <Text.Body>
                The quick&nbsp;
                <Text.Body weight="light" inline={true}>
                    brown fox
                </Text.Body>
                &nbsp;
                <Text.Body weight="semibold" inline={true}>
                    jumps over
                </Text.Body>
                &nbsp;the lazy dog
            </Text.Body>
        );
    },
    tags: ["pattern"],
};

export const Paragraph: StoryObj = {
    render: () => {
        return (
            <>
                <Text.Body paragraph={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi euismod quam eget ex tincidunt dapibus. Donec vitae
                    leo vehicula, fermentum urna vitae, gravida ex.
                </Text.Body>
                <Text.Body paragraph={true}>
                    Aenean imperdiet faucibus velit, eu maximus libero facilisis
                    ut. Donec nulla nisi, fermentum eget lorem at, feugiat
                    ultricies ex. Aliquam volutpat nibh non suscipit rhoncus.
                </Text.Body>
            </>
        );
    },
    tags: ["pattern"],
};

export const RenderAs: StoryObj = {
    render: () => {
        return (
            <>
                <Text.Body>This is the original</Text.Body>
                <br />
                <Text.Body as="span">
                    This becomes a span under the hood
                </Text.Body>
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
