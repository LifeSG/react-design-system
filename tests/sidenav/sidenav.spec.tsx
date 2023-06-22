import { act, fireEvent, render, screen } from "@testing-library/react";
import { Sidenav } from "../../src";
import { Person2Icon, Square2x2Icon } from "@lifesg/react-icons";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Sidenav", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should render component", () => {
        const ITEM_TEXT = "Dashboard";
        render(
            <Sidenav data-testid="side-nav">
                <Sidenav.Group data-testid="side-nav-group">
                    <Sidenav.Item
                        data-testid="dashboard-item"
                        id="dashboard"
                        title={ITEM_TEXT}
                        icon={<Square2x2Icon />}
                    ></Sidenav.Item>
                </Sidenav.Group>
            </Sidenav>
        );

        expect(screen.getByTestId("side-nav")).toBeInTheDocument();
        const element = screen.getByTestId("dashboard-item");
        expect(element).toBeInTheDocument();
        expect(element.innerHTML).toContain(ITEM_TEXT);
        expect(element.innerHTML).toContain("svg");
    });

    it("should render component with fixed argument", () => {
        render(
            <Sidenav data-testid="side-nav" fixed={true}>
                <Sidenav.Group data-testid="side-nav-group">
                    <Sidenav.Item
                        data-testid="dashboard-item"
                        id="dashboard"
                        title="Dashboard"
                        icon={<Square2x2Icon />}
                    ></Sidenav.Item>
                </Sidenav.Group>
            </Sidenav>
        );

        const element = screen.getByTestId("side-nav");
        expect(element).toBeInTheDocument();
        expect(element).toHaveStyle({ position: "fixed" });
    });

    it("should render multiple groups correctly", () => {
        render(
            <Sidenav data-testid="side-nav">
                <Sidenav.Group data-testid="side-nav-group-1">
                    <Sidenav.Item
                        id="dashboard"
                        title="Dashboard"
                        icon={<Square2x2Icon />}
                    ></Sidenav.Item>
                </Sidenav.Group>
                <Sidenav.Group data-testid="side-nav-group-2">
                    <Sidenav.Item
                        id="users"
                        title="Users"
                        icon={<Person2Icon />}
                    ></Sidenav.Item>
                </Sidenav.Group>
            </Sidenav>
        );
        expect(screen.getAllByRole("listitem").length).toEqual(2);
        expect(screen.getByTestId("side-nav-group-1")).toBeInTheDocument();
        expect(screen.getByTestId("side-nav-group-2")).toBeInTheDocument();
    });

    it("should render separator if separator value is true", () => {
        render(
            <Sidenav data-testid="side-nav">
                <Sidenav.Group data-testid="side-nav-group-1" separator={true}>
                    <Sidenav.Item
                        id="dashboard"
                        title="Dashboard"
                        icon={<Square2x2Icon />}
                    ></Sidenav.Item>
                </Sidenav.Group>
                <Sidenav.Group data-testid="side-nav-group-2">
                    <Sidenav.Item
                        id="dashboard"
                        title="Dashboard"
                        icon={<Square2x2Icon />}
                    ></Sidenav.Item>
                </Sidenav.Group>
            </Sidenav>
        );
        expect(screen.getByTestId("divider")).toBeInTheDocument();
        expect(screen.getAllByTestId("divider").length).toEqual(1);
    });

    it("should trigger onClick when click on Sidenav item", () => {
        const spy = jest.fn();
        render(
            <Sidenav data-testid="side-nav">
                <Sidenav.Group data-testid="side-nav-group">
                    <Sidenav.Item
                        id="dashboard"
                        title="Dashboard"
                        icon={<Square2x2Icon />}
                        data-testid="dashboard-item"
                        onClick={spy}
                    ></Sidenav.Item>
                    <Sidenav.Item
                        id="users"
                        title="Users"
                        icon={<Person2Icon />}
                        data-testid="users-item"
                        onClick={spy}
                        selected={true}
                    ></Sidenav.Item>
                </Sidenav.Group>
            </Sidenav>
        );
        const userElement = screen.getByTestId("users-item");
        act(() => {
            fireEvent.click(userElement);
        });
        expect(spy).toHaveBeenCalledTimes(0);
        const dashboardElement = screen.getByTestId("dashboard-item");
        act(() => {
            fireEvent.click(dashboardElement);
        });
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should open drawer if sidenav item contain children", () => {
        const LEVEL2_TEXT1 = "Mini Dashboard";
        const LEVEL2_TEXT2 = "Big Dashboard";
        const LEVEL3_TEXT = "Part 1";
        render(
            <Sidenav data-testid="side-nav">
                <Sidenav.Group data-testid="side-nav-group">
                    <Sidenav.Item
                        id="dashboard"
                        title="Dashboard"
                        icon={<Square2x2Icon />}
                        data-testid="dashboard-item"
                    >
                        <Sidenav.DrawerItem
                            title={LEVEL2_TEXT1}
                            data-testid="mini-dashboard-item"
                            id="mini-dashboard"
                        ></Sidenav.DrawerItem>
                        <Sidenav.DrawerItem
                            title={LEVEL2_TEXT2}
                            data-testid="big-dashboard-item"
                            id="big-dashboard"
                        >
                            <Sidenav.DrawerSubitem
                                title={LEVEL3_TEXT}
                                id="part-1"
                                data-testid="part-1"
                            />
                        </Sidenav.DrawerItem>
                    </Sidenav.Item>
                </Sidenav.Group>
            </Sidenav>
        );

        const sideNavItem = screen.getByTestId("dashboard-item");
        act(() => {
            fireEvent.click(sideNavItem);
        });
        expect(screen.getByTestId("sidenav-drawer"));
        expect(screen.getByText(LEVEL2_TEXT1)).toBeInTheDocument();
        expect(screen.getByText(LEVEL3_TEXT)).toBeInTheDocument();
    });
});
