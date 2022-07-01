// Generated with util/create-component.js
import React from "react";
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
import { Icon as IconComponent } from "src/components";
import { IconProps, IconType } from "src/components/types";
import { IconSet, SearchField, StyledIcon } from "./doc-elements";

export default {
    title: "elements/Icon",
    component: IconComponent,
    argTypes: {
        type: {
            description: "The icon type (refer below)",
            table: {
                type: {
                    summary: "IconType",
                },
            },
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>Icon</Title>
                    <Description>
                        A symbol and a visual representative that can be used to
                        communicate an action or message.
                    </Description>
                    <Stories includePrimary={true} title="" />
                    <Heading>Props</Heading>
                    <Description>
                        This component also inherits the
                        [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
                        attributes.
                    </Description>
                    <ArgsTable story={PRIMARY_STORY} />
                    <Heading>Icon Types</Heading>
                    <Description>
                        All icons are using the [Singapore Government Design
                        System](https://www.designsystem.tech.gov.sg/docs/iconography/)
                        icon set.
                    </Description>
                    <SearchField data={COMBINED_ICONS} />
                    <Subheading>Fundamental Icons</Subheading>
                    <IconSet items={FUNDAMENTAL_ICONS} />
                    <Subheading>Utilities Icons</Subheading>
                    <IconSet items={UTILITIES_ICONS} />
                    <Subheading>Action Icons</Subheading>
                    <IconSet items={ACTION_ICONS} />
                    <Subheading>Map and Transportation Icons</Subheading>
                    <IconSet items={MAP_TRANSPORT_ICONS} />
                    <Subheading>Editor Icons</Subheading>
                    <IconSet items={EDITOR_ICONS} />
                    <Subheading>Social Icons</Subheading>
                    <IconSet items={SOCIAL_ICONS} />
                    <Subheading>Atomic Design Icons</Subheading>
                    <IconSet items={ATOMIC_DESIGN_ICONS} />
                    <Subheading>Component Icons</Subheading>
                    <IconSet items={COMPONENT_ICONS} />
                    <Subheading>Tools Icons</Subheading>
                    <IconSet items={TOOL_ICONS} />
                </>
            ),
        },
    },
} as Meta;

const Template: Story<IconProps> = (args) => <StyledIcon {...args} />;

export const Icon = Template.bind({});
Icon.args = {
    type: "check",
};
Icon.parameters = {
    docs: {
        source: {
            code: `<Icon type="check" />`,
        },
    },
};

// =============================================================================
// CONSTANTS
// =============================================================================
const FUNDAMENTAL_ICONS: IconType[] = [
    "add-image",
    "arrow-down",
    "arrow-left",
    "arrow-right",
    "arrow-top-left",
    "arrow-top-right",
    "arrow-up",
    "check",
    "chevron-down",
    "chevron-left",
    "chevron-right",
    "chevron-up",
    "circle-minus",
    "circle-plus",
    "cog",
    "cross",
    "ellipsis",
    "home",
    "image",
    "menu",
    "minus",
    "notification",
    "plus",
    "sg-crest",
];

const UTILITIES_ICONS: IconType[] = [
    "add-photo",
    "attachment",
    "browser",
    "calculator",
    "camera",
    "clock",
    "cloud",
    "cloud-download",
    "cloud-success",
    "cloud-upload",
    "contact",
    "create-folder",
    "database",
    "delay",
    "download",
    "file",
    "file-add",
    "file-alt",
    "file-copy",
    "file-pdf",
    "folder",
    "hdd",
    "link",
    "lock",
    "mail",
    "print",
    "radar",
    "save",
    "share",
    "signal",
    "telephone",
    "unlock",
    "upload",
    "volume",
    "volume-mute",
];

const ACTION_ICONS: IconType[] = [
    "add-comment",
    "ban",
    "bookmark",
    "bookmark-alt",
    "calendar",
    "chat",
    "circle-info",
    "circle-question",
    "circle-warning",
    "compress",
    "compress-alt",
    "delete",
    "edit",
    "expand",
    "expand-alt",
    "external",
    "feedback",
    "filter",
    "info",
    "list",
    "pause",
    "pause-alt",
    "pencil",
    "pin",
    "play",
    "play-alt",
    "privacy",
    "privacy-alt",
    "question",
    "refresh",
    "rsvp-no",
    "rsvp-yes",
    "search",
    "slider-horizontal",
    "slider-vertical",
    "star",
    "star-alt",
    "stop",
    "sync",
    "toggle-minus",
    "toggle-off",
    "toggle-on",
    "toggle-plus",
    "triangle-warning",
    "warning",
    "zoom-in",
    "zoom-out",
];

const MAP_TRANSPORT_ICONS: IconType[] = [
    "add-place",
    "boat",
    "bus",
    "car",
    "layers",
    "map",
    "my-location",
    "place",
    "taxi",
    "traffic",
    "train",
];

const EDITOR_ICONS: IconType[] = [
    "text-center",
    "text-justify",
    "text-left",
    "text-right",
];

const SOCIAL_ICONS: IconType[] = [
    "docker",
    "facebook",
    "facebook-alt",
    "google",
    "instagram",
    "linkedin",
    "linkedin-alt",
    "person",
    "person-add",
    "person-cancel",
    "person-remove",
    "rss",
    "thumbs-down",
    "thumbs-up",
    "twitter",
    "youtube",
];

const ATOMIC_DESIGN_ICONS: IconType[] = [
    "atom",
    "molecule",
    "organism",
    "page",
    "template",
];

const COMPONENT_ICONS: IconType[] = [
    "accordion",
    "breadcrumb",
    "button",
    "callout",
    "card",
    "checklist",
    "container",
    "dropdown",
    "footer",
    "grid",
    "grid-alt",
    "hero",
    "icons",
    "mainnav",
    "masthead",
    "section",
    "sidenav",
    "tab",
    "table",
    "typography",
];

const TOOL_ICONS: IconType[] = [
    "guides",
    "sentimeter",
    "sharepoint",
    "sitecore",
    "sitefinity",
    "swiit",
    "wordpress",
];

const COMBINED_ICONS: IconType[] = FUNDAMENTAL_ICONS.concat(UTILITIES_ICONS)
    .concat(ACTION_ICONS)
    .concat(MAP_TRANSPORT_ICONS)
    .concat(EDITOR_ICONS)
    .concat(SOCIAL_ICONS)
    .concat(ATOMIC_DESIGN_ICONS)
    .concat(COMPONENT_ICONS)
    .concat(TOOL_ICONS);
