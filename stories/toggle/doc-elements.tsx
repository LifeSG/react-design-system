import { ReactRenderer } from "@storybook/react";
import { DecoratorFunction } from "@storybook/types";
import { Typography } from "src/typography";
import styled from "styled-components";

// =============================================================================
// STYLING
// =============================================================================
export const SimpleStoryWrapper = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
`;

export const VariantStoryWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    align-items: center;

    @media only screen and (max-width: 1200px) {
        grid-template-columns: auto 1fr;
        grid-template-rows: repeat(5, auto);
        grid-auto-flow: column;
    }
`;

export const VariantHeading = styled(Typography.BodyMD)`
    text-align: center;

    @media only screen and (max-width: 1200px) {
        text-align: left;
    }
`;

export const SubLabelStoryWrapper = styled.div`
    display: grid;
    gap: 1.5rem;
    align-items: center;

    // 1 variant per column
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, auto);

    // 1 column
    @media only screen and (max-width: 900px) {
        grid-auto-flow: row;
        grid-template-columns: 1fr;
    }
`;

// =============================================================================
// COMPONENTS
// =============================================================================
const VariantHeadings = () => {
    return (
        <>
            <VariantHeading weight="semibold">Default</VariantHeading>
            <VariantHeading weight="semibold">Selected</VariantHeading>
            <VariantHeading weight="semibold">Disabled</VariantHeading>
            <VariantHeading weight="semibold">Disabled Selected</VariantHeading>
            <VariantHeading weight="semibold">Error</VariantHeading>
        </>
    );
};

export const VariantDecorator: DecoratorFunction<ReactRenderer> = (Story) => (
    <VariantStoryWrapper>
        <VariantHeadings />
        <Story />
    </VariantStoryWrapper>
);
