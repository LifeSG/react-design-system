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
    background = true,
    stretch,
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

            return <GridUl $stretch={stretch}>{renderedItems}</GridUl>;
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
                    <Title weight="semibold" $stretch={stretch}>
                        {title}
                    </Title>
                )}
                {description && (
                    <Description $stretch={stretch}>{description}</Description>
                )}
                {topSection && (
                    <CustomSection data-id="top-section" $stretch={stretch}>
                        {topSection}
                    </CustomSection>
                )}
                {renderItems()}
                {bottomSection && (
                    <CustomSection data-id="bottom-section" $stretch={stretch}>
                        {bottomSection}
                    </CustomSection>
                )}
            </>
        );
    };

    return (
        <Wrapper $background={background} {...otherProps} type="grid">
            {renderChildren()}
        </Wrapper>
    );
};
