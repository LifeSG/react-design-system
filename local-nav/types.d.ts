/**
 * Configuration for the optional addon elements displayed alongside a
 * navigation item's title. Both slots may be used at the same time.
 */
export interface TitleAddonProps {
    /** Element rendered immediately before the title. */
    left?: JSX.Element | undefined;
    /** Element rendered after the title, flushed to the far right of the item. */
    right?: JSX.Element | undefined;
}
export interface LocalNavItemProps {
    title: string | React.ReactNode;
    id?: string | undefined;
    /**
     * Optional addon element rendered alongside the item title.
     *
     * Ignored when a custom `renderItem` is provided, since the caller then
     * controls the item's layout.
     */
    titleAddon?: TitleAddonProps | undefined;
}
interface BaseLocalNavProps {
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    onNavItemSelect: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, item: LocalNavItemProps, index: number) => void;
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
