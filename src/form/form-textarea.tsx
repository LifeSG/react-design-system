import React, { useEffect, useState } from "react";

import { TextareaBase } from "../input-textarea/textarea";
import { TextareaCounter } from "../input-textarea/textarea-counter";
import type { TextareaRef } from "../input-textarea/types";
import { useId } from "../util";
import { FormErrorMessage } from "./form-label";
import * as styles from "./form-textarea.styles";
import { FormWrapper } from "./form-wrapper";
import type { FormTextareaProps } from "./types";

const FormTextareaComponent = (
    props: FormTextareaProps,
    ref: TextareaRef
): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const {
        label,
        value,
        errorMessage,
        id,
        "data-error-testid": errorTestId,
        "data-testid": testId,
        onChange,
        layoutType,
        xxsCols,
        xsCols,
        smCols,
        mdCols,
        lgCols,
        xlCols,
        xxlCols,
        transformValue,
        prefix = "",
        renderCustomCounter,
        ...otherProps
    } = props;

    const internalId = useId();
    const inputId = id ?? `form-textarea-${internalId}`;

    const [stateValue, setStateValue] = useState<
        string | number | readonly string[] | undefined
    >(value);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setStateValue(value);
    }, [value]);

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================

    const getErrorTestMessageId = () => {
        return (
            errorTestId ||
            (inputId ? `${inputId}-error-message` : "error-message")
        );
    };

    // =============================================================================
    // EVENT HANDLER
    // =============================================================================
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value;
        setStateValue(newValue);
        if (onChange) onChange(event);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderBottomLabels = () => {
        if (!errorMessage && !otherProps.maxLength) return <></>;
        return (
            <div className={styles.labelContainer}>
                {errorMessage && (
                    <div className={styles.errorMessageContainer}>
                        <FormErrorMessage
                            className={styles.errorMessageLabel}
                            data-testid={getErrorTestMessageId()}
                        >
                            {errorMessage}
                        </FormErrorMessage>
                    </div>
                )}
                {otherProps.maxLength && (
                    <TextareaCounter
                        value={stateValue}
                        maxLength={otherProps.maxLength}
                        renderCustomCounter={renderCustomCounter}
                    />
                )}
            </div>
        );
    };

    return (
        <FormWrapper
            id={inputId}
            data-testid={testId}
            label={label}
            layoutType={layoutType}
            xxsCols={xxsCols}
            xsCols={xsCols}
            smCols={smCols}
            mdCols={mdCols}
            lgCols={lgCols}
            xlCols={xlCols}
            xxlCols={xxlCols}
        >
            <TextareaBase
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                value={stateValue}
                error={!!errorMessage}
                onChange={handleChange}
                ref={ref}
                prefix={prefix}
                transformValue={transformValue}
                {...otherProps}
            />
            {renderBottomLabels()}
        </FormWrapper>
    );
};

export const FormTextarea = React.forwardRef(FormTextareaComponent);
