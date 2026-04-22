import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Drawer } from "../../src";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Drawer", () => {
    it("should render the component", async () => {
        const header = "test_1";
        const content = "test_2";
        render(
            <Drawer heading={header} show>
                <div>{content}</div>
            </Drawer>
        );

        await waitFor(() => {
            expect(screen.getByLabelText("Close drawer")).toBeVisible();
        });
        expect(screen.getByText(header)).toBeVisible();
        expect(screen.getByText(content)).toBeVisible();
    });

    it("should not display contents when the drawer not visible", () => {
        const header = "test_1";
        const content = "test_2";
        render(
            <Drawer heading={header}>
                <div>{content}</div>
            </Drawer>
        );

        expect(screen.queryByLabelText("Close drawer")).not.toBeInTheDocument();
        expect(screen.queryByText(header)).not.toBeInTheDocument();
        expect(screen.queryByText(content)).not.toBeInTheDocument();
    });

    it("should call onClose when the close button is clicked", () => {
        const onClose = jest.fn();
        const onOverlayClick = jest.fn();
        render(
            <Drawer show onClose={onClose} onOverlayClick={onOverlayClick} />
        );

        fireEvent.click(screen.getByLabelText("Close drawer"));

        expect(onClose).toHaveBeenCalled();
        expect(onOverlayClick).not.toHaveBeenCalled();
    });

    it("should call onOverlayClick when the overlay is clicked", () => {
        const onClose = jest.fn();
        const onOverlayClick = jest.fn();
        render(
            <Drawer show onClose={onClose} onOverlayClick={onOverlayClick} />
        );

        fireEvent.click(screen.getByTestId("overlay-wrapper"));

        expect(onClose).not.toHaveBeenCalled();
        expect(onOverlayClick).toHaveBeenCalled();
    });

    it("should call onClose when Escape key is pressed", async () => {
        const onClose = jest.fn();
        render(<Drawer show onClose={onClose} heading="Test" />);

        await waitFor(() => {
            expect(screen.getByLabelText("Close drawer")).toBeVisible();
        });

        fireEvent.keyDown(document, { key: "Escape", code: "Escape" });

        expect(onClose).toHaveBeenCalled();
    });
});
