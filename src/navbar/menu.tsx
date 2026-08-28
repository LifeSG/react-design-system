import React from "react";
import { Link, MenuItem, MobileWrapper } from "./menu.styles";
import { NavItemCommonProps } from "./types";

interface Props<T> {
    items: NavItemCommonProps<T>[];
    selectedId?: string | undefined;
    onItemClick: (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: NavItemCommonProps<T>
    ) => void;
}

export const Menu = <T,>({
    items,
    selectedId,
    onItemClick,
}: Props<T>): JSX.Element => {
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
                const { children, options, weight, ...otherItemAttrs } = item;
                const testId = `menu__mobile-${index + 1}`;
                const selected = item.id === selectedId;

                return (
                    <MenuItem key={index}>
                        <Link
                            data-testid={testId}
                            {...otherItemAttrs}
                            {...options}
                            weight={selected ? "bold" : weight}
                            aria-current={selected ? "page" : undefined}
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
