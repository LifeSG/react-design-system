import { LightbulbFillIcon } from "@lifesg/react-icons";
import styled from "styled-components";
import { Alert } from "../../src/alert";

interface Props {
    children: React.ReactNode;
    storybookLink?: string;
}

export const DocAlert = ({ children, storybookLink }: Props) => {
    return (
        <StyledAlert
            type="warning"
            showIcon
            sizeType="small"
            actionLink={
                storybookLink
                    ? { href: storybookLink, children: "View documentation" }
                    : undefined
            }
        >
            {children}
        </StyledAlert>
    );
};

export const DocInfo = ({ children, storybookLink }: Props) => {
    return (
        <StyledAlert
            type="info"
            showIcon
            sizeType="small"
            actionLink={
                storybookLink
                    ? { href: storybookLink, children: "View documentation" }
                    : undefined
            }
        >
            {children}
        </StyledAlert>
    );
};

export const DocNote = ({ children, storybookLink }: Props) => {
    return (
        <StyledAlert
            type="description"
            showIcon
            sizeType="small"
            customIcon={<LightbulbFillIcon />}
            actionLink={
                storybookLink
                    ? { href: storybookLink, children: "View documentation" }
                    : undefined
            }
        >
            {children}
        </StyledAlert>
    );
};

const StyledAlert = styled(Alert)`
    margin-bottom: 16px;
`;
