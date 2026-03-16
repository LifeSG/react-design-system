import { render, screen } from "@testing-library/react";
import { useMediaQuery } from "react-responsive";
import { ProgressIndicator } from "src/progress-indicator";

jest.mock("react-responsive", () => ({
    useMediaQuery: jest.fn(() => false),
}));

describe("ProgressIndicator", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        (useMediaQuery as jest.Mock).mockReturnValue(false);
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
});
