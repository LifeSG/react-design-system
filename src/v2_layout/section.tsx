import React from "react";
import styled, { css } from "styled-components";
import { V2_DivRef, V2_SectionProps } from "./types";
import { V2_MediaQuery } from "../v2_media";

const Component = (props: V2_SectionProps, ref: V2_DivRef): JSX.Element => {
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

// =============================================================================
// EXPORT
// =============================================================================
/** @deprecated */
export const V2_Section = React.forwardRef(Component);

// =============================================================================
// STYLING
// =============================================================================
interface StyleProps {
    $stretch: boolean;
}

const StyledSection = styled.section<StyleProps>`
    display: block;
    position: relative;
    ${(props) => {
        if (props.$stretch) {
            return css`
                ${V2_MediaQuery.MaxWidth.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `;
        } else {
            return css`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `;
        }
    }}
`;
