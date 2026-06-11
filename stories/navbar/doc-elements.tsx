import { InboxIcon } from "@lifesg/react-icons/inbox";
import { css } from "@linaria/core";
import { Avatar } from "src/avatar";
import { Badge } from "src/badge";
import { Button } from "src/button";
import { Divider } from "src/divider";
import { Menu } from "src/menu";
import { PopoverTrigger } from "src/popover";
import { Colour, useMaxWidthMediaQuery } from "src/theme";
import { Typography } from "src/typography";

// =============================================================================
// STYLING
// =============================================================================
const mobileCustomComponentWrapper = css`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 1rem 1.25rem 0.5rem 1.25rem;
`;

const desktopCustomComponentWrapper = css`
    display: flex;
    position: relative;
    align-items: center;
    height: 100%;
    padding: 0 0.5rem;
    margin-left: 1rem;
`;

const subLabel = css`
    color: ${Colour["text-subtle"]};
`;

// =============================================================================
// COMPONENTS
// =============================================================================
interface Props {
    onClick?: () => void;
}

export const DesktopCustomComponent = () => {
    return (
        <div className={desktopCustomComponentWrapper}>
            <PopoverTrigger popoverContent="Popover content" zIndex={100}>
                <Button
                    sizeType="small"
                    styleType="light"
                    icon={<InboxIcon />}
                    aria-label="Inbox"
                />
            </PopoverTrigger>
        </div>
    );
};

export const MobileCustomComponent = ({ onClick }: Props) => {
    return (
        <>
            <div className={mobileCustomComponentWrapper}>
                <Typography.BodyMD>John Smith</Typography.BodyMD>
                <Typography.BodySM className={subLabel}>
                    john_smith@tech.gov.sg
                </Typography.BodySM>
                <Button
                    style={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                    }}
                    onClick={onClick}
                    sizeType="small"
                >
                    Click to close the drawer
                </Button>
            </div>
            <Divider />
        </>
    );
};

export const NavbarAvatar = () => {
    const isTablet = useMaxWidthMediaQuery("lg");

    return (
        <Menu
            enableResize={false}
            enableFlip={false}
            menuContent={menuContent}
            zIndex={100}
            customOffset={28}
        >
            <Badge
                count={8}
                color="important"
                variant={isTablet ? "dot-with-border" : "number-with-border"}
            >
                <Avatar sizeType={isTablet ? "small" : "default"}>Name</Avatar>
            </Badge>
        </Menu>
    );
};

const menuContent = (
    <Menu.Content>
        <Menu.Section showDivider={false}>
            <Menu.Item label="Name" subLabel="email@email.sg" />
        </Menu.Section>

        <Menu.Section label="Category 1">
            <Menu.Item>Menu item</Menu.Item>
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
            <Menu.Item>Menu item</Menu.Item>
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
            <Menu.Item>Menu item</Menu.Item>
        </Menu.Section>

        <Menu.Section>
            <Menu.Item>Menu item</Menu.Item>
            <Menu.Item>Menu item</Menu.Item>
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
        </Menu.Section>

        <Menu.Section label="Category 2">
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
            <Menu.Item>Menu item</Menu.Item>
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
        </Menu.Section>
    </Menu.Content>
);
