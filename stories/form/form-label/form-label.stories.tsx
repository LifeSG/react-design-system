import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "src/checkbox";
import { Form } from "src/form";

type Component = typeof Form.Label;

const meta: Meta<Component> = {
    title: "Form/Label",
    component: Form.Label,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [checked, setChecked] = useState(false);
        return (
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "1.5rem" }}>
                    <Checkbox
                        checked={checked}
                        onClick={() => setChecked(!checked)}
                    />
                </div>
                <Form.Label style={{ marginBottom: "0" }}>
                    The form label
                </Form.Label>
            </div>
        );
    },
};

export const WithAddon: StoryObj<Component> = {
    render: () => {
        const [checked, setChecked] = useState(false);
        return (
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "1.5rem" }}>
                    <Checkbox
                        checked={checked}
                        onClick={() => setChecked(!checked)}
                    />
                </div>
                <Form.Label
                    style={{ marginBottom: "0" }}
                    addon={{
                        content:
                            "This is the form label's popover. And this will only be visible if you specify the addon prop",
                        type: "popover",
                    }}
                >
                    The form label with an addon
                </Form.Label>
            </div>
        );
    },
};

export const WithSubtitle: StoryObj<Component> = {
    render: () => {
        const [checked, setChecked] = useState(false);
        return (
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "1.5rem" }}>
                    <Checkbox
                        checked={checked}
                        onClick={() => setChecked(!checked)}
                    />
                </div>
                <Form.Label
                    style={{ marginBottom: "0" }}
                    subtitle="This is subtitle"
                >
                    The form label with a subtitle
                </Form.Label>
            </div>
        );
    },
};
