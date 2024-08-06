import type { Meta, StoryObj } from "@storybook/react";
import { v2_Color } from "src/v2_color";
import { Markup } from "src/markup";

type Component = typeof Markup;

const meta: Meta<Component> = {
    title: "General/Markup",
    component: Markup,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => (
        <Markup baseTextColor={v2_Color.Neutral[1]} baseTextSize="Body">
            <p>
                You can use <strong>bold text</strong> to emphasise important
                information
            </p>
            <br />
            <p>
                Or add a{" "}
                <a href="https://life.gov.sg" target="_blank" rel="noreferrer">
                    hyperlink
                </a>{" "}
                to direct users to some external source
            </p>
            <br />
            <p>This also supports bullet points:</p>
            <ul>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
            </ul>
            <br />
            <p>As well as numbered lists:</p>
            <ol>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
            </ol>
        </Markup>
    ),
};

export const Inheritance: StoryObj<Component> = {
    render: () => (
        <div style={{ color: "red", fontSize: "14px" }}>
            <Markup>
                Font style and color are inherited. In particular, this is what{" "}
                <strong>bolded</strong> and <a>link</a> elements look like
            </Markup>
        </div>
    ),
};
