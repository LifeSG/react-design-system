"use client";

import { Input } from "@lifesg/react-design-system/input";
import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container">
            <Input
                data-testid="input-noborder-normal"
                styleType="no-border"
                placeholder="Default borderless"
            />
            <Input
                data-testid="input-noborder-disabled"
                styleType="no-border"
                placeholder="Disabled borderless"
                disabled
            />
            <Input
                data-testid="input-noborder-readonly"
                styleType="no-border"
                readOnly
                value="Read only borderless"
            />
            <Form.Input
                data-testid="form-input-noborder"
                label="Form input"
                styleType="no-border"
                placeholder="Form borderless input"
            />
        </div>
    );
}
