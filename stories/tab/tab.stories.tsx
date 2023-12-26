import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "src/tab";
import { Text } from "src/text";
import { Content } from "./doc-elements";
import { useState } from "react";

type Component = typeof Tab;

const meta: Meta<Component> = {
    title: "Modules/Tab",
    component: Tab,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <Tab>
                <Tab.Item title="Section A">
                    <Content>
                        <Text.H1>Section A</Text.H1>
                        <br />
                        <Text.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam commodo eget turpis sit amet luctus.
                            Duis fringilla, libero ac eleifend vehicula, sem
                            arcu mattis diam, eget pellentesque urna libero
                            feugiat sem.
                        </Text.Body>
                    </Content>
                </Tab.Item>
                <Tab.Item title="Section B">
                    <Content>
                        <Text.H1>Section B</Text.H1>
                        <br />
                        <Text.Body>
                            Donec metus augue, vulputate ut laoreet pretium,
                            cursus sed odio. Aenean imperdiet sapien nec lectus
                            gravida, vitae tincidunt sem feugiat. Nullam sit
                            amet tortor purus. Sed eget nulla sapien. Proin a
                            lacus pellentesque, facilisis augue quis, vestibulum
                            sem.
                        </Text.Body>
                    </Content>
                </Tab.Item>
                <Tab.Item title="Section C">
                    <Content>
                        <Text.H1>Section C</Text.H1>
                        <br />
                        <Text.Body>
                            Maecenas tempor dolor sit amet turpis interdum
                            convallis. Nunc ut elit vitae justo placerat
                            vulputate. Mauris varius sem in lectus vestibulum,
                            sed porttitor nisi ultricies. Morbi quis commodo
                            ipsum.
                        </Text.Body>
                    </Content>
                </Tab.Item>
                <Tab.Item title="Section D">
                    <Content>
                        <Text.H1>Section D</Text.H1>
                        <br />
                        <Text.Body>
                            Nullam sit amet tortor purus. Sed eget nulla sapien.
                            Proin a lacus pellentesque, facilisis augue quis,
                            vestibulum sem. Nulla pretium gravida consectetur.
                            Curabitur vestibulum erat nisi. Proin et accumsan
                            purus. Donec blandit tortor risus, vitae tempus
                            magna egestas nec.
                        </Text.Body>
                    </Content>
                </Tab.Item>
            </Tab>
        );
    },
};

export const LongerLabels: StoryObj<Component> = {
    render: () => {
        return (
            <Tab>
                <Tab.Item title="This is a significantly longer label that will truncate">
                    <Content>
                        <Text.H1>Section A</Text.H1>
                        <br />
                        <Text.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam commodo eget turpis sit amet luctus.
                            Duis fringilla, libero ac eleifend vehicula, sem
                            arcu mattis diam, eget pellentesque urna libero
                            feugiat sem.
                        </Text.Body>
                    </Content>
                </Tab.Item>
                <Tab.Item title="Shorter label">
                    <Content>
                        <Text.H1>Section B</Text.H1>
                        <br />
                        <Text.Body>
                            Donec metus augue, vulputate ut laoreet pretium,
                            cursus sed odio. Aenean imperdiet sapien nec lectus
                            gravida, vitae tincidunt sem feugiat. Nullam sit
                            amet tortor purus. Sed eget nulla sapien. Proin a
                            lacus pellentesque, facilisis augue quis, vestibulum
                            sem.
                        </Text.Body>
                    </Content>
                </Tab.Item>
                <Tab.Item title="Section C">
                    <Content>
                        <Text.H1>Section C</Text.H1>
                        <br />
                        <Text.Body>
                            Maecenas tempor dolor sit amet turpis interdum
                            convallis. Nunc ut elit vitae justo placerat
                            vulputate. Mauris varius sem in lectus vestibulum,
                            sed porttitor nisi ultricies. Morbi quis commodo
                            ipsum.
                        </Text.Body>
                    </Content>
                </Tab.Item>
            </Tab>
        );
    },
};

export const ControlledMode: StoryObj<Component> = {
    render: () => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const handleTabClick = (_, order) => {
            setCurrentIndex(order);
        };

        return (
            <Tab onTabClick={handleTabClick} currentActive={currentIndex}>
                <Tab.Item title="Section A">
                    <Content>
                        <Text.H1>Section A</Text.H1>
                        <br />
                        <Text.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam commodo eget turpis sit amet luctus.
                            Duis fringilla, libero ac eleifend vehicula, sem
                            arcu mattis diam, eget pellentesque urna libero
                            feugiat sem.
                        </Text.Body>
                    </Content>
                </Tab.Item>
                <Tab.Item title="Section B">
                    <Content>
                        <Text.H1>Section B</Text.H1>
                        <br />
                        <Text.Body>
                            Donec metus augue, vulputate ut laoreet pretium,
                            cursus sed odio. Aenean imperdiet sapien nec lectus
                            gravida, vitae tincidunt sem feugiat. Nullam sit
                            amet tortor purus. Sed eget nulla sapien. Proin a
                            lacus pellentesque, facilisis augue quis, vestibulum
                            sem.
                        </Text.Body>
                    </Content>
                </Tab.Item>
                <Tab.Item title="Section C">
                    <Content>
                        <Text.H1>Section C</Text.H1>
                        <br />
                        <Text.Body>
                            Maecenas tempor dolor sit amet turpis interdum
                            convallis. Nunc ut elit vitae justo placerat
                            vulputate. Mauris varius sem in lectus vestibulum,
                            sed porttitor nisi ultricies. Morbi quis commodo
                            ipsum.
                        </Text.Body>
                    </Content>
                </Tab.Item>
            </Tab>
        );
    },
};
