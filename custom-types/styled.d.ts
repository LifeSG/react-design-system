import "styled-components";
import type { ThemeSpec } from "@/theme";

declare module "styled-components" {
    export interface DefaultTheme extends ThemeSpec {}
}
