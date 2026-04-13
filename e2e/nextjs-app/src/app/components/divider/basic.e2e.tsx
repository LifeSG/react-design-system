"use client";
import { Divider, Colour, Layout } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div>
            <h5>Default solid line</h5>
            <br />
            <Divider data-testid="divider-default" />
            <br />
            <h5>Default dashed line</h5>
            <br />
            <Divider data-testid="divider-dashed" lineStyle="dashed" />
            <br />
            <h5>Customized thickness & colour</h5>
            <br />
            <Divider data-testid="divider-custom-thickness" thickness={8} />
            <br />
            <Divider data-testid="divider-custom-color" color="red" />
            <br />
            <Divider
                data-testid="divider-dashed-custom"
                lineStyle="dashed"
                thickness={5}
                color={Colour["border-primary"]}
            />
            <br />
            <h5>Grid layout</h5>
            <br />
            <Divider
                data-testid="divider-solid-grid"
                layoutType="grid"
                mdCols={[1, 6]}
                xlCols={[1, 8]}
                xxsCols={[1, 5]}
            />
            <br />
            <Divider
                data-testid="divider-dashed-grid"
                layoutType="grid"
                lineStyle="dashed"
                mdCols={[1, 6]}
                xlCols={[1, 8]}
                xxsCols={[1, 5]}
            />
        </div>
    );
}
