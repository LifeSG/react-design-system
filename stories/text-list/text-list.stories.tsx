import { StarIcon, TickCircleIcon } from "@lifesg/react-icons";
import { css } from "@linaria/core";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TextList } from "src/text-list";
import {
    GridDecorator,
    StackDecorator,
    StoryDecorator,
} from "stories/storybook-common";

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
    decorators: [StackDecorator()],
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

const styledListItem = css`
    color: teal;
    font-weight: 600;
`;

export const CustomBullet: StoryObj = {
    render: (_args) => {
        return (
            <>
                <TextList.Ul
                    size="body-baseline"
                    bulletType={
                        <StarIcon
                            style={{
                                display: "block",
                                width: "1em",
                                height: "1lh",
                            }}
                        />
                    }
                >
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </li>
                    <li>
                        Inventore blanditiis a, quaerat expedita necessitatibus
                        et facilis rem sed itaque
                    </li>
                    <li>Assumenda illo ipsam asperiores</li>
                </TextList.Ul>
                <TextList.Ul
                    bulletType={<TickCircleIcon width={20} height={20} />}
                >
                    <li className={styledListItem}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </li>
                    <li className={styledListItem}>
                        Inventore blanditiis a, quaerat expedita necessitatibus
                        et facilis rem sed itaque
                    </li>
                    <li className={styledListItem}>
                        Assumenda illo ipsam asperiores
                    </li>
                </TextList.Ul>
            </>
        );
    },
    decorators: [StackDecorator(), StoryDecorator({ maxWidth: true })],
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
