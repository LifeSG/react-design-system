"use client";
import {
    DashedBorder,
    DashedBorderProps,
} from "@lifesg/react-design-system/dashed-border";
import {
    Border,
    Colour,
    Radius,
    Spacing,
} from "@lifesg/react-design-system/theme";
import { ComponentType } from "react";

const DashedBorderComponent =
    DashedBorder as unknown as ComponentType<DashedBorderProps>;

export default function Story() {
    return (
        <div
            style={{
                display: "grid",
                gap: Spacing["spacing-16"],
                width: "320px",
            }}
        >
            <DashedBorderComponent
                data-testid="dashed-border-enabled"
                thickness={Border["width-020"]}
                radius={Radius.sm}
                colour={Colour["border-primary"]}
                backgroundColor={Colour["bg-primary-subtlest"]}
                style={{ padding: Spacing["spacing-16"] }}
            >
                Enabled dashed border
            </DashedBorderComponent>

            <DashedBorderComponent
                data-testid="dashed-border-disabled"
                enabled={false}
                thickness={Border["width-020"]}
                radius={Radius.sm}
                colour={Colour["border-primary"]}
                style={{ padding: Spacing["spacing-16"] }}
            >
                Disabled dashed border
            </DashedBorderComponent>
        </div>
    );
}
