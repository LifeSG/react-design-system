import React from "react";
import styled, { css } from "styled-components";
import { V2_Color } from "../../src/v2_color";
import { V2_Layout } from "../../src/v2_layout";
import { V2_Text } from "../../src/v2_text";

interface LabelProps {
    children: string;
}

// =============================================================================
// LABEL
// =============================================================================

export const Label = ({ children }: LabelProps) => (
    <LWrapper>
        <V2_Text.XSmall weight="semibold">{children}</V2_Text.XSmall>
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
    background: ${V2_Color.Neutral[8]};
    border: 1px solid ${V2_Color.Brand[3]};
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
            <V2_Text.XSmall weight="semibold">{children}</V2_Text.XSmall>
        </Marker>
    </PWrapper>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    background: ${V2_Color.Brand[3]};
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Marker = styled.div<any>`
    position: absolute;
    top: -1rem;
    border: 1px solid ${V2_Color.Brand[3]};
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

    ${V2_Text.XSmall} {
        position: absolute;
        top: -160%;
        left: -40%;
    }
`;
// =============================================================================
// COL GRID WRAPPER
// =============================================================================
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Wrapper = ({ children }: any) => (
    <V2_Layout.Section>
        <V2_Layout.Container
            type="grid"
            style={{ padding: "2rem 0", rowGap: "1rem" }}
        >
            {children}
        </V2_Layout.Container>
    </V2_Layout.Section>
);
