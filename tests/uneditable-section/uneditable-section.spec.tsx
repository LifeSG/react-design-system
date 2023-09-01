import { render, screen } from "@testing-library/react";
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
