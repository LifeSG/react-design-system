"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div>
            <Form.MaskedInput
                label="Loading display"
                value="S1234567D"
                readOnly
                loadState={"loading"}
            />

            <Form.MaskedInput
                label="Error display"
                value="S1234567D"
                readOnly
                loadState={"fail"}
            />

            <Form.MaskedInput
                label="Error display with focus"
                value="S1234567D"
                readOnly
                loadState={"fail"}
            />
        </div>
    );
}
