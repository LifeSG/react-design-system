import React from "react";
import styled, { css } from "styled-components";
import { Color } from "../../src/color";
import { Text } from "../../src/text";

interface LabelProps {
    children: string;
}

// =============================================================================
// LABEL
// =============================================================================

export const Label = ({ children }: LabelProps) => (
    <LWrapper>
        <Text.XSmall weight="semibold">{children}</Text.XSmall>
    </LWrapper>
);

const LWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: max-content;
    margin: 0 auto;
    padding: 5px;
    background: ${Color.Neutral[8]};
    border: 1px solid ${Color.Brand[3]};
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    z-index: 2;
`;

// =============================================================================
// PADDING LABEL
// =============================================================================
interface PaddingLabelProps extends LabelProps {
    direction?: "left" | "right";
}

export const PaddingLabel = ({
    children,
    direction = "left",
}: PaddingLabelProps) => (
    <PWrapper direction={direction}>
        <Marker direction={direction}>
            <Text.XSmall weight="semibold">{children}</Text.XSmall>
        </Marker>
    </PWrapper>
);

const PWrapper = styled.div<any>`
    position: absolute;
    top: 0;
    ${(props) => {
        if (props.direction === "left") {
            return css`
                left: 0;
            `;
        } else {
            return css`
                right: 0;
            `;
        }
    }}
    width: 1.5rem;
    height: 100%;
    background: ${Color.Brand[3]};
`;

const Marker = styled.div<any>`
    position: absolute;
    top: -1rem;
    border: 1px solid ${Color.Brand[3]};
    ${(props) => {
        if (props.direction === "left") {
            return css`
                left: 0;
            `;
        } else {
            return css`
                right: 0;
            `;
        }
    }}
    width: 1.5rem;
    height: 1rem;

    ${Text.XSmall} {
        position: absolute;
        top: -160%;
        left: -40%;
    }
`;
