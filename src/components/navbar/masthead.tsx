import React from "react";
import styled from "styled-components";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { MediaQuery } from "../styles/spec";

export const Masthead = () => {
    return (
        <StyledSection>
            <Container>
                <div className="sgds-masthead">
                    <a href="https://www.gov.sg" target="_blank" rel="noopener noreferrer">
                        <span className="sgds-icon sgds-icon-sg-crest"></span>
                        <span className="is-text">
                            A Singapore Government Agency Website
                        </span>
                    </a>
                </div>
            </Container>
        </StyledSection>
    );
};

// =============================================================================
// STYLING
// =============================================================================

const StyledSection = styled(Section)`
    background: #f0f0f0;

    .sgds-masthead {
        margin-left: -0.25rem; // Make it visually aligned
    }

    ${MediaQuery.MaxWidth.tablet} {
        .sgds-masthead {
            padding-left: 0;
            padding-right: 0;
        }
    }

    ${MediaQuery.MaxWidth.mobileS} {
        padding-left: 0.5rem !important;
        padding-right: 0.5rem !important;
    }
`;
