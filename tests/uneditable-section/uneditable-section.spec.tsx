import { act, fireEvent, render, screen } from "@testing-library/react";
import {
    UneditableSection,
    UneditableSectionItemProps,
} from "src/uneditable-section";

describe("UneditableSection", () => {
    it("should render the elements correctly", () => {
        render(
            <UneditableSection
                items={MOCK_ITEMS}
                title="Test"
                description="Test description"
            />
        );

        expect(screen.getByText("Test")).toBeInTheDocument();
        expect(screen.getByText("Test description")).toBeInTheDocument();

        for (const item of MOCK_ITEMS) {
            expect(screen.getByText(item.label)).toBeInTheDocument();
            expect(screen.getByText(item.value)).toBeInTheDocument();
        }
    });

    it("should render the custom top section and custom bottom section if specified", () => {
        render(
            <UneditableSection
                items={MOCK_ITEMS}
                title="Test"
                description="Test description"
                topSection={<div data-testid="top-section">Top</div>}
                bottomSection={<div data-testid="bottom-section">Bottom</div>}
            />
        );

        expect(screen.getByTestId("top-section")).toBeInTheDocument();
        expect(screen.getByTestId("bottom-section")).toBeInTheDocument();
    });

    it("should render only the children content if specified", () => {
        render(
            <UneditableSection title="Test">
                <div data-testid="test">Test content</div>
            </UneditableSection>
        );

        expect(screen.getByTestId("test")).toBeInTheDocument();
        expect(screen.queryByText("Test")).not.toBeInTheDocument();
    });

    describe("Masked items", () => {
        it("should render the value label as a clickable", () => {
            const ITEMS: UneditableSectionItemProps[] = [
                {
                    label: "NRIC or FIN",
                    value: "S••••534J",
                    maskState: "masked",
                },
            ];

            render(<UneditableSection items={ITEMS} title="Test" />);

            expect(screen.getByTestId("clickable-label")).toBeInTheDocument();
        });

        it("should NOT render the value label as a clickable if there is no masking", () => {
            const ITEMS: UneditableSectionItemProps[] = [
                {
                    label: "NRIC or FIN",
                    value: "S••••534J",
                },
            ];

            render(<UneditableSection items={ITEMS} title="Test" />);

            expect(screen.getByText("S••••534J")).toBeInTheDocument();
            expect(
                screen.queryByTestId("clickable-label")
            ).not.toBeInTheDocument();
        });

        it("should render the masked indicator", () => {
            const ITEMS: UneditableSectionItemProps[] = [
                {
                    label: "NRIC or FIN",
                    value: "S••••534J",
                    maskState: "masked",
                },
            ];

            render(<UneditableSection items={ITEMS} title="Test" />);

            expect(screen.getByTestId("masked-icon")).toBeInTheDocument();
        });

        it("should render the unmasked indicator", () => {
            const ITEMS: UneditableSectionItemProps[] = [
                {
                    label: "NRIC or FIN",
                    value: "S••••534J",
                    maskState: "unmasked",
                },
            ];

            render(<UneditableSection items={ITEMS} title="Test" />);

            expect(screen.getByTestId("unmasked-icon")).toBeInTheDocument();
        });

        it("should NOT render the masked indicator if disableMaskUnmask is specified", () => {
            const ITEMS: UneditableSectionItemProps[] = [
                {
                    label: "NRIC or FIN",
                    value: "S••••534J",
                    maskState: "masked",
                    disableMaskUnmask: true,
                },
            ];

            render(<UneditableSection items={ITEMS} title="Test" />);

            expect(screen.queryByTestId("masked-icon")).not.toBeInTheDocument();
        });

        it("should render the loading display", () => {
            const ITEMS: UneditableSectionItemProps[] = [
                {
                    label: "NRIC or FIN",
                    value: "S••••534J",
                    maskState: "masked",
                    maskLoadingState: "loading",
                },
            ];

            render(<UneditableSection items={ITEMS} title="Test" />);

            expect(screen.getByText("Retrieving...")).toBeInTheDocument();
        });

        it("should render the error display", () => {
            const ITEMS: UneditableSectionItemProps[] = [
                {
                    label: "NRIC or FIN",
                    value: "S••••534J",
                    maskState: "masked",
                    maskLoadingState: "fail",
                },
            ];

            render(<UneditableSection items={ITEMS} title="Test" />);

            expect(screen.getByText("Error")).toBeInTheDocument();
            expect(screen.getByText("Try again?")).toBeInTheDocument();
        });

        it("should fire the onUnmask and onMask callbacks if specified", () => {
            const ITEMS: UneditableSectionItemProps[] = [
                {
                    label: "NRIC or FIN",
                    value: "S••••534J",
                    maskState: "masked",
                },
            ];
            const onUnmaskFn = jest.fn();
            const onMaskFn = jest.fn();

            render(
                <UneditableSection
                    items={ITEMS}
                    title="Test"
                    onUnmask={onUnmaskFn}
                    onMask={onMaskFn}
                />
            );

            act(() => {
                fireEvent.click(screen.getByTestId("clickable-label"));
            });
            expect(onUnmaskFn).toHaveBeenCalledWith(ITEMS[0]);

            act(() => {
                fireEvent.click(screen.getByTestId("clickable-label"));
            });
            expect(onMaskFn).toHaveBeenCalledWith(ITEMS[0]);
        });

        it("should fire the onTryAgain callback if specified", () => {
            const ITEMS: UneditableSectionItemProps[] = [
                {
                    label: "NRIC or FIN",
                    value: "S••••534J",
                    maskState: "masked",
                    maskLoadingState: "fail",
                },
            ];

            const onTryAgainFn = jest.fn();

            render(
                <UneditableSection
                    items={ITEMS}
                    title="Test"
                    onTryAgain={onTryAgainFn}
                />
            );

            act(() => {
                fireEvent.click(screen.getByTestId("clickable-label"));
            });
            expect(onTryAgainFn).toHaveBeenCalledWith(ITEMS[0]);
        });
    });
});
// =============================================================================
// MOCKS
// =============================================================================
const MOCK_ITEMS: UneditableSectionItemProps[] = [
    {
        label: "Name (as in NRIC or passport)",
        value: "Tom Tan Li Ho",
        displayWidth: "half",
    },
    {
        label: "NRIC or FIN",
        value: "S••••534J",
        displayWidth: "half",
    },
];
