import { useState } from "react";
import { OtpVerification } from "../otp-verification";
import { FormOtpVerificationProps } from "../otp-verification/types";
import { SimpleIdGenerator } from "../util";
import { FormWrapper } from "./form-wrapper";

/**
 * A form field that wraps `OtpVerification` with a label, error message, and responsive layout.
 *
 * Use as `Form.OtpVerification` to present an OTP input within a form.
 * @example
 * ```tsx
 * <Form.OtpVerification
 *     label="One-time password"
 *     onInputFulfilled={handleOtpComplete}
 * />
 * ```
 */
export const FormOtpVerification = ({
    label,
    id,
    "data-error-testid": errorTestId,
    "data-testid": testId,
    layoutType,
    mobileCols,
    tabletCols,
    desktopCols,
    xxsCols,
    xsCols,
    smCols,
    mdCols,
    lgCols,
    xlCols,
    xxlCols,
    ...otherProps
}: FormOtpVerificationProps): JSX.Element => {
    const [internalId] = useState(
        () => `form-otp-verification-${SimpleIdGenerator.generate()}`
    );
    const inputId = id ?? internalId;

    return (
        <FormWrapper
            id={inputId}
            data-testid={testId}
            label={label}
            data-error-testid={errorTestId}
            layoutType={layoutType}
            mobileCols={mobileCols}
            tabletCols={tabletCols}
            desktopCols={desktopCols}
            xxsCols={xxsCols}
            xsCols={xsCols}
            smCols={smCols}
            mdCols={mdCols}
            lgCols={lgCols}
            xlCols={xlCols}
            xxlCols={xxlCols}
        >
            <OtpVerification
                id={`${inputId}-base-field`}
                inputId={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                {...otherProps}
            />
        </FormWrapper>
    );
};
