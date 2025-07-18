import React from "react";
import styled from "styled-components";
import { SectionProps } from "./types";

const Component = (
    props: SectionProps,
    ref: React.Ref<HTMLDivElement>
): React.JSX.Element => {
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

export const Section = React.forwardRef(Component);

interface StyleProps {
    $stretch: boolean;
}

const StyledSection = styled.section<StyleProps>`
    display: block;
    position: relative;
`;
