import { InboxIcon } from "@lifesg/react-icons/inbox";
import { Button } from "src/button";
import { Divider } from "src/divider";
import { IconButton } from "src/icon-button";
import { PopoverTrigger } from "src/popover-v2";
import { Colour } from "src/theme";
import { Typography } from "src/typography";
import styled from "styled-components";

// =============================================================================
// STYLING
// =============================================================================
const MobileCustomComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 1rem 1.25rem 0.5rem 1.25rem;
`;

const DesktopCustomComponentWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    height: 100%;
    padding: 0 0.5rem;
    margin-left: 1rem;
`;

const SubLabel = styled(Typography.BodySM)`
    color: ${Colour["text-subtle"]};
`;

// =============================================================================
// COMPONENTS
// =============================================================================
interface Props {
    onClick?: () => void;
}

export const DesktopCustomComponent = () => {
    return (
        <DesktopCustomComponentWrapper>
            <PopoverTrigger popoverContent="Popover content" zIndex={100}>
                <IconButton sizeType="small" styleType="light">
                    <InboxIcon />
                </IconButton>
            </PopoverTrigger>
        </DesktopCustomComponentWrapper>
    );
};

export const MobileCustomComponent = ({ onClick }: Props) => {
    return (
        <>
            <MobileCustomComponentWrapper>
                <Typography.BodyMD>John Smith</Typography.BodyMD>
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
            <Divider />
        </>
    );
};
