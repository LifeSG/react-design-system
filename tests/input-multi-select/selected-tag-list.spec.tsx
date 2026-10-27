import { fireEvent, render, screen } from "@testing-library/react";
import { SelectedTagList } from "src/input-multi-select/selected-tag-list";

const TAGS_PER_ROW = 2;

/**
 * jsdom has no layout, so rows are simulated: each tag is placed on a row of
 * `tagsPerRow` tags, and the "and X more" tag follows the same rule
 */
const mockRows = (tagsPerRow: number) => {
    return jest
        .spyOn(HTMLElement.prototype, "offsetTop", "get")
        .mockImplementation(function (this: HTMLElement) {
            const siblings = Array.from(this.parentElement?.children ?? []);
            return Math.floor(siblings.indexOf(this) / tagsPerRow) * 30;
        });
};

const createItems = (count: number, onRemove = jest.fn()) =>
    Array.from({ length: count }, (_, index) => ({
        key: `${index}`,
        label: `Option ${index + 1}`,
        onRemove: () => onRemove(index),
    }));

describe("SelectedTagList", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("should render a tag for each item with a remove button", () => {
        render(<SelectedTagList items={createItems(3)} removable />);

        expect(screen.getAllByRole("button")).toHaveLength(3);
        expect(
            screen.getByRole("button", { name: "Remove Option 2" })
        ).toBeInTheDocument();
    });

    it("should not render remove buttons when not removable", () => {
        render(<SelectedTagList items={createItems(3)} removable={false} />);

        expect(screen.queryByRole("button")).not.toBeInTheDocument();
        expect(screen.getByText("Option 1")).toBeInTheDocument();
    });

    it("should call onRemove without propagating the click", () => {
        const onRemove = jest.fn();
        const onParentClick = jest.fn();
        render(
            <div onClick={onParentClick}>
                <SelectedTagList items={createItems(3, onRemove)} removable />
            </div>
        );

        fireEvent.click(
            screen.getByRole("button", { name: "Remove Option 2" })
        );

        expect(onRemove).toHaveBeenCalledTimes(1);
        expect(onRemove).toHaveBeenCalledWith(1);
        expect(onParentClick).not.toHaveBeenCalled();
    });

    it("should show every tag when they fit in the max rows", () => {
        mockRows(TAGS_PER_ROW);
        render(
            <SelectedTagList items={createItems(8)} removable maxRows={4} />
        );

        expect(screen.getAllByRole("button")).toHaveLength(8);
        expect(screen.queryByTestId("more-tag")).not.toBeInTheDocument();
    });

    it("should collapse the overflow into an 'and X more' tag", () => {
        mockRows(TAGS_PER_ROW);
        render(
            <SelectedTagList items={createItems(12)} removable maxRows={4} />
        );

        // the "and X more" tag takes the last slot of row 4
        expect(screen.getAllByRole("button")).toHaveLength(7);
        expect(screen.getByTestId("more-tag")).toHaveTextContent("and 5 more");
    });

    it("should not expose the 'and X more' tag as a button", () => {
        mockRows(TAGS_PER_ROW);
        render(
            <SelectedTagList items={createItems(12)} removable maxRows={4} />
        );

        expect(screen.getByTestId("more-tag").closest("button")).toBeNull();
    });

    it("should recompute when the items change", () => {
        mockRows(TAGS_PER_ROW);
        const { rerender } = render(
            <SelectedTagList items={createItems(12)} removable maxRows={4} />
        );
        expect(screen.getByTestId("more-tag")).toBeInTheDocument();

        rerender(
            <SelectedTagList items={createItems(3)} removable maxRows={4} />
        );

        expect(screen.queryByTestId("more-tag")).not.toBeInTheDocument();
        expect(screen.getAllByRole("button")).toHaveLength(3);
    });
});
