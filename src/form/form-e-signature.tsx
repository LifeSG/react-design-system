import { ESignature } from "../e-signature";
import { FormWrapper } from "./form-wrapper";
import { FormESignatureProps } from "./types";

/**
 * A form field that wraps `ESignature` with a label, error message, and responsive layout.
 *
 * Use as `Form.ESignature` to present a signature capture input within a form.
 * @example
 * ```tsx
 * <Form.ESignature
 *     label="Signature"
 *     errorMessage={errors.signature}
 * />
 * ```
 */
export const FormESignature = (props: FormESignatureProps) => {
    const {
        label,
        errorMessage,
        id = "form-field",
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
    } = props;

    return (
        <FormWrapper
            id={id}
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
            <ESignature
                id={`${id}-base`}
                data-testid={testId || id}
                {...otherProps}
            />
        </FormWrapper>
    );
};
