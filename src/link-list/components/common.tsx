import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import clsx from "clsx";
import type React from "react";

import { Typography } from "../../typography";
import type { LinkListItemProps, LinkListStyle } from "../internal-types";
import * as styles from "../link-list.styles";

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
    const ItemTitle =
        style === "small" ? Typography.HeadingXS : Typography.HeadingSM;
    const itemTitleClassName =
        style === "small" ? styles.itemTitleSmall : styles.itemTitleDefault;

    return (
        <>
            {items.map((item, index) => {
                const {
                    title,
                    description,
                    secondaryDescription,
                    onClick: _onClick, // deconstruct since we are handling it
                    className,
                    ...otherProps
                } = item;

                return (
                    <a
                        key={`${testId}-${index}`}
                        data-testid={`${testId}-${index}`}
                        onClick={(event) => handleItemClick(event, item)}
                        {...otherProps}
                        className={clsx(styles.itemContainer, className)}
                    >
                        <div className={styles.itemContentContainer}>
                            <ItemTitle
                                as="div"
                                data-testid={`link-title-${index}`}
                                weight="semibold"
                                className={itemTitleClassName}
                            >
                                {title}
                            </ItemTitle>
                            {description && (
                                <Typography.BodyMD
                                    data-testid={`link-description-${index}`}
                                    className={styles.itemDescription}
                                >
                                    {description}
                                </Typography.BodyMD>
                            )}
                            {secondaryDescription}
                        </div>
                        <ChevronRightIcon
                            aria-hidden
                            className={styles.itemIcon}
                        />
                    </a>
                );
            })}
        </>
    );
};
