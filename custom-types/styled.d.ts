import "styled-components";
import { V2_ThemeSpec } from "../src/v2_theme/types";

declare module "styled-components" {
    export interface DefaultTheme extends V2_ThemeSpec {}
}
