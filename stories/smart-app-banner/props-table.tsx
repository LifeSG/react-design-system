import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "show",
                mandatory: true,
                description: (
                    <>
                        Specifies if the <code>SmartAppBanner</code> is to be
                        displayed
                    </>
                ),
                propTypes: ["boolean"],
            },
            {
                name: "link",
                mandatory: true,
                description: (
                    <>
                        The destination url when the <code>SmartAppBanner</code>{" "}
                        is clicked
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "content",
                mandatory: true,
                description: (
                    <>
                        The content of the <code>SmartAppBanner</code>
                    </>
                ),
                propTypes: ["SmartAppBannerContentProps"],
            },
            {
                name: "offset",
                mandatory: false,
                description: "Sets the 'top' value (in px)",
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
                description: "Adds a slide down animation upon appearance",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "ref",
                mandatory: false,
                description: "Sets the ref of the SmartAppBanner",
                propTypes: ["React.Ref<HTMLDivElement>"],
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
        name: "SmartAppBannerContentProps",
        attributes: [
            {
                name: "title",
                mandatory: true,
                description: "The display title",
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
                name: "numberOfStars",
                mandatory: true,
                description: (
                    <>
                        The number of stars to display in the{" "}
                        <code>SmartAppBanner</code>. Decimal values are
                        acceptable and if <code>NaN</code> or negative values
                        are specified, the stars display will be hidden
                    </>
                ),
                propTypes: ["number"],
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
