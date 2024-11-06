import { ICircleFillIcon } from "@lifesg/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { PopoverInline } from "src/popover-v2";
import { V2_Text } from "src/v2_text";

type Component = typeof PopoverInline;

const meta: Meta<Component> = {
    title: "Modules/PopoverV2/PopoverInline",
    component: PopoverInline,
};

export default meta;

export const InlineText: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <V2_Text.H3>
                    The{" "}
                    <PopoverInline
                        content="fox"
                        popoverContent="It is quick and brown"
                    />{" "}
                    jumps over the dog
                </V2_Text.H3>
                <br />
                <V2_Text.Body>
                    The{" "}
                    <PopoverInline
                        content="fox"
                        popoverContent="It is quick and brown"
                    />{" "}
                    jumps over the dog
                </V2_Text.Body>
            </>
        );
    },
};

export const InlineIcon: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <V2_Text.H3>
                    Get a free slice of pizza today{" "}
                    <PopoverInline
                        popoverContent="Terms and conditions apply"
                        icon={<ICircleFillIcon />}
                    />
                </V2_Text.H3>
                <br />
                <V2_Text.Body>
                    Get a free slice of pizza today{" "}
                    <PopoverInline
                        popoverContent="Terms and conditions apply"
                        icon={<ICircleFillIcon />}
                    />
                </V2_Text.Body>
            </>
        );
    },
};

export const InlineTextAndIcon: StoryObj<Component> = {
    render: () => {
        return (
            <V2_Text.Body>
                Only available on{" "}
                <PopoverInline
                    content="Fridays"
                    popoverContent="Operating hours: 9am to 5pm"
                    icon={<ICircleFillIcon />}
                ></PopoverInline>
            </V2_Text.Body>
        );
    },
};

export const UnderlineStyle: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <V2_Text.Body>
                    This is the{" "}
                    <PopoverInline
                        content="underlined style"
                        popoverContent="I am a tooltip!"
                        icon={<ICircleFillIcon />}
                        underlineStyle="underline"
                        underlineHoverStyle="underline"
                    />
                </V2_Text.Body>
                <br />
                <V2_Text.Body>
                    This is the{" "}
                    <PopoverInline
                        content="dashed style"
                        popoverContent="I am a tooltip!"
                        icon={<ICircleFillIcon />}
                        underlineStyle="underline-dashed"
                        underlineHoverStyle="underline-dashed"
                    />
                </V2_Text.Body>
            </>
        );
    },
};
