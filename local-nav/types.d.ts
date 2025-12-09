/// <reference types="react" />
export interface LocalNavItemProps {
    title: string | React.ReactNode;
    id?: string | undefined;
}
interface BaseLocalNavProps {
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    onNavItemSelect: (e: React.MouseEvent, item: LocalNavItemProps, index: number) => void;
    items: LocalNavItemProps[];
    selectedItemIndex?: number | undefined;
}
export interface LocalNavMenuItemRenderProps {
    selected: boolean;
}
export interface LocalNavMenuProps extends BaseLocalNavProps {
    renderItem?: ((item: LocalNavItemProps, renderProps: LocalNavMenuItemRenderProps) => React.ReactNode) | undefined;
}
export interface LocalNavDropdownItemRenderProps {
    selected: boolean;
    stickied: boolean;
}
export interface LocalNavDropdownProps extends BaseLocalNavProps {
    defaultLabel: string | React.ReactNode;
    stickyOffset?: number | undefined;
    renderItem?: ((item: LocalNavItemProps, renderProps: LocalNavDropdownItemRenderProps) => React.ReactNode) | undefined;
}
export {};
