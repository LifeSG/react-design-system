import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { DashedBorder } from "src/dashed-border";
import { Border, Colour, Radius, Spacing } from "src/theme";
import styled from "styled-components";

type Component = typeof DashedBorder;

const PreviewContent = styled.div`
    padding: ${Spacing["spacing-20"]};
`;

const semanticColourEntries = Object.entries(Colour).filter(
    ([key, value]) => key !== "Primitive" && typeof value === "string"
) as Array<[string, string]>;
const primitiveColourEntries = Object.entries(Colour.Primitive);

const allColourEntries = [...semanticColourEntries, ...primitiveColourEntries];
const allColourOptions = allColourEntries.map(([, value]) => value);
const allColourLabels = Object.fromEntries([
    ...semanticColourEntries.map(([key, value]) => [value, `Colour["${key}"]`]),
    ...primitiveColourEntries.map(([key, value]) => [
        value,
        `Colour.Primitive["${key}"]`,
    ]),
]);

const meta: Meta<Component> = {
    title: "Internal/DashedBorder",
    component: DashedBorder,
    tags: ["pattern"],
    args: {
        enabled: true,
        thickness: Border["width-010"],
        radius: Radius.none,
        colour: Colour["border"],
        backgroundColor: undefined,
    },
    argTypes: {
        enabled: {
            control: "boolean",
            table: {
                defaultValue: {
                    summary: "true",
                },
            },
        },
        thickness: {
            table: {
                defaultValue: {
                    summary: 'Border["width-010"]',
                },
            },
            control: {
                type: "select",
                labels: {
                    [Border["width-005"]]: 'Border["width-005"]',
                    [Border["width-010"]]: 'Border["width-010"]',
                    [Border["width-020"]]: 'Border["width-020"]',
                    [Border["width-040"]]: 'Border["width-040"]',
                },
            },
            options: [
                Border["width-005"],
                Border["width-010"],
                Border["width-020"],
                Border["width-040"],
            ],
        },
        radius: {
            table: {
                defaultValue: {
                    summary: "Radius.none",
                },
            },
            control: {
                type: "select",
                labels: {
                    [Radius.none]: "Radius.none",
                    [Radius.xs]: "Radius.xs",
                    [Radius.sm]: "Radius.sm",
                    [Radius.md]: "Radius.md",
                    [Radius.lg]: "Radius.lg",
                    [Radius.full]: "Radius.full",
                },
            },
            options: [
                Radius.none,
                Radius.xs,
                Radius.sm,
                Radius.md,
                Radius.lg,
                Radius.full,
            ],
        },
        colour: {
            table: {
                defaultValue: {
                    summary: 'Colour["border"]',
                },
            },
            control: {
                type: "select",
                labels: allColourLabels,
            },
            options: allColourOptions,
        },
        backgroundColor: {
            table: {
                defaultValue: {
                    summary: "undefined",
                },
            },
            control: {
                type: "select",
                labels: {
                    undefined: "undefined",
                    ...allColourLabels,
                },
            },
            options: [undefined, ...allColourOptions],
        },
        children: {
            control: false,
        },
    },
};

export default meta;

export const Playground: StoryObj<Component> = {
    render: (args) => (
        <DashedBorder {...args}>
            <PreviewContent>Dashed border container</PreviewContent>
        </DashedBorder>
    ),
};

export const Default: StoryObj<Component> = {
    args: {
        enabled: true,
        thickness: Border["width-010"],
        radius: Radius.none,
        colour: Colour["border"],
    },
    render: Playground.render,
};
