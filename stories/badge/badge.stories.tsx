import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "src/badge";
import { StackDecorator, StoryDecorator } from "stories/storybook-common";

type Component = typeof Badge;

const meta: Meta<Component> = {
    title: "Feedback indicators/Badge",
    component: Badge,
    decorators: [StackDecorator(), StoryDecorator()],
};

export default meta;

type BadgeVariant = "number" | "number-with-border" | "dot" | "dot-with-border";
type BadgeColor = "default" | "important";

type SingleBadgeProps = {
    count?: number;
    variant: BadgeVariant;
    color?: BadgeColor;
};

const SingleBadge = ({
    count,
    variant,
    color = "default",
}: SingleBadgeProps) => (
    <div style={{ position: "relative", width: 40, height: 40 }}>
        <Badge count={count} variant={variant} color={color} />
    </div>
);

const BadgeGroup = ({
    counts = [8, 88, 209, 1000, 2090],
    variant,
}: {
    counts?: number[];
    variant: BadgeVariant;
}) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {["default", "important"].map((color) => (
            <div key={color} style={{ display: "flex", gap: "20px" }}>
                {counts.map((count) => (
                    <SingleBadge
                        key={`${variant}-${color}-${count}`}
                        count={count}
                        variant={variant}
                        color={color as BadgeColor}
                    />
                ))}
            </div>
        ))}
    </div>
);

const DotBadgeRow = ({ variant }: { variant: BadgeVariant }) => (
    <div style={{ display: "flex", gap: "20px" }}>
        {["default", "important"].map((color) => (
            <SingleBadge
                key={`${variant}-${color}`}
                variant={variant}
                color={color as BadgeColor}
            />
        ))}
    </div>
);

export const Default: StoryObj = {
    render: () => <BadgeGroup variant="number" />,
};

export const NumberBadgeWithBorder: StoryObj = {
    render: () => <BadgeGroup variant="number-with-border" />,
};

export const DotBadge: StoryObj = {
    render: () => <DotBadgeRow variant="dot" />,
};

export const DotWithBorderBadge: StoryObj = {
    render: () => <DotBadgeRow variant="dot-with-border" />,
};
