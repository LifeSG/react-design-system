import { NavItemProps } from "../navbar/types";

interface AvatarMenuProps<T> {
    alignment?: "left" | "right";
    items: NavItemProps<T>[];
}

export interface AvatarProps<T> {
    content: string | JSX.Element;
    menu?: AvatarMenuProps<T> | undefined;
    onClick?: () => void | undefined;
    mobile?: boolean | undefined;
}
