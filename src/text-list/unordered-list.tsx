import React from "react";
import { StyledUnorderedList } from "./text-list.styles";
import { UnorderedListProps } from "./types";

export const UnorderedList = ({
    size,
    bulletType,
    bottomMargin,
    customIcon,
    children,
    ...otherProps
}: UnorderedListProps) => {
    const renderChildren = () => {
        if (!customIcon) {
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
                            <span aria-hidden="true">{customIcon}</span>
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
            $bulletType={bulletType}
            $bottomMargin={bottomMargin}
            $hasCustomIcon={!!customIcon}
            {...otherProps}
        >
            {renderChildren()}
        </StyledUnorderedList>
    );
};

UnorderedList.displayName = "TextList.Ul";
