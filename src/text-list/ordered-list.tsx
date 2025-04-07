import { StyledOrderedList } from "./text-list.styles";
import { OrderedListProps } from "./types";

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
