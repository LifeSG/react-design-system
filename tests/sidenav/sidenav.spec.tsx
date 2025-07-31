import { Person2Icon, Square2x2Icon } from "@lifesg/react-icons";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Sidenav } from "src/sidenav";
import { waitForElementToBeRemoved } from "../common/waitForElementRemoved";

const SIDENAV_DRAWER_TEST_ID = "sidenav-drawer";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Sidenav", () => {
    beforeEach(() => {
        jest.resetAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
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

    it("should trigger onClick when clicking sidenav item without subitems", async () => {
        const user = userEvent.setup();
        const mockOnClick = jest.fn();

        render(
            <Sidenav data-testid="side-nav">
                <Sidenav.Group data-testid="side-nav-group">
                    <Sidenav.Item
                        id="dashboard"
                        title="Dashboard"
                        icon={<Square2x2Icon />}
                        data-testid="dashboard-item"
                        onClick={mockOnClick}
                    ></Sidenav.Item>
                </Sidenav.Group>
            </Sidenav>
        );

        await act(async () => {
            await user.click(screen.getByTestId("dashboard-item"));
        });
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it("should trigger onClick when selecting sidenav item without subitems", async () => {
        const user = userEvent.setup();
        const mockOnClick = jest.fn();

        render(
            <Sidenav data-testid="side-nav">
                <Sidenav.Group data-testid="side-nav-group">
                    <Sidenav.Item
                        id="dashboard"
                        title="Dashboard"
                        icon={<Square2x2Icon />}
                        data-testid="dashboard-item"
                        onClick={mockOnClick}
                    ></Sidenav.Item>
                </Sidenav.Group>
            </Sidenav>
        );

        await act(async () => {
            await user.keyboard("{Tab}");
            await user.keyboard(" ");
        });
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it("should open drawer if Sidenav item contain children", async () => {
        const user = userEvent.setup();
        const ITEM = "Dashboard";
        const DRAWER_ITEM = "Mini Dashboard";
        const DRAWER_ITEM_2 = "Big Dashboard";
        const DRAWER_SUBITEM = "Part 1";

        render(
            <Sidenav data-testid="side-nav">
                <Sidenav.Group data-testid="side-nav-group">
                    <Sidenav.Item
                        id="dashboard"
                        title={ITEM}
                        icon={<Square2x2Icon />}
                    >
                        <Sidenav.DrawerItem
                            title={DRAWER_ITEM}
                            id="mini-dashboard"
                        />
                        <Sidenav.DrawerItem
                            title={DRAWER_ITEM_2}
                            id="big-dashboard"
                        >
                            <Sidenav.DrawerSubitem
                                title={DRAWER_SUBITEM}
                                id="part-1"
                            />
                        </Sidenav.DrawerItem>
                    </Sidenav.Item>
                </Sidenav.Group>
            </Sidenav>
        );

        await act(async () => {
            await user.click(screen.getByRole("button", { name: ITEM }));
        });

        await waitFor(() =>
            expect(screen.queryByTestId(SIDENAV_DRAWER_TEST_ID)).toBeVisible()
        );
        expect(screen.getByText(DRAWER_ITEM)).toBeInTheDocument();
        expect(screen.getByText(DRAWER_ITEM_2)).toBeInTheDocument();
        expect(screen.getByText(DRAWER_SUBITEM)).toBeInTheDocument();

        await act(async () => {
            await user.click(document.body);
        });

        await waitForElementToBeRemoved(() =>
            screen.queryByTestId(SIDENAV_DRAWER_TEST_ID)
        );
    });

    it("should apply the correct tab sequence", async () => {
        const user = userEvent.setup();
        const ITEM_1 = "Dashboard";
        const ITEM_2 = "Profile";
        const DRAWER_ITEM_1 = "Mini Dashboard";
        const DRAWER_ITEM_2 = "Big Dashboard";
        const DRAWER_SUBITEM = "Part 1";

        render(
            <>
                <button data-testid="before" />
                <Sidenav data-testid="side-nav">
                    <Sidenav.Group data-testid="side-nav-group">
                        <Sidenav.Item
                            id="dashboard"
                            title={ITEM_1}
                            icon={<Square2x2Icon />}
                        >
                            <Sidenav.DrawerItem
                                title={DRAWER_ITEM_1}
                                id="mini-dashboard"
                            />
                            <Sidenav.DrawerItem
                                title={DRAWER_ITEM_2}
                                id="big-dashboard"
                            >
                                <Sidenav.DrawerSubitem
                                    title={DRAWER_SUBITEM}
                                    id="part-1"
                                />
                            </Sidenav.DrawerItem>
                        </Sidenav.Item>
                        <Sidenav.Item
                            id="profile"
                            title={ITEM_2}
                            icon={<Square2x2Icon />}
                        />
                    </Sidenav.Group>
                </Sidenav>
                <button data-testid="after" />
            </>
        );

        /* forward tab navigation */

        await user.keyboard("{Tab}");

        expect(screen.getByTestId("before")).toHaveFocus();

        await user.keyboard("{Tab}");

        expect(screen.getByRole("button", { name: ITEM_1 })).toHaveFocus();
        await waitFor(() => screen.getByTestId(SIDENAV_DRAWER_TEST_ID));

        await user.keyboard("{Tab}");

        expect(
            screen.getByRole("button", { name: DRAWER_ITEM_1 })
        ).toHaveFocus();

        await user.keyboard("{Tab}");

        expect(
            screen.getByRole("button", { name: DRAWER_ITEM_2 })
        ).toHaveFocus();

        await user.keyboard("{Tab}");

        expect(
            screen.getByRole("button", { name: DRAWER_SUBITEM })
        ).toHaveFocus();

        await user.keyboard("{Tab}");

        expect(screen.getByRole("button", { name: ITEM_2 })).toHaveFocus();
        await waitForElementToBeRemoved(() =>
            screen.queryByTestId(SIDENAV_DRAWER_TEST_ID)
        );

        await user.keyboard("{Tab}");

        expect(screen.getByTestId("after")).toHaveFocus();

        /* backward tab navigation */

        await user.keyboard("{Shift>}{Tab}{/Shift}");

        expect(screen.getByRole("button", { name: ITEM_2 })).toHaveFocus();

        await act(async () => {
            await user.keyboard("{Shift>}{Tab}{/Shift}");
        });

        expect(screen.getByRole("button", { name: ITEM_1 })).toHaveFocus();

        await act(async () => {
            await user.keyboard("{Shift>}{Tab}{/Shift}");
        });

        expect(screen.getByTestId("before")).toHaveFocus();
    });
});
