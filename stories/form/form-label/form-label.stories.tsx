import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "src/checkbox";
import { Input } from "src/input";
import { Form } from "src/form";
import { Wrapper } from "./doc-elements";
import { StoryContainer } from "../../storybook-common";

type Component = typeof Form.Label;

const meta: Meta<Component> = {
    title: "Form/Label",
    component: Form.Label,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Wrapper>
                    <Form.Label>The form label</Form.Label>
                    <Form.Label
                        addon={{
                            content:
                                "This is the form label's popover. And this will only be visible if you specify the addon prop",
                            type: "popover",
                        }}
                    >
                        The form label with an addon
                    </Form.Label>
                    <Form.Label subtitle="This is the subtitle">
                        The form label with a subtitle
                    </Form.Label>
                </Wrapper>
            </StoryContainer>
        );
    },
};

export const RealWorldUsage: StoryObj<Component> = {
    render: () => {
        const [checked, setChecked] = useState(false);
        return (
            <StoryContainer>
                <Wrapper>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Form.Label htmlFor="input">
                            This is a descriptive label
                        </Form.Label>
                        <Input id="input" placeholder="Enter something" />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                        }}
                    >
                        <Checkbox
                            id="checkbox"
                            checked={checked}
                            onClick={() => setChecked(!checked)}
                        />
                        <Form.Label
                            htmlFor="checkbox"
                            style={{ marginBottom: 0 }}
                        >
                            Label for checkbox
                        </Form.Label>
                    </div>
                </Wrapper>
            </StoryContainer>
        );
    },
};

export const NestedChildren: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Form.Label htmlFor="input">
                        <span>Label with a</span>&nbsp;<a href="">hyperlink</a>
                        <br />
                        <p>and some additional text on a new line</p>
                    </Form.Label>
                    <Input id="input" placeholder="Enter something" />
                </div>
            </StoryContainer>
        );
    },
};
