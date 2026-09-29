import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
    within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useMediaQuery } from "react-responsive";
import { Pagination } from "src/pagination";

jest.mock("react-responsive", () => ({
    useMediaQuery: jest.fn(() => false),
}));

const SELECTOR_TESTID = "selector";
const DROPDOWN_TESTID = "dropdown-list";
const NEXT_PAGE_LABEL = "Next page";
const PREV_PAGE_LABEL = "Previous page";
const NEXT_PAGES_LABEL = "Next 5 pages";
const PREV_PAGES_LABEL = "Previous 5 pages";

describe("Pagination", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        (useMediaQuery as jest.Mock).mockReturnValue(false);

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
    });

    it("should enable the previous and next buttons", async () => {
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
                screen.getByRole("button", { name: "First page" })
            ).toBeEnabled();
            expect(
                screen.getByRole("button", { name: "Last page" })
            ).toBeEnabled();
        });

        it("should jump to the first and last pages when the nav buttons are clicked", async () => {
            const user = userEvent.setup();
            const mockOnPageChange = jest.fn();

            render(
                <Pagination
                    totalItems={100}
                    activePage={5}
                    showFirstAndLastNav
                    onPageChange={mockOnPageChange}
                />
            );

            await user.click(
                screen.getByRole("button", { name: "First page" })
            );
            await user.click(screen.getByRole("button", { name: "Last page" }));

            expect(mockOnPageChange).toHaveBeenNthCalledWith(1, 1);
            expect(mockOnPageChange).toHaveBeenNthCalledWith(2, 10);
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

    describe("ellipsis navigation", () => {
        it("should show the previous pages tooltip on hover", async () => {
            const user = userEvent.setup();

            render(<Pagination totalItems={100} activePage={7} />);

            await user.hover(
                screen.getByRole("button", { name: PREV_PAGES_LABEL })
            );

            expect(screen.getByText(PREV_PAGES_LABEL)).toBeVisible();
        });

        it("should show the next pages tooltip on hover", async () => {
            const user = userEvent.setup();

            render(<Pagination totalItems={100} activePage={4} />);

            await user.hover(
                screen.getByRole("button", { name: NEXT_PAGES_LABEL })
            );

            expect(screen.getByText(NEXT_PAGES_LABEL)).toBeVisible();
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

            await act(async () => {
                await user.click(screen.getByTestId(SELECTOR_TESTID));
            });

            const dropdown = await screen.findByTestId(DROPDOWN_TESTID);
            await waitFor(async () => {
                await expect(dropdown).toBeVisible();
            });

            expect(within(dropdown).getByText("10 per page")).toBeVisible();
            expect(within(dropdown).getByText("20 per page")).toBeVisible();
            expect(within(dropdown).getByText("30 per page")).toBeVisible();
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

            await act(async () => {
                await user.click(screen.getByTestId(SELECTOR_TESTID));
            });

            const dropdown = await screen.findByTestId(DROPDOWN_TESTID);
            await waitFor(async () => {
                await expect(dropdown).toBeVisible();
            });

            expect(within(dropdown).getByText("1 per page")).toBeVisible();
            expect(within(dropdown).getByText("2 per page")).toBeVisible();
        });

        it("should keep the selected page size when the options array identity changes", async () => {
            const initialOptions = [
                { value: 10, label: "10 per page" },
                { value: 20, label: "20 per page" },
            ];
            const updatedOptions = [
                { value: 10, label: "10 per page (updated)" },
                { value: 20, label: "20 per page (updated)" },
            ];

            const { rerender } = render(
                <Pagination
                    totalItems={30}
                    activePage={1}
                    pageSize={20}
                    showPageSizeChanger
                    pageSizeOptions={initialOptions}
                />
            );

            expect(screen.getByTestId(SELECTOR_TESTID)).toHaveTextContent(
                /^20 per page$/
            );

            rerender(
                <Pagination
                    totalItems={30}
                    activePage={1}
                    pageSize={20}
                    showPageSizeChanger
                    pageSizeOptions={updatedOptions}
                />
            );

            expect(screen.getByTestId(SELECTOR_TESTID)).toHaveTextContent(
                /^20 per page \(updated\)$/
            );
        });

        describe("variant", () => {
            it("should render the default variant on mobile", async () => {
                (useMediaQuery as jest.Mock).mockReturnValue(true);

                render(
                    <Pagination
                        totalItems={30}
                        activePage={2}
                        showPageSizeChanger
                    />
                );

                expect(
                    screen.getByRole("textbox", { name: "Page 2 of 3" })
                ).toBeInTheDocument();
                expect(
                    screen.queryByTestId(SELECTOR_TESTID)
                ).not.toBeInTheDocument();
            });

            it("should render the full variant on mobile", async () => {
                (useMediaQuery as jest.Mock).mockReturnValue(true);

                render(
                    <Pagination
                        totalItems={30}
                        activePage={2}
                        showPageSizeChanger
                        variant="full"
                    />
                );

                expect(
                    screen.getByRole("button", { name: "page 1 of 3" })
                ).toBeInTheDocument();
                expect(screen.getByTestId(SELECTOR_TESTID)).toBeInTheDocument();
                expect(
                    screen.queryByRole("textbox", { name: "Page 2 of 3" })
                ).not.toBeInTheDocument();
            });

            it("should render the compact variant on desktop", async () => {
                (useMediaQuery as jest.Mock).mockReturnValue(false);

                render(
                    <Pagination
                        totalItems={30}
                        activePage={2}
                        showPageSizeChanger
                        variant="compact"
                    />
                );

                expect(
                    screen.getByRole("textbox", { name: "Page 2 of 3" })
                ).toBeInTheDocument();
                expect(
                    screen.queryByTestId(SELECTOR_TESTID)
                ).not.toBeInTheDocument();
            });
        });

        describe("mobile input", () => {
            it("should sanitize input and submit the current page", async () => {
                const mockOnPageChange = jest.fn();
                (useMediaQuery as jest.Mock).mockReturnValue(true);

                render(
                    <Pagination
                        totalItems={30}
                        activePage={2}
                        onPageChange={mockOnPageChange}
                    />
                );

                const input = screen.getByRole("textbox", {
                    name: "Page 2 of 3",
                });
                const form = input.closest("form");

                if (!form) {
                    throw new Error("Expected pagination form");
                }

                fireEvent.change(input, {
                    target: { value: "" },
                });
                expect(input).toHaveValue("");

                fireEvent.change(input, {
                    target: { value: "12a" },
                });
                expect(input).toHaveValue("12");

                fireEvent.change(input, {
                    target: { value: "99" },
                });
                expect(input).toHaveValue("3");

                fireEvent.submit(form);

                expect(mockOnPageChange).toHaveBeenCalledWith(3);
            });
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

                await act(async () => {
                    await user.click(screen.getByTestId(SELECTOR_TESTID));
                });

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

                await act(async () => {
                    await user.click(screen.getByTestId(SELECTOR_TESTID));
                });

                await waitFor(() => {
                    expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
                });

                await user.click(screen.getByText("20 per page"));

                expect(mockOnPageSizeChange).toHaveBeenCalledWith(5, 20);
            });
        });
    });
});
