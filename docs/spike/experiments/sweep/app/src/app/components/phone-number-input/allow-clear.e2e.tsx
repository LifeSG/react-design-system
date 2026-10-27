"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <Form.PhoneNumberInput
            data-testid="phone-number-input-allow-clear"
            label="Allow Clear"
            allowClear
        />
    );
}
