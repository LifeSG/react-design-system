/// <reference types="react" />
export declare const StyledFilterItem: import("styled-components").StyledComponent<{
    ({ collapsible: desktopCollapsible, initialExpanded, expanded: controlledExpanded, onExpandChange, minimisable, minimisedHeight, showDivider, showMobileDivider, title, addon, children, ...otherProps }: import("..").FilterItemProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const Group: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Item: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, {
    $visible: boolean;
    $selected: boolean;
}, never>;
export declare const StyledCheckbox: import("styled-components").StyledComponent<({ className, checked, disabled, indeterminate, onChange, onKeyPress, displaySize, ...otherProps }: import("../../checkbox").CheckboxProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const StyledToggle: import("styled-components").StyledComponent<({ type, indicator, checked, styleType, children, childrenMaxLines, subLabel, disabled, error, name, id, className, compositeSection, removable, onRemove, "data-testid": testId, onChange, useContentWidth, }: import("../../toggle").ToggleProps) => import("react/jsx-runtime").JSX.Element, import("styled-components").DefaultTheme, {
    $visible: boolean;
}, never>;
export declare const SelectAllButton: import("styled-components").StyledComponent<(props: import("../../button").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
