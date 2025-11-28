import { useState } from "react";
import { SimpleIdGenerator } from "../util";
import { FormWrapper } from "./form-wrapper";
import { FormOtpVerificationProps } from "../otp-verification/types";
import { OtpVerification } from "../otp-verification";

export const FormOtpVerification = ({
    label,
    errorMessage,
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
            errorMessage={errorMessage}
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
            <OtpVerification {...otherProps} />
        </FormWrapper>
    );
};
