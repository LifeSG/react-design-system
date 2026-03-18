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
            <DashedBorder data-testid="dashed-border-default-enabled">
                Default enabled dashed border
            </DashedBorder>

            <DashedBorder
                data-testid="dashed-border-default-disabled"
                enabled={false}
            >
                Default disabled dashed border
            </DashedBorder>

            <DashedBorder
                data-testid="dashed-border-custom-enabled"
                thickness={Border["width-020"]}
                radius={Radius.sm}
                colour={Colour["border-primary"]}
                backgroundColor={Colour["bg-inverse"]}
            >
                Custom enabled dashed border
            </DashedBorder>

            <DashedBorder
                data-testid="dashed-border-custom-disabled"
                enabled={false}
                thickness={Border["width-020"]}
                radius={Radius.sm}
                colour={Colour["border-primary"]}
                backgroundColor={Colour["bg-inverse"]}
            >
                Custom disabled dashed border
            </DashedBorder>
        </div>
    );
}
