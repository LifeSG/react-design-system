import "styled-components";

import { ThemeSpec } from "../src/v3_theme/types";

declare module "styled-components" {
    export interface DefaultTheme extends ThemeSpec {}
}
