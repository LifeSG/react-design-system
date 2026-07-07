"use client";
import { Divider, Colour } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div className="story-column-container">
            <h5>Default solid line</h5>
            <Divider />
            <h5>Default dashed line</h5>
            <Divider lineStyle="dashed" />
            <h5>Customized thickness & colour</h5>
            <Divider thickness={8} />
            <Divider color="red" />
            <Divider
                lineStyle="dashed"
                thickness={5}
                color={Colour["border-primary"]}
            />
        </div>
    );
}
