import { render, screen } from "@testing-library/react";
import { FormCustomField } from "src/form/form-custom-field";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("FormCustomField", () => {
    it("should render children", () => {
        render(
            <FormCustomField>
                <input data-testid="child" />
            </FormCustomField>
        );

        expect(screen.getByTestId("child")).toBeInTheDocument();
    });

    it("should render container with data-testid", () => {
        render(
            <FormCustomField data-testid="my-field">
                <input />
            </FormCustomField>
        );

        expect(screen.getByTestId("my-field")).toBeInTheDocument();
    });

    it("should render string label", () => {
        render(
            <FormCustomField label="Full name">
                <input />
            </FormCustomField>
        );

        expect(screen.getByText("Full name")).toBeInTheDocument();
    });

    it("should render label with subtitle", () => {
        render(
            <FormCustomField
                label={{
                    children: "Full name",
                    subtitle: "As shown on your ID",
                }}
            >
                <input />
            </FormCustomField>
        );

        expect(screen.getByText("Full name")).toBeInTheDocument();
        expect(screen.getByText("As shown on your ID")).toBeInTheDocument();
    });

    it("should render error message", () => {
        render(
            <FormCustomField errorMessage="This field is required">
                <input />
            </FormCustomField>
        );

        expect(screen.getByText("This field is required")).toBeInTheDocument();
    });

    it("should render error message with data-error-testid", () => {
        render(
            <FormCustomField
                data-error-testid="custom-error"
                errorMessage="Required"
            >
                <input />
            </FormCustomField>
        );

        expect(screen.getByTestId("custom-error")).toBeInTheDocument();
    });

    it("should trim whitespace from string error message", () => {
        render(
            <FormCustomField errorMessage="  Required  ">
                <input />
            </FormCustomField>
        );

        expect(screen.getByText("Required")).toBeInTheDocument();
    });

    describe("validate accessibility", () => {
        it("should be invalid when error message is present", () => {
            render(
                <FormCustomField errorMessage="Error">
                    <input data-testid="child" />
                </FormCustomField>
            );

            expect(screen.getByTestId("child")).toBeInvalid();
        });

        it("should be valid when no error message", () => {
            render(
                <FormCustomField>
                    <input data-testid="child" />
                </FormCustomField>
            );

            expect(screen.getByTestId("child")).toBeValid();
        });

        it("should have accessible name from label", () => {
            render(
                <FormCustomField id="my-field" label="Full name">
                    <input data-testid="child" />
                </FormCustomField>
            );

            expect(screen.getByTestId("child")).toHaveAccessibleName(
                "Full name"
            );
        });

        it("should not have accessible name when no label is provided", () => {
            render(
                <FormCustomField id="my-field">
                    <input data-testid="child" />
                </FormCustomField>
            );

            expect(screen.getByTestId("child")).not.toHaveAccessibleName();
        });

        it("should have accessible description from error message", () => {
            render(
                <FormCustomField id="my-field" errorMessage="Required">
                    <input data-testid="child" />
                </FormCustomField>
            );

            expect(screen.getByTestId("child")).toHaveAccessibleDescription(
                "Required"
            );
        });

        it("should have accessible description from label subtitle", () => {
            render(
                <FormCustomField
                    id="my-field"
                    label={{ children: "Full name", subtitle: "Hint text" }}
                >
                    <input data-testid="child" />
                </FormCustomField>
            );

            expect(screen.getByTestId("child")).toHaveAccessibleDescription(
                "Hint text"
            );
        });

        it("should have accessible description combining error message and subtitle", () => {
            render(
                <FormCustomField
                    id="my-field"
                    label={{ children: "Full name", subtitle: "Hint text" }}
                    errorMessage="Required"
                >
                    <input data-testid="child" />
                </FormCustomField>
            );

            expect(screen.getByTestId("child")).toHaveAccessibleDescription(
                "Required Hint text"
            );
        });

        it("should not have accessible description when no error and no subtitle", () => {
            render(
                <FormCustomField id="my-field" label="Full name">
                    <input data-testid="child" />
                </FormCustomField>
            );

            expect(
                screen.getByTestId("child")
            ).not.toHaveAccessibleDescription();
        });
    });
});
