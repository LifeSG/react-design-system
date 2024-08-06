import type { Meta, StoryObj } from "@storybook/react";
import { v2_Layout } from "src/v2_layout";
import { v2_Text } from "src/v2_text";

const meta: Meta = {
    title: "Getting Started/Layout",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

export const GeneralUsage: StoryObj = {
    render: () => {
        return (
            <v2_Layout.V2_Content>
                <div
                    style={{
                        width: "100%",
                        padding: "2rem 0",
                        border: "2px dotted #A4A4A4",
                    }}
                >
                    <v2_Text.H1>My content</v2_Text.H1>
                    <br />
                    <v2_Text.Body>
                        You can adjust the viewport to see how the maximum width
                        in the
                        <code>Layout.Container</code> affects how the content
                        looks.
                    </v2_Text.Body>
                </div>
            </v2_Layout.V2_Content>
        );
    },
};

export const SplitUsage: StoryObj = {
    render: () => {
        return (
            <v2_Layout.V2_Section>
                <v2_Layout.V2_Container>
                    <div
                        style={{
                            width: "100%",
                            padding: "2rem 0",
                            border: "2px dotted #A4A4A4",
                        }}
                    >
                        <v2_Text.H1>Split usage example</v2_Text.H1>
                        <br />
                        <v2_Text.Body>
                            You can adjust the viewport to see how the maximum
                            width in the
                            <code>Layout.Container</code> affects how the
                            content looks.
                        </v2_Text.Body>
                    </div>
                </v2_Layout.V2_Container>
            </v2_Layout.V2_Section>
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
            <v2_Layout.V2_Content type="flex-column">
                {renderContent(<v2_Text.Body>First item</v2_Text.Body>)}
                {renderContent(<v2_Text.Body>Second item</v2_Text.Body>)}
            </v2_Layout.V2_Content>
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
                <v2_Text.BodySmall weight="semibold">
                    {index + 1}
                </v2_Text.BodySmall>
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
            <v2_Layout.V2_Content type="grid" style={{ background: "#FDDDD7" }}>
                {renderColumns()}
            </v2_Layout.V2_Content>
        );
    },
};
