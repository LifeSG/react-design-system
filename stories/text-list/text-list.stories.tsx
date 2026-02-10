import type { Meta, StoryObj } from "@storybook/react";
import { CaretRightIcon, StarIcon, TickCircleIcon } from "@lifesg/react-icons";
import styled from "styled-components";
import { TextList } from "src/text-list";
import { GridDecorator, StoryDecorator } from "stories/storybook-common";
import { CustomOrderedList } from "./doc-elements";

const meta: Meta = {
    title: "Core/TextList",
};

export default meta;

export const Unordered: StoryObj = {
    render: (_args) => {
        return (
            <>
                <TextList.Ul>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ul>
                <TextList.Ul bulletType="circle">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ul>
                <TextList.Ul bulletType="square">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ul>
                <TextList.Ul bulletType="none">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ul>
            </>
        );
    },
    decorators: [GridDecorator({ columns: 4 })],
};

export const Ordered: StoryObj = {
    render: (_args) => {
        return (
            <>
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
            </>
        );
    },
    decorators: [GridDecorator({ columns: 4 })],
};

export const TextSize: StoryObj = {
    render: (_args) => {
        return (
            <TextList.Ol size="heading-lg">
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </TextList.Ol>
        );
    },
    decorators: [StoryDecorator()],
};

export const Nested: StoryObj = {
    render: (_args) => {
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
    decorators: [StoryDecorator()],
};

export const OtherFeatures: StoryObj = {
    render: (_args) => {
        return (
            <>
                <TextList.Ol reversed start={3}>
                    <li>Item A</li>
                    <li>Item B</li>
                    <li>Item C</li>
                </TextList.Ol>
                <TextList.Ol start={7}>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ol>
            </>
        );
    },
    decorators: [
        GridDecorator({
            columns: 2,
            columnHeaders: ["Reverse count", "Custom start count"],
        }),
    ],
};

export const AdvancedUsage: StoryObj = {
    render: (_args) => {
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
    decorators: [StoryDecorator()],
};

const StyledListItem = styled.li`
    color: teal;
    font-weight: 600;
`;

const CustomListItem = ({ children }: { children: React.ReactNode }) => {
    return <li style={{ fontStyle: "italic" }}>{children}</li>;
};

export const CustomIconUnordered: StoryObj = {
    render: (_args) => {
        return (
            <>
                <TextList.Ul bulletType={<StarIcon width={20} height={20} />}>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </TextList.Ul>
                <TextList.Ul
                    bulletType={<TickCircleIcon width={20} height={20} />}
                >
                    <StyledListItem>Styled component item 1</StyledListItem>
                    <StyledListItem>Styled component item 2</StyledListItem>
                    <StyledListItem>Styled component item 3</StyledListItem>
                </TextList.Ul>
                <TextList.Ul
                    bulletType={<CaretRightIcon width={20} height={20} />}
                >
                    <CustomListItem>React component item 1</CustomListItem>
                    <CustomListItem>React component item 2</CustomListItem>
                    <CustomListItem>React component item 3</CustomListItem>
                </TextList.Ul>
            </>
        );
    },
    decorators: [
        GridDecorator({
            columns: 3,
            columnHeaders: [
                "ReactNode",
                "Styled Component (styled.li)",
                "React Component",
            ],
        }),
    ],
};
