import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "src/text";
import { Layout } from "src/layout";
import { Label, PaddingLabel } from "./doc-elements";
import { PropsTable } from "./props-table";

type Component = typeof Layout;

const meta: Meta<Component> = {
    title: "Getting Started/Layout",
    component: Layout,
};

export default meta;

export const GeneralUsage: StoryObj<Component> = {
    render: () => {
        return (
            <Layout.Content>
                <div
                    style={{
                        width: "100%",
                        padding: "2rem 0",
                        border: "2px dotted #A4A4A4",
                    }}
                >
                    <Text.H1>My content</Text.H1>
                    <br />
                    <Text.Body>
                        You can adjust the viewport to see how the maximum width
                        in the
                        <code>Layout.Container</code> affects how the content
                        looks.
                    </Text.Body>
                </div>
            </Layout.Content>
        );
    },
};

export const SplitUsage: StoryObj<Component> = {
    render: () => {
        return (
            <Layout.Section>
                <Layout.Container>
                    <div
                        style={{
                            width: "100%",
                            padding: "2rem 0",
                            border: "2px dotted #A4A4A4",
                        }}
                    >
                        <Text.H1>Split usage example</Text.H1>
                        <br />
                        <Text.Body>
                            You can adjust the viewport to see how the maximum
                            width in the
                            <code>Layout.Container</code> affects how the
                            content looks.
                        </Text.Body>
                    </div>
                </Layout.Container>
            </Layout.Section>
        );
    },
};

export const FlexColumnLayout: StoryObj<Component> = {
    render: () => {
        const renderContent = (content) => {
            return (
                <div
                    style={{
                        padding: "2rem",
                        border: "2px dotted #A4A4A4",
                    }}
                >
                    {content}
                </div>
            );
        };
        return (
            <Layout.Content type="flex-column">
                {renderContent(<Text.Body>First item</Text.Body>)}
                {renderContent(<Text.Body>Second item</Text.Body>)}
            </Layout.Content>
        );
    },
};

export const GridLayout: StoryObj<Component> = {
    render: () => {
        const renderColumn = (index) => (
            <div
                style={{
                    border: "2px dotted #F26664",
                    background: "#F9B5B2",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "300px",
                }}
                key={index}
            >
                <Text.BodySmall weight="semibold">{index + 1}</Text.BodySmall>
            </div>
        );
        const renderColumns = () => {
            const columns = [];
            for (let i = 0; i < 12; i++) {
                columns.push(renderColumn(i));
            }
            return columns;
        };
        return (
            <Layout.Content type="grid" style={{ background: "#FDDDD7" }}>
                {renderColumns()}
            </Layout.Content>
        );
    },
};
