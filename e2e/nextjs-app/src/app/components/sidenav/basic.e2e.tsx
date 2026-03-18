"use client";

import { Sidenav } from "@lifesg/react-design-system/sidenav";

const DotIcon = () => <span aria-hidden>•</span>;

export default function Story() {
    return (
        <Sidenav fixed={false}>
            <Sidenav.Group separator={true}>
                <Sidenav.Item
                    id="dashboard"
                    title="Dashboard"
                    icon={<DotIcon />}
                />
                <Sidenav.Item id="reports" title="Reports" icon={<DotIcon />}>
                    <Sidenav.DrawerItem id="new-reports" title="New reports">
                        <Sidenav.DrawerSubitem
                            id="bookings-reports"
                            title="Bookings reports"
                        />
                        <Sidenav.DrawerSubitem
                            id="payment-reports"
                            title="Payment reports"
                        />
                    </Sidenav.DrawerItem>
                </Sidenav.Item>
            </Sidenav.Group>
        </Sidenav>
    );
}
