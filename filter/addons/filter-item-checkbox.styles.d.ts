export declare const StyledFilterItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").FilterItemProps, never>> & string & Omit<{
    ({ collapsible: desktopCollapsible, initialExpanded, expanded: controlledExpanded, onExpandChange, minimisable, minimisedHeight, showDivider, showMobileDivider, title, addon, children, ...otherProps }: import("..").FilterItemProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, keyof import("react").Component<any, {}, any>>;
export declare const Group: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $isMobileToggleMode: boolean;
}>> & string;
export declare const Item: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {
    $visible: boolean;
    $selected: boolean;
    $level?: number;
}>> & string;
export declare const StyledCheckbox: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../../checkbox").CheckboxProps, never>> & string & Omit<({ className, checked, disabled, indeterminate, displaySize, id, ...otherProps }: import("../../checkbox").CheckboxProps) => JSX.Element, keyof import("react").Component<any, {}, any>>;
export declare const StyledToggle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("../../toggle").ToggleProps, {
    $visible: boolean;
}>> & string & Omit<({ type, indicator, checked, styleType, children, childrenMaxLines, subLabel, disabled, error, name, id, className, compositeSection, removable, onRemove, "data-testid": testId, onChange, useContentWidth, "aria-describedby": ariaDescribedBy, ...otherProps }: import("../../toggle").ToggleProps) => import("react/jsx-runtime").JSX.Element, keyof import("react").Component<any, {}, any>>;
export declare const SelectAllButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../../button").ButtonProps & import("react").RefAttributes<HTMLButtonElement>, never>> & string & Omit<(props: import("../../button").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
