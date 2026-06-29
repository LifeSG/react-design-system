import React from "react";
import { PopoverHOCOptionsProps, PopoverHOCProps } from "./types";
/** @deprecated Use `PopoverTrigger` for improved positioning behaviour. This component will be removed in DS v3. */
export declare const withPopover: <T extends object>(Component: React.ComponentType<T>, options: PopoverHOCOptionsProps) => (props: T & PopoverHOCProps) => JSX.Element;
