import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Tab } from "src/tab";
import { ContentA, ContentB, ContentC, ContentD } from "./doc-elements";

type Component = typeof Tab;

const meta: Meta<Component> = {
    title: "Content/Tab",
    component: Tab,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Tab>
                <Tab.Item title="Section A">
                    <ContentA />
                </Tab.Item>
                <Tab.Item title="Section B">
                    <ContentB />
                </Tab.Item>
                <Tab.Item title="Section C">
                    <ContentC />
                </Tab.Item>
                <Tab.Item title="Section D">
                    <ContentD />
                </Tab.Item>
            </Tab>
        );
    },
};

export const LongerLabels: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Tab>
                <Tab.Item title="This is a significantly longer label that will truncate">
                    <ContentA />
                </Tab.Item>
                <Tab.Item title="Shorter label">
                    <ContentB />
                </Tab.Item>
            </Tab>
        );
    },
};

export const ControlledMode: StoryObj<Component> = {
    render: () => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const handleTabClick = (_: string, order: number) => {
            setCurrentIndex(order);
        };

        return (
            <Tab onTabClick={handleTabClick} currentActive={currentIndex}>
                <Tab.Item title="Section A">
                    <ContentA />
                </Tab.Item>
                <Tab.Item title="Section B">
                    <ContentB />
                </Tab.Item>
                <Tab.Item title="Section C">
                    <ContentC />
                </Tab.Item>
            </Tab>
        );
    },
};

export const FullWidthIndicatorLine: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Tab fullWidthIndicatorLine>
                <Tab.Item title="Section A">
                    <ContentA />
                </Tab.Item>
                <Tab.Item title="Section B">
                    <ContentB />
                </Tab.Item>
                <Tab.Item title="Section C">
                    <ContentC />
                </Tab.Item>
                <Tab.Item title="Section D">
                    <ContentD />
                </Tab.Item>
            </Tab>
        );
    },
};

export const CustomTabWidth: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Tab>
                <Tab.Item title="Section A" width="50%">
                    <ContentA />
                </Tab.Item>
                <Tab.Item title="Section B" width="50%">
                    <ContentB />
                </Tab.Item>
            </Tab>
        );
    },
};
