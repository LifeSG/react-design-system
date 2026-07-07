import { OtpVerification } from "../otp-verification";
import type { FormOtpVerificationProps } from "../otp-verification/types";
import { useId } from "../util";
import { FormWrapper } from "./form-wrapper";

export const FormOtpVerification = ({
    label,
    id,
    "data-error-testid": errorTestId,
    "data-testid": testId,
    layoutType,
    xxsCols,
    xsCols,
    smCols,
    mdCols,
    lgCols,
    xlCols,
    xxlCols,
    ...otherProps
}: FormOtpVerificationProps): JSX.Element => {
    const internalId = useId();
    const inputId = id ?? `form-otp-verification-${internalId}`;

    return (
        <FormWrapper
            id={inputId}
            data-testid={testId}
            label={label}
            data-error-testid={errorTestId}
            layoutType={layoutType}
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
