import "styled-components";
import { ThemeSpec } from "../src/theme/types";

declare module "styled-components" {
    export interface DefaultTheme extends ThemeSpec {}
}
