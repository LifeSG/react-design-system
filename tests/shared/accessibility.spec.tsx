import { render, screen } from "@testing-library/react";
import {
    concatIds,
    inertValue,
    VisuallyHidden,
} from "src/shared/accessibility";
import { isReact19 } from "src/util";

jest.mock("../../src/util", () => ({
    ...jest.requireActual("../../src/util"),
    isReact19: jest.fn(),
}));

describe("shared/accessibility", () => {
    const mockIsReact19 = jest.mocked(isReact19);

    beforeEach(() => {
        mockIsReact19.mockReset();
    });

    describe("VisuallyHidden", () => {
        it("should render children and forward accessibility props", () => {
            render(
                <VisuallyHidden
                    data-testid="visually-hidden"
                    id="a11y-message"
                    aria-live="polite"
                    role="status"
                >
                    Screen reader announcement
                </VisuallyHidden>
            );

            const element = screen.getByTestId("visually-hidden");
            expect(element).toHaveTextContent("Screen reader announcement");
            expect(element).toHaveAttribute("id", "a11y-message");
            expect(element).toHaveAttribute("aria-live", "polite");
            expect(element).toHaveAttribute("role", "status");
        });

        it("should apply generated class and preserve custom className", () => {
            render(
                <VisuallyHidden
                    data-testid="visually-hidden"
                    className="custom-class"
                />
            );

            const className =
                screen.getByTestId("visually-hidden").getAttribute("class") ||
                "";
            const classes = className.split(" ").filter(Boolean);

            expect(classes.length).toBeGreaterThanOrEqual(2);
            expect(classes).toContain("custom-class");
        });
    });

    describe("inertValue", () => {
        it("should return booleans in React 19+", () => {
            mockIsReact19.mockReturnValue(true);

            expect(inertValue(true)).toBe(true);
            expect(inertValue(false)).toBe(false);
            expect(inertValue(undefined)).toBeUndefined();
        });

        it("should return string value for truthy input in React 18 and below", () => {
            mockIsReact19.mockReturnValue(false);

            expect(inertValue(true)).toBe("true");
        });

        it("should return undefined for falsey input in React 18 and below", () => {
            mockIsReact19.mockReturnValue(false);

            expect(inertValue(false)).toBeUndefined();
            expect(inertValue(undefined)).toBeUndefined();
        });
    });

    describe("concatIds", () => {
        it("should join provided ids with spaces", () => {
            expect(concatIds("label-id", "hint-id", "error-id")).toBe(
                "label-id hint-id error-id"
            );
        });

        it("should ignore undefined and empty ids", () => {
            expect(concatIds(undefined, "hint-id", "", "error-id")).toBe(
                "hint-id error-id"
            );
        });

        it("should return an empty string when no ids are provided", () => {
            expect(concatIds(undefined, undefined)).toBe("");
        });
    });
});
