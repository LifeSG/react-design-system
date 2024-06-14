import { ESignature } from "../e-signature";
import { FormWrapper } from "./form-wrapper";
import { FormESignatureProps } from "./types";

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
        >
            <ESignature
                id={`${id}-base`}
                data-testid={testId || id}
                {...otherProps}
            />
        </FormWrapper>
    );
};
