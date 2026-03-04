import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";
import { FormErrorMessage } from "../form/form-label";
import { InputGroup } from "../input-group";
import { Breakpoint } from "../theme";
import { Typography } from "../typography";
import { VerificationSectionProps } from "./internal-types";
import { EmailThumbnail, PhoneThumbnail } from "./thumbnail";
import {
    ReSendMessage,
    SectionContainer,
    VerificationSectionWrapper,
    VerifyButton,
    VerifyInputWrapper,
} from "./verification-section-styles";

export const VerificationSection = ({
    id,
    "data-testid": dataTestId,
    type,
    showVerifyOtpThumbnail = false,
    verifyOtpTitle,
    verifyOtpMessage,
    otpCode,
    setOtpCode,
    isVerifyLoading,
    countdown,
    onVerifyOtp,
    verifyOtpError,
    otpPrefix,
    otpSeparator,
}: VerificationSectionProps) => {
    const theme = useTheme();

    // =========================================================================
    // ARIA LIVE REGION
    // =========================================================================
    // const [liveMessage, setLiveMessage] = useState("");
    // const prevIsRunningRef = useRef(false);
    // const liveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // const announce = (message: string) => {
    //     // Clear first so the DOM mutation is always observed by screen readers,
    //     // even when the same message is announced twice (e.g. OTP resent).
    //     setLiveMessage("");
    //     liveTimerRef.current = setTimeout(() => {
    //         setLiveMessage(message);
    //     }, 500);
    // };

    // useEffect(() => {
    //     return () => {
    //         if (liveTimerRef.current) clearTimeout(liveTimerRef.current);
    //     };
    // }, []);

    // useEffect(() => {
    //     const wasRunning = prevIsRunningRef.current;
    //     prevIsRunningRef.current = countdown.isRunning;

    //     // Step 1: countdown started
    //     if (!wasRunning && countdown.isRunning) {
    //         announce(
    //             `You can resend the OTP in ${countdown.timeLeft} seconds.`
    //         );
    //         return;
    //     }

    //     // Step 3: countdown completed
    //     if (wasRunning && !countdown.isRunning && countdown.timeLeft === 0) {
    //         announce("You can now resend the OTP.");
    //         return;
    //     }

    //     // Step 2: periodic milestone announcements at 30s and 15s
    //     if (
    //         countdown.isRunning &&
    //         (countdown.timeLeft === 30 || countdown.timeLeft === 15)
    //     ) {
    //         announce(`${countdown.timeLeft} seconds remaining.`);
    //     }
    // }, [countdown.isRunning, countdown.timeLeft]);

    const isMobile = useMediaQuery({
        maxWidth: Breakpoint["sm-max"]({ theme }),
    });
    const thumbnailSize = isMobile ? 64 : 120;

    const renderThumbnail = () => {
        if (!showVerifyOtpThumbnail) return null;
        const iconLabel =
            type === "email" ? "Email verification" : "Phone verification";
        return (
            <div aria-label={iconLabel} role="img">
                {type === "email" ? (
                    <EmailThumbnail
                        aria-hidden={true}
                        width={thumbnailSize}
                        height={thumbnailSize}
                    />
                ) : (
                    <PhoneThumbnail
                        aria-hidden={true}
                        width={thumbnailSize}
                        height={thumbnailSize}
                    />
                )}
            </div>
        );
    };

    return (
        <VerificationSectionWrapper
            id={id}
            data-testid={dataTestId}
            role="group"
            aria-label={
                type === "email"
                    ? "Verify your email address"
                    : "Verify your mobile number"
            }
        >
            {renderThumbnail()}
            <SectionContainer>
                <div>
                    <Typography.BodyMD
                        weight="semibold"
                        id={id ? `${id}-title` : undefined}
                        data-testid={
                            dataTestId ? `${dataTestId}-title` : undefined
                        }
                    >
                        {verifyOtpTitle}
                    </Typography.BodyMD>
                    <Typography.BodyMD
                        weight="regular"
                        id={id ? `${id}-message` : undefined}
                        data-testid={
                            dataTestId ? `${dataTestId}-message` : undefined
                        }
                    >
                        {verifyOtpMessage}
                    </Typography.BodyMD>
                </div>
                <div>
                    <VerifyInputWrapper>
                        <InputGroup
                            id={id ? `${id}-verify-input` : undefined}
                            data-testid={
                                dataTestId
                                    ? `${dataTestId}-verify-input`
                                    : undefined
                            }
                            value={otpCode}
                            onChange={(e) => setOtpCode?.(e.target.value)}
                            placeholder="Enter OTP"
                            addon={{
                                type: "label",
                                attributes: {
                                    value: `${otpPrefix ?? ""}${
                                        otpSeparator ?? ""
                                    }`,
                                },
                            }}
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            error={!!verifyOtpError}
                            aria-label={
                                `${otpPrefix ?? ""}${
                                    otpSeparator ?? ""
                                }`.trim() || undefined
                            }
                            aria-invalid={!!verifyOtpError}
                            aria-required={true}
                        />
                        <VerifyButton
                            id={id ? `${id}-verify-button` : undefined}
                            data-testid={
                                dataTestId
                                    ? `${dataTestId}-verify-button`
                                    : undefined
                            }
                            onClick={onVerifyOtp}
                            loading={isVerifyLoading}
                            styleType="light"
                            disabled={!otpCode || otpCode.length === 0}
                        >
                            {!isVerifyLoading && "Verify"}
                        </VerifyButton>
                    </VerifyInputWrapper>
                    {verifyOtpError && (
                        <FormErrorMessage
                            id={id ? `${id}-verify-error` : undefined}
                            data-testid={
                                dataTestId
                                    ? `${dataTestId}-verify-error`
                                    : undefined
                            }
                            role="alert"
                        >
                            {verifyOtpError}
                        </FormErrorMessage>
                    )}
                </div>
                {countdown.isRunning && (
                    <ReSendMessage
                        id={id ? `${id}-countdown` : undefined}
                        data-testid={
                            dataTestId ? `${dataTestId}-countdown` : undefined
                        }
                    >
                        Resend OTP in {countdown.formatTime()}
                    </ReSendMessage>
                )}
            </SectionContainer>
        </VerificationSectionWrapper>
    );
};
