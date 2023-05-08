import React from "react";
import { PopoverHOCOptionsProps, PopoverHOCProps } from "./types";
export declare const withPopover: <T>(Component: React.ComponentType<T>, options: PopoverHOCOptionsProps) => (props: T & PopoverHOCProps) => JSX.Element;
