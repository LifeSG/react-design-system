export * from "./types";
export declare const UneditableSection: (({ items, title, description, topSection, bottomSection, children, background, onMask, onUnmask, onTryAgain, ...otherProps }: import("./types").UneditableSectionProps) => import("react/jsx-runtime").JSX.Element) & {
    ItemSection: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, {}, never>;
    Item: ({ label, value, displayWidth, maskState, maskLoadingState, maskChar, maskRange, unmaskRange, maskRegex, disableMaskUnmask, alert, maskTransformer, onMask, onUnmask, onTryAgain, }: import("./section-item").UneditableSectionItemComponentProps) => import("react/jsx-runtime").JSX.Element;
};
