import { CalendarIcon } from "@lifesg/react-icons/calendar";
import { DocIcon } from "@lifesg/react-icons/doc";
import { Person2Icon } from "@lifesg/react-icons/person-2";
import { Square2x2Icon } from "@lifesg/react-icons/square-2x2";
import { TicketIcon } from "@lifesg/react-icons/ticket";
import type { Meta, StoryObj } from "@storybook/react";
import { Sidenav } from "src/sidenav";

type Component = typeof Sidenav;

const meta: Meta<Component> = {
    title: "Modules/Sidenav",
    component: Sidenav,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <Sidenav fixed={false} /* For storybook purposes */>
                <Sidenav.Group separator={true}>
                    <Sidenav.Item
                        id="dashboard"
                        title="Dashboard"
                        icon={<Square2x2Icon />}
                    />
                    <Sidenav.Item
                        id="reports"
                        title="Reports"
                        icon={<DocIcon />}
                    />
                </Sidenav.Group>
                <Sidenav.Group>
                    <Sidenav.Item
                        id="bookings"
                        title="Bookings"
                        icon={<CalendarIcon />}
                        selected={true}
                    />
                    <Sidenav.Item
                        id="users"
                        title="Users"
                        icon={<Person2Icon />}
                    />
                </Sidenav.Group>
            </Sidenav>
        );
    },
};

export const SubitemDrawer: StoryObj<Component> = {
    render: () => {
        return (
            <Sidenav fixed={false} /* For storybook purposes */>
                <Sidenav.Group separator={true}>
                    <Sidenav.Item
                        id="dashboard"
                        title="Dashboard"
                        icon={<Square2x2Icon />}
                    />
                    <Sidenav.Item
                        id="reports"
                        title="Reports"
                        icon={<DocIcon />}
                    >
                        <Sidenav.DrawerItem
                            id="new-reports"
                            title="New reports"
                        >
                            <Sidenav.DrawerSubitem
                                id="bookings-reports"
                                title="Bookings reports"
                            />
                            <Sidenav.DrawerSubitem
                                id="payment-reports"
                                title="Payment reports"
                            />
                        </Sidenav.DrawerItem>
                        <Sidenav.DrawerItem
                            id="archived-reports"
                            title="Archived reports"
                        />
                        <Sidenav.DrawerItem
                            id="side-reports"
                            title="Side reports related to casual matters and extra reports"
                        >
                            <Sidenav.DrawerSubitem
                                id="food-reports"
                                title="Food reports"
                            />
                            <Sidenav.DrawerSubitem
                                id="other-reports"
                                title="Other reports"
                            />
                        </Sidenav.DrawerItem>
                    </Sidenav.Item>
                </Sidenav.Group>
                <Sidenav.Group>
                    <Sidenav.Item
                        id="bookings"
                        title="Bookings"
                        icon={<CalendarIcon />}
                    >
                        <Sidenav.DrawerItem
                            id="completed-bookings"
                            title="Completed"
                        />
                        <Sidenav.DrawerItem
                            id="upcoming-bookings"
                            title="Upcoming"
                        >
                            <Sidenav.DrawerSubitem
                                id="approved-bookings"
                                title="Approved bookings"
                            />
                            <Sidenav.DrawerSubitem
                                id="pending-bookings"
                                title="Pending bookings waiting for approval"
                            />
                        </Sidenav.DrawerItem>
                    </Sidenav.Item>
                    <Sidenav.Item
                        id="users"
                        title="Users"
                        icon={<Person2Icon />}
                    />
                    <Sidenav.Item
                        id="announcements"
                        title="Announcements of new events and bookings"
                        icon={<TicketIcon />}
                    />
                </Sidenav.Group>
            </Sidenav>
        );
    },
};
