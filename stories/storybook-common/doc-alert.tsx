import { LightbulbFillIcon } from "@lifesg/react-icons";
import { Unstyled } from "@storybook/blocks";
import { Alert } from "src/alert";
import styled from "styled-components";

interface Props {
    children: React.ReactNode;
    storybookPath?: string;
}

const getStorybookPath = (path: string) => {
    const url = new URL(window.top?.location.href || window.location.href);
    url.hash = "";
    url.search = "";
    const storybookHref = url.toString() + "?path=" + path;
    return storybookHref;
};

export const DocAlert = ({ children, storybookPath }: Props) => {
    return (
        <Unstyled>
            <StyledAlert
                type="warning"
                showIcon
                sizeType="small"
                actionLink={
                    storybookPath
                        ? {
                              href: getStorybookPath(storybookPath),
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

export const DocInfo = ({ children, storybookPath }: Props) => {
    return (
        <Unstyled>
            <StyledAlert
                type="info"
                showIcon
                sizeType="small"
                actionLink={
                    storybookPath
                        ? {
                              href: getStorybookPath(storybookPath),
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

export const DocNote = ({ children, storybookPath }: Props) => {
    return (
        <Unstyled>
            <StyledAlert
                type="description"
                showIcon
                sizeType="small"
                customIcon={<LightbulbFillIcon />}
                actionLink={
                    storybookPath
                        ? {
                              href: getStorybookPath(storybookPath),
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
