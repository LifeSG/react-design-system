import { LightbulbFillIcon } from "@lifesg/react-icons";
import { css } from "@linaria/core";
import { Unstyled } from "@storybook/addon-docs/blocks";
import type { ComponentProps, ReactNode } from "react";
import { Alert } from "src/alert";

import { getStorybookHref } from "./storybook-path";

interface Props {
    children: ReactNode;
    storybookPath?: string;
}

interface DocThemeScopeProps {
    children: ReactNode;
}

interface DocAlertContentProps extends Props {
    type: ComponentProps<typeof Alert>["type"];
    customIcon?: JSX.Element | undefined;
}

const getActionLink = (storybookPath?: string) => {
    if (!storybookPath) return undefined;

    return {
        href: getStorybookHref(storybookPath),
        children: "View documentation",
    };
};

const DocAlertContent = ({
    children,
    storybookPath,
    type,
    customIcon,
}: DocAlertContentProps) => {
    return (
        <Unstyled>
            <DocThemeScope>
                <Alert
                    className={alertSpacing}
                    type={type}
                    showIcon
                    sizeType="small"
                    customIcon={customIcon}
                    actionLink={getActionLink(storybookPath)}
                >
                    {children}
                </Alert>
            </DocThemeScope>
        </Unstyled>
    );
};

export const DocAlert = ({ children, storybookPath }: Props) => {
    return (
        <DocAlertContent storybookPath={storybookPath} type="warning">
            {children}
        </DocAlertContent>
    );
};

export const DocInfo = ({ children, storybookPath }: Props) => {
    return (
        <DocAlertContent storybookPath={storybookPath} type="info">
            {children}
        </DocAlertContent>
    );
};

export const DocNote = ({ children, storybookPath }: Props) => {
    return (
        <DocAlertContent
            storybookPath={storybookPath}
            type="description"
            customIcon={<LightbulbFillIcon />}
        >
            {children}
        </DocAlertContent>
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
