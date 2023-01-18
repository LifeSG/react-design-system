/// <reference types="react" />
import { TruncateType } from "./types";
interface ListContainerProps {
    width?: string;
}
interface ListItemProps {
    checked?: boolean;
}
interface ListItemSelectorProps {
    multiSelect?: boolean;
}
interface LabelProps {
    truncateType?: TruncateType;
}
export declare const Container: import("styled-components").StyledComponent<import("react-spring").AnimatedComponent<"div">, any, {}, never>;
export declare const List: import("styled-components").StyledComponent<"ul", any, ListContainerProps, never>;
export declare const ListItem: import("styled-components").StyledComponent<"li", any, ListItemProps, never>;
export declare const ListItemSelector: import("styled-components").StyledComponent<"button", any, ListItemSelectorProps, never>;
export declare const AddOnContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Label: import("styled-components").StyledComponent<"div", any, LabelProps, never>;
export declare const TruncateContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TruncateFirstLine: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TruncateSecondLine: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Clickable: import("styled-components").StyledComponent<(props: import("../../text").TextLinkProps) => JSX.Element, any, {}, never>;
export declare const ListCheckbox: import("styled-components").StyledComponent<({ className, checked, disabled, onChange, onKeyPress, displaySize, ...otherProps }: import("../../checkbox").CheckboxProps) => JSX.Element, any, {}, never>;
export declare const SelectAllContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const DropdownCommonButton: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const ResultStateContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ResultStateText: import("styled-components").StyledComponent<"p", any, import("../../text").TextProps, never>;
export declare const LabelIcon: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
