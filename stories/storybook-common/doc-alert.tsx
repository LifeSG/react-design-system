import { LightbulbFillIcon } from "@lifesg/react-icons";
import styled from "styled-components";
import { Alert } from "../../src/alert";

interface Props {
    children: React.ReactNode;
}

export const DocAlert = ({ children }: Props) => {
    return (
        <StyledAlert type="warning" showIcon sizeType="small">
            {children}
        </StyledAlert>
    );
};

export const DocInfo = ({ children }: Props) => {
    return (
        <StyledAlert type="info" showIcon sizeType="small">
            {children}
        </StyledAlert>
    );
};

export const DocNote = ({ children }: Props) => {
    return (
        <StyledAlert
            type="description"
            showIcon
            sizeType="small"
            customIcon={<LightbulbFillIcon />}
        >
            {children}
        </StyledAlert>
    );
};

const StyledAlert = styled(Alert)`
    margin-bottom: 16px;
`;
