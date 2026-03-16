import "styled-components";

import type { V3_ThemeSpec } from "../src/v3_theme/types";

declare module "styled-components" {
    export interface DefaultTheme extends V3_ThemeSpec {}
}
