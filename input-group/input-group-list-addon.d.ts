import React from "react";
import { InputGroupProps } from "./types";
export declare const Component: <T, V>({ addon, error, onChange, readOnly, disabled, className, onBlur, "data-testid": testId, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid, "aria-label": textboxAriaLabel, ...otherProps }: InputGroupProps<T, V>, ref: React.Ref<HTMLInputElement>) => import("react/jsx-runtime").JSX.Element;
export declare const InputGroupListAddon: <T, V>(props: InputGroupProps<T, V> & React.RefAttributes<HTMLInputElement>) => React.ReactElement | null;
