import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pagination } from "src/pagination";
import { useMaxWidthMediaQuery } from "src/theme";

jest.mock("react-resize-detector");
jest.mock("src/theme", () => {
    const originalModule = jest.requireActual("src/theme");

    return {
        __esModule: true,
        ...originalModule,
        useMaxWidthMediaQuery: jest.fn(),
    };
});

const SELECTOR_TESTID = "selector";
const DROPDOWN_TESTID = "dropdown-list";
const NEXT_PAGE_LABEL = "Next page";
const PREV_PAGE_LABEL = "Previous page";
const NEXT_PAGES_LABEL = "Next 5 pages";
const PREV_PAGES_LABEL = "Previous 5 pages";
const FIRST_PAGE_LABEL = "First page";
const LAST_PAGE_LABEL = "Last page";

describe("Pagination", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.mocked(useMaxWidthMediaQuery).mockReturnValue(false);

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render the component", async () => {
        render(<Pagination totalItems={30} activePage={1} />);

        expect(
            screen.getByRole("button", { name: "page 1 of 3" })
        ).toBeVisible();
        expect(
            screen.getByRole("button", { name: "page 2 of 3" })
        ).toBeVisible();
        expect(
            screen.getByRole("button", { name: "page 3 of 3" })
        ).toBeVisible();

        expect(
            screen.getByRole("button", { name: "page 1 of 3" })
        ).toHaveAttribute("aria-current", "page");

        const navigation = screen.getByRole("navigation", {
            name: "pagination",
        });
        expect(navigation).toBeInTheDocument();
        expect(navigation).toHaveAccessibleName("pagination");
    });

    it("should enable the previous and next buttons on the middle page", async () => {
        render(<Pagination totalItems={30} activePage={2} />);

        expect(
            screen.getByRole("button", { name: PREV_PAGE_LABEL })
        ).toBeEnabled();
        expect(
            screen.getByRole("button", { name: NEXT_PAGE_LABEL })
        ).toBeEnabled();

        expect(
            screen.getByRole("button", { name: "page 2 of 3" })
        ).toHaveAttribute("aria-current", "page");
    });

    it("should disable the previous button on the first page", async () => {
        render(<Pagination totalItems={30} activePage={1} />);

        expect(
            screen.getByRole("button", { name: PREV_PAGE_LABEL })
        ).toBeDisabled();
        expect(
            screen.getByRole("button", { name: NEXT_PAGE_LABEL })
        ).toBeEnabled();
    });

    it("should disable the next button on the last page", async () => {
        render(<Pagination totalItems={30} activePage={3} />);

        expect(
            screen.getByRole("button", { name: PREV_PAGE_LABEL })
        ).toBeEnabled();
        expect(
            screen.getByRole("button", { name: NEXT_PAGE_LABEL })
        ).toBeDisabled();
    });

    describe("onPageChange", () => {
        it("should reflect the next page", async () => {
            const user = userEvent.setup();
            const mockOnPageChange = jest.fn();

            render(
                <Pagination
                    totalItems={30}
                    activePage={1}
                    onPageChange={mockOnPageChange}
                />
            );

            await user.click(
                screen.getByRole("button", { name: NEXT_PAGE_LABEL })
            );

            expect(
                screen.getByRole("button", { name: NEXT_PAGE_LABEL })
            ).toBeEnabled();
            expect(mockOnPageChange).toHaveBeenCalledWith(2);
        });

        it("should reflect the previous page", async () => {
            const user = userEvent.setup();
            const mockOnPageChange = jest.fn();

            render(
                <Pagination
                    totalItems={30}
                    activePage={3}
                    onPageChange={mockOnPageChange}
                />
            );

            await user.click(
                screen.getByRole("button", { name: PREV_PAGE_LABEL })
            );

            expect(
                screen.getByRole("button", { name: PREV_PAGE_LABEL })
            ).toBeEnabled();
            expect(mockOnPageChange).toHaveBeenCalledWith(2);
        });

        it("should be called with the selected page number when a page item is clicked", async () => {
            const user = userEvent.setup();
            const mockOnPageChange = jest.fn();

            render(
                <Pagination
                    totalItems={30}
                    activePage={1}
                    onPageChange={mockOnPageChange}
                />
            );

            await user.click(
                screen.getByRole("button", { name: "page 3 of 3" })
            );

            expect(mockOnPageChange).toHaveBeenCalledWith(3);
        });

        it("should not be called when clicking the disabled previous button on the first page", async () => {
            const user = userEvent.setup();
            const mockOnPageChange = jest.fn();

            render(
                <Pagination
                    totalItems={30}
                    activePage={1}
                    onPageChange={mockOnPageChange}
                />
            );

            await user.click(
                screen.getByRole("button", { name: PREV_PAGE_LABEL })
            );

            expect(mockOnPageChange).not.toHaveBeenCalled();
        });

        it("should not be called when clicking the disabled next button on the last page", async () => {
            const user = userEvent.setup();
            const mockOnPageChange = jest.fn();

            render(
                <Pagination
                    totalItems={30}
                    activePage={3}
                    onPageChange={mockOnPageChange}
                />
            );

            await user.click(
                screen.getByRole("button", { name: NEXT_PAGE_LABEL })
            );

            expect(mockOnPageChange).not.toHaveBeenCalled();
        });
    });

    describe("with many pages", () => {
        it("should truncate the end range", async () => {
            render(<Pagination totalItems={100} activePage={4} />);

            expect(
                screen.getByRole("button", { name: "page 1 of 10" })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: "page 5 of 10" })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: "page 10 of 10" })
            ).toBeInTheDocument();

            expect(
                screen.queryByRole("button", { name: "page 6 of 10" })
            ).not.toBeInTheDocument();
            expect(
                screen.queryByRole("button", { name: "page 9 of 10" })
            ).not.toBeInTheDocument();

            expect(
                screen.getByRole("button", { name: "Next 5 pages" })
            ).toBeInTheDocument();
        });

        it("should call onPageChange with the current page + 5", async () => {
            const user = userEvent.setup();
            const mockOnPageChange = jest.fn();

            render(
                <Pagination
                    totalItems={100}
                    activePage={4}
                    onPageChange={mockOnPageChange}
                />
            );

            await user.click(
                screen.getByRole("button", { name: NEXT_PAGES_LABEL })
            );
            expect(mockOnPageChange).toHaveBeenCalledWith(9);
        });

        it("should truncate the start range", async () => {
            render(<Pagination totalItems={100} activePage={7} />);

            expect(
                screen.getByRole("button", { name: "page 1 of 10" })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: "page 5 of 10" })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: "page 10 of 10" })
            ).toBeInTheDocument();

            expect(
                screen.queryByRole("button", { name: "page 2 of 10" })
            ).not.toBeInTheDocument();
            expect(
                screen.queryByRole("button", { name: "page 4 of 10" })
            ).not.toBeInTheDocument();

            expect(
                screen.getByRole("button", { name: PREV_PAGES_LABEL })
            ).toBeInTheDocument();
        });

        it("should call onPageChange with the current page - 5", async () => {
            const user = userEvent.setup();
            const mockOnPageChange = jest.fn();

            render(
                <Pagination
                    totalItems={100}
                    activePage={7}
                    onPageChange={mockOnPageChange}
                />
            );

            await user.click(
                screen.getByRole("button", { name: PREV_PAGES_LABEL })
            );
            expect(mockOnPageChange).toHaveBeenCalledWith(2);
        });

        it("should truncate both start and end ranges", async () => {
            render(<Pagination totalItems={100} activePage={5} />);

            // visible sibling buttons
            expect(
                screen.getByRole("button", { name: "page 3 of 10" })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: "page 4 of 10" })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: "page 6 of 10" })
            ).toBeInTheDocument();

            // truncated
            expect(
                screen.queryByRole("button", { name: "page 2 of 10" })
            ).not.toBeInTheDocument();
            expect(
                screen.queryByRole("button", { name: "page 7 of 10" })
            ).not.toBeInTheDocument();
        });
    });

    describe("pageSize", () => {
        it("should generate the correct number of pages", async () => {
            render(<Pagination totalItems={30} activePage={1} pageSize={5} />);

            const buttons = screen.getAllByRole("button", {
                name: /^page \d+ of \d+$/,
            });
            expect(buttons).toHaveLength(6);
        });
    });

    describe("showFirstAndLastNav", () => {
        it("should display the first page and last page buttons", async () => {
            render(
                <Pagination
                    totalItems={30}
                    activePage={2}
                    showFirstAndLastNav
                />
            );

            expect(
                screen.getByRole("button", { name: FIRST_PAGE_LABEL })
            ).toBeEnabled();
            expect(
                screen.getByRole("button", { name: LAST_PAGE_LABEL })
            ).toBeEnabled();
        });

        it("should be called with the first page when the first page button is clicked", async () => {
            const user = userEvent.setup();
            const mockOnPageChange = jest.fn();

            render(
                <Pagination
                    totalItems={30}
                    activePage={3}
                    showFirstAndLastNav
                    onPageChange={mockOnPageChange}
                />
            );

            await user.click(
                screen.getByRole("button", { name: FIRST_PAGE_LABEL })
            );

            expect(mockOnPageChange).toHaveBeenCalledWith(1);
        });

        it("should be called with the last page when the last page button is clicked", async () => {
            const user = userEvent.setup();
            const mockOnPageChange = jest.fn();

            render(
                <Pagination
                    totalItems={30}
                    activePage={1}
                    showFirstAndLastNav
                    onPageChange={mockOnPageChange}
                />
            );

            await user.click(
                screen.getByRole("button", { name: LAST_PAGE_LABEL })
            );

            expect(mockOnPageChange).toHaveBeenCalledWith(3);
        });

        it("should disable the first page button on the first page", async () => {
            const user = userEvent.setup();
            const mockOnPageChange = jest.fn();

            render(
                <Pagination
                    totalItems={30}
                    activePage={1}
                    showFirstAndLastNav
                    onPageChange={mockOnPageChange}
                />
            );

            expect(
                screen.getByRole("button", { name: FIRST_PAGE_LABEL })
            ).toBeDisabled();
            expect(
                screen.getByRole("button", { name: LAST_PAGE_LABEL })
            ).toBeEnabled();

            await user.click(
                screen.getByRole("button", { name: FIRST_PAGE_LABEL })
            );

            expect(mockOnPageChange).not.toHaveBeenCalled();
        });

        it("should disable the last button on the last page", async () => {
            const user = userEvent.setup();
            const mockOnPageChange = jest.fn();

            render(
                <Pagination
                    totalItems={30}
                    activePage={3}
                    showFirstAndLastNav
                    onPageChange={mockOnPageChange}
                />
            );

            expect(
                screen.getByRole("button", { name: FIRST_PAGE_LABEL })
            ).toBeEnabled();
            expect(
                screen.getByRole("button", { name: LAST_PAGE_LABEL })
            ).toBeDisabled();

            await user.click(
                screen.getByRole("button", { name: LAST_PAGE_LABEL })
            );

            expect(mockOnPageChange).not.toHaveBeenCalled();
        });
    });

    describe("showPageSizeChanger", () => {
        it("should show dropdown", async () => {
            render(
                <Pagination
                    totalItems={30}
                    activePage={1}
                    showPageSizeChanger
                />
            );

            expect(screen.getByTestId(SELECTOR_TESTID)).toBeInTheDocument();
            expect(screen.getByTestId(SELECTOR_TESTID)).toHaveTextContent(
                "10 per page"
            );
        });

        it("should show the default options when selector is clicked", async () => {
            const user = userEvent.setup();

            render(
                <Pagination
                    totalItems={30}
                    activePage={1}
                    showPageSizeChanger
                />
            );

            await user.click(screen.getByTestId(SELECTOR_TESTID));

            const dropdown = await screen.findByTestId(DROPDOWN_TESTID);
            await waitFor(() => {
                expect(dropdown).toBeVisible();
            });

            expect(within(dropdown).queryByText("10 per page")).toBeVisible();
            expect(within(dropdown).queryByText("20 per page")).toBeVisible();
            expect(within(dropdown).queryByText("30 per page")).toBeVisible();
        });

        it("should show the custom options when selector is clicked", async () => {
            const user = userEvent.setup();

            render(
                <Pagination
                    totalItems={30}
                    activePage={1}
                    showPageSizeChanger
                    pageSizeOptions={[
                        { value: 1, label: "1 per page" },
                        { value: 2, label: "2 per page" },
                    ]}
                />
            );

            await user.click(screen.getByTestId(SELECTOR_TESTID));

            const dropdown = await screen.findByTestId(DROPDOWN_TESTID);
            await waitFor(() => {
                expect(dropdown).toBeVisible();
            });

            expect(within(dropdown).queryByText("1 per page")).toBeVisible();
            expect(within(dropdown).queryByText("2 per page")).toBeVisible();
        });

        describe("onPageSizeChange", () => {
            it("should return active page and new page size if current page is within the new range", async () => {
                const user = userEvent.setup();
                const mockOnPageSizeChange = jest.fn();

                render(
                    <Pagination
                        totalItems={100}
                        activePage={1}
                        showPageSizeChanger
                        onPageSizeChange={mockOnPageSizeChange}
                    />
                );

                await user.click(screen.getByTestId(SELECTOR_TESTID));

                await waitFor(() => {
                    expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
                });

                await user.click(screen.getByText("20 per page"));

                expect(mockOnPageSizeChange).toHaveBeenCalledWith(1, 20);
            });

            it("should return last page and new page size if current page is outside of the new range", async () => {
                const user = userEvent.setup();
                const mockOnPageSizeChange = jest.fn();

                render(
                    <Pagination
                        totalItems={100}
                        activePage={10}
                        showPageSizeChanger
                        onPageSizeChange={mockOnPageSizeChange}
                    />
                );

                await user.click(screen.getByTestId(SELECTOR_TESTID));

                await waitFor(() => {
                    expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
                });

                await user.click(screen.getByText("20 per page"));

                expect(mockOnPageSizeChange).toHaveBeenCalledWith(5, 20);
            });
        });
    });

    describe("mobile", () => {
        beforeEach(() => {
            jest.mocked(useMaxWidthMediaQuery).mockReturnValue(true);
        });

        it("should render the mobile variant", async () => {
            render(<Pagination totalItems={30} activePage={2} />);

            expect(
                screen.getByRole("button", { name: PREV_PAGE_LABEL })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: NEXT_PAGE_LABEL })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("textbox", { name: "Page 2 of 3" })
            ).toBeInTheDocument();
        });

        it("should enable the previous and next buttons on the middle page", async () => {
            render(<Pagination totalItems={30} activePage={2} />);

            expect(
                screen.getByRole("button", { name: PREV_PAGE_LABEL })
            ).toBeEnabled();
            expect(
                screen.getByRole("button", { name: NEXT_PAGE_LABEL })
            ).toBeEnabled();
        });

        it("should disable the previous button on the first page", async () => {
            render(<Pagination totalItems={30} activePage={1} />);

            expect(
                screen.getByRole("button", { name: PREV_PAGE_LABEL })
            ).toBeDisabled();
            expect(
                screen.getByRole("button", { name: NEXT_PAGE_LABEL })
            ).toBeEnabled();
        });

        it("should disable the next button on the last page", async () => {
            render(<Pagination totalItems={30} activePage={3} />);

            expect(
                screen.getByRole("button", { name: PREV_PAGE_LABEL })
            ).toBeEnabled();
            expect(
                screen.getByRole("button", { name: NEXT_PAGE_LABEL })
            ).toBeDisabled();
        });

        it("should not render the page size changer on mobile", async () => {
            render(
                <Pagination
                    totalItems={30}
                    activePage={2}
                    showPageSizeChanger
                />
            );

            expect(
                screen.queryByTestId(SELECTOR_TESTID)
            ).not.toBeInTheDocument();
        });

        describe("onPageChange", () => {
            it("should reflect the next page", async () => {
                const user = userEvent.setup();
                const mockOnPageChange = jest.fn();

                render(
                    <Pagination
                        totalItems={30}
                        activePage={2}
                        onPageChange={mockOnPageChange}
                    />
                );

                await user.click(
                    screen.getByRole("button", { name: NEXT_PAGE_LABEL })
                );

                expect(mockOnPageChange).toHaveBeenCalledWith(3);
            });

            it("should reflect the previous page", async () => {
                const user = userEvent.setup();
                const mockOnPageChange = jest.fn();

                render(
                    <Pagination
                        totalItems={30}
                        activePage={3}
                        onPageChange={mockOnPageChange}
                    />
                );

                await user.click(
                    screen.getByRole("button", { name: PREV_PAGE_LABEL })
                );

                expect(mockOnPageChange).toHaveBeenCalledWith(2);
            });

            it("should reflect the entered page number", async () => {
                jest.mocked(useMaxWidthMediaQuery).mockReturnValue(true);
                const user = userEvent.setup();
                const mockOnPageChange = jest.fn();

                render(
                    <Pagination
                        totalItems={30}
                        activePage={1}
                        onPageChange={mockOnPageChange}
                    />
                );

                await user.type(screen.getByRole("textbox"), "3");

                expect(mockOnPageChange).not.toHaveBeenCalled();

                await user.type(screen.getByRole("textbox"), "{enter}");

                expect(mockOnPageChange).toHaveBeenCalledWith(3);
            });
        });
    });
});
