import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    NavItemCommonPropsData,
    NavItemComponentPropsData,
    NavItemLinkPropsData,
    NavItemPropsData,
    NavItemsPropsData,
    NavbarActionButtonComponentPropsData,
    NavbarActionButtonCtaPropsData,
    NavbarActionButtonDownloadPropsData,
    NavbarActionButtonsPropsData,
    NavbarBrandingPropsData,
    NavbarButtonComponentPropsData,
    NavbarButtonPropsData,
    NavbarDrawerPropsData,
    NavbarPropsData,
    NavbarResourcesPropsData,
    NavbarSharedPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "NavbarProps",
                content: <ApiTable sections={NavbarPropsData} />,
            },
            {
                label: "NavItemLinkProps",
                content: <ApiTable sections={NavItemLinkPropsData} />,
            },
            {
                label: "NavItemComponentProps",
                content: <ApiTable sections={NavItemComponentPropsData} />,
            },
            {
                label: "NavItemProps",
                content: <ApiTable sections={NavItemPropsData} />,
            },
            {
                label: "NavItemCommonProps",
                content: <ApiTable sections={NavItemCommonPropsData} />,
            },
            {
                label: "NavItemsProps",
                content: <ApiTable sections={NavItemsPropsData} />,
            },
            {
                label: "NavbarActionButtonDownloadProps",
                content: (
                    <ApiTable sections={NavbarActionButtonDownloadPropsData} />
                ),
            },
            {
                label: "NavbarActionButtonCtaProps",
                content: <ApiTable sections={NavbarActionButtonCtaPropsData} />,
            },
            {
                label: "NavbarButtonComponentProps",
                content: <ApiTable sections={NavbarButtonComponentPropsData} />,
            },
            {
                label: "NavbarActionButtonComponentProps",
                content: (
                    <ApiTable sections={NavbarActionButtonComponentPropsData} />
                ),
            },
            {
                label: "NavbarButtonProps",
                content: <ApiTable sections={NavbarButtonPropsData} />,
            },
            {
                label: "NavbarActionButtonsProps",
                content: <ApiTable sections={NavbarActionButtonsPropsData} />,
            },
            {
                label: "NavbarBrandingProps",
                content: <ApiTable sections={NavbarBrandingPropsData} />,
            },
            {
                label: "NavbarResourcesProps",
                content: <ApiTable sections={NavbarResourcesPropsData} />,
            },
            {
                label: "NavbarSharedProps",
                content: <ApiTable sections={NavbarSharedPropsData} />,
            },
            {
                label: "NavbarDrawerProps",
                content: <ApiTable sections={NavbarDrawerPropsData} />,
            },
        ]}
    />
);
