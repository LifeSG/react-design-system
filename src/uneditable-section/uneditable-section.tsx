import clsx from "clsx";

import { UneditableSectionItem } from "./section-item";
import type {
    UneditableSectionItemProps,
    UneditableSectionProps,
} from "./types";
import {
    CustomSection,
    Description,
    FullWidthWrapper,
    GridUl,
    Title,
    Wrapper,
} from "./uneditable-section.styles";

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
                <GridUl
                    className={clsx(
                        stretch && "columnWidthStretch",
                        fullWidth && "gridUlFullWidth"
                    )}
                >
                    {renderedItems}
                </GridUl>
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
                    <Title
                        forwardedAs="h2"
                        weight="semibold"
                        className={clsx(stretch && "columnWidthStretch")}
                    >
                        {title}
                    </Title>
                )}
                {description && (
                    <Description
                        className={clsx(stretch && "columnWidthStretch")}
                    >
                        {description}
                    </Description>
                )}
                {topSection && (
                    <CustomSection
                        data-id="top-section"
                        className={clsx(stretch && "columnWidthStretch")}
                    >
                        {topSection}
                    </CustomSection>
                )}
                {renderItems()}
                {bottomSection && (
                    <CustomSection
                        data-id="bottom-section"
                        className={clsx(stretch && "columnWidthStretch")}
                    >
                        {bottomSection}
                    </CustomSection>
                )}
            </>
        );
    };

    if (fullWidth) {
        return (
            <FullWidthWrapper
                className={clsx(
                    background && "fullWidthWrapperBackground",
                    className
                )}
                {...otherProps}
            >
                {renderChildren()}
            </FullWidthWrapper>
        );
    }
    return (
        <Wrapper
            className={clsx(background && "wrapperBackground", className)}
            {...otherProps}
            type="grid"
        >
            {renderChildren()}
        </Wrapper>
    );
};
