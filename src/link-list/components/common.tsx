import { BaseProps, LinkListItemProps } from "../internal-types";
import {
    Description,
    ItemContainer,
    ItemContentContainer,
    ItemIcon,
    ItemTitleDefault,
    ItemTitleSmall,
} from "../link-list.styles";

type LinkListItemsProps<T> = {
    type: "shown" | "minimised";
    items: LinkListItemProps<T>[];
    handleItemClick: (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: LinkListItemProps<T>
    ) => void;
    style: BaseProps<T>["style"];
};
export const LinkListItems = <T,>({
    type,
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
                        key={`list-item-${type}-${index}`}
                        data-testid={`list-item-${type}-${index}`}
                        onClick={(event) => handleItemClick(event, item)}
                        {...otherProps}
                    >
                        <ItemContentContainer>
                            <ItemTitle
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
