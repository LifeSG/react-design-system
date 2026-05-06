"use client";

import { OPTIONS } from "./mock";
import { Form } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.MultiSelect
                data-testid="search-default"
                options={OPTIONS}
                label={"Search default"}
                enableSearch
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />
            <Form.MultiSelect
                data-testid="search-with-custom-no-result-label"
                options={OPTIONS}
                customLabels={{
                    noResultsLabel: "Custom no result found.",
                }}
                label={"Search with custom no result label"}
                enableSearch
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />
            <Form.MultiSelect
                data-testid="search-with-custom-no-result-description"
                options={OPTIONS}
                customLabels={{
                    noResultsDescription:
                        "Custom no result found description. This can be used to provide more context to users when there are no search results.",
                }}
                label={"Search with custom no result description"}
                enableSearch
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />
            <Form.MultiSelect
                data-testid="search-with-custom-search-placeholder"
                options={OPTIONS}
                customLabels={{
                    searchPlaceholder: "Custom search placeholder",
                }}
                label={"Search with custom search placeholder"}
                enableSearch
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />
        </div>
    );
}
