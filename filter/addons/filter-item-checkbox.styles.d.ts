/// <reference types="react" />
export declare const StyledFilterItem: import("styled-components").StyledComponent<({ collapsible: desktopCollapsible, minimisable, minimisedHeight, showDivider, showMobileDivider, title, children, ...otherProps }: import("..").FilterItemProps) => JSX.Element, any, {}, never>;
export declare const Group: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Item: import("styled-components").StyledComponent<"label", any, {
    $visible: boolean;
    $selected: boolean;
}, never>;
export declare const Input: import("styled-components").StyledComponent<"input", any, {}, never>;
export declare const StyledToggleIcon: import("styled-components").StyledComponent<({ type, active, disabled, className, }: import("../../shared/toggle-icon/toggle-icon").ToggleIconProps) => JSX.Element, any, {}, never>;
export declare const StyledToggle: import("styled-components").StyledComponent<({ type, indicator, checked, styleType, children, disabled, error, name, id, className, "data-testid": testId, onChange, }: import("../../toggle").ToggleProps) => JSX.Element, any, {
    $visible: boolean;
}, never>;
