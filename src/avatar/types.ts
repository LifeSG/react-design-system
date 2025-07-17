import { NavItemCommonProps } from "../navbar/types";

interface AvatarMenuProps<T> {
    items: NavItemCommonProps<T>[];
}
export type AvatarSizeType = "default" | "small";

export interface AvatarProps<T> extends React.HTMLAttributes<HTMLDivElement> {
    children: string | JSX.Element;
    menu?: AvatarMenuProps<T> | undefined;
    sizeType?: AvatarSizeType | undefined;
    "data-testid"?: string | undefined;
}
