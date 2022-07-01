import React from "react";
import styled from "styled-components";
import { BaseColorSet } from "src/components/styles/spec";
import { Layout, Text } from "src/components";

export const ExampleComponent = () => {
    return (
        <StyledSection>
            <Tag>
                <span>Section</span>
            </Tag>
            <StyledContainer>
                <Tag>
                    <span>Container</span>
                </Tag>
                <Text.XSmall>Example layout</Text.XSmall>
            </StyledContainer>
        </StyledSection>
    );
};

const StyledSection = styled(Layout.Section)`
    position: relative;
    background: ${BaseColorSet.Brand[4]};
    border: 1px solid ${BaseColorSet.Brand[3]};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
`;

const StyledContainer = styled(Layout.Container)`
    position: relative;
    background: ${BaseColorSet.Brand[5]};
    border: 1px solid ${BaseColorSet.Brand[3]};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;

    span {
        margin-bottom: 0;
    }
`;

const Tag = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    padding: 0 3px;

    span {
        font-size: 0.75rem;
        line-height: 0.75rem;
    }
`;

export const ExampleGridComponent = () => {
    const renderComponent = () => {
        const componentArr = [];
        for (let i = 0; i < 12; i++) {
            componentArr.push(
                <GridChild>
                    <Text.XSmall>{i + 1}</Text.XSmall>
                </GridChild>
            );
        }

        return componentArr;
    };

    return <StyledGridContainer>{renderComponent()}</StyledGridContainer>;
};

const StyledGridContainer = styled(Layout.GridContainer)`
    background: ${BaseColorSet.Brand[4]};
    border: 1px solid ${BaseColorSet.Brand[3]};
`;

const GridChild = styled.div`
    background: ${BaseColorSet.Brand[5]};
    border: 1px solid ${BaseColorSet.Brand[3]};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;
`;
