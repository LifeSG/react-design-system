import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "src/checkbox";
import { GridDecorator } from "stories/storybook-common";
import { Label, SubOption } from "./doc-elements";

type Component = typeof Checkbox;

const meta: Meta<Component> = {
    title: "Selection and input/Checkbox",
    component: Checkbox,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Checkbox />
                <Checkbox checked />
                <Checkbox indeterminate />
                <Checkbox disabled />
                <Checkbox disabled checked />
                <Checkbox disabled indeterminate />
                <Checkbox displaySize="small" />
                <Checkbox displaySize="small" checked />
                <Checkbox displaySize="small" indeterminate />
                <Checkbox displaySize="small" disabled />
                <Checkbox displaySize="small" disabled checked />
                <Checkbox displaySize="small" disabled indeterminate />
            </>
        );
    },
    decorators: [
        GridDecorator({
            columns: 3,
            columnHeaders: ["Unchecked", "Checked", "Indeterminate"],
            rowHeaders: [
                "Default",
                "Default Disabled",
                "Small",
                "Small Disabled",
            ],
        }),
    ],
};

export const IndeterminateState: StoryObj<Component> = {
    render: () => {
        const [checked1, setChecked1] = useState(true);
        const [checked2, setChecked2] = useState(false);
        return (
            <>
                <Checkbox
                    checked={checked1 && checked2}
                    indeterminate={checked1 !== checked2}
                    onChange={() => {
                        if (checked1 !== checked2) {
                            setChecked1(true);
                            setChecked2(true);
                        } else {
                            setChecked1(!checked1);
                            setChecked2(!checked1);
                        }
                    }}
                />
                <SubOption>
                    <Checkbox
                        id="sub-option-1"
                        checked={checked1}
                        onChange={() => setChecked1(!checked1)}
                    />
                    <Label htmlFor="sub-option-1">Sub-option 1</Label>
                </SubOption>
                <SubOption>
                    <Checkbox
                        id="sub-option-2"
                        checked={checked2}
                        onChange={() => setChecked2(!checked2)}
                    />
                    <Label htmlFor="sub-option-2">Sub-option 2</Label>
                </SubOption>
            </>
        );
    },
};
