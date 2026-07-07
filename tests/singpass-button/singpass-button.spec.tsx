import { render, screen } from "@testing-library/react";
import React from "react";
import { SingpassButton } from "src/singpass-button";

describe("SingpassButton", () => {
    describe("default", () => {
        it("should render button with default testid", () => {
            render(<SingpassButton />);
            expect(screen.getByTestId("singpass-button")).toBeInTheDocument();
        });

        it("should render with custom data-testid", () => {
            render(<SingpassButton data-testid="sp-btn" />);
            expect(screen.getByTestId("sp-btn")).toBeInTheDocument();
        });

        it("should have accessible aria-label", () => {
            render(<SingpassButton />);
            expect(
                screen.getByRole("button", { name: "Log in with Singpass" })
            ).toBeInTheDocument();
        });

        it("should render white-filled logo by default", () => {
            render(<SingpassButton />);
            expect(screen.getByRole("img")).toHaveAttribute(
                "src",
                expect.stringContaining("white_filled")
            );
        });

        it("should render red-filled logo when styleType is red-filled", () => {
            render(<SingpassButton styleType="red-filled" />);
            expect(screen.getByRole("img")).toHaveAttribute(
                "src",
                expect.stringContaining("red_filled")
            );
        });

        it("should forward ref to button element", () => {
            const ref = React.createRef<HTMLButtonElement>();
            render(<SingpassButton ref={ref} />);
            expect(ref.current).toBeInstanceOf(HTMLButtonElement);
        });

        it("should pass HTMLButtonElement props", () => {
            render(<SingpassButton disabled />);
            expect(screen.getByRole("button")).toBeDisabled();
        });

        it("should apply custom className", () => {
            render(<SingpassButton className="custom-class" />);
            expect(screen.getByTestId("singpass-button")).toHaveClass(
                "custom-class"
            );
        });
    });
});
