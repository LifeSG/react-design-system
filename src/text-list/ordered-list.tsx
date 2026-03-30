import { StyledOrderedList } from "./text-list.styles";
import { OrderedListProps } from "./types";

/**
 * An ordered list component that renders items with numbering or lettering.
 *
 * Supports `lower-alpha`, `decimal`, and `lower-roman` counter styles,
 * reversed counting, and a custom starting value.
 *
 * @example
 * ```tsx
 * <OrderedList counterType="decimal">
 *   <li>First item</li>
 * </OrderedList>
 * ```
 */
export const OrderedList = ({
    size,
    counterType,
    counterSeparator,
    bottomMargin,
    children,
    ...otherProps
}: OrderedListProps) => {
    return (
        <StyledOrderedList
            $size={size}
            $counterType={counterType}
            $counterSeparator={counterSeparator}
            $bottomMargin={bottomMargin}
            {...otherProps}
        >
            {children}
        </StyledOrderedList>
    );
};

OrderedList.displayName = "TextList.Ol";
