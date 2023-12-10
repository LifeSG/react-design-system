import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "src/text";
import { TextList } from "src/text-list";
import { Container, CustomOrderedList, SubContainer } from "./doc-elements";

type Component = typeof TextList;

const meta: Meta<Component> = {
    title: "General/TextList",
    component: TextList,
};

export default meta;

export const Unordered: StoryObj<Component> = {
    render: () => {
        return (
            <Container>
                <TextList.Ul>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ul>
                <br />
                <TextList.Ul bulletType="circle">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ul>
                <br />
                <TextList.Ul bulletType="square">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ul>
                <br />
                <TextList.Ul bulletType="none">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ul>
            </Container>
        );
    },
};

export const Ordered: StoryObj<Component> = {
    render: () => {
        return (
            <Container>
                <TextList.Ol>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ol>
                <TextList.Ol counterType="lower-alpha">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ol>
                <TextList.Ol counterType="lower-roman">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ol>
                <TextList.Ol counterType="lower-alpha" counterSeparator="=">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ol>
            </Container>
        );
    },
};

export const Nested: StoryObj<Component> = {
    render: () => {
        return (
            <TextList.Ol>
                <li>First</li>
                <li>Second</li>
                <li>
                    Third
                    <TextList.Ol>
                        <li>Nested First</li>
                        <li>
                            Nested Second
                            <TextList.Ol counterType="lower-alpha">
                                <li>Nested Second Nested First</li>
                                <li>Nested Second Nested Second</li>
                                <li>Nested Second Nested Third</li>
                            </TextList.Ol>
                        </li>
                        <li>Nested Third</li>
                    </TextList.Ol>
                </li>
                <li>Fourth</li>
            </TextList.Ol>
        );
    },
};

export const OtherFeatures: StoryObj<Component> = {
    render: () => {
        return (
            <Container>
                <SubContainer>
                    <Text.H5>Reverse count</Text.H5>
                    <br />
                    <TextList.Ol reversed start={3}>
                        <li>Item A</li>
                        <li>Item B</li>
                        <li>Item C</li>
                    </TextList.Ol>
                </SubContainer>
                <SubContainer>
                    <Text.H5>Custom start count</Text.H5>
                    <br />
                    <TextList.Ol start={7}>
                        <li>First</li>
                        <li>Second</li>
                        <li>Third</li>
                    </TextList.Ol>
                </SubContainer>
            </Container>
        );
    },
};

export const AdvancedUsage: StoryObj<Component> = {
    render: () => {
        return (
            <TextList.Ol counterSeparator=".">
                <li>Item A</li>
                <li>
                    Item B
                    <CustomOrderedList>
                        <li>Nested 1</li>
                        <li>Nested 2</li>
                    </CustomOrderedList>
                </li>
                <li>
                    Item C
                    <CustomOrderedList>
                        <li>Nested 1</li>
                        <li>Nested 2</li>
                    </CustomOrderedList>
                </li>
                <li>Item D</li>
            </TextList.Ol>
        );
    },
};
