import type { getPrimitiveColour } from "../../v3_theme/colour-primitive/theme-helper";
import type { getSemanticColour } from "../../v3_theme/colour-semantic/theme-helper";
type ThemeColorFunctions = ReturnType<typeof getSemanticColour | typeof getPrimitiveColour>;
interface Props {
    className?: string | undefined;
    /** Progress from 0 to 1 */
    progress: number;
    color?: string | ThemeColorFunctions | undefined;
    "data-testid"?: string | undefined;
}
export declare const ProgressBar: ({ className, progress, color, "data-testid": testId, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
