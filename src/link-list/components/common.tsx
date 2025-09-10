import { LinkListItemProps, LinkListStyle } from "../internal-types";
import {
    Description,
    ItemContainer,
    ItemContentContainer,
    ItemIcon,
    ItemTitleDefault,
    ItemTitleSmall,
} from "../link-list.styles";

type LinkListItemsProps<T> = {
    "data-testid"?: string | undefined;
    items: LinkListItemProps<T>[];
    handleItemClick: (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: LinkListItemProps<T>
    ) => void;
    style?: LinkListStyle | undefined;
};
export const LinkListItems = <T,>({
    "data-testid": testId,
    items,
    handleItemClick,
    style,
}: LinkListItemsProps<T>) => {
    const ItemTitle = style === "small" ? ItemTitleSmall : ItemTitleDefault;

    return (
        <>
            {items.map((item, index) => {
                const {
                    title,
                    description,
                    secondaryDescription,
                    onClick: _onClick, // deconstruct since we are handling it
                    ...otherProps
                } = item;

                return (
                    <ItemContainer
                        key={`${testId}-${index}`}
                        data-testid={`${testId}-${index}`}
                        onClick={(event) => handleItemClick(event, item)}
                        {...otherProps}
                    >
                        <ItemContentContainer>
                            <ItemTitle
                                forwardedAs="div"
                                data-testid={`link-title-${index}`}
                                weight="semibold"
                            >
                                {title}
                            </ItemTitle>
                            {description && (
                                <Description
                                    data-testid={`link-description-${index}`}
                                >
                                    {description}
                                </Description>
                            )}
                            {secondaryDescription}
                        </ItemContentContainer>
                        <ItemIcon />
                    </ItemContainer>
                );
            })}
        </>
    );
};
