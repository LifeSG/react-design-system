import { InputSelect } from "../input-select";
import { FormWrapper } from "./form-wrapper";
import { FormInputSelectProps } from "./types";

export const FormSelect = <T, V>({
    label,
    errorMessage,
    id = "form-select",
    "data-error-testid": errorTestId,
    "data-testid": testId,
    enableSearch = false,
    layoutType,
    mobileCols,
    tabletCols,
    desktopCols,
    ...otherProps
}: FormInputSelectProps<T, V>): JSX.Element => {
    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            data-error-testid={errorTestId}
            disabled={otherProps.disabled}
            layoutType={layoutType}
            mobileCols={mobileCols}
            tabletCols={tabletCols}
            desktopCols={desktopCols}
        >
            <InputSelect
                id={`${id}-base`}
                data-testid={testId || id}
                error={!!errorMessage}
                enableSearch={enableSearch}
                {...otherProps}
            />
        </FormWrapper>
    );
};
