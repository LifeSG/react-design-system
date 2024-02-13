import { act, fireEvent, render, screen } from "@testing-library/react";
import { MaskedInput } from "../../src/masked-input";

describe("MaskedInput", () => {
    describe("Renders", () => {
        it("should render the masked value based on the mask range", () => {
            render(<MaskedInput value="S1234567D" maskRange={[2, 5]} />);

            expect(screen.getByDisplayValue("S1••••67D")).toBeInTheDocument();
            expect(screen.getByTestId("icon-masked")).toBeInTheDocument();
        });

        it("should render the unmasked value when the unmasked icon is clicked", () => {
            render(<MaskedInput value="S1234567D" maskRange={[2, 5]} />);
            const icon = screen.getByTestId("icon-masked");

            act(() => {
                fireEvent.click(icon);
            });

            expect(screen.getByDisplayValue("S1234567D")).toBeInTheDocument();
            expect(
                screen.queryByDisplayValue("S1••••67D")
            ).not.toBeInTheDocument();
            expect(screen.getByTestId("icon-unmasked")).toBeInTheDocument();
            expect(screen.queryByTestId("icon-masked")).not.toBeInTheDocument();
        });

        it("should render the correct masked value based on the mask transformer", () => {
            render(
                <MaskedInput
                    value="S1234567D"
                    maskTransformer={(value) => value.replace(/\D/g, "*")}
                />
            );
            expect(screen.getByDisplayValue("*1234567*")).toBeInTheDocument();
        });

        it("should render the error display if there is an unmaskError", () => {
            const mockTryAgainFn = jest.fn();

            render(
                <MaskedInput
                    value="S1234567D"
                    unmaskError
                    onTryAgain={mockTryAgainFn}
                />
            );

            expect(
                screen.queryByTestId("masked-input-masked")
            ).not.toBeInTheDocument();
            expect(screen.getByText("Error")).toBeInTheDocument();
            expect(screen.getByText("Try again?")).toBeInTheDocument();

            fireEvent.click(screen.getByTestId("try-again-button"));
            expect(mockTryAgainFn).toBeCalled();
        });
    });

    describe("Event callbacks", () => {
        it("should fire the onMask and onUnmask callbacks when the masked or unmasked icon is clicked", () => {
            const maskFn = jest.fn();
            const unmaskFn = jest.fn();

            render(
                <MaskedInput
                    value="S1234567D"
                    onMask={maskFn}
                    onUnmask={unmaskFn}
                    readOnly
                />
            );

            act(() => {
                fireEvent.click(screen.getByTestId("icon-masked"));
                expect(unmaskFn).toBeCalled();
            });

            act(() => {
                fireEvent.click(screen.getByTestId("icon-unmasked"));
                expect(maskFn).toBeCalled();
            });
        });

        it("should fire the onTryAgain callback when the try again button is clicked", () => {
            const tryAgainFn = jest.fn();

            render(
                <MaskedInput
                    value="S1234567D"
                    unmaskError
                    onTryAgain={tryAgainFn}
                />
            );

            fireEvent.click(screen.getByTestId("try-again-button"));
            expect(tryAgainFn).toBeCalled();
        });
    });
});
