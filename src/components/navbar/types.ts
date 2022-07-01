import { TextLinkProps } from "../text/types";

export interface INavItem<T> extends TextLinkProps {
    id: string;
    "data-testid"?: string;
    options?: T;
}

export interface INavbarItems<T> {
    desktop: INavItem<T>[];
    mobile?: INavItem<T>[] /* takes desktop if not specified */;
}

export interface INavResources {
    brandName: string;
    logoSrc: string;
}

export interface INavbarSharedProps {
    resources?: INavResources;
    addon?: TAddon;
    onBrandClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export type TAddon = "download";

export interface INavbarProps<T = void> extends INavbarSharedProps {
    items: INavbarItems<T>;
    id?: string;
    "data-testid"?: string;
    selectedId?: string;
    compress?: boolean;
    fixed?: boolean /* specifies if navbar should be fixed to top */;
    onBrandClick?: () => void /* override */;
    onItemClick?: (item: INavItem<T>) => void;
}

export interface INavbarDrawerProps extends INavbarSharedProps {
    show: boolean;
    children: JSX.Element[];
    onClose?: () => void;
}
