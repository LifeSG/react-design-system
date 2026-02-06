import React from "react";
import { StyledUnorderedList } from "./text-list.styles";
import { BulletType, UnorderedListProps } from "./types";

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
            if (
                React.isValidElement<{ children?: React.ReactNode }>(child) &&
                child.type === "li"
            ) {
                return React.cloneElement(child, {
                    children: (
                        <>
                            {/* Icon is decorative, hide from screen readers */}
                            <span aria-hidden="true">{bulletType}</span>
                            <span>{child.props.children}</span>
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
