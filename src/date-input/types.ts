import React from "react";
import { DatePickerType, FocusToTypes, TransitionValue } from "src/date-picker";

export type RangeElementRef = React.Ref<HTMLDivElement | null>;

export interface DateInputProps extends React.AriaAttributes {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;
    readOnly?: boolean | undefined;

    // WAI-ARIA
    role?: React.AriaRole | undefined;

    // Input-specific Attributes
    "data-testid"?: string | undefined;
    value?: string | undefined;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    onChange?: ((value: string) => void) | undefined;
    /**
     * Function that returns the raw values in the DateInput on change in an array format
     * as such [day, month, year]
     */
    onChangeRaw?: ((value: string[]) => void) | undefined;
    onBlur?: ((value: string) => void) | undefined;
    /**
     * Function that returns the raw values in the DateInput on blur in an array format
     * as such [day, month, year]
     */
    onBlurRaw?: ((value: string[]) => void) | undefined;
}

export interface DatePickerContainerProps
    extends Pick<DateInputRangeProps, "type"> {}

export interface WithDateInputProps
    extends Omit<DateInputProps, "onChangeRaw"> {}

export interface DateInputRangeProps extends WithDateInputProps {
    type?: DatePickerType | undefined;
    rangeValue?: string | undefined;
    setTransitionValue?: React.Dispatch<React.SetStateAction<TransitionValue>>;
    transitionValues?: TransitionValue;
    hoverValue?: string;
    setIsOpenCalendar?: (boolean: boolean) => Promise<void>;
    setFocusTo?: React.Dispatch<React.SetStateAction<FocusToTypes>>;
    focusTo?: FocusToTypes;
    calendarRootId?: string;
    handleCancelButton?: () => Promise<void>;
}
