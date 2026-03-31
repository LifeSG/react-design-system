import { BoxIcon } from "@lifesg/react-icons/box";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button } from "src/button";
import { GridDecorator } from "stories/storybook-common";

type Component = typeof Button;

const meta: Meta<Component> = {
    title: "Selection and input/Button/Icon Only",
    component: Button,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return <Button icon={<BoxIcon />} aria-label="Archive item" />;
    },
};

export const Variations: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Button
                    sizeType="large"
                    icon={<BoxIcon />}
                    aria-label="Large primary"
                />
                <Button
                    sizeType="large"
                    styleType="secondary"
                    icon={<BoxIcon />}
                    aria-label="Large secondary"
                />
                <Button
                    sizeType="large"
                    styleType="light"
                    icon={<BoxIcon />}
                    aria-label="Large light"
                />
                <Button
                    sizeType="large"
                    disabled
                    icon={<BoxIcon />}
                    aria-label="Large disabled"
                />
                <Button icon={<BoxIcon />} aria-label="Default primary" />
                <Button
                    styleType="secondary"
                    icon={<BoxIcon />}
                    aria-label="Default secondary"
                />
                <Button
                    styleType="light"
                    icon={<BoxIcon />}
                    aria-label="Default light"
                />
                <Button
                    disabled
                    icon={<BoxIcon />}
                    aria-label="Default disabled"
                />
                <Button
                    sizeType="small"
                    icon={<BoxIcon />}
                    aria-label="Small primary"
                />
                <Button
                    sizeType="small"
                    styleType="secondary"
                    icon={<BoxIcon />}
                    aria-label="Small secondary"
                />
                <Button
                    sizeType="small"
                    styleType="light"
                    icon={<BoxIcon />}
                    aria-label="Small light"
                />
                <Button
                    sizeType="small"
                    disabled
                    icon={<BoxIcon />}
                    aria-label="Small disabled"
                />
            </>
        );
    },
    decorators: [
        GridDecorator({
            columns: 4,
            columnHeaders: ["Default", "Secondary", "Light", "Disabled"],
            rowHeaders: ["Large", "Default", "Small"],
        }),
    ],
};

export const CustomComponents: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Button
                icon={
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/2171/2171991.png"
                        alt=""
                    />
                }
                aria-label="Pet a cat"
            />
        );
    },
};

export const FocusableWhenDisabled: StoryObj<Component> = {
    render: (_args) => (
        <Button
            icon={<BoxIcon />}
            aria-label="Archive item"
            disabled
            focusableWhenDisabled
            onClick={() => alert("I shouldn't be here!")}
        />
    ),
};
