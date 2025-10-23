import { SidenavProps } from "./types";
export declare const Sidenav: (({ fixed, children, ...otherProps }: SidenavProps) => import("react/jsx-runtime").JSX.Element) & {
    Group: ({ separator, children, ...otherProps }: import("./types").SidenavGroupProps) => import("react/jsx-runtime").JSX.Element;
    Item: ({ children, icon, title, onClick, ...otherProps }: import("./types").SidenavItemProps) => import("react/jsx-runtime").JSX.Element;
    DrawerItem: ({ id, title, onClick, children, ...otherProps }: import("./types").SidenavDrawerItemProps) => import("react/jsx-runtime").JSX.Element;
    DrawerSubitem: ({ id, title, onClick, ...otherProps }: import("./types").SidenavDrawerSubitemProps) => import("react/jsx-runtime").JSX.Element;
};
