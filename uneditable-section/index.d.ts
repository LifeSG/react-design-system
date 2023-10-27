/// <reference types="react" />
export * from "./types";
export declare const UneditableSection: (({ items, title, description, topSection, bottomSection, children, ...otherProps }: import("./types").UneditableSectionProps) => JSX.Element) & {
    ItemSection: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, {}, never>;
    Item: ({ label, value, displayWidth, }: import("./types").UneditableSectionItemProps) => JSX.Element;
};
