import type React from "react";

import { Link, MenuItem, MobileWrapper } from "./menu.styles";
import type { NavItemCommonProps } from "./types";

interface Props<T> {
    items: NavItemCommonProps<T>[];
    onItemClick: (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: NavItemCommonProps<T>
    ) => void;
}

export const Menu = <T,>({ items, onItemClick }: Props<T>): JSX.Element => {
    const handleLinkClick = (item: NavItemCommonProps<T>) => {
        return (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.stopPropagation(); // in mobile, this prevents the drawer from intercepting event
            onItemClick(event, item);
        };
    };

    if (!items?.length) return <></>;

    return (
        <MobileWrapper>
            {items.map((item, index) => {
                const { children, options, ...otherItemAttrs } = item;
                const testId = `menu__mobile-${index + 1}`;

                return (
                    <MenuItem key={index}>
                        <Link
                            data-testid={testId}
                            {...otherItemAttrs}
                            {...options}
                            onClick={handleLinkClick(item)}
                            underlineStyle="none"
                        >
                            {children}
                        </Link>
                    </MenuItem>
                );
            })}
        </MobileWrapper>
    );
};
