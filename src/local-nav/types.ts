export interface LocalNavItemProps {
    title: string | React.ReactNode;
    id?: string;
}

export interface LocalNavPropsBase {
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    onNavItemSelect: (
        e: MouseEvent,
        item: LocalNavItemProps,
        index: number
    ) => void;
    titleList: string[];
    selectedItemIndex: number;
    renderItem?:
        | ((
              item: LocalNavItemProps,
              renderProps: { selected: boolean }
          ) => React.ReactNode)
        | undefined;
}

export interface LocalNavDropdownProps extends LocalNavPropsBase {
    defaultLabel: string | React.ReactNode;
    stickyOffset?: number | undefined;
}
