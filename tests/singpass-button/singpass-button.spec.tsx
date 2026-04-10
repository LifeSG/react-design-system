import { render, screen } from "@testing-library/react";
import React from "react";
import { SingpassButton } from "src/singpass-button";

describe("SingpassButton", () => {
    describe("default", () => {
        it("should render button with default testid", () => {
            render(<SingpassButton.Default />);
            expect(screen.getByTestId("button")).toBeInTheDocument();
        });

        it("should render with custom data-testid", () => {
            render(<SingpassButton.Default data-testid="sp-btn" />);
            expect(screen.getByTestId("sp-btn")).toBeInTheDocument();
        });

        it("should have accessible aria-label", () => {
            render(<SingpassButton.Default />);
            expect(
                screen.getByRole("button", { name: "Log in with Singpass" })
            ).toBeInTheDocument();
        });

        it("should render singpass logo image", () => {
            render(<SingpassButton.Default />);
            expect(screen.getByRole("img")).toBeInTheDocument();
        });

        it("should render white-filled logo by default", () => {
            render(<SingpassButton.Default />);
            expect(screen.getByRole("img")).toHaveAttribute(
                "src",
                expect.stringContaining("white_filled")
            );
        });

        it("should render red-filled logo when styleType is red-filled", () => {
            render(<SingpassButton.Default styleType="red-filled" />);
            expect(screen.getByRole("img")).toHaveAttribute(
                "src",
                expect.stringContaining("red_filled")
            );
        });

        it("should forward ref to button element", () => {
            const ref = React.createRef<HTMLButtonElement>();
            render(<SingpassButton.Default ref={ref} />);
            expect(ref.current).toBeInstanceOf(HTMLButtonElement);
        });

        it("should pass HTMLButtonElement props", () => {
            render(<SingpassButton.Default disabled />);
            expect(screen.getByRole("button")).toBeDisabled();
        });

        it("should apply custom className", () => {
            render(<SingpassButton.Default className="custom-class" />);
            expect(screen.getByTestId("button")).toHaveClass("custom-class");
        });
    });

    describe("small", () => {
        it("should render button with default testid", () => {
            render(<SingpassButton.Small />);
            expect(screen.getByTestId("button")).toBeInTheDocument();
        });

        it("should have accessible aria-label", () => {
            render(<SingpassButton.Small />);
            expect(
                screen.getByRole("button", { name: "Log in with Singpass" })
            ).toBeInTheDocument();
        });

        it("should render red-filled logo when styleType is red-filled", () => {
            render(<SingpassButton.Small styleType="red-filled" />);
            expect(screen.getByRole("img")).toHaveAttribute(
                "src",
                expect.stringContaining("red_filled")
            );
        });

        it("should forward ref to button element", () => {
            const ref = React.createRef<HTMLButtonElement>();
            render(<SingpassButton.Small ref={ref} />);
            expect(ref.current).toBeInstanceOf(HTMLButtonElement);
        });
    });

    describe("large", () => {
        it("should render button with default testid", () => {
            render(<SingpassButton.Large />);
            expect(screen.getByTestId("button")).toBeInTheDocument();
        });

        it("should have accessible aria-label", () => {
            render(<SingpassButton.Large />);
            expect(
                screen.getByRole("button", { name: "Log in with Singpass" })
            ).toBeInTheDocument();
        });

        it("should render red-filled logo when styleType is red-filled", () => {
            render(<SingpassButton.Large styleType="red-filled" />);
            expect(screen.getByRole("img")).toHaveAttribute(
                "src",
                expect.stringContaining("red_filled")
            );
        });

        it("should forward ref to button element", () => {
            const ref = React.createRef<HTMLButtonElement>();
            render(<SingpassButton.Large ref={ref} />);
            expect(ref.current).toBeInstanceOf(HTMLButtonElement);
        });
    });
});
