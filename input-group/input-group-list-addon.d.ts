import React from "react";
import { InputGroupProps } from "./types";
export declare const Component: <T, V>({ addon, error, onChange, readOnly, className, onBlur, ...otherProps }: InputGroupProps<T, V>, ref: any) => import("react/jsx-runtime").JSX.Element;
export declare const InputGroupListAddon: <T, V>(props: InputGroupProps<T, V> & React.RefAttributes<unknown>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
