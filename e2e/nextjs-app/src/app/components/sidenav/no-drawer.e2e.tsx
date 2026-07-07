"use client";

import { Person2Icon, Square2x2Icon } from "@lifesg/react-icons";
import { Sidenav } from "@lifesg/react-design-system/sidenav";

export default function Story() {
    return (
        <div className="story-row-container">
            <Sidenav fixed={false} data-testid="sidenav">
                <Sidenav.Group>
                    <Sidenav.Item
                        id="dashboard"
                        title="Dashboard"
                        icon={<Square2x2Icon />}
                    />
                    <Sidenav.Item
                        id="users"
                        title="Users"
                        icon={<Person2Icon />}
                    />
                </Sidenav.Group>
                <Sidenav.Group separator>
                    <Sidenav.Item
                        id="settings"
                        title="Settings"
                        icon={<Square2x2Icon />}
                    />
                </Sidenav.Group>
            </Sidenav>
        </div>
    );
}
