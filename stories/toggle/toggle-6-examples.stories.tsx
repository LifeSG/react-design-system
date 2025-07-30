import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Toggle } from "src/toggle";
import { Form } from "src/form";

type Component = typeof Toggle;

const meta: Meta<Component> = {
    title: "Selection and input/Toggle/Common patterns",
    component: Toggle,
};
export default meta;

export const AdditionalInputs: StoryObj<Component> = {
    render: (_args) => {
        const [selected, setSelected] = useState(false);
        const [error, setError] = useState(false);
        const [value, setValue] = useState("");
        return (
            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    flexDirection: "column",
                }}
            >
                <div>
                    This field displays error when input value is <code>x</code>
                </div>
                <Toggle
                    indicator
                    checked={selected}
                    error={error}
                    compositeSection={
                        selected
                            ? {
                                  children: (
                                      <Form.Input
                                          label="Label"
                                          errorMessage={
                                              error
                                                  ? "Invalid field"
                                                  : undefined
                                          }
                                          value={value}
                                          onChange={(e) => {
                                              setValue(e.target.value);
                                              setError(e.target.value === "x");
                                          }}
                                      />
                                  ),
                                  collapsible: true,
                                  errors: error
                                      ? ["Something went wrong"]
                                      : undefined,
                              }
                            : undefined
                    }
                    onChange={() => {
                        const nextState = !selected;
                        setSelected(nextState);
                        setError(nextState && value === "x");
                    }}
                >
                    Sample text
                </Toggle>
            </div>
        );
    },
};

export const DynamicOption: StoryObj<Component> = {
    render: () => {
        const [selected, setSelected] = useState(true);
        const [error, setError] = useState(false);
        return (
            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    flexDirection: "column",
                }}
            >
                <div>This option was added by the user</div>
                <Toggle
                    indicator
                    checked={selected}
                    error={error}
                    removable
                    compositeSection={{
                        children: <Form.Input label="Label" />,
                        collapsible: false,
                    }}
                    onChange={() => {
                        setSelected(!selected);
                        setError(selected);
                    }}
                >
                    Text
                </Toggle>
            </div>
        );
    },
};
