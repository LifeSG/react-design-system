import type { Meta, StoryObj } from "@storybook/react";
import { V2_Layout } from "src/v2_layout";
import { V2_Text } from "src/v2_text";

const meta: Meta = {
    title: "V2/Layout",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

export const GeneralUsage: StoryObj = {
    render: () => {
        return (
            <V2_Layout.Content>
                <div
                    style={{
                        width: "100%",
                        padding: "2rem 0",
                        border: "2px dotted #A4A4A4",
                    }}
                >
                    <V2_Text.H1>My content</V2_Text.H1>
                    <br />
                    <V2_Text.Body>
                        You can adjust the viewport to see how the maximum width
                        in the
                        <code>Layout.Container</code> affects how the content
                        looks.
                    </V2_Text.Body>
                </div>
            </V2_Layout.Content>
        );
    },
};

export const SplitUsage: StoryObj = {
    render: () => {
        return (
            <V2_Layout.Section>
                <V2_Layout.Container>
                    <div
                        style={{
                            width: "100%",
                            padding: "2rem 0",
                            border: "2px dotted #A4A4A4",
                        }}
                    >
                        <V2_Text.H1>Split usage example</V2_Text.H1>
                        <br />
                        <V2_Text.Body>
                            You can adjust the viewport to see how the maximum
                            width in the
                            <code>Layout.Container</code> affects how the
                            content looks.
                        </V2_Text.Body>
                    </div>
                </V2_Layout.Container>
            </V2_Layout.Section>
        );
    },
};

export const FlexColumnLayout: StoryObj = {
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
            <V2_Layout.Content type="flex-column">
                {renderContent(<V2_Text.Body>First item</V2_Text.Body>)}
                {renderContent(<V2_Text.Body>Second item</V2_Text.Body>)}
            </V2_Layout.Content>
        );
    },
};

export const GridLayout: StoryObj = {
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
                <V2_Text.BodySmall weight="semibold">
                    {index + 1}
                </V2_Text.BodySmall>
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
            <V2_Layout.Content type="grid" style={{ background: "#FDDDD7" }}>
                {renderColumns()}
            </V2_Layout.Content>
        );
    },
};
