import { LightbulbFillIcon } from "@lifesg/react-icons";
import { css } from "@linaria/core";
import { Unstyled } from "@storybook/addon-docs/blocks";
import { Alert } from "src/alert";

interface Props {
    children: React.ReactNode;
    storybookPath?: string;
}

interface DocThemeScopeProps {
    children: React.ReactNode;
}

const getStorybookPath = (path: string) => {
    const currentWindow = globalThis.window;
    const url = new URL(
        currentWindow?.top?.location.href || currentWindow?.location.href || ""
    );
    url.hash = "";
    url.search = "";
    const storybookHref = url.toString() + "?path=" + path;
    return storybookHref;
};

export const DocAlert = ({ children, storybookPath }: Props) => {
    return (
        <Unstyled>
            <DocThemeScope>
                <Alert
                    className={alertSpacing}
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
                </Alert>
            </DocThemeScope>
        </Unstyled>
    );
};

export const DocInfo = ({ children, storybookPath }: Props) => {
    return (
        <Unstyled>
            <DocThemeScope>
                <Alert
                    className={alertSpacing}
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
                </Alert>
            </DocThemeScope>
        </Unstyled>
    );
};

export const DocNote = ({ children, storybookPath }: Props) => {
    return (
        <Unstyled>
            <DocThemeScope>
                <Alert
                    className={alertSpacing}
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
                </Alert>
            </DocThemeScope>
        </Unstyled>
    );
};

const DocThemeScope = ({ children }: DocThemeScopeProps) => {
    return (
        <div data-fds-theme="lifesg" data-fds-theme-mode="light">
            {children}
        </div>
    );
};

const alertSpacing = css`
    margin-bottom: 16px;
`;
