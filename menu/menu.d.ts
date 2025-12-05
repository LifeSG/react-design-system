import { MenuContentProps, MenuProps } from "./types";
export declare const MenuTrigger: ({ children, position, menuContent, "data-testid": testId, ...otherProps }: MenuProps) => JSX.Element;
export declare const Menu: (({ children, position, menuContent, "data-testid": testId, ...otherProps }: MenuProps) => JSX.Element) & {
    Content: {
        ({ children, "data-testid": testId, overflow, maxHeight, ...otherProps }: MenuContentProps): JSX.Element;
        displayName: string;
    };
    Section: {
        ({ children, label, showDivider, "data-testid": testId, ...otherProps }: import("./types").MenuSectionProps): JSX.Element;
        displayName: string;
    };
    Item: {
        ({ label, subLabel, children, "data-testid": testId, ...otherProps }: import("./types").MenuItemProps): JSX.Element;
        displayName: string;
    };
    Link: {
        ({ children, "data-testid": testId, ...otherProps }: import("./types").MenuLinkProps): JSX.Element;
        displayName: string;
    };
};
