import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "src/text";
import { DisplayContainer, LinkDiv, TextDisplay } from "./doc-elements";

const meta: Meta = {
    title: "General/Text/Introduction",
};

export default meta;

const EXAMPLE_TEXT = "A quick brown fox jumps over the lazy dog";

export const Styles: StoryObj = {
    render: () => {
        return (
            <DisplayContainer>
                <TextDisplay variant="D1">
                    <Text.D1>{EXAMPLE_TEXT}</Text.D1>
                </TextDisplay>
                <TextDisplay variant="D2">
                    <Text.D2>{EXAMPLE_TEXT}</Text.D2>
                </TextDisplay>
                <TextDisplay variant="DBody">
                    <Text.DBody>{EXAMPLE_TEXT}</Text.DBody>
                </TextDisplay>
                <TextDisplay variant="H1">
                    <Text.H1>{EXAMPLE_TEXT}</Text.H1>
                </TextDisplay>
                <TextDisplay variant="H2">
                    <Text.H2>{EXAMPLE_TEXT}</Text.H2>
                </TextDisplay>
                <TextDisplay variant="H3">
                    <Text.H3>{EXAMPLE_TEXT}</Text.H3>
                </TextDisplay>
                <TextDisplay variant="H4">
                    <Text.H4>{EXAMPLE_TEXT}</Text.H4>
                </TextDisplay>
                <TextDisplay variant="H5">
                    <Text.H5>{EXAMPLE_TEXT}</Text.H5>
                </TextDisplay>
                <TextDisplay variant="H6">
                    <Text.H6>{EXAMPLE_TEXT}</Text.H6>
                </TextDisplay>
                <TextDisplay variant="Body">
                    <Text.Body>{EXAMPLE_TEXT}</Text.Body>
                </TextDisplay>
                <TextDisplay variant="BodySmall">
                    <Text.BodySmall>{EXAMPLE_TEXT}</Text.BodySmall>
                </TextDisplay>
                <TextDisplay variant="XSmall">
                    <Text.BodySmall>{EXAMPLE_TEXT}</Text.BodySmall>
                </TextDisplay>
            </DisplayContainer>
        );
    },
    tags: ["pattern"],
};

export const Hyperlinks: StoryObj = {
    render: () => {
        return (
            <LinkDiv>
                <Text.Hyperlink.Default
                    href="https://www.life.gov.sg"
                    target="_blank"
                >
                    Default link
                </Text.Hyperlink.Default>
                <Text.Hyperlink.Small
                    href="https://www.life.gov.sg"
                    target="_blank"
                >
                    Small link
                </Text.Hyperlink.Small>
            </LinkDiv>
        );
    },
    tags: ["pattern"],
};

export const ExternalHyperlinks: StoryObj = {
    render: () => {
        return (
            <Text.Hyperlink.Default
                href="https://www.google.com"
                target="_blank"
                external
            >
                This is an external link with the indicator
            </Text.Hyperlink.Default>
        );
    },
    tags: ["pattern"],
};
