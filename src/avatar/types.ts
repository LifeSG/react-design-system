import { NavItemCommonProps } from "../navbar/types";

interface AvatarMenuProps<T> {
    items: NavItemCommonProps<T>[];
}

export interface AvatarProps<T> extends React.HTMLAttributes<HTMLDivElement> {
    children: string | JSX.Element;
    menu?: AvatarMenuProps<T> | undefined;
    mobile?: boolean | undefined;
    "data-testid"?: string | undefined;
}
