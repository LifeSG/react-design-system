import React from "react";
import { TooltipHOCOptionsProps, TooltipHOCProps } from "./types";
export declare const withTooltip: <T>(Component: React.ComponentType<T>, options: TooltipHOCOptionsProps) => (props: T & TooltipHOCProps) => JSX.Element;