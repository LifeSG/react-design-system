import { fireEvent, render, screen } from "@testing-library/react";
import { createRef } from "react";
import { ImageButton } from "src/image-button";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("ImageButton", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render with the specified props", () => {
        render(<ImageButton imgSrc="test.png">Label</ImageButton>);

        expect(screen.getByText("Label")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src", "test.png");
    });

    it("should forward className to the button element", () => {
        render(
            <ImageButton imgSrc="test.png" className="custom-class">
                Label
            </ImageButton>
        );

        expect(screen.getByRole("button")).toHaveClass("custom-class");
    });

    it("should forward ref to the button element", () => {
        const ref = createRef<HTMLButtonElement>();
        render(<ImageButton ref={ref} imgSrc="test.png" />);

        expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it("should call onClick when clicked", () => {
        const onClick = jest.fn();
        render(
            <ImageButton imgSrc="test.png" onClick={onClick}>
                Click me
            </ImageButton>
        );

        fireEvent.click(screen.getByRole("button"));

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    describe("disabled", () => {
        it("should be natively disabled when disabled=true and focusableWhenDisabled=false", () => {
            render(
                <ImageButton
                    imgSrc="test.png"
                    disabled
                    focusableWhenDisabled={false}
                />
            );

            expect(screen.getByRole("button")).toBeDisabled();
        });

        it("should not be natively disabled when focusableWhenDisabled is true", () => {
            render(
                <ImageButton imgSrc="test.png" disabled focusableWhenDisabled />
            );

            expect(screen.getByRole("button")).not.toBeDisabled();
            expect(screen.getByRole("button")).toHaveAttribute(
                "aria-disabled",
                "true"
            );
        });

        it("should not call onClick when disabled=true", () => {
            const onClick = jest.fn();
            render(
                <ImageButton imgSrc="test.png" disabled onClick={onClick}>
                    Click me
                </ImageButton>
            );

            fireEvent.click(screen.getByRole("button"));

            expect(onClick).not.toHaveBeenCalled();
        });

        it("should not call onClick when disabled=true and focusableWhenDisabled=true", () => {
            const onClick = jest.fn();
            render(
                <ImageButton
                    imgSrc="test.png"
                    disabled
                    focusableWhenDisabled
                    onClick={onClick}
                >
                    Click me
                </ImageButton>
            );

            fireEvent.click(screen.getByRole("button"));

            expect(onClick).not.toHaveBeenCalled();
        });
    });
});
