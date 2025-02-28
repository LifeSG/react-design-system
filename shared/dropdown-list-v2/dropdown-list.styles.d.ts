/// <reference types="react" />
import { DropdownVariantType } from "../dropdown-list/types";
interface ContainerStyleProps {
    $width?: number;
}
interface ListStyleProps {
    $variant?: DropdownVariantType;
}
interface ListItemStyleProps {
    $active?: boolean;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContainerStyleProps, never>;
export declare const List: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Listbox: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, {}, never>;
export declare const ListItem: import("styled-components").StyledComponent<"li", import("styled-components").DefaultTheme, ListItemStyleProps, never>;
export declare const SelectedIndicator: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const UnselectedIndicator: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const CheckboxSelectedIndicator: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const CheckboxUnselectedIndicator: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const SelectAllContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const DropdownCommonButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, import("../input-wrapper/input-wrapper").InputStyleProps & ListStyleProps, never>;
export declare const TryAgainButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, import("../input-wrapper/input-wrapper").InputStyleProps & ListStyleProps, never>;
export declare const SelectAllButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, import("../input-wrapper/input-wrapper").InputStyleProps & ListStyleProps, never>;
export declare const ResultStateContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ResultStateText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ListStyleProps, never>;
export declare const LabelIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, ListStyleProps, never>;
export {};
