/// <reference types="react" />
import { SidenavProps } from "./types";
export declare const Sidenav: (({ fixed, children, ...otherProps }: SidenavProps) => JSX.Element) & {
    Group: ({ separator, children, ...otherProps }: import("./types").SidenavGroupProps) => JSX.Element;
    Item: ({ children, icon, title, onClick, ...otherProps }: import("./types").SidenavItemProps) => JSX.Element;
    DrawerItem: ({ id, title, onClick, children, ...otherProps }: import("./types").SidenavDrawerItemProps) => JSX.Element;
    DrawerSubitem: ({ id, title, onClick, ...otherProps }: import("./types").SidenavDrawerSubitemProps) => JSX.Element;
};
