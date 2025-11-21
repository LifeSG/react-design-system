export declare const VisuallyHidden: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
/**
 * Handle compatibility of `inert` across React versions.
 * 19+ provides official support as a boolean, while it is handled as string in older versions
 */
export declare const inertValue: (value: boolean | undefined) => boolean | "true" | undefined;
export declare const concatIds: (...selectors: (string | undefined)[]) => string;
