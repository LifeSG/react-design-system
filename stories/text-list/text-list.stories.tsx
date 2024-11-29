import type { Meta, StoryObj } from "@storybook/react";
import { V2_Text } from "src/v2_text";
import { V2_TextList } from "src/v2_text-list";
import { Container, CustomOrderedList, SubContainer } from "./doc-elements";

const meta: Meta = {
    title: "General/TextList",
};

export default meta;

export const Unordered: StoryObj = {
    render: () => {
        return (
            <Container>
                <V2_TextList.Ul>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </V2_TextList.Ul>
                <br />
                <V2_TextList.Ul bulletType="circle">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </V2_TextList.Ul>
                <br />
                <V2_TextList.Ul bulletType="square">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </V2_TextList.Ul>
                <br />
                <V2_TextList.Ul bulletType="none">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </V2_TextList.Ul>
            </Container>
        );
    },
};

export const Ordered: StoryObj = {
    render: () => {
        return (
            <Container>
                <V2_TextList.Ol>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </V2_TextList.Ol>
                <V2_TextList.Ol counterType="lower-alpha">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </V2_TextList.Ol>
                <V2_TextList.Ol counterType="lower-roman">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </V2_TextList.Ol>
                <V2_TextList.Ol counterType="lower-alpha" counterSeparator="=">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </V2_TextList.Ol>
            </Container>
        );
    },
};

export const Nested: StoryObj = {
    render: () => {
        return (
            <V2_TextList.Ol>
                <li>First</li>
                <li>Second</li>
                <li>
                    Third
                    <V2_TextList.Ol>
                        <li>Nested First</li>
                        <li>
                            Nested Second
                            <V2_TextList.Ol counterType="lower-alpha">
                                <li>Nested Second Nested First</li>
                                <li>Nested Second Nested Second</li>
                                <li>Nested Second Nested Third</li>
                            </V2_TextList.Ol>
                        </li>
                        <li>Nested Third</li>
                    </V2_TextList.Ol>
                </li>
                <li>Fourth</li>
            </V2_TextList.Ol>
        );
    },
};

export const OtherFeatures: StoryObj = {
    render: () => {
        return (
            <Container>
                <SubContainer>
                    <V2_Text.H5>Reverse count</V2_Text.H5>
                    <br />
                    <V2_TextList.Ol reversed start={3}>
                        <li>Item A</li>
                        <li>Item B</li>
                        <li>Item C</li>
                    </V2_TextList.Ol>
                </SubContainer>
                <SubContainer>
                    <V2_Text.H5>Custom start count</V2_Text.H5>
                    <br />
                    <V2_TextList.Ol start={7}>
                        <li>First</li>
                        <li>Second</li>
                        <li>Third</li>
                    </V2_TextList.Ol>
                </SubContainer>
            </Container>
        );
    },
};

export const AdvancedUsage: StoryObj = {
    render: () => {
        return (
            <V2_TextList.Ol counterSeparator=".">
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
            </V2_TextList.Ol>
        );
    },
};
