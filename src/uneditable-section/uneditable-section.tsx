import clsx from "clsx";

import { Layout } from "../layout";
import { Typography } from "../typography";
import { UneditableSectionItem } from "./section-item";
import type {
    UneditableSectionItemProps,
    UneditableSectionProps,
} from "./types";
import * as styles from "./uneditable-section.styles";

export const UneditableSectionBase = ({
    items,
    title,
    description,
    topSection,
    bottomSection,
    children,
    background = true,
    stretch,
    fullWidth,
    onMask,
    onUnmask,
    onTryAgain,
    className,
    ...otherProps
}: UneditableSectionProps) => {
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleItemMask = (item: UneditableSectionItemProps) => () => {
        if (onMask) onMask(item);
    };

    const handleItemUnmask = (item: UneditableSectionItemProps) => () => {
        if (onUnmask) onUnmask(item);
    };

    const handleTryAgain = (item: UneditableSectionItemProps) => () => {
        if (onTryAgain) onTryAgain(item);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderItems = () => {
        if (items && items.length > 0) {
            const renderedItems = items.map((item, index) => {
                return (
                    <UneditableSectionItem
                        key={index}
                        {...item}
                        onMask={handleItemMask(item)}
                        onUnmask={handleItemUnmask(item)}
                        onTryAgain={handleTryAgain(item)}
                        fullWidth={fullWidth}
                    />
                );
            });

            return (
                <ul
                    className={clsx(
                        styles.gridUl,
                        stretch && styles.columnWidthStretch,
                        fullWidth && styles.gridUlFullWidth
                    )}
                >
                    {renderedItems}
                </ul>
            );
        }

        return null;
    };

    const renderChildren = () => {
        if (children) {
            return children;
        }

        return (
            <>
                {title && (
                    <Typography.HeadingSM
                        as="h2"
                        weight="semibold"
                        className={clsx(
                            styles.title,
                            stretch && styles.columnWidthStretch
                        )}
                    >
                        {title}
                    </Typography.HeadingSM>
                )}
                {description && (
                    <Typography.BodyBL
                        className={clsx(
                            styles.description,
                            stretch && styles.columnWidthStretch
                        )}
                    >
                        {description}
                    </Typography.BodyBL>
                )}
                {topSection && (
                    <div
                        data-id="top-section"
                        className={clsx(
                            styles.customSection,
                            stretch && styles.columnWidthStretch
                        )}
                    >
                        {topSection}
                    </div>
                )}
                {renderItems()}
                {bottomSection && (
                    <div
                        data-id="bottom-section"
                        className={clsx(
                            styles.customSection,
                            stretch && styles.columnWidthStretch
                        )}
                    >
                        {bottomSection}
                    </div>
                )}
            </>
        );
    };

    if (fullWidth) {
        return (
            <div
                className={clsx(
                    styles.fullWidthWrapper,
                    background && styles.fullWidthWrapperBackground,
                    className
                )}
                {...otherProps}
            >
                {renderChildren()}
            </div>
        );
    }
    return (
        <Layout.Content
            className={clsx(
                styles.wrapper,
                background && styles.wrapperBackground,
                className
            )}
            {...otherProps}
            type="grid"
        >
            {renderChildren()}
        </Layout.Content>
    );
};
