import { fireEvent, render, screen } from "@testing-library/react";
import { ModalV2 } from "src/modal-v2";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("ModalV2", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render the component", () => {
        render(
            <ModalV2 show>
                <ModalV2.Card>
                    <ModalV2.CloseButton />
                    <ModalV2.Content>
                        <div data-testid="test-content" />
                    </ModalV2.Content>
                    <ModalV2.Footer
                        primaryButton={<button data-testid="test-button" />}
                    />
                </ModalV2.Card>
            </ModalV2>
        );

        // assert slots are rendered
        expect(screen.getByTestId("modal-close-button")).toBeInTheDocument();
        expect(screen.getByTestId("modal-content")).toBeInTheDocument();
        expect(screen.getByTestId("modal-footer")).toBeInTheDocument();

        // assert content of slots are rendered
        expect(screen.getByTestId("test-content")).toBeInTheDocument();
        expect(screen.getByTestId("test-button")).toBeInTheDocument();
    });

    it("should not render unknown slots in Modal.Card", () => {
        render(
            <ModalV2 show>
                <ModalV2.Card>
                    <div data-testid="test-content" />
                </ModalV2.Card>
            </ModalV2>
        );

        expect(screen.queryByTestId("test-content")).not.toBeInTheDocument();
    });

    it("should render custom Modal children", () => {
        render(
            <ModalV2 show>
                <div data-testid="test-content" />
            </ModalV2>
        );

        expect(screen.getByTestId("test-content")).toBeInTheDocument();
    });

    it("should trigger onOverlayClick when overlay is clicked", () => {
        const mockClose = jest.fn();
        const mockOverlayClick = jest.fn();
        render(
            <ModalV2 show onOverlayClick={mockOverlayClick} onClose={mockClose}>
                <ModalV2.Card>
                    <ModalV2.CloseButton />
                </ModalV2.Card>
            </ModalV2>
        );

        fireEvent.click(screen.getByTestId("overlay-wrapper"));

        expect(mockOverlayClick).toHaveBeenCalled();
        expect(mockClose).not.toHaveBeenCalled();
    });

    it("should trigger onClose when close button is clicked", () => {
        const mockClose = jest.fn();
        const mockOverlayClick = jest.fn();
        render(
            <ModalV2 show onOverlayClick={mockOverlayClick} onClose={mockClose}>
                <ModalV2.Card>
                    <ModalV2.CloseButton />
                </ModalV2.Card>
            </ModalV2>
        );

        fireEvent.click(screen.getByTestId("close-button"));

        expect(mockClose).toHaveBeenCalled();
        expect(mockOverlayClick).not.toHaveBeenCalled();
    });
});
