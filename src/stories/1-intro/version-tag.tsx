import React from "react";
import styled from "styled-components";
import { Color, Text } from "src/components";
import { version } from "../../../package.json";

interface Props {
    currentStable: string;
}

export const VersionTags = ({ currentStable = version }: Props) => {
    return (
        <Container>
            <Badge>
                <Left type="stable">
                    <Label weight="semibold">Stable</Label>
                </Left>
                <Right>
                    <Label weight="bold">v{currentStable}</Label>
                </Right>
            </Badge>
            {currentStable !== version && (
                <Badge>
                    <Left type="latest">
                        <Label weight="semibold">Latest</Label>
                    </Left>
                    <Right>
                        <Label weight="bold">v{version}</Label>
                    </Right>
                </Badge>
            )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
`;

const Badge = styled.div`
    border-radius: 0.25rem;
    display: flex;
    &:not(:last-child) {
        margin-right: 1rem;
    }
`;

interface LeftProps {
    type: "stable" | "latest";
}
const Left = styled.div<LeftProps>`
    padding: 0.25rem 0.5rem 0.45rem;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    background: ${(props) =>
        props.type === "stable" ? Color.Brand[2] : Color.Accent.Light[1]};
`;

const Right = styled.div`
    padding: 0.25rem 0.5rem 0.45rem;
    background: ${Color.Neutral[2]};
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
`;

const Label = styled(Text.XSmall)`
    color: white;
    line-height: 0;
`;
