"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    const OPTIONS = [
        {
            label: "Category 1",
            value: "1",
            key: "1",
            subItems: [
                {
                    label: "Subcategory 1.1",
                    value: "1.1",
                    key: "11",
                    subItems: [
                        {
                            label: "Option 1.1.1",
                            value: "1.1.1",
                            key: "111",
                        },
                    ],
                },
            ],
        },
        {
            label: "Category 2",
            value: "2",
            key: "2",
            subItems: [
                {
                    label: "Option 2.1",
                    value: "2.1",
                    key: "21",
                },
                {
                    label: "Option 2.2",
                    value: "2.2",
                    key: "22",
                },
            ],
        },
        {
            label: "Option without children",
            value: "3",
            key: "3",
        },
    ];

    return (
        <Form.NestedSelect
            label="Default state"
            data-testid="form-nested-select-default"
            options={OPTIONS}
            mode="expand"
        />
    );
}
