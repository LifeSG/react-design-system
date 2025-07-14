import { BadgeProps } from "../badge/types";
import { NavItemProps } from "../navbar/types";

interface AvatarMenuProps<T> {
    alignment?: "left" | "right";
    items: NavItemProps<T>[];
}

interface AvatarBadgeProps extends Omit<BadgeProps, "isOverlay" | "variant"> {}

export interface AvatarProps<T> extends React.HTMLAttributes<HTMLElement> {
    children: string | JSX.Element;
    menu?: AvatarMenuProps<T> | undefined;
    mobile?: boolean | undefined;
    badge?: AvatarBadgeProps;
    "data-testid"?: string | undefined;
}
