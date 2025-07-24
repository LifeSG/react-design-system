import { BaseProps, LinkListItemProps } from "../internal-types";
import {
    Description,
    Item,
    ItemContentContainer,
    ItemIcon,
    ItemTitleDefault,
    ItemTitleSmall,
} from "../link-list.styles";

type ItemContentProps<T> = {
    index: number;
    title: LinkListItemProps<T>["title"];
    description: LinkListItemProps<T>["description"];
    secondaryDescription: LinkListItemProps<T>["secondaryDescription"];
    style: BaseProps<T>["style"];
};
export const ItemContent = <T,>({
    index,
    title,
    description,
    secondaryDescription,
    style,
}: ItemContentProps<T>) => {
    const ItemTitle = style === "small" ? ItemTitleSmall : ItemTitleDefault;
    return (
        <>
            <ItemContentContainer>
                <ItemTitle
                    data-testid={`link-title-${index}`}
                    weight="semibold"
                >
                    {title}
                </ItemTitle>
                {description && (
                    <Description data-testid={`link-description-${index}`}>
                        {description}
                    </Description>
                )}
                {secondaryDescription}
            </ItemContentContainer>
            <ItemIcon />
        </>
    );
};

type ShownItemsProps<T> = {
    items: LinkListItemProps<T>[];
    handleItemClick: (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: LinkListItemProps<T>
    ) => void;
    style: BaseProps<T>["style"];
};
export const ShownItems = <T,>({
    items,
    handleItemClick,
    style,
}: ShownItemsProps<T>) => {
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
                    <Item
                        key={`list-item-shown-${index}`}
                        data-testid={`list-item-shown-${index}`}
                        onClick={(event) => handleItemClick(event, item)}
                        {...otherProps}
                    >
                        <ItemContent
                            style={style}
                            index={index}
                            title={title}
                            description={description}
                            secondaryDescription={secondaryDescription}
                        />
                    </Item>
                );
            })}
        </>
    );
};
