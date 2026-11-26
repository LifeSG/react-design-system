import { render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import { ExpandableElement } from "src/shared/dropdown-list/expandable-element";

const LISTBOX_ID = "test-listbox";

type Props = Partial<ComponentProps<typeof ExpandableElement>>;

const buildElement = (props: Props = {}) => (
    <>
        <span id="label">Label</span>
        <ExpandableElement
            disabled={false}
            expanded={false}
            listboxId={LISTBOX_ID}
            popupRole="listbox"
            readOnly={false}
            {...props}
        >
            {props.children ?? <span data-testid="value">2 selected</span>}
        </ExpandableElement>
    </>
);

const renderElement = (props: Props = {}) => render(buildElement(props));

describe("ExpandableElement", () => {
    describe("accessible name", () => {
        it("should be named by aria-labelledby only, without the value", () => {
            renderElement({ "aria-labelledby": "label" });

            expect(screen.getByRole("combobox")).toHaveAccessibleName("Label");
        });

        it("should be named by aria-label only, without the value", () => {
            renderElement({ "aria-label": "Custom" });

            expect(screen.getByRole("combobox")).toHaveAccessibleName("Custom");
        });

        it("should have no name when unlabelled", () => {
            renderElement();

            expect(screen.getByRole("combobox")).toHaveAccessibleName("");
        });
    });

    describe("value and content", () => {
        it("should render children inside the combobox", () => {
            renderElement({ "aria-labelledby": "label" });

            const combobox = screen.getByRole("combobox");
            expect(combobox).toHaveTextContent("2 selected");
            expect(combobox).toContainElement(screen.getByTestId("value"));
        });

        it("should render content outside the combobox and expose it", () => {
            renderElement({
                content: <button type="button">Remove A</button>,
            });

            const removeButton = screen.getByRole("button", {
                name: "Remove A",
            });
            expect(screen.getByRole("combobox")).not.toContainElement(
                removeButton
            );
        });
    });

    describe("state attributes", () => {
        it("should only reference the listbox when expanded", () => {
            const { rerender } = renderElement();
            const combobox = screen.getByRole("combobox");

            expect(combobox).toHaveAttribute("aria-expanded", "false");
            expect(combobox).not.toHaveAttribute("aria-controls");

            rerender(buildElement({ expanded: true }));

            expect(combobox).toHaveAttribute("aria-expanded", "true");
            expect(combobox).toHaveAttribute("aria-controls", LISTBOX_ID);
            expect(combobox).toHaveAttribute("aria-haspopup", "listbox");
        });

        it("should reflect disabled and read-only states", () => {
            renderElement({ disabled: true, readOnly: true });
            const combobox = screen.getByRole("combobox");

            expect(combobox).toHaveAttribute("aria-disabled", "true");
            expect(combobox).toHaveAttribute("aria-readonly", "true");
        });
    });
});
