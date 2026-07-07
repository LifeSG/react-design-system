import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { OtpVerificationProps } from "src/otp-verification";
import { OtpVerification } from "src/otp-verification";

const SEND_OTP_BUTTON_TEXT = "Send OTP";
const EMAIL_INPUT_LABEL =
    "Enter your email address to receive a verification OTP";
const PHONE_INPUT_LABEL =
    "Enter your Singapore mobile number to receive a verification OTP +65";
const VERIFY_BUTTON_TEXT = "Verify";
const SEND_OTP_BUTTON_TESTID = "test-contact-contact-button";
const VERIFY_BUTTON_TESTID = "test-verification-verify-button";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("OtpVerification", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    const defaultEmailProps: OtpVerificationProps = {
        "data-testid": "test",
        type: "email",
        emailValue: "",
        onEmailChange: jest.fn(),
        onSendOtp: jest.fn(),
        onVerifyOtp: jest.fn(),
        otpState: "default",
        onOtpStateChange: jest.fn(),
    };

    const defaultPhoneProps: OtpVerificationProps = {
        "data-testid": "test",
        type: "phone-number",
        phoneNumberValue: {
            countryCode: "+65",
            number: "",
        },
        onPhoneNumberChange: jest.fn(),
        onSendOtp: jest.fn(),
        onVerifyOtp: jest.fn(),
        otpState: "default",
        onOtpStateChange: jest.fn(),
        fixedCountry: true,
    };

    describe("Default state", () => {
        it("should render default email input", () => {
            render(<OtpVerification {...defaultEmailProps} />);

            const input = screen.getByRole("textbox", {
                name: EMAIL_INPUT_LABEL,
            });
            expect(input).toBeInTheDocument();
            expect(input).toHaveValue("");

            expect(
                screen.getByRole("button", { name: SEND_OTP_BUTTON_TEXT })
            ).toBeInTheDocument();
        });

        it("should render prefilled default email input", () => {
            render(
                <OtpVerification
                    {...defaultEmailProps}
                    emailValue="test@example.com"
                />
            );

            expect(
                screen.getByRole("textbox", {
                    name: EMAIL_INPUT_LABEL,
                })
            ).toHaveValue("test@example.com");
        });

        it("should render default phone number input", () => {
            render(<OtpVerification {...defaultPhoneProps} />);

            const input = screen.getByRole("textbox", {
                name: PHONE_INPUT_LABEL,
            });
            expect(input).toBeInTheDocument();
            expect(input).toHaveValue("");

            expect(screen.getByText("+65")).toBeInTheDocument();

            expect(
                screen.getByRole("button", { name: SEND_OTP_BUTTON_TEXT })
            ).toBeInTheDocument();
        });

        it("should render phone number input with country code label", () => {
            render(
                <OtpVerification
                    {...defaultPhoneProps}
                    phoneNumberValue={{ countryCode: "+61" }}
                />
            );

            const input = screen.getByRole("textbox", {
                name: "Enter your Australia mobile number to receive a verification OTP +61",
            });
            expect(input).toBeInTheDocument();
            expect(input).toHaveValue("");

            expect(screen.getByText("+61")).toBeInTheDocument();

            expect(
                screen.getByRole("button", { name: SEND_OTP_BUTTON_TEXT })
            ).toBeInTheDocument();
        });

        it("should render prefilled default phone number input", () => {
            render(
                <OtpVerification
                    {...defaultPhoneProps}
                    phoneNumberValue={{
                        countryCode: "+65",
                        number: "12345678",
                    }}
                />
            );

            expect(
                screen.getByRole("textbox", { name: PHONE_INPUT_LABEL })
            ).toHaveValue("1234 5678");
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
                    data-testid="test-otp-verification"
                />
            );

            expect(
                screen.getByTestId("test-otp-verification")
            ).toBeInTheDocument();
        });

        it("should not render Send OTP button when input is disabled", () => {
            render(<OtpVerification {...defaultEmailProps} disabled />);

            expect(
                screen.queryByRole("button", { name: SEND_OTP_BUTTON_TEXT })
            ).not.toBeInTheDocument();
        });

        it("should not render Send OTP button when input is readonly", () => {
            render(<OtpVerification {...defaultEmailProps} readOnly />);

            expect(
                screen.queryByRole("button", { name: SEND_OTP_BUTTON_TEXT })
            ).not.toBeInTheDocument();
        });
    });

    describe("Contact input change handling", () => {
        it("should call onEmailChange when email input changes", async () => {
            const user = userEvent.setup();
            render(<OtpVerification {...defaultEmailProps} />);

            await act(async () => {
                await user.type(
                    screen.getByRole("textbox", { name: EMAIL_INPUT_LABEL }),
                    "a"
                );
            });

            expect(defaultEmailProps.onEmailChange).toHaveBeenCalledWith("a");
        });

        it("should call onPhoneNumberChange when phone input changes", async () => {
            const user = userEvent.setup();
            render(<OtpVerification {...defaultPhoneProps} />);

            await user.type(
                screen.getByRole("textbox", { name: PHONE_INPUT_LABEL }),
                "87654321"
            );

            expect(defaultPhoneProps.onPhoneNumberChange).toHaveBeenCalledWith({
                countryCode: "+65",
                number: "87654321",
            });
        });

        it("should call onSendOtp when send button is clicked", async () => {
            const user = userEvent.setup();
            const onSendOtp = jest.fn().mockResolvedValue(undefined);
            render(
                <OtpVerification {...defaultEmailProps} onSendOtp={onSendOtp} />
            );

            await act(async () => {
                await user.click(
                    screen.getByRole("button", { name: SEND_OTP_BUTTON_TEXT })
                );
            });

            expect(onSendOtp).toHaveBeenCalledWith();
        });

        it("should show button loading state when onSendOtp is resolving", async () => {
            jest.useFakeTimers();
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onSendOtp = jest
                .fn()
                .mockImplementation(
                    () => new Promise((resolve) => setTimeout(resolve, 100))
                );
            render(
                <OtpVerification {...defaultEmailProps} onSendOtp={onSendOtp} />
            );

            await act(async () => {
                await user.click(screen.getByTestId(SEND_OTP_BUTTON_TESTID));
            });

            expect(onSendOtp).toHaveBeenCalledTimes(1);

            // assert that button has loading state
            expect(screen.getByTestId(SEND_OTP_BUTTON_TESTID)).toHaveAttribute(
                "aria-busy",
                "true"
            );

            await act(async () => {
                await user.click(screen.getByTestId(SEND_OTP_BUTTON_TESTID));
            });

            // assert that button is not clickable when loading
            expect(onSendOtp).toHaveBeenCalledTimes(1);

            await act(async () => {
                jest.advanceTimersByTime(100);
            });

            // assert that button is no longer in loading state
            expect(screen.getByTestId(SEND_OTP_BUTTON_TESTID)).toHaveAttribute(
                "aria-busy",
                "false"
            );
        });

        it("should call onOtpStateChange after OTP is sent", async () => {
            jest.useFakeTimers();
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onSendOtp = jest
                .fn()
                .mockImplementation(
                    () => new Promise((resolve) => setTimeout(resolve, 100))
                );
            render(
                <OtpVerification {...defaultEmailProps} onSendOtp={onSendOtp} />
            );

            await act(async () => {
                await user.click(
                    screen.getByRole("button", { name: SEND_OTP_BUTTON_TEXT })
                );
            });

            expect(defaultEmailProps.onOtpStateChange).not.toHaveBeenCalled();

            await act(async () => {
                jest.advanceTimersByTime(100);
            });

            expect(defaultEmailProps.onOtpStateChange).toHaveBeenCalledWith(
                "sent"
            );
        });
    });

    it("should handle missing required props gracefully", () => {
        expect(() => {
            render(
                <OtpVerification
                    {...({
                        type: "email",
                    } as OtpVerificationProps)}
                />
            );
        }).not.toThrow();

        expect(() => {
            render(
                <OtpVerification
                    {...({
                        type: "phone-number",
                    } as OtpVerificationProps)}
                />
            );
        }).not.toThrow();
    });

    describe("Sent state", () => {
        const sentEmailProps: OtpVerificationProps = {
            ...defaultEmailProps,
            otpState: "sent",
            verifyOtpTitle: "Verify OTP section title",
            verifyOtpMessage: "Verify OTP section message",
        };

        it("should render verification section", () => {
            render(<OtpVerification {...sentEmailProps} />);

            expect(screen.getByTestId("test-verification")).toBeInTheDocument();
            expect(
                screen.getByRole("spinbutton", {
                    name: "Verify OTP section title",
                })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: VERIFY_BUTTON_TEXT })
            ).toBeInTheDocument();
            expect(
                screen.getByText("Verify OTP section title")
            ).toBeInTheDocument();
            expect(
                screen.getByText("Verify OTP section message")
            ).toBeInTheDocument();
        });

        it("should disable Verify button when no OTP value is set", () => {
            render(<OtpVerification {...sentEmailProps} />);

            expect(screen.getByTestId(VERIFY_BUTTON_TESTID)).toBeDisabled();
        });

        it("should enable Verify button when OTP value is provided", () => {
            render(
                <OtpVerification
                    {...sentEmailProps}
                    otpValue={{ value: "123456" }}
                />
            );

            expect(screen.getByTestId(VERIFY_BUTTON_TESTID)).toBeEnabled();
        });

        it("should call onVerifyOtp with OTP value when Verify is clicked", async () => {
            jest.useFakeTimers();
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onVerifyOtp = jest.fn().mockResolvedValue(undefined);
            render(
                <OtpVerification
                    {...sentEmailProps}
                    otpValue={{ value: "123456" }}
                    onVerifyOtp={onVerifyOtp}
                />
            );

            await act(async () => {
                await user.click(screen.getByTestId(VERIFY_BUTTON_TESTID));
            });

            expect(onVerifyOtp).toHaveBeenCalledWith("123456");
        });

        it("should show Verify button in loading state during verification", async () => {
            jest.useFakeTimers();
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onVerifyOtp = jest
                .fn()
                .mockImplementation(
                    () => new Promise((resolve) => setTimeout(resolve, 100))
                );
            render(
                <OtpVerification
                    {...sentEmailProps}
                    otpValue={{ value: "123456" }}
                    onVerifyOtp={onVerifyOtp}
                />
            );

            await act(async () => {
                await user.click(screen.getByTestId(VERIFY_BUTTON_TESTID));
            });

            expect(onVerifyOtp).toHaveBeenCalledTimes(1);

            // assert that button has loading state
            expect(screen.getByTestId(VERIFY_BUTTON_TESTID)).toHaveAttribute(
                "aria-busy",
                "true"
            );

            await act(async () => {
                await user.click(screen.getByTestId(VERIFY_BUTTON_TESTID));
            });

            // assert that button is not clickable when loading
            expect(onVerifyOtp).toHaveBeenCalledTimes(1);

            await act(async () => {
                jest.advanceTimersByTime(100);
            });

            // assert that button is no longer in loading state
            expect(screen.getByTestId(VERIFY_BUTTON_TESTID)).toHaveAttribute(
                "aria-busy",
                "false"
            );
        });

        it("should call onOtpStateChange with 'verified' after successful verification", async () => {
            jest.useFakeTimers();
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onVerifyOtp = jest
                .fn()
                .mockImplementation(
                    () => new Promise((resolve) => setTimeout(resolve, 100))
                );
            const onOtpStateChange = jest.fn();
            render(
                <OtpVerification
                    {...sentEmailProps}
                    otpValue={{ value: "654321" }}
                    onVerifyOtp={onVerifyOtp}
                    onOtpStateChange={onOtpStateChange}
                />
            );
            await act(async () => {
                await user.click(screen.getByTestId(VERIFY_BUTTON_TESTID));
            });

            expect(onOtpStateChange).not.toHaveBeenCalled();

            await act(async () => {
                jest.advanceTimersByTime(100);
            });

            expect(onOtpStateChange).toHaveBeenCalledWith("verified");
        });

        it("should display verify OTP error", () => {
            render(
                <OtpVerification
                    {...sentEmailProps}
                    verifyOtpError="Invalid OTP. Please try again."
                />
            );

            expect(
                screen.getByText("Invalid OTP. Please try again.")
            ).toBeInTheDocument();
        });

        it("should handle OTP countdown", async () => {
            jest.useFakeTimers();
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            render(
                <OtpVerification
                    {...sentEmailProps}
                    verifyOtpCountdownTimer={3}
                />
            );

            await act(async () => {
                await user.click(screen.getByTestId(SEND_OTP_BUTTON_TESTID));
            });

            expect(
                screen.getByText("Resend OTP in 3 seconds")
            ).toBeInTheDocument();
            expect(screen.getByTestId(SEND_OTP_BUTTON_TESTID)).toBeDisabled();

            await act(async () => {
                jest.advanceTimersByTime(3000);
            });

            expect(screen.queryByText(/Resend OTP/)).not.toBeInTheDocument();
            expect(
                screen.getByTestId(SEND_OTP_BUTTON_TESTID)
            ).not.toBeDisabled();
        });

        it("should display 1 second OTP countdown correctly", async () => {
            jest.useFakeTimers();
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            render(
                <OtpVerification
                    {...sentEmailProps}
                    verifyOtpCountdownTimer={1}
                />
            );

            await act(async () => {
                await user.click(screen.getByTestId(SEND_OTP_BUTTON_TESTID));
            });

            expect(
                screen.getByText("Resend OTP in 1 second")
            ).toBeInTheDocument();
        });
    });

    describe("Verified state", () => {
        const verifiedEmailProps: OtpVerificationProps = {
            ...defaultEmailProps,
            otpState: "verified",
            emailValue: "test@example.com",
        };

        it("should render verified state", () => {
            render(<OtpVerification {...verifiedEmailProps} />);

            expect(
                screen.queryByTestId("test-verification")
            ).not.toBeInTheDocument();
            expect(
                screen.getByRole("img", { name: "Verified" })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: "Verified" })
            ).toBeInTheDocument();
        });

        it("should disable the send button when otpState is 'verified'", () => {
            render(<OtpVerification {...verifiedEmailProps} />);

            expect(
                screen.getByRole("button", { name: "Verified" })
            ).toBeDisabled();
        });

        it("should call onOtpStateChange with 'default' when input changes after verified", async () => {
            const user = userEvent.setup();
            const onOtpStateChange = jest.fn();
            render(
                <OtpVerification
                    {...verifiedEmailProps}
                    onOtpStateChange={onOtpStateChange}
                />
            );

            await act(async () => {
                await user.type(
                    screen.getByRole("textbox", { name: EMAIL_INPUT_LABEL }),
                    "a"
                );
            });

            expect(onOtpStateChange).toHaveBeenCalledWith("default");
        });
    });
});
