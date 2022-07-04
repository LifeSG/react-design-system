import React from "react";
import styled from "styled-components";
import {
    ArgsTable,
    Description,
    Heading,
    PRIMARY_STORY,
    Stories,
    Subheading,
    Title,
} from "@storybook/addon-docs";
import { Meta, Story } from "@storybook/react/types-6-0";
import { VideoBanner } from "src/components";
import { VideoBannerProps } from "src/components/types";

export default {
    title: "modules/VideoBanner",
    component: VideoBanner.Wrapper,
    argTypes: {
        type: {
            description: "The type of the VideoBanner",
            table: {
                type: {
                    summary: "default | custom",
                },
            },
            control: {
                type: null,
            },
        },
        videoSrc: {
            description: "The url of the video",
            table: {
                type: {
                    summary: "string",
                },
            },
        },
        backgroundOpacity: {
            description:
                "The opacity of the dark layer on the video background `min 0, max 1` (Only applies in desktop view)",
            table: {
                type: {
                    summary: "number",
                },
            },
        },
        mobileBackgroundImageSrc: {
            description: "The background image (Only applies in mobile view)",
            table: {
                type: {
                    summary: "string",
                },
            },
            control: {
                type: null,
            },
        },
        mobilePlayerControls: {
            description:
                "A set of callbacks and props to control the video player in mobile view",
            table: {
                type: {
                    summary: "VideoBannerMobilePlayerControlProps",
                },
            },
            control: {
                type: null,
            },
        },
        ["mobilePlayerControls.isPlaying"]: {
            description:
                "Specifies if video is playing (Only applies to video player in mobile view)",
            table: {
                type: {
                    summary: "boolean",
                },
            },
        },
        ["mobilePlayerControls.onPlay"]: {
            description:
                "Called when video starts or resumes playing after pausing or buffering (Only applies to video player in mobile view)",
            table: {
                type: {
                    summary: "() => void",
                },
            },
        },
        ["mobilePlayerControls.onPause"]: {
            description:
                "Called when video is paused (Only applies to video player in mobile view)",
            table: {
                type: {
                    summary: "() => void",
                },
            },
        },
        content: {
            description:
                "Content of the VideoBanner. The props of the content differs depending on the type specified",
            table: {
                type: {
                    summary: "DefaultVideoBannerProps | CustomVideoBannerProps",
                },
            },
            control: {
                type: null,
            },
        },
        ["content.title [DefaultVideoBannerProps]"]: {
            description: "Title of the VideoBanner",
            table: {
                type: {
                    summary: "string",
                },
            },
            control: {
                type: null,
            },
        },
        ["content.description [DefaultVideoBannerProps]"]: {
            description: "Description text of the VideoBanner",
            table: {
                type: {
                    summary: "string",
                },
            },
            control: {
                type: null,
            },
        },
        ["content.action [DefaultVideoBannerProps]"]: {
            description:
                "The attributes of the action button (inherits the [HTMLAnchorElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement) attributes ",
            table: {
                type: {
                    summary: "VideoBannerActionProps",
                },
            },
            control: {
                type: null,
            },
        },
        ["content.children [CustomVideoBannerProps]"]: {
            description: "The customized content in the VideoBanner",
            table: {
                type: {
                    summary: "React.ReactNode | string",
                },
            },
            control: {
                type: null,
            },
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>VideoBanner</Title>
                    <Description>
                        A banner that plays a video in the background, giving a
                        more interactive appearance.
                    </Description>
                    <Heading>Additional Info</Heading>
                    <Description>
                        This component uses [React
                        Player](https://www.npmjs.com/package/react-player)
                        under the hood to render the video.
                    </Description>
                    <Subheading>Display</Subheading>
                    <Description>
                        **NOTE**: The `VideoBanner` appears as a background in
                        desktop view, but a video player in mobile view.
                    </Description>
                    <Heading>Props</Heading>
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories includePrimary={true} title="Examples" />
                </>
            ),
        },
    },
} as Meta;

const VideoBannerTemplate = (args: VideoBannerProps) => (
    <VideoBanner.Wrapper {...args} />
);

export const Default: Story<VideoBannerProps> = VideoBannerTemplate.bind({});
Default.args = {
    videoSrc: "https://youtu.be/2Gg6Seob5Mg",
    mobileBackgroundImageSrc: require("./assets/sample-video-banner-image.jpg"),
    content: {
        title: "This is the title describing the banner",
        description: `
				At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
				praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
				excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
				officia deserunt mollitia animi.
			`,
        action: {
            children: "Click to watch",
        },
    },
};
Default.parameters = {
    layout: "fullscreen",
};

// =============================================================================
// CUSTOM TYPE COMPONENTS
// =============================================================================
const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Custom: Story<VideoBannerProps> = VideoBannerTemplate.bind({});
Custom.args = {
    type: "custom",
    videoSrc: "https://youtu.be/2Gg6Seob5Mg",
    mobileBackgroundImageSrc: require("./assets/sample-video-banner-image.jpg"),
    content: {
        children: (
            <Wrapper>
                <VideoBanner.Title>This is a custom banner</VideoBanner.Title>
                <VideoBanner.ActionButton>
                    Click to play
                </VideoBanner.ActionButton>
            </Wrapper>
        ),
    },
};
Custom.parameters = {
    layout: "fullscreen",
    docs: {
        description: {
            story: "You can read more about the available elements you can use in the Elements story.",
        },
    },
};
