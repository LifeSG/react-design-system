import React, { useState } from "react";
import styled from "styled-components";
import { Color } from "../../src/color";
import { TextStyleHelper } from "../../src/text/helper";

interface PropTableTabsProps {
    tabs: {
        label: string;
        content: React.ReactNode;
    }[];
}

export const PropTableTabs: React.FC<PropTableTabsProps> = ({ tabs }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Container>
            <TabList>
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        $active={activeIndex === index}
                        onClick={() => setActiveIndex(index)}
                    >
                        {tab.label}
                    </Tab>
                ))}
            </TabList>
            <TabContent>{tabs[activeIndex].content}</TabContent>
        </Container>
    );
};

const Container = styled.div`
    margin: 1rem 0;
    border: 1px solid ${Color.Neutral[6]};
    border-radius: 0.75rem; /* Rounded border around tabs + content */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06), 0 6px 12px rgba(0, 0, 0, 0.04);
    padding: 0.25rem 0.75rem 0.75rem; /* Reduce top padding, keep side/bottom comfortable */
    background: ${Color.Neutral[7]}; /* Subtle background to elevate block */
`;

const TabList = styled.div`
    display: flex;
    gap: 0.5rem;
    border-bottom: 1px solid ${Color.Neutral[5]};
    margin: 0 0 0.75rem 0; /* Slightly tighter space before content */
    padding: 0.25rem 0 0.5rem; /* Compress vertical padding overall */
`;

const Tab = styled.button<{ $active: boolean }>`
    ${TextStyleHelper.getTextStyle("BodySmall", "regular")}
    padding: 0.5rem 0.875rem;
    background: ${(props) =>
        props.$active ? Color.Neutral[6] : Color.Neutral[8]};
    border: 1px solid
        ${(props) => (props.$active ? Color.Primary : Color.Neutral[6])};
    border-radius: 0.5rem;
    color: ${(props) => (props.$active ? Color.Primary : Color.Neutral[3])};
    font-size: 0.75rem;
    font-weight: ${(props) => (props.$active ? 600 : 500)};
    cursor: pointer;
    line-height: 1.2;
    transition: all 0.18s ease;

    &:hover {
        background: ${Color.Neutral[6]};
        color: ${Color.Primary};
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
    }

    &:focus {
        outline: 2px solid ${Color.Primary};
        outline-offset: 2px;
    }

    &:active {
        background: ${Color.Neutral[5]};
    }
`;

const TabContent = styled.div`
    /* Remove extra top spacing if inner tables add their own */
    margin-top: 0;

    /* Tighten Storybook doc arg tables specifically when inside tabs */
    & > table.docblock-argstable.sb-unstyled,
    & table.docblock-argstable.sb-unstyled {
        margin-top: 0;
        margin-bottom: 0;
    }

    /* If Storybook applies internal spacing via wrapper div */
    & .docblock-argstable + * {
        /* conservative: next sibling after table */
        margin-top: 0.5rem; /* keep slight breathing space */
    }
`;
