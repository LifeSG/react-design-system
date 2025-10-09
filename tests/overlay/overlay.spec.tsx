import { render, waitFor } from "@testing-library/react";
import { Overlay } from "../../src/overlay";
import { SimpleIdGenerator } from "../../src/util";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Overlay", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        Object.defineProperty(window, "scrollTo", {
            value: jest.fn(),
            writable: true,
        });
        jest.spyOn(window.navigator, "userAgent", "get").mockReturnValue(
            "Android"
        );
        jest.spyOn(SimpleIdGenerator, "generate").mockReturnValue("id");
    });

    describe("scroll lock for non-iOS devices", () => {
        it("should apply scroll lock when overlay is visible", async () => {
            render(
                <Overlay show>
                    <div data-testid="test-content" />
                </Overlay>
            );

            await waitFor(async () => {
                // assert overlay style is rendered
                expect([...document.body.classList.values()]).toEqual([
                    "lifesg-ds-overlay-open",
                ]);

                // assert overlay is tracked
                expect(document.body.dataset.lifesgDsOverlayOrder).toEqual(
                    "id"
                );
            });
        });

        it("should clean up scroll lock on show=false", async () => {
            const { rerender } = render(
                <Overlay show>
                    <div data-testid="test-content" />
                </Overlay>
            );

            await waitFor(async () => {
                // assert overlay style is rendered
                expect([...document.body.classList.values()]).toEqual([
                    "lifesg-ds-overlay-open",
                ]);

                // assert overlay is tracked
                expect(document.body.dataset.lifesgDsOverlayOrder).toEqual(
                    "id"
                );
            });

            rerender(
                <Overlay show={false}>
                    <div data-testid="test-content" />
                </Overlay>
            );

            await waitFor(async () => {
                expect([...document.body.classList.values()]).toEqual([]);
                expect(document.body.dataset.lifesgDsOverlayOrder).toEqual("");
            });
        });

        it("should clean up scroll lock on unmount", async () => {
            const { rerender } = render(
                <Overlay show>
                    <div data-testid="test-content" />
                </Overlay>
            );

            await waitFor(async () => {
                // assert overlay style is rendered
                expect([...document.body.classList.values()]).toEqual([
                    "lifesg-ds-overlay-open",
                ]);

                // assert overlay is tracked
                expect(document.body.dataset.lifesgDsOverlayOrder).toEqual(
                    "id"
                );
            });

            rerender(<></>);

            await waitFor(async () => {
                expect([...document.body.classList.values()]).toEqual([]);
                expect(document.body.dataset.lifesgDsOverlayOrder).toEqual("");
            });
        });
    });

    describe("scroll lock for iOS devices", () => {
        beforeEach(() => {
            jest.spyOn(window.navigator, "userAgent", "get").mockReturnValue(
                "iPhone"
            );
        });

        it("should apply advanced scroll lock for iOS devices when overlay is visible", async () => {
            render(
                <Overlay show>
                    <div data-testid="test-content" />
                </Overlay>
            );

            await waitFor(async () => {
                // assert overlay style is rendered
                expect([...document.body.classList.values()]).toEqual([
                    "lifesg-ds-overlay-scroll-lock",
                    "lifesg-ds-overlay-open",
                ]);

                // assert overlay is tracked
                expect(document.body.dataset.lifesgDsOverlayOrder).toEqual(
                    "id"
                );
            });
        });

        it("should clean up scroll lock on show=false", async () => {
            const { rerender } = render(
                <Overlay show>
                    <div data-testid="test-content" />
                </Overlay>
            );

            await waitFor(async () => {
                // assert overlay style is rendered
                expect([...document.body.classList.values()]).toEqual([
                    "lifesg-ds-overlay-scroll-lock",
                    "lifesg-ds-overlay-open",
                ]);

                // assert overlay is tracked
                expect(document.body.dataset.lifesgDsOverlayOrder).toEqual(
                    "id"
                );
            });

            rerender(
                <Overlay show={false}>
                    <div data-testid="test-content" />
                </Overlay>
            );

            await waitFor(async () => {
                expect([...document.body.classList.values()]).toEqual([]);
                expect(document.body.dataset.lifesgDsOverlayOrder).toEqual("");
            });
        });

        it("should clean up scroll lock on unmount", async () => {
            const { rerender } = render(
                <Overlay show>
                    <div data-testid="test-content" />
                </Overlay>
            );

            await waitFor(async () => {
                // assert overlay style is rendered
                expect([...document.body.classList.values()]).toEqual([
                    "lifesg-ds-overlay-scroll-lock",
                    "lifesg-ds-overlay-open",
                ]);

                // assert overlay is tracked
                expect(document.body.dataset.lifesgDsOverlayOrder).toEqual(
                    "id"
                );
            });

            rerender(<></>);

            await waitFor(async () => {
                expect([...document.body.classList.values()]).toEqual([]);
                expect(document.body.dataset.lifesgDsOverlayOrder).toEqual("");
            });
        });
    });

    it("should manage multiple overlays", async () => {
        jest.spyOn(SimpleIdGenerator, "generate")
            .mockReturnValueOnce("id-1")
            .mockReturnValueOnce("id-2");

        const { rerender } = render(
            <>
                <Overlay show={false}>
                    <div data-testid="test-content" />
                </Overlay>
                <Overlay show={false}>
                    <div data-testid="test-content" />
                </Overlay>
            </>
        );

        rerender(
            <>
                <Overlay show={true}>
                    <div data-testid="test-content" />
                </Overlay>
                <Overlay show={false}>
                    <div data-testid="test-content" />
                </Overlay>
            </>
        );

        await waitFor(async () => {
            expect([...document.body.classList.values()]).toEqual([
                "lifesg-ds-overlay-open",
            ]);
            expect(document.body.dataset.lifesgDsOverlayOrder).toEqual("id-1");
        });

        rerender(
            <>
                <Overlay show={true}>
                    <div data-testid="test-content" />
                </Overlay>
                <Overlay show={true}>
                    <div data-testid="test-content" />
                </Overlay>
            </>
        );

        await waitFor(async () => {
            expect(document.body.dataset.lifesgDsOverlayOrder).toEqual(
                "id-1,id-2"
            );
        });

        rerender(
            <>
                <Overlay show={false}>
                    <div data-testid="test-content" />
                </Overlay>
                <Overlay show={true}>
                    <div data-testid="test-content" />
                </Overlay>
            </>
        );

        await waitFor(async () => {
            expect(document.body.dataset.lifesgDsOverlayOrder).toEqual("id-2");
        });
    });
});
