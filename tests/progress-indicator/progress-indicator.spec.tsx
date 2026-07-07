import { render, screen } from "@testing-library/react";
import { ProgressIndicator } from "src/progress-indicator";
import { useMaxWidthMediaQuery } from "src/theme";

jest.mock("src/theme", () => {
    const originalModule = jest.requireActual("src/theme");
    return {
        __esModule: true,
        ...originalModule,
        useMaxWidthMediaQuery: jest.fn(() => false),
    };
});

const STEPS = ["Test One", "Test Two", "Test Three"];

describe("ProgressIndicator", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.mocked(useMaxWidthMediaQuery).mockReturnValue(false);
    });

    it("should include hidden status text for each step in desktop view", () => {
        render(
            <ProgressIndicator
                steps={["Step 1", "Step 2", "Step 3"]}
                currentIndex={1}
            />
        );

        expect(screen.getByText("Completed step")).toBeInTheDocument();
        expect(screen.getByText("Current step")).toBeInTheDocument();
        expect(screen.getByText("Upcoming step")).toBeInTheDocument();
    });

    it("should mark only the current step with aria-current", () => {
        render(<ProgressIndicator steps={STEPS} currentIndex={1} />);

        const currentSteps = document.querySelectorAll('[aria-current="true"]');
        expect(currentSteps).toHaveLength(1);
        expect(currentSteps[0]).toHaveTextContent("Test Two");
    });

    it("should use displayExtractor when provided", () => {
        const items = [{ label: "One" }, { label: "Two" }];
        render(
            <ProgressIndicator
                steps={items}
                currentIndex={0}
                displayExtractor={(item) => item.label}
            />
        );

        expect(screen.getByText("One")).toBeInTheDocument();
        expect(screen.getByText("Two")).toBeInTheDocument();
    });

    describe("tablet view", () => {
        beforeEach(() => {
            jest.mocked(useMaxWidthMediaQuery).mockReturnValue(true);
        });

        it("should render step counter text and only the current step title", () => {
            render(<ProgressIndicator steps={STEPS} currentIndex={1} />);

            expect(screen.getByText("Step 2 of 3")).toBeInTheDocument();

            expect(screen.getByText("Test Two")).toBeInTheDocument();
            expect(screen.queryByText("Test One")).not.toBeInTheDocument();
            expect(screen.queryByText("Test Three")).not.toBeInTheDocument();
        });

        it("should update counter text when currentIndex changes", () => {
            const { rerender } = render(
                <ProgressIndicator steps={STEPS} currentIndex={0} />
            );
            expect(screen.getByText("Step 1 of 3")).toBeInTheDocument();

            rerender(<ProgressIndicator steps={STEPS} currentIndex={2} />);
            expect(screen.getByText("Step 3 of 3")).toBeInTheDocument();
        });
    });
});
