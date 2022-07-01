import styled from "styled-components";
import { Text } from "src/components";
import React from "react";

export const FontFamily = () => {
    return (
        <Container>
            <FamilyContainer>
                <Text.D1>Open Sans</Text.D1>
            </FamilyContainer>
            <DisplayContainer>
                <Text.H2 weight="light">Light</Text.H2>
                <Text.H2 weight="regular">Regular</Text.H2>
                <Text.H2 weight="semibold">Semibold</Text.H2>
                <Text.H2 weight="bold">Bold</Text.H2>
            </DisplayContainer>
        </Container>
    );
};

// =============================================================================
// STYLING
// =============================================================================

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const FamilyContainer = styled.div`
    display: flex;
    margin-right: 2.5rem;
`;

const DisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
`;
