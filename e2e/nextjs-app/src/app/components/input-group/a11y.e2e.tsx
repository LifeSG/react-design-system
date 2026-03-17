"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <Form.InputGroup
            label={{
                children: "Contact method",
                subtitle: "Choose and enter value",
            }}
            addon={{
                type: "list",
                attributes: {
                    options: ["Email", "Phone", "Mail"],
                },
            }}
        />
    );
}
