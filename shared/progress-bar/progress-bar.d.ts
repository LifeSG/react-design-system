import { getThemeColors } from "../../v2_theme/color-theme-helper";
type ThemeColorFunctions = ReturnType<typeof getThemeColors>;
interface Props {
    className?: string | undefined;
    /** Progress from 0 to 1 */
    progress: number;
    color?: string | ThemeColorFunctions | undefined;
    "data-testid"?: string | undefined;
}
export declare const ProgressBar: ({ className, progress, color, "data-testid": testId, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
