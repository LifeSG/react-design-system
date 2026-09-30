export * from "./types";
/**
 * A read-only summary section for displaying labeled field values.
 *
 * Use `UneditableSection` to present a group of non-editable field–value pairs
 * in a responsive grid layout
 *
 * Sub-components:
 * - `UneditableSection.Item` — a standalone labeled read-only field with optional masking.
 * - `UneditableSection.ItemSection` — a standalone grid list for composing items.
 * @keywords field values, form summary, read-only, review
 */
export declare const UneditableSection: ((props: import("./types").UneditableSectionProps & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null) & {
    /**
     * A standalone grid list for rendering `UneditableSection.Item` elements
     * outside the full section wrapper.
     */
    ItemSection: (props: import("./types").UneditableSectionItemSectionProps & import("react").RefAttributes<HTMLUListElement>) => React.ReactElement | null;
    /** A standalone labeled read-only field with optional masking support. */
    Item: ({ label, value, displayWidth, maskState, maskLoadingState, maskChar, maskRange, unmaskRange, maskRegex, disableMaskUnmask, alert, maskTransformer, onMask, onUnmask, onTryAgain, fullWidth, }: import("./section-item").UneditableSectionItemComponentProps) => import("react/jsx-runtime").JSX.Element;
};
