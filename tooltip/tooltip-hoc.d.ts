import type React from "react";
import type { TooltipHOCOptionsProps, TooltipHOCProps } from "./types";
export declare const withTooltip: <T extends object>(Component: React.ComponentType<T>, options: TooltipHOCOptionsProps) => (props: T & TooltipHOCProps) => JSX.Element;
