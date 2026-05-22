"use client";

import { Form } from "@lifesg/react-design-system/form";
import { ToggleOffFillIcon, ToggleOffIcon } from "@lifesg/react-icons";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.MaskedInput
                data-testid="form-masked-input-custom-inactive"
                label="Custom mask inactive color (#2a2b2b)"
                iconInactiveColor="#2a2b2b"
            />
            <Form.MaskedInput
                data-testid="form-masked-input-custom-active"
                label="Custom mask active color (red)"
                value="S1234567D"
                iconActiveColor="red"
            />
            <Form.MaskedInput
                data-testid="form-masked-input-custom-icon"
                label="Custom mask and unmask icon"
                value="S1234567D"
                iconMask={<ToggleOffFillIcon />}
                iconUnmask={<ToggleOffIcon />}
            />
        </div>
    );
}
