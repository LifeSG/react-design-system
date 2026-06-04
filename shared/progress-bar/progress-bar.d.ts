import type { ColourCSSVariableString } from "../../theme";
interface Props {
    className?: string | undefined;
    /** Progress from 0 to 1 */
    progress: number;
    colour?: string | ColourCSSVariableString | undefined;
    "data-testid"?: string | undefined;
}
export declare const ProgressBar: ({ className, progress, colour, "data-testid": testId, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
