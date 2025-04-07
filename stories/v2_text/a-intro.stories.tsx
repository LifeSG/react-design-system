import type { Meta, StoryObj } from "@storybook/react";
import { V2_Text } from "src/v2_text";
import { DisplayContainer, LinkDiv, TextDisplay } from "./doc-elements";

const meta: Meta = {
    title: "V2/Text/Introduction",
};

export default meta;

const EXAMPLE_TEXT = "A quick brown fox jumps over the lazy dog";

export const Styles: StoryObj = {
    render: () => {
        return (
            <DisplayContainer>
                <TextDisplay variant="D1">
                    <V2_Text.D1>{EXAMPLE_TEXT}</V2_Text.D1>
                </TextDisplay>
                <TextDisplay variant="D2">
                    <V2_Text.D2>{EXAMPLE_TEXT}</V2_Text.D2>
                </TextDisplay>
                <TextDisplay variant="DBody">
                    <V2_Text.DBody>{EXAMPLE_TEXT}</V2_Text.DBody>
                </TextDisplay>
                <TextDisplay variant="H1">
                    <V2_Text.H1>{EXAMPLE_TEXT}</V2_Text.H1>
                </TextDisplay>
                <TextDisplay variant="H2">
                    <V2_Text.H2>{EXAMPLE_TEXT}</V2_Text.H2>
                </TextDisplay>
                <TextDisplay variant="H3">
                    <V2_Text.H3>{EXAMPLE_TEXT}</V2_Text.H3>
                </TextDisplay>
                <TextDisplay variant="H4">
                    <V2_Text.H4>{EXAMPLE_TEXT}</V2_Text.H4>
                </TextDisplay>
                <TextDisplay variant="H5">
                    <V2_Text.H5>{EXAMPLE_TEXT}</V2_Text.H5>
                </TextDisplay>
                <TextDisplay variant="H6">
                    <V2_Text.H6>{EXAMPLE_TEXT}</V2_Text.H6>
                </TextDisplay>
                <TextDisplay variant="Body">
                    <V2_Text.Body>{EXAMPLE_TEXT}</V2_Text.Body>
                </TextDisplay>
                <TextDisplay variant="BodySmall">
                    <V2_Text.BodySmall>{EXAMPLE_TEXT}</V2_Text.BodySmall>
                </TextDisplay>
                <TextDisplay variant="XSmall">
                    <V2_Text.BodySmall>{EXAMPLE_TEXT}</V2_Text.BodySmall>
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
                <V2_Text.Hyperlink.Default
                    href="https://www.life.gov.sg"
                    target="_blank"
                >
                    Default link
                </V2_Text.Hyperlink.Default>
                <V2_Text.Hyperlink.Small
                    href="https://www.life.gov.sg"
                    target="_blank"
                >
                    Small link
                </V2_Text.Hyperlink.Small>
            </LinkDiv>
        );
    },
    tags: ["pattern"],
};

export const ExternalHyperlinks: StoryObj = {
    render: () => {
        return (
            <V2_Text.Hyperlink.Default
                href="https://www.google.com"
                target="_blank"
                external
            >
                This is an external link with the indicator
            </V2_Text.Hyperlink.Default>
        );
    },
    tags: ["pattern"],
};
