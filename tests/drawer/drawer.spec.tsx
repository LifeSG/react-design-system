import { fireEvent, render, screen } from "@testing-library/react";
import { Drawer } from "../../src";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Drawer", () => {
    it("should render the component", () => {
        const header = "test_1";
        const content = "test_2";
        render(
            <Drawer heading={header} show>
                <div>{content}</div>
            </Drawer>
        );

        expect(screen.queryByLabelText("Close drawer")).toBeVisible();
        expect(screen.queryByText(header)).toBeVisible();
        expect(screen.queryByText(content)).toBeVisible();
    });

    it("should not display contents when the drawer not visible", () => {
        const header = "test_1";
        const content = "test_2";
        render(
            <Drawer heading={header}>
                <div>{content}</div>
            </Drawer>
        );

        expect(screen.queryByLabelText("Close drawer")).not.toBeVisible();
        expect(screen.queryByText(header)).not.toBeVisible();
        expect(screen.queryByText(content)).not.toBeVisible();
    });

    it("should call onClose when the close button is clicked", () => {
        const onClose = jest.fn();
        const onOverlayClick = jest.fn();
        render(
            <Drawer show onClose={onClose} onOverlayClick={onOverlayClick} />
        );

        fireEvent.click(screen.getByLabelText("Close drawer"));

        expect(onClose).toBeCalled();
        expect(onOverlayClick).not.toBeCalled();
    });

    it("should call onOverlayClick when the overlay is clicked", () => {
        const onClose = jest.fn();
        const onOverlayClick = jest.fn();
        render(
            <Drawer show onClose={onClose} onOverlayClick={onOverlayClick} />
        );

        fireEvent.click(screen.getByTestId("overlay-wrapper"));

        expect(onClose).not.toBeCalled();
        expect(onOverlayClick).toBeCalled();
    });
});
