import { UneditableSectionItem } from "./section-item";
import { UneditableSectionItemProps, UneditableSectionProps } from "./types";
import {
    CustomSection,
    Description,
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
    onMask,
    onUnmask,
    onTryAgain,
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
                    />
                );
            });

            return <GridUl>{renderedItems}</GridUl>;
        }

        return null;
    };

    const renderChildren = () => {
        if (children) {
            return children;
        }

        return (
            <>
                {title && <Title weight="semibold">{title}</Title>}
                {description && <Description>{description}</Description>}
                {topSection && (
                    <CustomSection data-id="top-section">
                        {topSection}
                    </CustomSection>
                )}
                {renderItems()}
                {bottomSection && (
                    <CustomSection data-id="bottom-section">
                        {bottomSection}
                    </CustomSection>
                )}
            </>
        );
    };

    return (
        <Wrapper {...otherProps} type="grid">
            {renderChildren()}
        </Wrapper>
    );
};
