import { css } from "@linaria/core";
import clsx from "clsx";
import { useState } from "react";
import { Border, Colour, Font } from "src/theme";
import { Typography } from "src/typography";

export interface TabAttribute {
    title: string;
    component: JSX.Element | JSX.Element[];
}

interface TabsProps {
    tabs: TabAttribute[];
}

export const Tabs = ({ tabs }: TabsProps): JSX.Element => {
    const [selectedTab, setSelectedTab] = useState<string>(tabs[0].title);

    const renderTabs = () => {
        return tabs.map((tab) => {
            return (
                <button
                    className={clsx(buttonBase, {
                        [buttonSelected]: selectedTab === tab.title,
                    })}
                    key={tab.title}
                    type="button"
                    onClick={() => setSelectedTab(tab.title)}
                >
                    {tab.title}
                </button>
            );
        });
    };

    const renderContent = () => {
        const selectedTabItem = tabs.find((tab) => tab.title === selectedTab);
        if (selectedTabItem) {
            return selectedTabItem.component;
        }

        return <Typography.BodyBL>No content</Typography.BodyBL>;
    };

    return (
        <div className={wrapper}>
            <div className={buttonRow}>{renderTabs()}</div>
            <div className={content}>{renderContent()}</div>
        </div>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const wrapper = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 4px;
    background: ${Colour["bg"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    box-shadow: rgb(0 0 0 / 10%) 0 1px 3px 0;
    padding: 0 0 1rem;
`;

const buttonRow = css`
    display: flex;
    padding: 1rem;
`;

const buttonBase = css`
    ${Font["body-md-regular"]}
    color: ${Colour["text-primary"]};
    border: none;
    background: none;
    cursor: pointer;
    position: relative;

    &:not(:last-of-type) {
        margin-right: 1rem;
    }
`;

const buttonSelected = css`
    &:after {
        content: "";
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 100%;
        background: ${Colour["text-primary"]};
        height: 4px;
    }
`;

const content = css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1rem;
`;
