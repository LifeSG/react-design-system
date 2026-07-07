export * from "./types";
export declare const UneditableSection: ((props: import("./types").UneditableSectionProps & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null) & {
    ItemSection: (props: import("./types").UneditableSectionItemSectionProps & import("react").RefAttributes<HTMLUListElement>) => React.ReactElement | null;
    Item: ({ label, value, displayWidth, maskState, maskLoadingState, maskChar, maskRange, unmaskRange, maskRegex, disableMaskUnmask, alert, maskTransformer, onMask, onUnmask, onTryAgain, fullWidth, }: import("./section-item").UneditableSectionItemComponentProps) => import("react/jsx-runtime").JSX.Element;
};
