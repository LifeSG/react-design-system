import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OtpVerification } from "src/otp-verification";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}));

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("OtpVerification", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // =============================================================================
    // BASIC RENDERING TESTS
    // =============================================================================
    describe("Basic Rendering", () => {
        const defaultEmailProps = {
            type: "email" as const,
            emailValue: "test@example.com",
            onEmailChange: jest.fn(),
            onSendOtp: jest.fn(),
            onVerifyOtp: jest.fn(),
            otpState: "default" as const,
            onOtpStateChange: jest.fn(),
            isLoading: false,
            onLoadingChange: jest.fn(),
            isVerifyLoading: false,
            onVerifyLoadingChange: jest.fn(),
        };

        it("should render email input form", () => {
            render(<OtpVerification {...defaultEmailProps} />);

            expect(
                screen.getByDisplayValue("test@example.com")
            ).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: /send otp/i })
            ).toBeInTheDocument();
        });

        it("should render phone number input form", () => {
            const phoneProps = {
                type: "phone-number" as const,
                phoneNumberValue: {
                    countryCode: "+65",
                    number: "12345678",
                },
                onPhoneNumberChange: jest.fn(),
                onSendOtp: jest.fn(),
                onVerifyOtp: jest.fn(),
                otpState: "default" as const,
                onOtpStateChange: jest.fn(),
                isLoading: false,
                onLoadingChange: jest.fn(),
                isVerifyLoading: false,
                onVerifyLoadingChange: jest.fn(),
            };

            render(<OtpVerification {...phoneProps} />);

            expect(screen.getByDisplayValue("1234 5678")).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: /send otp/i })
            ).toBeInTheDocument();
        });

        it("should display send OTP error", () => {
            render(
                <OtpVerification
                    {...defaultEmailProps}
                    sendOtpError="Failed to send OTP"
                />
            );

            expect(screen.getByText("Failed to send OTP")).toBeInTheDocument();
        });

        it("should support custom test IDs", () => {
            render(
                <OtpVerification
                    {...defaultEmailProps}
                    data-testid="otp-verification"
                />
            );

            expect(screen.getByTestId("otp-verification")).toBeInTheDocument();
        });
    });

    // =============================================================================
    // INTERACTION TESTS
    // =============================================================================
    describe("User Interactions", () => {
        const defaultEmailProps = {
            type: "email" as const,
            emailValue: "test@example.com",
            onEmailChange: jest.fn(),
            onSendOtp: jest.fn(),
            onVerifyOtp: jest.fn(),
            otpState: "default" as const,
            onOtpStateChange: jest.fn(),
            isLoading: false,
            onLoadingChange: jest.fn(),
            isVerifyLoading: false,
            onVerifyLoadingChange: jest.fn(),
        };

        it("should call onEmailChange when email input changes", async () => {
            const user = userEvent.setup();
            render(<OtpVerification {...defaultEmailProps} />);

            const emailInput = screen.getByDisplayValue("test@example.com");
            await user.type(emailInput, "x");

            expect(defaultEmailProps.onEmailChange).toHaveBeenCalled();
        });

        it("should call onSendOtp when send button is clicked", async () => {
            const user = userEvent.setup();
            render(<OtpVerification {...defaultEmailProps} />);

            const sendButton = screen.getByRole("button", {
                name: /send otp/i,
            });
            await user.click(sendButton);

            expect(defaultEmailProps.onSendOtp).toHaveBeenCalled();
        });

        it("should call onPhoneNumberChange when phone input changes", async () => {
            const user = userEvent.setup();
            const phoneProps = {
                type: "phone-number" as const,
                phoneNumberValue: {
                    countryCode: "+65",
                    number: "12345678",
                },
                onPhoneNumberChange: jest.fn(),
                onSendOtp: jest.fn(),
                onVerifyOtp: jest.fn(),
                otpState: "default" as const,
                onOtpStateChange: jest.fn(),
                isLoading: false,
                onLoadingChange: jest.fn(),
                isVerifyLoading: false,
                onVerifyLoadingChange: jest.fn(),
            };

            render(<OtpVerification {...phoneProps} />);

            const phoneInput = screen.getByDisplayValue("1234 5678");
            await user.clear(phoneInput);
            await user.type(phoneInput, "87654321");

            expect(phoneProps.onPhoneNumberChange).toHaveBeenCalled();
        });
    });

    // =============================================================================
    // ERROR HANDLING TESTS
    // =============================================================================
    describe("Error Handling", () => {
        const defaultProps = {
            type: "email" as const,
            emailValue: "test@example.com",
            onEmailChange: jest.fn(),
            onSendOtp: jest.fn(),
            onVerifyOtp: jest.fn(),
            otpState: "default" as const,
            onOtpStateChange: jest.fn(),
            isLoading: false,
            onLoadingChange: jest.fn(),
            isVerifyLoading: false,
            onVerifyLoadingChange: jest.fn(),
        };

        it("should display send OTP error message", () => {
            render(
                <OtpVerification
                    {...defaultProps}
                    sendOtpError="Network error occurred"
                />
            );

            expect(
                screen.getByText("Network error occurred")
            ).toBeInTheDocument();
        });

        it("should handle missing required props gracefully", () => {
            const minimalProps = {
                type: "email" as const,
                otpState: "default" as const,
                onOtpStateChange: jest.fn(),
            };

            expect(() => {
                render(<OtpVerification {...minimalProps} />);
            }).not.toThrow();
        });
    });

    // =============================================================================
    // ACCESSIBILITY TESTS
    // =============================================================================
    describe("Accessibility", () => {
        const defaultProps = {
            type: "email" as const,
            emailValue: "test@example.com",
            onEmailChange: jest.fn(),
            onSendOtp: jest.fn(),
            onVerifyOtp: jest.fn(),
            otpState: "default" as const,
            onOtpStateChange: jest.fn(),
            isLoading: false,
            onLoadingChange: jest.fn(),
            isVerifyLoading: false,
            onVerifyLoadingChange: jest.fn(),
        };

        it("should support custom ID", () => {
            render(
                <OtpVerification
                    {...defaultProps}
                    id="custom-otp-verification"
                />
            );

            expect(
                document.getElementById("custom-otp-verification")
            ).toBeInTheDocument();
        });

        it("should support data-testid", () => {
            render(
                <OtpVerification
                    {...defaultProps}
                    data-testid="otp-verification-test"
                />
            );

            expect(
                screen.getByTestId("otp-verification-test")
            ).toBeInTheDocument();
        });
    });
});
