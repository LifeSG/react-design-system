import { ICircleFillIcon } from "@lifesg/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { PopoverInline } from "src/popover-v2";
import { Typography } from "src/typography";
import { StackDecorator } from "stories/storybook-common";

type Component = typeof PopoverInline;

const meta: Meta<Component> = {
    title: "Overlays/PopoverInline",
    component: PopoverInline,
};

export default meta;

export const InlineText: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Typography.HeaderSM weight="semibold">
                    The{" "}
                    <PopoverInline
                        content="fox"
                        popoverContent="It is quick and brown"
                    />{" "}
                    jumps over the dog
                </Typography.HeaderSM>
                <Typography.BodyBL>
                    The{" "}
                    <PopoverInline
                        content="fox"
                        popoverContent="It is quick and brown"
                    />{" "}
                    jumps over the dog
                </Typography.BodyBL>
            </>
        );
    },
    decorators: [StackDecorator()],
};

export const InlineIcon: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Typography.HeaderSM weight="semibold">
                    Get a free slice of pizza today{" "}
                    <PopoverInline
                        popoverContent="Terms and conditions apply"
                        icon={<ICircleFillIcon />}
                    />
                </Typography.HeaderSM>
                <Typography.BodyBL>
                    Get a free slice of pizza today{" "}
                    <PopoverInline
                        popoverContent="Terms and conditions apply"
                        icon={<ICircleFillIcon />}
                    />
                </Typography.BodyBL>
            </>
        );
    },
    decorators: [StackDecorator()],
};

export const InlineTextAndIcon: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Typography.BodyBL>
                Only available on{" "}
                <PopoverInline
                    content="Fridays"
                    popoverContent="Operating hours: 9am to 5pm"
                    icon={<ICircleFillIcon />}
                ></PopoverInline>
            </Typography.BodyBL>
        );
    },
};

export const UnderlineStyle: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Typography.BodyBL>
                    This is the{" "}
                    <PopoverInline
                        content="underlined style"
                        popoverContent="I am a tooltip!"
                        icon={<ICircleFillIcon />}
                        underlineStyle="underline"
                        underlineHoverStyle="underline"
                    />
                </Typography.BodyBL>
                <Typography.BodyBL>
                    This is the{" "}
                    <PopoverInline
                        content="dashed style"
                        popoverContent="I am a tooltip!"
                        icon={<ICircleFillIcon />}
                        underlineStyle="underline-dashed"
                        underlineHoverStyle="underline-dashed"
                    />
                </Typography.BodyBL>
            </>
        );
    },
    decorators: [StackDecorator()],
};
