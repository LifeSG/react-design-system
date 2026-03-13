"use client";
import {
    DashedBorder,
    DashedBorderProps,
    Border,
    Colour,
    Radius,
} from "@lifesg/react-design-system";
import { ComponentType } from "react";
// Temporary workaround to bypass Linaria's handling of the DashedBorder component,
// which causes styles not to be applied in this story.
// This allows us to test the basic functionality of the component while we wait
// for a proper way to implement Linaria.
import "../../../../../../src/dashed-border/dashed-border.css";

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
