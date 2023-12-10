import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "src/checkbox";
import { Grid, SubOption } from "./doc-elements";

type Component = typeof Checkbox;

const meta: Meta<Component> = {
    title: "Data Input/Checkbox",
    component: Checkbox,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <Grid>
                <Checkbox displaySize="default" />
                <Checkbox displaySize="default" checked />
                <Checkbox displaySize="default" indeterminate />
                <Checkbox displaySize="default" disabled />
                <Checkbox displaySize="default" disabled checked />
                <Checkbox displaySize="default" disabled indeterminate />
                <Checkbox displaySize="small" />
                <Checkbox displaySize="small" checked />
                <Checkbox displaySize="small" indeterminate />
                <Checkbox displaySize="small" disabled />
                <Checkbox displaySize="small" disabled checked />
                <Checkbox displaySize="small" disabled indeterminate />
            </Grid>
        );
    },
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
                        checked={checked1}
                        onChange={() => setChecked1(!checked1)}
                    />
                    Sub-option 1
                </SubOption>
                <SubOption>
                    <Checkbox
                        checked={checked2}
                        onChange={() => setChecked2(!checked2)}
                    />
                    Sub-option 2
                </SubOption>
            </>
        );
    },
};
