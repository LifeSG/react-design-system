"use client";

import { Form } from "@lifesg/react-design-system/form";

const OPTIONS = [
    { display: "Option 1", value: "Opt 1" },
    { display: "Option 2", value: "Opt 2" },
    { display: "Option 3", value: "Opt 3" },
    { display: "Option 4", value: "Opt 4" },
];

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.InputGroup
                data-testid="form-input-group-list-disabled-options"
                label={{
                    children: "Disabled options",
                    subtitle: "Some options are disabled",
                }}
                placeholder="Enter something"
                addon={{
                    type: "list",
                    attributes: {
                        options: OPTIONS,
                        placeholder: "Select",
                        listExtractor: (item) =>
                            (item as { display: string; value: string })
                                .display,
                        valueExtractor: (item) =>
                            (item as { display: string; value: string }).value,
                        isOptionDisabled: (item) =>
                            (item as { display: string; value: string })
                                .value === "Opt 2" ||
                            (item as { display: string; value: string })
                                .value === "Opt 3",
                    },
                }}
            />
            <Form.InputGroup
                data-testid="form-input-group-list-disabled-options-selected"
                label={{
                    children: "Disabled option (selected)",
                    subtitle: "Selected option is disabled",
                }}
                placeholder="Enter something"
                addon={{
                    type: "list",
                    attributes: {
                        options: OPTIONS,
                        placeholder: "Select",
                        selectedOption: OPTIONS[1],
                        listExtractor: (item) =>
                            (item as { display: string; value: string })
                                .display,
                        valueExtractor: (item) =>
                            (item as { display: string; value: string }).value,
                        displayValueExtractor: (item) =>
                            (item as { display: string; value: string })
                                .display,
                        isOptionDisabled: (item) =>
                            (item as { display: string; value: string })
                                .value === "Opt 2" ||
                            (item as { display: string; value: string })
                                .value === "Opt 3",
                    },
                }}
            />
        </div>
    );
}
