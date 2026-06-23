import type { SidenavProps } from "./types";
export declare const Sidenav: (({ fixed, children, "aria-label": ariaLabel, className, ...otherProps }: SidenavProps) => import("react/jsx-runtime").JSX.Element) & {
    Group: ({ separator, children, className, ...otherProps }: import("./types").SidenavGroupProps) => import("react/jsx-runtime").JSX.Element;
    Item: ({ children, icon, title, onClick, selected, className, ...otherProps }: import("./types").SidenavItemProps) => import("react/jsx-runtime").JSX.Element;
    DrawerItem: ({ id, title, onClick, children, className, ...otherProps }: import("./types").SidenavDrawerItemProps) => import("react/jsx-runtime").JSX.Element;
    DrawerSubitem: ({ id, title, onClick, className, ...otherProps }: import("./types").SidenavDrawerSubitemProps) => import("react/jsx-runtime").JSX.Element;
};
