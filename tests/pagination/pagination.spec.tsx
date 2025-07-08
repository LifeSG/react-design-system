import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pagination } from "src/pagination";

const SELECTOR_TESTID = "selector";
const DROPDOWN_TESTID = "dropdown-list";
const NEXT_PAGE_LABEL = "Next page";
const PREV_PAGE_LABEL = "Previous page";
const NEXT_PAGES_LABEL = "Next 5 pages";
const PREV_PAGES_LABEL = "Previous 5 pages";

describe("Pagination", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render the component", async () => {
        render(<Pagination totalItems={30} activePage={1} />);

        expect(screen.getByRole("button", { name: "Page 1" })).toBeVisible();
        expect(screen.getByRole("button", { name: "Page 2" })).toBeVisible();
        expect(screen.getByRole("button", { name: "Page 3" })).toBeVisible();

        expect(screen.getByRole("button", { name: "Page 1" })).toHaveAttribute(
            "aria-current",
            "page"
        );
    });

    it("should enable the previous and next buttons", async () => {
        render(<Pagination totalItems={30} activePage={2} />);

        expect(
            screen.getByRole("button", { name: PREV_PAGE_LABEL })
        ).toBeEnabled();
        expect(
            screen.getByRole("button", { name: NEXT_PAGE_LABEL })
        ).toBeEnabled();

        expect(screen.getByRole("button", { name: "Page 2" })).toHaveAttribute(
            "aria-current",
            "page"
        );
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
    });

    describe("with many pages", () => {
        it("should truncate the end range", async () => {
            render(<Pagination totalItems={100} activePage={4} />);

            expect(
                screen.getByRole("button", { name: "Page 1" })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: "Page 5" })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: "Page 10" })
            ).toBeInTheDocument();

            expect(
                screen.queryByRole("button", { name: "Page 6" })
            ).not.toBeInTheDocument();
            expect(
                screen.queryByRole("button", { name: "Page 9" })
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
                screen.getByRole("button", { name: "Page 1" })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: "Page 5" })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: "Page 10" })
            ).toBeInTheDocument();

            expect(
                screen.queryByRole("button", { name: "Page 2" })
            ).not.toBeInTheDocument();
            expect(
                screen.queryByRole("button", { name: "Page 4" })
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
                screen.getByRole("button", { name: "Page 3" })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: "Page 4" })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: "Page 6" })
            ).toBeInTheDocument();

            // truncated
            expect(
                screen.queryByRole("button", { name: "Page 2" })
            ).not.toBeInTheDocument();
            expect(
                screen.queryByRole("button", { name: "Page 7" })
            ).not.toBeInTheDocument();
        });
    });

    describe("pageSize", () => {
        it("should generate the correct number of pages", async () => {
            render(<Pagination totalItems={30} activePage={1} pageSize={5} />);

            const buttons = screen.getAllByRole("button", { name: /Page / });
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
                screen.getByRole("button", { name: "First page" })
            ).toBeEnabled();
            expect(
                screen.getByRole("button", { name: "Last page" })
            ).toBeEnabled();
        });

        it("should disable the first page button on the first page", async () => {
            render(
                <Pagination
                    totalItems={30}
                    activePage={1}
                    showFirstAndLastNav
                />
            );

            expect(
                screen.getByRole("button", { name: "First page" })
            ).toBeDisabled();
            expect(
                screen.getByRole("button", { name: "Last page" })
            ).toBeEnabled();
        });

        it("should disable the last button on the last page", async () => {
            render(
                <Pagination
                    totalItems={30}
                    activePage={3}
                    showFirstAndLastNav
                />
            );

            expect(
                screen.getByRole("button", { name: "First page" })
            ).toBeEnabled();
            expect(
                screen.getByRole("button", { name: "Last page" })
            ).toBeDisabled();
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
                "10 / page"
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
            expect(within(dropdown).queryByText("10 / page")).toBeVisible();
            expect(within(dropdown).queryByText("20 / page")).toBeVisible();
            expect(within(dropdown).queryByText("30 / page")).toBeVisible();
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

                await user.click(screen.getByText("20 / page"));

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

                await user.click(screen.getByText("20 / page"));

                expect(mockOnPageSizeChange).toHaveBeenCalledWith(5, 20);
            });
        });
    });
});
