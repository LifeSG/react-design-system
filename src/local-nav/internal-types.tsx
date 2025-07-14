import {
    LocalNavDropdownItemRenderProps,
    LocalNavItemProps,
    LocalNavMenuItemRenderProps,
} from "./types";

interface LocalNavItemBaseComponentProps {
    handleClick: (
        e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
    ) => void;
    isSelected: boolean;
    item: LocalNavItemProps;
}

export interface LocalNavMenuItemComponentProps
    extends LocalNavItemBaseComponentProps {
    renderItem?:
        | ((
              item: LocalNavItemProps,
              renderProps: LocalNavMenuItemRenderProps
          ) => React.ReactNode)
        | undefined;
}

export interface LocalNavDropdownItemComponentProps
    extends LocalNavItemBaseComponentProps {
    renderItem?:
        | ((
              item: LocalNavItemProps,
              renderProps: LocalNavDropdownItemRenderProps
          ) => React.ReactNode)
        | undefined;
}
