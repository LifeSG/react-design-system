import styled from "styled-components";
import { InboxIcon } from "@lifesg/react-icons/inbox";
import { Text } from "../../src/text/text";
import { v2_Color } from "../../src/v2_color";
import { Button } from "../../src/button";
import React from "react";

// =============================================================================
// STYLING
// =============================================================================
export const MobileCustomComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 1rem 1.25rem 0.5rem 1.25rem;
`;

export const DesktopCustomComponentWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    height: 100%;
    padding: 0 0.5rem;
    margin-left: 1rem;
`;

export const SubLabel = styled(Text.H6)`
    color: ${v2_Color.Neutral[4]};
`;

// =============================================================================
// COMPONENTS
// =============================================================================
interface Props {
    onClick?: () => void;
}

export const DesktopCustomComponent = ({ onClick }: Props) => {
    return (
        <DesktopCustomComponentWrapper>
            <InboxIcon
                style={{
                    width: "1.25rem",
                    height: "1.25rem",
                }}
                onClick={onClick}
            />
        </DesktopCustomComponentWrapper>
    );
};

export const MobileCustomComponent = ({ onClick }: Props) => {
    return (
        <>
            <MobileCustomComponentWrapper>
                <Text.BodySmall>John Smith</Text.BodySmall>
                <SubLabel>john_smith@tech.gov.sg</SubLabel>
                <Button.Small
                    style={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                    }}
                    onClick={onClick}
                >
                    Click to close the drawer
                </Button.Small>
            </MobileCustomComponentWrapper>
            <hr />
        </>
    );
};
