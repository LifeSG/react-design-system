import { act, fireEvent, render, screen } from "@testing-library/react";
import { SideNav } from "../../src";
import { Person2Icon, Square2x2Icon } from "@lifesg/react-icons";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("SideNav", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should render component", () => {
        render(
            <SideNav data-testid="side-nav">
                <SideNav.Group data-testid="side-nav-group">
                    <SideNav.Item
                        id="dashboard"
                        title="Dashboard"
                        icon={<Square2x2Icon />}
                    ></SideNav.Item>
                </SideNav.Group>
            </SideNav>
        );

        expect(screen.getByTestId("side-nav")).toBeInTheDocument();
    });

    it("should render multiple groups and render separator correctly", () => {
        render(
            <SideNav data-testid="side-nav">
                <SideNav.Group data-testid="side-nav-group-1">
                    <SideNav.Item
                        id="dashboard"
                        title="Dashboard"
                        icon={<Square2x2Icon />}
                    ></SideNav.Item>
                </SideNav.Group>
                <SideNav.Group data-testid="side-nav-group-2">
                    <SideNav.Item
                        id="users"
                        title="Users"
                        icon={<Person2Icon />}
                    ></SideNav.Item>
                </SideNav.Group>
            </SideNav>
        );
        expect(screen.getByTestId("side-nav-group-1")).toBeInTheDocument();
        expect(screen.getByTestId("side-nav-group-2")).toBeInTheDocument();
    });

    it("should render separator if separator value is true", () => {
        render(
            <SideNav data-testid="side-nav">
                <SideNav.Group data-testid="side-nav-group-1" separator={true}>
                    <SideNav.Item
                        id="dashboard"
                        title="Dashboard"
                        icon={<Square2x2Icon />}
                    ></SideNav.Item>
                </SideNav.Group>
                <SideNav.Group data-testid="side-nav-group-2">
                    <SideNav.Item
                        id="dashboard"
                        title="Dashboard"
                        icon={<Square2x2Icon />}
                    ></SideNav.Item>
                </SideNav.Group>
            </SideNav>
        );
        expect(screen.getByTestId("divider")).toBeInTheDocument();
        expect(screen.getAllByTestId("divider").length).toEqual(1);
    });

    it("should render icon and text of sideNav item", () => {
        const ITEM_TEXT = "Dashboard";
        render(
            <SideNav data-testid="side-nav">
                <SideNav.Group data-testid="side-nav-group">
                    <SideNav.Item
                        id="dashboard"
                        title={ITEM_TEXT}
                        icon={<Square2x2Icon />}
                        data-testid="dashboard-item"
                    ></SideNav.Item>
                </SideNav.Group>
            </SideNav>
        );
        const element = screen.getByTestId("dashboard-item");
        expect(element).toBeInTheDocument();
        expect(element.innerHTML).toContain(ITEM_TEXT);
        expect(element.innerHTML).toContain("svg");
    });

    it("should trigger onClick when click on sideNav item", () => {
        const spy = jest.fn();
        render(
            <SideNav data-testid="side-nav">
                <SideNav.Group data-testid="side-nav-group">
                    <SideNav.Item
                        id="dashboard"
                        title="Dashboard"
                        icon={<Square2x2Icon />}
                        data-testid="dashboard-item"
                        onClick={spy}
                    ></SideNav.Item>
                    <SideNav.Item
                        id="users"
                        title="Users"
                        icon={<Person2Icon />}
                        data-testid="users-item"
                        onClick={spy}
                        selected={true}
                    ></SideNav.Item>
                </SideNav.Group>
            </SideNav>
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
});
