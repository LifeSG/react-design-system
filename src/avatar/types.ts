import { BadgeProps } from "../badge/types";
import { NavItemCommonProps } from "../navbar/types";

interface AvatarMenuProps<T> {
    items: NavItemCommonProps<T>[];
}

interface AvatarBadgeProps extends Omit<BadgeProps, "isOverlay" | "variant"> {}

export interface AvatarProps<T> extends React.HTMLAttributes<HTMLDivElement> {
    children: string | JSX.Element;
    menu?: AvatarMenuProps<T> | undefined;
    mobile?: boolean | undefined;
    badge?: AvatarBadgeProps;
    "data-testid"?: string | undefined;
}
