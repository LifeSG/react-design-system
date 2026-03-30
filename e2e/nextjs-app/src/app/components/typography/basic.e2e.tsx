"use client";
import { Typography } from "@lifesg/react-design-system";

const variants = [
    { label: "HeadingXXL", Component: Typography.HeadingXXL },
    { label: "HeadingXL", Component: Typography.HeadingXL },
    { label: "HeadingLG", Component: Typography.HeadingLG },
    { label: "HeadingMD", Component: Typography.HeadingMD },
    { label: "HeadingSM", Component: Typography.HeadingSM },
    { label: "HeadingXS", Component: Typography.HeadingXS },
    { label: "BodyBL", Component: Typography.BodyBL },
    { label: "BodyMD", Component: Typography.BodyMD },
    { label: "BodySM", Component: Typography.BodySM },
    { label: "LinkBL", Component: Typography.LinkBL },
    { label: "LinkMD", Component: Typography.LinkMD },
    { label: "LinkSM", Component: Typography.LinkSM },
] as const;

export default function Story() {
    return (
        <div data-testid="typography-font-weights">
            {variants.map(({ label, Component }) => (
                <div key={label}>
                    <Component
                        data-testid={`${label}-weight-light`}
                        weight="light"
                    >
                        {label} light
                    </Component>
                    <Component
                        data-testid={`${label}-weight-semibold`}
                        weight="semibold"
                    >
                        {label} semibold
                    </Component>
                    <Component
                        data-testid={`${label}-weight-bold`}
                        weight="bold"
                    >
                        {label} bold
                    </Component>
                </div>
            ))}
        </div>
    );
}
