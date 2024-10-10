import type { Meta, StoryObj } from "@storybook/react";
import { V2_Text } from "src/v2_text";
import { ButtonContainer } from "./doc-elements";

const meta: Meta = {
    title: "V2/Text/Advanced Usage",
};

export default meta;

export const Combined: StoryObj = {
    render: () => {
        return (
            <V2_Text.Body>
                The quick brown fox&nbsp;
                <V2_Text.Hyperlink.Default href="https://www.google.com">
                    jumps over
                </V2_Text.Hyperlink.Default>
                &nbsp;the lazy dog
            </V2_Text.Body>
        );
    },
    tags: ["pattern"],
};

export const Inline: StoryObj = {
    render: () => {
        return (
            <V2_Text.Body>
                The quick&nbsp;
                <V2_Text.Body weight="light" inline={true}>
                    brown fox
                </V2_Text.Body>
                &nbsp;
                <V2_Text.Body weight="semibold" inline={true}>
                    jumps over
                </V2_Text.Body>
                &nbsp;the lazy dog
            </V2_Text.Body>
        );
    },
    tags: ["pattern"],
};

export const Paragraph: StoryObj = {
    render: () => {
        return (
            <>
                <V2_Text.Body paragraph={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi euismod quam eget ex tincidunt dapibus. Donec vitae
                    leo vehicula, fermentum urna vitae, gravida ex.
                </V2_Text.Body>
                <V2_Text.Body paragraph={true}>
                    Aenean imperdiet faucibus velit, eu maximus libero facilisis
                    ut. Donec nulla nisi, fermentum eget lorem at, feugiat
                    ultricies ex. Aliquam volutpat nibh non suscipit rhoncus.
                </V2_Text.Body>
            </>
        );
    },
    tags: ["pattern"],
};

export const RenderAs: StoryObj = {
    render: () => {
        return (
            <>
                <V2_Text.Body>This is the original</V2_Text.Body>
                <br />
                <V2_Text.Body as="span">
                    This becomes a span under the hood
                </V2_Text.Body>
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
