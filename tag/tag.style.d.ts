import { TagColorType, TagType } from "./types";
interface StyleProps {
    $type: TagType;
    $color: TagColorType;
    $interactive: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const Label: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export {};
