import { LightbulbFillIcon } from "@lifesg/react-icons";
import { Unstyled } from "@storybook/blocks";
import { Alert } from "src/alert";
import styled from "styled-components";

interface Props {
    children: React.ReactNode;
    storybookLink?: string;
}

export const DocAlert = ({ children, storybookLink }: Props) => {
    return (
        <Unstyled>
            <StyledAlert
                type="warning"
                showIcon
                sizeType="small"
                actionLink={
                    storybookLink
                        ? {
                              href: storybookLink,
                              children: "View documentation",
                          }
                        : undefined
                }
            >
                {children}
            </StyledAlert>
        </Unstyled>
    );
};

export const DocInfo = ({ children, storybookLink }: Props) => {
    return (
        <Unstyled>
            <StyledAlert
                type="info"
                showIcon
                sizeType="small"
                actionLink={
                    storybookLink
                        ? {
                              href: storybookLink,
                              children: "View documentation",
                          }
                        : undefined
                }
            >
                {children}
            </StyledAlert>
        </Unstyled>
    );
};

export const DocNote = ({ children, storybookLink }: Props) => {
    return (
        <Unstyled>
            <StyledAlert
                type="description"
                showIcon
                sizeType="small"
                customIcon={<LightbulbFillIcon />}
                actionLink={
                    storybookLink
                        ? {
                              href: storybookLink,
                              children: "View documentation",
                          }
                        : undefined
                }
            >
                {children}
            </StyledAlert>
        </Unstyled>
    );
};

const StyledAlert = styled(Alert)`
    margin-bottom: 16px;
`;
