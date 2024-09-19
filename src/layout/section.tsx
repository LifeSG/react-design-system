import React from "react";
import styled, { css } from "styled-components";
import { MediaQuery } from "../theme/mediaquery/mediaquery-helper";
import { DivRef, SectionProps } from "./types";

const Component = (props: SectionProps, ref: DivRef): JSX.Element => {
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

    ${(props) => {
        if (props.$stretch) {
            return css`
                ${MediaQuery.MaxWidth.xl} {
                    padding: 0 1.5rem;

                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `;
        } else {
            return css`
                padding: 0 1.5rem;

                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `;
        }
    }}
`;
