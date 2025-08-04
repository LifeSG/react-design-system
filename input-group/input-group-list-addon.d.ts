import React from "react";
import { InputGroupProps } from "./types";
export declare const Component: <T, V>({ addon, error, onChange, readOnly, className, onBlur, ...otherProps }: InputGroupProps<T, V>, ref: React.Ref<HTMLInputElement>) => import("react/jsx-runtime").JSX.Element;
export declare const InputGroupListAddon: <T, V>(props: InputGroupProps<T, V> & React.RefAttributes<HTMLInputElement>) => React.ReactElement | null;
