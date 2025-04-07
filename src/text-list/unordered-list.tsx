import { StyledUnorderedList } from "./text-list.styles";
import { UnorderedListProps } from "./types";

export const UnorderedList = ({
    size,
    bulletType,
    bottomMargin,
    children,
    ...otherProps
}: UnorderedListProps) => {
    return (
        <StyledUnorderedList
            $size={size}
            $bulletType={bulletType}
            $bottomMargin={bottomMargin}
            {...otherProps}
        >
            {children}
        </StyledUnorderedList>
    );
};

UnorderedList.displayName = "TextList.Ul";
