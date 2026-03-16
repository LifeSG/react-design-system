"use client";
import {
    DashedBorder,
    DashedBorderProps,
    Border,
    Colour,
    Radius,
} from "@lifesg/react-design-system";
import { ComponentType } from "react";

const DashedBorderComponent =
    DashedBorder as unknown as ComponentType<DashedBorderProps>;

export default function Story() {
    return (
        <div>
            <DashedBorderComponent
                data-testid="dashed-border-enabled"
                thickness={Border["width-020"]}
                radius={Radius.sm}
                colour={Colour["border-primary"]}
            >
                Enabled dashed border
            </DashedBorderComponent>

            <DashedBorderComponent
                data-testid="dashed-border-disabled"
                enabled={false}
                thickness={Border["width-020"]}
                radius={Radius.sm}
                colour={Colour["border-primary"]}
            >
                Disabled dashed border
            </DashedBorderComponent>
        </div>
    );
}
