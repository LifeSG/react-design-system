import clsx from "clsx";
import React, { useRef } from "react";

import { useApplyStyle } from "../theme";
import * as styles from "./text-list.styles";
import type { BulletType, UnorderedListProps } from "./types";

const isBulletType = (value: unknown): value is BulletType =>
    value === "disc" ||
    value === "circle" ||
    value === "square" ||
    value === "none";

export const UnorderedList = ({
    className,
    size,
    bulletType,
    bottomMargin,
    children,
    ...otherProps
}: UnorderedListProps) => {
    const listRef = useRef<HTMLUListElement>(null);
    const isCustomIcon = bulletType !== undefined && !isBulletType(bulletType);
    const bulletTypeClassName = isBulletType(bulletType)
        ? styles.unorderedListBulletType[bulletType]
        : styles.unorderedListBulletType.disc;

    useApplyStyle(listRef, {
        [styles.tokens.listBottomMargin]: `${bottomMargin ?? 0}rem`,
    });

    const renderChildren = () => {
        if (!isCustomIcon) {
            return children;
        }

        return React.Children.map(children, (child) => {
            if (React.isValidElement<{ children?: React.ReactNode }>(child)) {
                return React.cloneElement(child, {
                    children: (
                        <>
                            {/* Icon is decorative, hide from screen readers */}
                            <div aria-hidden>{bulletType}</div>
                            <div>{child.props.children}</div>
                        </>
                    ),
                });
            }
            return child;
        });
    };

    return (
        <ul
            ref={listRef}
            className={clsx(
                styles.listBase,
                styles.unorderedList,
                size && styles.listSize[size],
                bulletTypeClassName,
                isCustomIcon && styles.unorderedListCustomIcon,
                className
            )}
            {...otherProps}
        >
            {renderChildren()}
        </ul>
    );
};

UnorderedList.displayName = "TextList.Ul";
