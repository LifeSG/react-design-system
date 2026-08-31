import type { ToggleProps } from "./types";
/**
 * A selectable control for checkbox and radio interaction patterns.
 *
 * Use `Toggle` to present a labeled option that the user can select or
 * deselect.
 * @keywords checkbox, choice, field, form, input, option, radio
 */
export declare const Toggle: ({ type, indicator, checked, styleType, children, childrenMaxLines, subLabel, disabled, error, name, id, className, compositeSection, removable, focusableWhenDisabled, useContentWidth, onRemove, onChange, "data-testid": testId, "aria-describedby": ariaDescribedBy, ...otherProps }: ToggleProps) => import("react/jsx-runtime").JSX.Element;
