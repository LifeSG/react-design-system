"use client";
import { BoxContainer } from "@lifesg/react-design-system/box-container";

export default function Story() {
    return (
        <BoxContainer
            title="Non-collapsible container"
            collapsible={false}
            data-testid="box-container-non-collapsible"
        >
            <div style={{ padding: "2rem" }}>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
        </BoxContainer>
    );
}
