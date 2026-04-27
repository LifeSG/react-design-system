import React, { useEffect, useState } from "react";

import { TextareaBase } from "../input-textarea/textarea";
import { TextareaCounter } from "../input-textarea/textarea-counter";
import type { TextareaRef } from "../input-textarea/types";
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
        id = "form-textarea",
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
        ...otherProps
    } = props;

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
        return errorTestId || (id ? `${id}-error-message` : "error-message");
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
                        renderCustomCounter={otherProps.renderCustomCounter}
                    />
                )}
            </div>
        );
    };

    return (
        <FormWrapper
            id={id}
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
                id={`${id}-base`}
                data-testid={testId || id}
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
