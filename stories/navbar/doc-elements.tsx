import { InboxIcon } from "@lifesg/react-icons/inbox";
import { useEffect, useState } from "react";
import { Button } from "src/button";
import { Divider } from "src/divider";
import { IconButton } from "src/icon-button";
import { PopoverTrigger } from "src/popover-v2";
import { Breakpoint, Colour } from "src/theme";
import { Typography } from "src/typography";
import styled, { useTheme } from "styled-components";
import { Avatar } from "../../src/avatar";
import { Badge } from "../../src/badge";
import { Menu } from "../../src/menu";

// =============================================================================
// STYLING
// =============================================================================
const MobileCustomComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 1rem 1.25rem 0.5rem 1.25rem;
`;

const DesktopCustomComponentWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    height: 100%;
    padding: 0 0.5rem;
    margin-left: 1rem;
`;

const SubLabel = styled(Typography.BodySM)`
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
        <DesktopCustomComponentWrapper>
            <PopoverTrigger popoverContent="Popover content" zIndex={100}>
                <IconButton sizeType="small" styleType="light">
                    <InboxIcon />
                </IconButton>
            </PopoverTrigger>
        </DesktopCustomComponentWrapper>
    );
};

export const MobileCustomComponent = ({ onClick }: Props) => {
    return (
        <>
            <MobileCustomComponentWrapper>
                <Typography.BodyMD>John Smith</Typography.BodyMD>
                <SubLabel>john_smith@tech.gov.sg</SubLabel>
                <Button.Small
                    style={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                    }}
                    onClick={onClick}
                >
                    Click to close the drawer
                </Button.Small>
            </MobileCustomComponentWrapper>
            <Divider />
        </>
    );
};

export const NavbarAvatar = () => {
    const theme = useTheme();
    const desktop = Breakpoint["xl-min"]({ theme });
    const [isTablet, setIsTablet] = useState(window.innerWidth < desktop);

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth < desktop);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [desktop]);

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
