import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "show",
                mandatory: true,
                description: "Set to 'true' to show",
                propTypes: ["boolean"],
            },
            {
                name: "link",
                mandatory: true,
                description:
                    "Sets the url for SmartAppBanner to open when pressed",
                propTypes: ["string"],
            },
            {
                name: "content",
                mandatory: true,
                description: (
                    <>
                        Object containing `title`, `message`, `buttonLabel`,
                        `buttonAriaLabel` keys
                    </>
                ),
                propTypes: [`"Content"`],
            },
            {
                name: "offset",
                mandatory: false,
                description: "Sets the 'top' value in pixels",
                propTypes: ["number"],
                defaultValue: `0`,
            },
            {
                name: "icon",
                mandatory: false,
                description: "Url for the icon",
                propTypes: ["string"],
                defaultValue: `https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png`,
            },
            {
                name: "isAnimated",
                mandatory: false,
                description:
                    "Set banner to appear with slide down animation is it's true",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "onBannerDismiss",
                mandatory: true,
                description: (
                    <>
                        Sets behavior of SmartAppBanner when SmartAppBanner is
                        dimissed
                    </>
                ),
                propTypes: ["() => void"],
            },
            {
                name: "onBannerPress",
                mandatory: false,
                description: (
                    <>
                        Sets additional behaviour when SmartAppBanner is pressed
                        on non-dismiss area. Default behaviour opens link in new
                        tab and dismisses the SmartAppBanner.
                    </>
                ),
                propTypes: ["() => void"],
            },
        ],
    },
    {
        name: "Content",
        attributes: [
            {
                name: "title",
                mandatory: true,
                description: "The title",
                propTypes: ["string"],
            },
            {
                name: "buttonLabel",
                mandatory: true,
                description: "The button text",
                propTypes: ["string"],
            },
            {
                name: "buttonAriaLabel",
                mandatory: true,
                description: "The aria label of the button",
                propTypes: ["string"],
            },
            {
                name: "message",
                mandatory: false,
                description:
                    "The description of the banner displayed below the title",
                propTypes: ["string"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
