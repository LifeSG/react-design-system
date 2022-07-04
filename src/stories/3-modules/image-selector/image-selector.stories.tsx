import React from "react";
import {
    ArgsTable,
    Description,
    Heading,
    PRIMARY_STORY,
    Stories,
    Title,
} from "@storybook/addon-docs";
import { Meta, Story } from "@storybook/react/types-6-0";
import styled from "styled-components";
import {
    ImageSelector as ImageSelectorComponent,
    MediaQuery,
} from "src/components";
import { ImageSelectorProps } from "src/components/types";

import banner from "./demo.jpg";

export default {
    title: "modules/ImageSelector",
    component: ImageSelectorComponent,
    argTypes: {
        type: {
            description: "The type of the selector.",
        },
        imgSrc: {
            description: "image source of the selector.",
            table: {
                type: {
                    summary: "string",
                },
            },
            control: { type: null },
        },
        mobileImgSrc: {
            description:
                "image source of the selector in mobile viewports (Uses `imgSrc` if not specified)",
            table: {
                type: {
                    summary: "string",
                },
            },
            control: { type: null },
        },
        title: {
            description:
                "Title of the selector (max 2 lines). It will automatically truncate after the maximum lines are reached.",
            table: {
                type: {
                    summary: "string",
                },
            },
        },
        description: {
            description:
                "Description text of the selector (max 2 lines). It will automatically truncate after the maximum lines are reached.",
            table: {
                type: {
                    summary: "string",
                },
            },
        },
        className: {
            description: "Style override for the component",
            table: {
                type: {
                    summary: "string",
                },
            },
        },
        onClick: {
            description:
                "Handler for custom routing behaviour. This will override the default routing behaviour even if href is specified.",
            table: {
                type: {
                    summary: "function",
                },
            },
        },
        styleType: {
            description:
                "Dictates differing styles for ImageSelector, current accepts `faded` or `block`",
        },
        hoverAnimation: {
            description:
                "Dictates whether an animation will be shown upon mouse hover (Only on desktop viewports and `default` type)",
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>ImageSelector</Title>
                    <Description>
                        A clickable image or video thumbnail component.
                    </Description>
                    <Stories includePrimary={true} title="" />
                    <Heading>Props</Heading>
                    <Description>
                        The component also inherits the
                        [HTMLAnchorElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement)
                        attributes.
                    </Description>
                    <ArgsTable story={PRIMARY_STORY} />
                </>
            ),
        },
    },
} as Meta;

const Template: Story<ImageSelectorProps> = (args) => (
    <Wrapper>
        <ImageSelectorComponent {...args} />
    </Wrapper>
);

const Wrapper = styled.div`
    position: relative;
    height: 22rem;
    width: 39rem;

    ${MediaQuery.MaxWidth.mobileL} {
        width: 25rem;
    }
`;

export const Default = Template.bind({});
Default.args = {
    imgSrc: banner,
    title: "Default ImageSelector",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};
Default.storyName = "ImageSelector";
