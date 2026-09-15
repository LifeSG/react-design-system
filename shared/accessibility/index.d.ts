import React from "react";
export declare const VisuallyHidden: (props: React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>) => React.ReactElement | null;
/**
 * Handle compatibility of `inert` across React versions.
 * 19+ provides official support as a boolean, while it is handled as string in older versions
 */
export declare const inertValue: (value: boolean | undefined) => boolean | "true" | undefined;
export declare const concatIds: (...selectors: (string | undefined)[]) => string;
