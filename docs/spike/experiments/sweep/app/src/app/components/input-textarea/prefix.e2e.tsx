"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <Form.Textarea
            data-testid="textarea-prefix"
            label="Textarea with prefix"
            prefix="prefix: "
        />
    );
}
