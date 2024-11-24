/// <reference types="react" />
export interface LocalNavItemProps {
    title: string | React.ReactNode;
    id?: string | undefined;
}
export interface LocalNavItemRenderProps {
    selected: boolean;
}
interface BaseLocalNavProps {
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    onNavItemSelect: (e: React.MouseEvent, item: LocalNavItemProps, index: number) => void;
    items: LocalNavItemProps[];
    selectedItemIndex?: number | undefined;
    renderItem?: ((item: LocalNavItemProps, renderProps: LocalNavItemRenderProps) => React.ReactNode) | undefined;
}
export interface LocalNavMenuProps extends BaseLocalNavProps {
}
export interface LocalNavDropdownProps extends BaseLocalNavProps {
    defaultLabel: string | React.ReactNode;
    stickyOffset?: number | undefined;
}
export {};
