import { UneditableSectionItem } from "./section-item";
import { UneditableSectionProps } from "./types";
import {
    Container,
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
    ...otherProps
}: UneditableSectionProps) => {
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderItems = () => {
        if (items && items.length > 0) {
            const renderedItems = items.map((item, index) => {
                return <UneditableSectionItem key={index} {...item} />;
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
                {title && <Title>{title}</Title>}
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
        <Wrapper {...otherProps}>
            <Container type="grid">{renderChildren()}</Container>
        </Wrapper>
    );
};
