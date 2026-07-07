"use client";

import { Person2Icon, Square2x2Icon } from "@lifesg/react-icons";
import { Sidenav } from "@lifesg/react-design-system/sidenav";

export default function Story() {
    return (
        <div className="story-row-container">
            <Sidenav fixed={false} data-testid="sidenav">
                <Sidenav.Group>
                    <Sidenav.Item
                        data-testid="item-dashboard"
                        id="dashboard"
                        title="Dashboard"
                        icon={<Square2x2Icon />}
                    />
                    <Sidenav.Item
                        data-testid="item-users"
                        id="users"
                        title="Users"
                        icon={<Person2Icon />}
                    >
                        <Sidenav.DrawerItem id="all-users" title="All Users" />
                        <Sidenav.DrawerItem
                            id="user-groups"
                            title="User Groups"
                        >
                            <Sidenav.DrawerSubitem id="admins" title="Admins" />
                            <Sidenav.DrawerSubitem
                                id="members"
                                title="Members"
                            />
                        </Sidenav.DrawerItem>
                    </Sidenav.Item>
                </Sidenav.Group>
                <Sidenav.Group separator>
                    <Sidenav.Item
                        data-testid="item-settings"
                        id="settings"
                        title="Settings"
                        icon={<Square2x2Icon />}
                    />
                </Sidenav.Group>
            </Sidenav>
        </div>
    );
}
