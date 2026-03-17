"use client";
import {
    DashedBorder,
    Border,
    Colour,
    Radius,
} from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div>
            <DashedBorder
                data-testid="dashed-border-enabled"
                thickness={Border["width-020"]}
                radius={Radius.sm}
                colour={Colour["border-primary"]}
            >
                Enabled dashed border
            </DashedBorder>

            <DashedBorder
                data-testid="dashed-border-disabled"
                enabled={false}
                thickness={Border["width-020"]}
                radius={Radius.sm}
                colour={Colour["border-primary"]}
                backgroundColor={Colour["bg-inverse"]}
            >
                Disabled dashed border
            </DashedBorder>
        </div>
    );
}
