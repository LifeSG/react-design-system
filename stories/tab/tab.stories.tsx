import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
import { Badge } from "src/badge";
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

// declare story separately to prevent Storybook from freezing
const _TitleAddon = (
    <Tab>
        <Tab.Item
            title="Section A"
            titleAddon={{
                content: <Badge count={8} variant="square-number" />,
            }}
        >
            <ContentA />
        </Tab.Item>
        <Tab.Item
            title="Section B"
            titleAddon={{
                content: <Badge count={10} variant="square-number" />,
                position: "left",
            }}
        >
            <ContentB />
        </Tab.Item>
        <Tab.Item title="Section C">
            <ContentC />
        </Tab.Item>
    </Tab>
);

export const TitleAddon: StoryObj<Component> = {
    render: (_args) => {
        return _TitleAddon;
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

const LONG_TAB_TITLE = "Lorem ipsum dolor sit amet consectetur adipiscing elit";

export const SameFadeColor: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Tab fadeColor={["#3C91EC"]}>
                <Tab.Item title={LONG_TAB_TITLE}>
                    <ContentA />
                </Tab.Item>
                <Tab.Item title={LONG_TAB_TITLE}>
                    <ContentB />
                </Tab.Item>
                <Tab.Item title={LONG_TAB_TITLE}>
                    <ContentC />
                </Tab.Item>
                <Tab.Item title={LONG_TAB_TITLE}>
                    <ContentD />
                </Tab.Item>
            </Tab>
        );
    },
};

export const DifferentFadeColor: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Tab fadeColor={{ left: ["#FABAB7"], right: ["#B4ECCB"] }}>
                <Tab.Item title={LONG_TAB_TITLE}>
                    <ContentA />
                </Tab.Item>
                <Tab.Item title={LONG_TAB_TITLE}>
                    <ContentB />
                </Tab.Item>
                <Tab.Item title={LONG_TAB_TITLE}>
                    <ContentC />
                </Tab.Item>
                <Tab.Item title={LONG_TAB_TITLE}>
                    <ContentD />
                </Tab.Item>
            </Tab>
        );
    },
};
