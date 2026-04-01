import clsx from "clsx";
import React, { useRef } from "react";

import { useApplyStyle } from "../theme";
import {
    bulletTypeClassNames,
    listSizeClassNames,
    StyledUnorderedList,
    tokens,
    unorderedListCustomIconClassName,
} from "./text-list.styles";
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
        ? bulletTypeClassNames[bulletType]
        : bulletTypeClassNames.disc;

    useApplyStyle(listRef, {
        [tokens.listBottomMargin]: `${bottomMargin ?? 0}rem`,
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
        <StyledUnorderedList
            ref={listRef}
            className={clsx(
                size && listSizeClassNames[size],
                bulletTypeClassName,
                isCustomIcon && unorderedListCustomIconClassName,
                className
            )}
            {...otherProps}
        >
            {renderChildren()}
        </StyledUnorderedList>
    );
};

UnorderedList.displayName = "TextList.Ul";
