import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { LinkListItemProps } from "src/link-list";
import { LinkList } from "src/link-list";

const MOCK_ITEMS: LinkListItemProps<object>[] = [
    { title: "Title 1", description: "Description 1", href: "/item1" },
    { title: "Title 2", description: "Description 2", href: "/item2" },
    { title: "Title 3", description: "Description 3", href: "/item3" },
    { title: "Title 4", description: "Description 4", href: "/item4" },
];

describe("LinkList", () => {
    beforeEach(() => {
        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    describe("Eager variant", () => {
        it("should render all items when maxShown is not specified", () => {
            render(<LinkList items={MOCK_ITEMS} />);

            expect(screen.getByText("Title 1")).toBeVisible();
            expect(screen.getByText("Title 2")).toBeVisible();
            expect(screen.getByText("Title 3")).toBeVisible();
            expect(screen.getByText("Title 4")).toBeVisible();

            expect(
                screen.queryByRole("button", { name: "View more" })
            ).not.toBeInTheDocument();
            expect(
                screen.queryByTestId("minimised-content")
            ).not.toBeInTheDocument();
        });

        it("should limit items when maxShown is specified", () => {
            render(<LinkList items={MOCK_ITEMS} maxShown={2} />);

            expect(
                screen.getByRole("button", { name: "View more" })
            ).toBeInTheDocument();
            expect(screen.getByTestId("minimised-content")).toBeInTheDocument();
        });

        it("should toggle button when view more/less is clicked", async () => {
            const user = userEvent.setup();

            render(<LinkList items={MOCK_ITEMS} maxShown={2} />);

            await user.click(screen.getByRole("button", { name: "View more" }));
            await user.click(screen.getByRole("button", { name: "View less" }));

            expect(
                screen.getByRole("button", { name: "View more" })
            ).toBeInTheDocument();
        });

        it("should toggle button when view more/less is activated with Enter", async () => {
            const user = userEvent.setup();

            render(<LinkList items={MOCK_ITEMS} maxShown={2} />);

            screen.getByRole("button", { name: "View more" }).focus();

            await user.keyboard("{Enter}");

            expect(
                screen.getByRole("button", { name: "View less" })
            ).toBeInTheDocument();

            await user.keyboard("{Enter}");

            expect(
                screen.getByRole("button", { name: "View more" })
            ).toBeInTheDocument();
        });

        it("should toggle button when view more/less is activated with Space", async () => {
            const user = userEvent.setup();

            render(<LinkList items={MOCK_ITEMS} maxShown={2} />);

            screen.getByRole("button", { name: "View more" }).focus();

            await user.keyboard(" ");

            expect(
                screen.getByRole("button", { name: "View less" })
            ).toBeInTheDocument();

            await user.keyboard(" ");

            expect(
                screen.getByRole("button", { name: "View more" })
            ).toBeInTheDocument();
        });

        it("should render with custom labels", async () => {
            const user = userEvent.setup();

            render(
                <LinkList
                    items={MOCK_ITEMS}
                    maxShown={2}
                    customLabels={{
                        viewMore: "Show more",
                        viewLess: "Show less",
                    }}
                />
            );

            expect(
                screen.getByRole("button", { name: "Show more" })
            ).toBeVisible();

            await user.click(screen.getByRole("button", { name: "Show more" }));

            expect(
                screen.getByRole("button", { name: "Show less" })
            ).toBeVisible();
        });

        describe("onItemClick", () => {
            it("should call onItemClick when item is clicked", async () => {
                const user = userEvent.setup();
                const mockOnItemClick = jest.fn();

                render(
                    <LinkList
                        items={MOCK_ITEMS}
                        onItemClick={mockOnItemClick}
                    />
                );

                await user.click(screen.getByText("Title 1"));

                expect(mockOnItemClick).toHaveBeenCalledWith(
                    MOCK_ITEMS[0],
                    expect.anything()
                );
            });

            it("should call individual item onClick when specified", async () => {
                const user = userEvent.setup();
                const mockOnItemClick = jest.fn();
                const mockSingleOnItemClick = jest.fn();

                const itemsWithOnClick: LinkListItemProps<object>[] = [
                    { ...MOCK_ITEMS[0], onClick: mockSingleOnItemClick },
                    ...MOCK_ITEMS.slice(1),
                ];

                render(
                    <LinkList
                        items={itemsWithOnClick}
                        onItemClick={mockOnItemClick}
                    />
                );

                await user.click(screen.getByText("Title 1"));

                expect(mockSingleOnItemClick).toHaveBeenCalledTimes(1);
                expect(mockOnItemClick).not.toHaveBeenCalled();
            });

            it("should call onItemClick when Enter is pressed on a focused item", async () => {
                const user = userEvent.setup();
                const mockOnItemClick = jest.fn();

                render(
                    <LinkList
                        items={MOCK_ITEMS}
                        onItemClick={mockOnItemClick}
                    />
                );

                await user.tab();
                await user.keyboard("{Enter}");

                expect(mockOnItemClick).toHaveBeenCalledWith(
                    MOCK_ITEMS[0],
                    expect.any(Object)
                );
            });
        });

        describe("Keyboard navigation", () => {
            it("should focus items sequentially when tabbing through", async () => {
                const user = userEvent.setup();

                render(
                    <LinkList
                        items={[MOCK_ITEMS[0], MOCK_ITEMS[1]]}
                        maxShown={1}
                    />
                );

                await user.tab();
                expect(
                    screen.getByTestId("link-list-items-shown-0")
                ).toHaveFocus();

                await user.tab(); // FIXME: the minimised content with `inert` is still focusable when it shouldn't be
                await user.tab();
                expect(
                    screen.getByRole("button", { name: "View more" })
                ).toHaveFocus();
            });
        });
    });

    describe("Lazy variant", () => {
        const mockOnLoadMore = jest.fn();
        const mockOnItemClick = jest.fn();

        beforeEach(() => {
            jest.clearAllMocks();
            mockOnLoadMore.mockResolvedValue(MOCK_ITEMS);
        });

        it("should render view more button when loadMore is true", () => {
            render(
                <LinkList
                    loadMode="lazy"
                    items={MOCK_ITEMS}
                    loadMore
                    onLoadMore={mockOnLoadMore}
                />
            );

            expect(screen.getByText("Title 1")).toBeVisible();
            expect(screen.getByText("Title 2")).toBeVisible();
            expect(screen.getByText("Title 3")).toBeVisible();
            expect(screen.getByText("Title 4")).toBeVisible();
            expect(
                screen.getByRole("button", { name: "View more" })
            ).toBeVisible();
        });

        it("should not render view more button when loadMore is false", () => {
            render(
                <LinkList
                    loadMode="lazy"
                    items={MOCK_ITEMS}
                    loadMore={false}
                    onLoadMore={mockOnLoadMore}
                />
            );

            expect(
                screen.queryByRole("button", { name: "View more" })
            ).not.toBeInTheDocument();
        });

        it("should render with custom labels", async () => {
            render(
                <LinkList
                    loadMode="lazy"
                    items={MOCK_ITEMS}
                    loadMore
                    onLoadMore={mockOnLoadMore}
                    customLabels={{
                        viewMore: "Show more",
                        viewLess: "Show less",
                    }}
                />
            );

            expect(
                screen.getByRole("button", { name: "Show more" })
            ).toBeVisible();
        });

        describe("onLoadMore", () => {
            it("should call onLoadMore when view more button is clicked", async () => {
                const user = userEvent.setup();
                let resolve: (value: unknown) => void;
                const promise = new Promise((r) => (resolve = r));
                const mockOnLoadMore = jest.fn().mockResolvedValue(promise);

                render(
                    <LinkList
                        loadMode="lazy"
                        items={MOCK_ITEMS}
                        loadMore
                        onLoadMore={mockOnLoadMore}
                    />
                );

                await user.click(
                    screen.getByRole("button", { name: "View more" })
                );

                expect(mockOnLoadMore).toHaveBeenCalledTimes(1);
                expect(screen.getByText("Loading...")).toBeVisible();
                expect(
                    screen.getByTestId("component-loading-spinner")
                ).toBeInTheDocument();
                expect(
                    screen.queryByRole("button", { name: "View more" })
                ).not.toBeInTheDocument();

                await act(async () => {
                    resolve({}); // Resolve the promise to simulate loading completion
                });

                expect(
                    screen.queryByText("Loading...")
                ).not.toBeInTheDocument();
                expect(
                    screen.queryByRole("button", { name: "View more" })
                ).toBeInTheDocument();
            });

            it("should call onLoadMore when view more button is activated with Enter", async () => {
                const user = userEvent.setup();

                render(
                    <LinkList
                        loadMode="lazy"
                        items={MOCK_ITEMS}
                        loadMore
                        onLoadMore={mockOnLoadMore}
                    />
                );

                screen.getByRole("button", { name: "View more" }).focus();

                await act(() => user.keyboard("{Enter}"));

                expect(mockOnLoadMore).toHaveBeenCalledTimes(1);
            });

            it("should call onLoadMore when view more button is activated with Space", async () => {
                const user = userEvent.setup();

                render(
                    <LinkList
                        loadMode="lazy"
                        items={MOCK_ITEMS}
                        loadMore
                        onLoadMore={mockOnLoadMore}
                    />
                );

                screen.getByRole("button", { name: "View more" }).focus();

                await act(() => user.keyboard(" "));

                expect(mockOnLoadMore).toHaveBeenCalledTimes(1);
            });
        });

        describe("onItemClick", () => {
            it("should call onItemClick when item is clicked", async () => {
                const user = userEvent.setup();

                render(
                    <LinkList
                        loadMode="lazy"
                        items={MOCK_ITEMS}
                        loadMore
                        onLoadMore={mockOnLoadMore}
                        onItemClick={mockOnItemClick}
                    />
                );

                await user.click(screen.getByText("Title 1"));

                expect(mockOnItemClick).toHaveBeenCalledWith(
                    MOCK_ITEMS[0],
                    expect.any(Object)
                );
            });

            it("should call individual item onClick when specified", async () => {
                const user = userEvent.setup();
                const mockSingleOnItemClick = jest.fn();

                const itemsWithOnClick: LinkListItemProps<object>[] = [
                    { ...MOCK_ITEMS[0], onClick: mockSingleOnItemClick },
                    ...MOCK_ITEMS.slice(1),
                ];

                render(
                    <LinkList
                        loadMode="lazy"
                        items={itemsWithOnClick}
                        loadMore
                        onLoadMore={mockOnLoadMore}
                        onItemClick={mockOnItemClick}
                    />
                );

                await user.click(screen.getByText("Title 1"));

                expect(mockSingleOnItemClick).toHaveBeenCalledTimes(1);
                expect(mockOnItemClick).not.toHaveBeenCalled();
            });

            it("should call onItemClick when Enter is pressed on a focused item", async () => {
                const user = userEvent.setup();

                render(
                    <LinkList
                        loadMode="lazy"
                        items={MOCK_ITEMS}
                        loadMore
                        onLoadMore={mockOnLoadMore}
                        onItemClick={mockOnItemClick}
                    />
                );

                await user.tab();
                await user.keyboard("{Enter}");

                expect(mockOnItemClick).toHaveBeenCalledWith(
                    MOCK_ITEMS[0],
                    expect.any(Object)
                );
            });
        });

        describe("Keyboard navigation", () => {
            it("should focus items sequentially when tabbing through", async () => {
                const user = userEvent.setup();

                render(
                    <LinkList
                        loadMode="lazy"
                        items={[MOCK_ITEMS[0]]}
                        loadMore
                        onLoadMore={mockOnLoadMore}
                    />
                );

                await user.tab();
                expect(screen.getByTestId("link-list-items-0")).toHaveFocus();

                await user.tab();
                expect(
                    screen.getByRole("button", { name: "View more" })
                ).toHaveFocus();
            });
        });
    });
});
