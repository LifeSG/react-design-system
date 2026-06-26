import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormErrorMessage, FormLabel } from "src/form/form-label";

import { setupRequestAnimationFrameMock } from "../_common";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("FormLabel", () => {
    beforeEach(() => {
        jest.resetAllMocks();

        setupRequestAnimationFrameMock();
    });

    it("should render children text", () => {
        render(<FormLabel>First name</FormLabel>);

        expect(screen.getByText("First name")).toBeInTheDocument();
    });

    it("should render with data-testid", () => {
        render(<FormLabel data-testid="my-label">First name</FormLabel>);

        expect(screen.getByTestId("my-label")).toBeInTheDocument();
    });

    it("should render id on the label element", () => {
        render(<FormLabel id="name-label">First name</FormLabel>);

        expect(screen.getByText("First name").closest("label")).toHaveAttribute(
            "id",
            "name-label"
        );
    });

    it("should apply consumer className to top-level element", () => {
        render(
            <FormLabel data-testid="my-label" className="custom-class">
                First name
            </FormLabel>
        );

        expect(screen.getByTestId("my-label")).toHaveClass("custom-class");
    });

    it("should apply style to top-level element", () => {
        render(
            <FormLabel data-testid="my-label" style={{ marginTop: "1.1rem" }}>
                First name
            </FormLabel>
        );

        expect(screen.getByTestId("my-label")).toHaveStyle({
            marginTop: "1.1rem",
        });
    });

    describe("subtitle", () => {
        it("should render string subtitle", () => {
            render(
                <FormLabel data-testid="my-label" subtitle="This is a subtitle">
                    First name
                </FormLabel>
            );

            expect(screen.getByText("This is a subtitle")).toBeInTheDocument();
        });

        it("should set testid on subtitle derived from parent testid", () => {
            render(
                <FormLabel data-testid="my-label" subtitle="This is a subtitle">
                    First name
                </FormLabel>
            );

            expect(screen.getByTestId("my-label-subtitle")).toBeInTheDocument();
        });

        it("should render JSX subtitle", () => {
            render(
                <FormLabel
                    subtitle={<span data-testid="custom-subtitle">Custom</span>}
                >
                    First name
                </FormLabel>
            );

            expect(screen.getByTestId("custom-subtitle")).toBeInTheDocument();
            expect(screen.getByText("Custom")).toBeInTheDocument();
        });
    });

    describe.only("addon", () => {
        it("should render popover addon when addon type is popover", () => {
            render(
                <FormLabel
                    addon={{
                        type: "popover",
                        content: "More info",
                        "data-testid": "popover-addon",
                    }}
                >
                    Label with addon
                </FormLabel>
            );

            expect(screen.getByTestId("popover-icon")).toBeInTheDocument();
        });

        it("should not render addon when addon type is absent", () => {
            render(
                <FormLabel addon={{ content: "More info" }}>
                    Label with addon
                </FormLabel>
            );

            expect(
                screen.queryByTestId("popover-icon")
            ).not.toBeInTheDocument();
        });

        it("should open popover content on addon click", async () => {
            render(
                <FormLabel
                    addon={{
                        type: "popover",
                        content: "Additional information",
                        "data-testid": "popover-addon",
                    }}
                >
                    Label with addon
                </FormLabel>
            );

            await act(async () => {
                await userEvent.click(screen.getByTestId("popover-icon"));
            });

            expect(
                screen.getByText("Additional information")
            ).toBeInTheDocument();
        });

        it("should close popover on Escape key", async () => {
            render(
                <FormLabel
                    addon={{
                        type: "popover",
                        content: "Additional information",
                    }}
                >
                    Label with addon
                </FormLabel>
            );

            await act(async () => {
                await userEvent.click(screen.getByTestId("popover-icon"));
            });
            expect(
                screen.getByText("Additional information")
            ).toBeInTheDocument();

            await act(async () => {
                await userEvent.keyboard("{Escape}");
            });
            expect(
                screen.queryByText("Additional information")
            ).not.toBeInTheDocument();
        });

        it("should close popover on click outside", async () => {
            render(
                <>
                    <FormLabel
                        addon={{
                            type: "popover",
                            content: "Additional information",
                        }}
                    >
                        Label with addon
                    </FormLabel>
                    <button data-testid="outside">Outside</button>
                </>
            );

            await act(async () => {
                await userEvent.click(screen.getByTestId("popover-icon"));
            });
            expect(
                screen.getByText("Additional information")
            ).toBeInTheDocument();

            await act(async () => {
                await userEvent.click(screen.getByTestId("outside"));
            });
            expect(
                screen.queryByText("Additional information")
            ).not.toBeInTheDocument();
        });
    });
});

describe("FormErrorMessage", () => {
    it("should render children", () => {
        render(<FormErrorMessage>This field is required</FormErrorMessage>);
        expect(document.querySelector("svg")).toBeInTheDocument();
        expect(screen.getByText("This field is required")).toBeInTheDocument();
    });

    it("should pass through html props", () => {
        render(
            <FormErrorMessage data-testid="error-msg" id="error-msg-id">
                This field is required
            </FormErrorMessage>
        );

        const el = screen.getByTestId("error-msg");
        expect(el).toBeInTheDocument();
        expect(el).toHaveAttribute("id", "error-msg-id");
    });
});
