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
});
