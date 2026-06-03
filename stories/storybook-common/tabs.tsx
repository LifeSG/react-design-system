import { useState } from "react";
import { Border, Colour, Font, ThemeProvider } from "src/theme";
import { Typography } from "src/typography";
import styled, { css } from "styled-components";

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
                <Button
                    key={tab.title}
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

        return <Typography.BodyBL>No content</Typography.BodyBL>;
    };

    return (
        <ThemeProvider>
            <Wrapper>
                <ButtonRow>{renderTabs()}</ButtonRow>
                <Content>{renderContent()}</Content>
            </Wrapper>
        </ThemeProvider>
    );
};

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    $selected?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 4px;
    background: ${Colour["bg"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    box-shadow: rgb(0 0 0 / 10%) 0 1px 3px 0;
    padding: 0 0 1rem;
`;

const ButtonRow = styled.div`
    display: flex;
    padding: 1rem;
`;

const Button = styled.button<StyleProps>`
    ${Font["body-md-regular"]}
    border: none;
    background: none;
    cursor: pointer;
    position: relative;

    ${(props) => {
        if (props.$selected) {
            return css`
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
        }
    }}

    &:not(:last-of-type) {
        margin-right: 1rem;
    }
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1rem;
`;
