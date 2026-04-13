"use client";
import { Divider, Colour } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div className="story-column-container">
            <h5>Default solid line</h5>
            <Divider data-testid="divider-default" />
            <h5>Default dashed line</h5>
            <Divider data-testid="divider-dashed" lineStyle="dashed" />
            <h5>Customized thickness & colour</h5>
            <Divider data-testid="divider-custom-thickness" thickness={8} />
            <Divider data-testid="divider-custom-color" color="red" />
            <Divider
                data-testid="divider-dashed-custom"
                lineStyle="dashed"
                thickness={5}
                color={Colour["border-primary"]}
            />
        </div>
    );
}
