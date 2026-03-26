import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LinkList, LinkListItemProps } from "src/link-list";

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

    describe("customLabels", () => {
        it("should render with custom labels", () => {
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

            expect(screen.getByText("Show more")).toBeVisible();
        });
    });

    describe("Eager variant", () => {
        it("should render all items when maxShown is not specified", () => {
            render(<LinkList items={MOCK_ITEMS} />);

            expect(screen.getByText("Title 1")).toBeVisible();
            expect(screen.getByText("Title 2")).toBeVisible();
            expect(screen.getByText("Title 3")).toBeVisible();
            expect(screen.getByText("Title 4")).toBeVisible();
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

        it("should call onItemClick when item is clicked", async () => {
            const user = userEvent.setup();
            const mockOnItemClick = jest.fn();

            render(
                <LinkList items={MOCK_ITEMS} onItemClick={mockOnItemClick} />
            );

            await user.click(screen.getByText("Title 1"));

            expect(mockOnItemClick).toHaveBeenCalledWith(
                MOCK_ITEMS[0],
                expect.anything()
            );
        });
    });

    describe("Lazy variant", () => {
        it("should render view more button when loadMore is true", () => {
            const mockOnLoadMore = jest.fn();

            render(
                <LinkList
                    loadMode="lazy"
                    items={MOCK_ITEMS}
                    loadMore={true}
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
            const mockOnLoadMore = jest.fn();

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

        it("should call onLoadMore when view more button is clicked", async () => {
            const user = userEvent.setup();
            let resolve: (value: unknown) => void;
            const promise = new Promise((r) => (resolve = r));
            const mockOnLoadMore = jest.fn().mockResolvedValue(promise);

            render(
                <LinkList
                    loadMode="lazy"
                    items={MOCK_ITEMS}
                    loadMore={true}
                    onLoadMore={mockOnLoadMore}
                />
            );

            await user.click(screen.getByRole("button", { name: "View more" }));

            expect(mockOnLoadMore).toHaveBeenCalledTimes(1);
            expect(screen.getByText("Loading...")).toBeVisible();
            expect(
                screen.queryByRole("button", { name: "View more" })
            ).not.toBeInTheDocument();

            await act(async () => {
                resolve({}); // Resolve the promise to simulate loading completion
            });

            expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
            expect(
                screen.queryByRole("button", { name: "View more" })
            ).toBeInTheDocument();
        });

        it("should call onItemClick when item is clicked", async () => {
            const user = userEvent.setup();
            const mockOnItemClick = jest.fn();
            const mockOnLoadMore = jest.fn();

            render(
                <LinkList
                    loadMode="lazy"
                    items={MOCK_ITEMS}
                    loadMore={true}
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
    });
});
