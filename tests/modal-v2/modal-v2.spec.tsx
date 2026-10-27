import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

    describe("scroll restoration for iOS devices", () => {
        beforeEach(() => {
            Object.defineProperty(window, "scrollTo", {
                value: jest.fn(),
                writable: true,
            });
            Object.defineProperty(window, "scrollY", {
                value: 500,
                writable: true,
                configurable: true,
            });
            jest.spyOn(window.navigator, "userAgent", "get").mockReturnValue(
                "iPhone"
            );
        });

        afterEach(() => {
            jest.restoreAllMocks();
        });

        it("should restore scroll position on close by default", async () => {
            const { rerender } = render(
                <ModalV2 show>
                    <div data-testid="test-content" />
                </ModalV2>
            );

            rerender(
                <ModalV2 show={false}>
                    <div data-testid="test-content" />
                </ModalV2>
            );

            await waitFor(() => {
                expect(window.scrollTo).toHaveBeenCalledWith({ top: 500 });
            });
        });

        it("should not restore scroll position on close if disableScrollRestore is set", async () => {
            const { rerender } = render(
                <ModalV2 show disableScrollRestore>
                    <div data-testid="test-content" />
                </ModalV2>
            );

            rerender(
                <ModalV2 show={false} disableScrollRestore>
                    <div data-testid="test-content" />
                </ModalV2>
            );

            await new Promise((resolve) => requestAnimationFrame(resolve));

            expect(window.scrollTo).not.toHaveBeenCalled();
        });
    });
});
