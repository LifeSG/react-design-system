import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "src/typography";
import { GridDecorator } from "stories/storybook-common";

const meta: Meta = {
    title: "Core/Typography",
};
export default meta;

export const InlineText: StoryObj = {
    render: (_args) => (
        <Typography.BodySM>
            The quick brown fox{" "}
            <Typography.BodyBL inline>jumps</Typography.BodyBL> over the lazy
            dog
        </Typography.BodySM>
    ),
};

export const InlineLink: StoryObj = {
    render: (_args) => (
        <Typography.BodyBL>
            The quick brown fox{" "}
            <Typography.LinkBL href="https://www.google.com">
                jumps over
            </Typography.LinkBL>{" "}
            the lazy dog
        </Typography.BodyBL>
    ),
};

export const MixedFontWeights: StoryObj = {
    render: (_args) => (
        <Typography.BodyBL>
            The{" "}
            <Typography.BodyBL weight="light" inline>
                quick brown fox
            </Typography.BodyBL>{" "}
            <Typography.BodyBL weight="semibold" inline>
                jumps over
            </Typography.BodyBL>{" "}
            the{" "}
            <Typography.BodyBL weight="bold" inline>
                lazy dog
            </Typography.BodyBL>
        </Typography.BodyBL>
    ),
};

export const Paragraphs: StoryObj = {
    render: (_args) => (
        <>
            <Typography.BodyBL paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                euismod quam eget ex tincidunt dapibus. Donec vitae leo
                vehicula, fermentum urna vitae, gravida ex.
            </Typography.BodyBL>
            <Typography.BodyBL paragraph>
                Aenean imperdiet faucibus velit, eu maximus libero facilisis ut.
                Donec nulla nisi, fermentum eget lorem at, feugiat ultricies ex.
                Aliquam volutpat nibh non suscipit rhoncus.
            </Typography.BodyBL>
        </>
    ),
};

export const MaxLines: StoryObj = {
    render: (_args) => (
        <>
            <Typography.BodyBL maxLines={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                euismod quam eget ex tincidunt dapibus. Donec vitae leo
                vehicula, fermentum urna vitae, gravida ex.
            </Typography.BodyBL>
            <Typography.BodyBL maxLines={2}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis laudantium iste quibusdam hic sed ad, earum quos ab,
                corporis nam maxime fugiat reiciendis repellendus aspernatur
                consequatur libero at. Sint, autem.
            </Typography.BodyBL>
        </>
    ),
    decorators: [
        GridDecorator({
            columns: 1,
            rowHeaders: ["Max 1 line", "Max 2 lines"],
        }),
    ],
};

export const ExternalLink: StoryObj = {
    render: (_args) => (
        <Typography.BodyBL>
            The quick brown fox{" "}
            <Typography.LinkBL href="https://www.google.com" external>
                jumps over
            </Typography.LinkBL>{" "}
            the lazy dog
        </Typography.BodyBL>
    ),
};

export const TypographySet: StoryObj = {
    decorators: [
        (Story) => (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Story />
            </div>
        ),
    ],
    tags: ["pattern"],
    render: (_args) => (
        <>
            <Typography.HeaderXXL>HeaderXXL: Lorem ipsum</Typography.HeaderXXL>
            <Typography.HeaderXL>HeaderXL: Lorem ipsum</Typography.HeaderXL>
            <Typography.HeaderLG>HeaderLG: Lorem ipsum</Typography.HeaderLG>
            <Typography.HeaderMD>HeaderMD: Lorem ipsum</Typography.HeaderMD>
            <Typography.HeaderSM>HeaderSM: Lorem ipsum</Typography.HeaderSM>
            <Typography.HeaderXS>HeaderXS: Lorem ipsum</Typography.HeaderXS>
            <Typography.BodyBL>BodyBL: Lorem ipsum</Typography.BodyBL>
            <Typography.BodyMD>BodyMD: Lorem ipsum</Typography.BodyMD>
            <Typography.BodySM>BodySM: Lorem ipsum</Typography.BodySM>
            <Typography.LinkBL>LinkBL: Lorem ipsum</Typography.LinkBL>
            <Typography.LinkMD>LinkMD: Lorem ipsum</Typography.LinkMD>
            <Typography.LinkSM>LinkSM: Lorem ipsum</Typography.LinkSM>
        </>
    ),
};
