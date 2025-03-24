/// <reference types="react" />
export * from "./types";
export declare const UneditableSection: (({ items, title, description, topSection, bottomSection, children, background, stretch, onMask, onUnmask, onTryAgain, ...otherProps }: import("./types").UneditableSectionProps) => import("react/jsx-runtime").JSX.Element) & {
    ItemSection: (props: import("./types").UneditableSectionItemSectionProps & import("react").RefAttributes<HTMLUListElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    Item: ({ label, value, displayWidth, maskState, maskLoadingState, maskChar, maskRange, unmaskRange, maskRegex, disableMaskUnmask, alert, maskTransformer, onMask, onUnmask, onTryAgain, }: import("./section-item").UneditableSectionItemComponentProps) => import("react/jsx-runtime").JSX.Element;
};
