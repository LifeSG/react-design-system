export * from "./types";
export declare const UneditableSection: (({ items, title, description, topSection, bottomSection, children, background, stretch, fullWidth, onMask, onUnmask, onTryAgain, ...otherProps }: import("./types").UneditableSectionProps) => import("react/jsx-runtime").JSX.Element) & {
    ItemSection: (props: import("./types").UneditableSectionItemSectionProps & import("react").RefAttributes<HTMLUListElement>) => import("react").ReactElement | null;
    Item: ({ label, value, displayWidth, maskState, maskLoadingState, maskChar, maskRange, unmaskRange, maskRegex, disableMaskUnmask, alert, maskTransformer, onMask, onUnmask, onTryAgain, fullWidth, }: import("./section-item").UneditableSectionItemComponentProps) => import("react/jsx-runtime").JSX.Element;
};
