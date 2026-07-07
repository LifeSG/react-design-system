"use client";

import { Input } from "@lifesg/react-design-system/input";
import { Form } from "@lifesg/react-design-system/form";

const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.Input
                label="With clear button"
                data-testid="form-input-with-clear-button"
                placeholder={text}
                allowClear
            />
            <Form.Input
                label="With clear button prefilled"
                data-testid="form-input-with-clear-button-prefilled"
                value={text}
                allowClear
            />
            <Input styleType="no-border" placeholder={text} allowClear />
            <Input styleType="no-border" value={text} allowClear />
        </div>
    );
}
