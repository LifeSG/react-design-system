import React from "react";
import { StyledUnorderedList } from "./text-list.styles";
import { BulletType, UnorderedListProps } from "./types";

/**
 * An unordered list component that renders items with bullet points or custom icons.
 *
 * Supports `disc`, `circle`, `square`, `none`, or any custom React node as the bullet.
 *
 * @example
 * ```tsx
 * <UnorderedList bulletType="disc">
 *   <li>First item</li>
 * </UnorderedList>
 * ```
 */
export const UnorderedList = ({
    size,
    bulletType,
    bottomMargin,
    children,
    ...otherProps
}: UnorderedListProps) => {
    const isCustomIcon =
        bulletType !== undefined && typeof bulletType !== "string";

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
            $size={size}
            $bulletType={isCustomIcon ? undefined : (bulletType as BulletType)}
            $bottomMargin={bottomMargin}
            $hasCustomIcon={isCustomIcon}
            {...otherProps}
        >
            {renderChildren()}
        </StyledUnorderedList>
    );
};

UnorderedList.displayName = "TextList.Ul";
