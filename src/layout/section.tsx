import React from "react";
import styled from "styled-components";
import { SectionProps } from "./types";

const Component = (
    props: SectionProps,
    ref: React.Ref<HTMLDivElement>
): JSX.Element => {
    const {
        children,
        "data-testid": testId = "section",
        stretch = false,
        ...otherProps
    } = props;

    return (
        <StyledSection
            ref={ref}
            data-testid={testId}
            $stretch={stretch}
            {...otherProps}
        >
            {children}
        </StyledSection>
    );
};

/**
 * A full-width semantic `<section>` element used as a horizontal band in page layout.
 *
 * Use as `Layout.Section` to define distinct vertical regions of a page. Supports optional
 * full-width stretching beyond the container.
 * @example
 * ```tsx
 * <Layout.Section>content</Layout.Section>
 * ```
 */
export const Section = React.forwardRef(Component);

interface StyleProps {
    $stretch: boolean;
}

const StyledSection = styled.section<StyleProps>`
    display: block;
    position: relative;
`;
