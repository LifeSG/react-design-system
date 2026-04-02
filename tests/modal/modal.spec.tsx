import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "src/modal";

describe("Modal", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render the component", () => {
        render(
            <Modal show>
                <Modal.Box>
                    <div data-testid="test-content" />
                </Modal.Box>
            </Modal>
        );

        expect(screen.getByTestId("modal")).toBeInTheDocument();
        expect(screen.getByTestId("modal-box")).toBeInTheDocument();
        expect(screen.getByTestId("close-button")).toBeInTheDocument();
        expect(screen.getByTestId("test-content")).toBeInTheDocument();
    });

    it("should render custom Modal children", () => {
        render(
            <Modal show>
                <div data-testid="custom-content" />
            </Modal>
        );

        expect(screen.getByTestId("custom-content")).toBeInTheDocument();
    });

    it("should trigger onOverlayClick when overlay is clicked", () => {
        const mockOverlayClick = jest.fn();

        render(
            <Modal show onOverlayClick={mockOverlayClick}>
                <Modal.Box>
                    <div />
                </Modal.Box>
            </Modal>
        );

        fireEvent.click(screen.getByTestId("overlay-wrapper"));

        expect(mockOverlayClick).toHaveBeenCalledTimes(1);
    });

    it("should trigger onClose when close button is clicked", () => {
        const mockClose = jest.fn();
        const mockOverlayClick = jest.fn();

        render(
            <Modal show onOverlayClick={mockOverlayClick}>
                <Modal.Box onClose={mockClose}>
                    <div />
                </Modal.Box>
            </Modal>
        );

        fireEvent.click(screen.getByTestId("close-button"));

        expect(mockClose).toHaveBeenCalledTimes(1);
        expect(mockOverlayClick).not.toHaveBeenCalled();
    });

    it("should not render close button when showCloseButton is false", () => {
        render(
            <Modal show>
                <Modal.Box showCloseButton={false}>
                    <div />
                </Modal.Box>
            </Modal>
        );

        expect(screen.queryByTestId("close-button")).not.toBeInTheDocument();
    });
});
