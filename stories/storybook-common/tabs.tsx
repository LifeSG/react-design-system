import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import { V2_Color } from "../../src/v2_color";
import { V2_Text, V2_TextStyleHelper } from "../../src/v2_text";

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
        return tabs.map((tab, index) => {
            return (
                <Button
                    key={index}
                    onClick={() => setSelectedTab(tab.title)}
                    $selected={selectedTab === tab.title}
                >
                    {tab.title}
                </Button>
            );
        });
    };

    const renderContent = () => {
        const selectedTabItem = tabs.find((tab) => tab.title === selectedTab);
        if (selectedTabItem) {
            return selectedTabItem.component;
        }

        return <V2_Text.BodySmall>No content</V2_Text.BodySmall>;
    };

    return (
        <Wrapper>
            <ButtonRow>{renderTabs()}</ButtonRow>
            <Content>{renderContent()}</Content>
        </Wrapper>
    );
};

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    $selected?: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 4px;
    background: ${V2_Color.Neutral[8]};
    border: 1px solid ${V2_Color.Neutral[6]};
    box-shadow: rgb(0 0 0 / 10%) 0 1px 3px 0;
    padding: 0 0 1rem;
`;

const ButtonRow = styled.div`
    display: flex;
    padding: 1rem;
`;

const Button = styled.button<StyleProps>`
    ${V2_TextStyleHelper.getTextStyle("BodySmall", "regular")}
    border: none;
    background: none;
    cursor: pointer;
    position: relative;

    ${(props) => {
        if (props.$selected) {
            return css`
                :after {
                    content: "";
                    position: absolute;
                    bottom: -0.5rem;
                    left: 0;
                    width: 100%;
                    background: ${V2_Color.Primary(props)};
                    height: 4px;
                }
            `;
        }
    }}

    :not(:last-of-type) {
        margin-right: 1rem;
    }
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1rem;
`;
