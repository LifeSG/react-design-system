"use client";

import { InputMultiSelect } from "@lifesg/react-design-system/input-multi-select";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <div className="story-column-container">
            <InputMultiSelect
                data-testid="standalone-default"
                options={OPTIONS}
                placeholder="Default multi select"
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />

            <InputMultiSelect
                data-testid="standalone-readonly"
                readOnly
                options={OPTIONS}
                placeholder="Readonly multi select"
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />

            <InputMultiSelect
                data-testid="standalone-selected"
                options={OPTIONS}
                selectedOptions={[OPTIONS[0], OPTIONS[1]]}
                placeholder="Preselected multi select"
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />

            <InputMultiSelect
                data-testid="standalone-disabled"
                options={OPTIONS}
                disabled
                placeholder="Disabled multi select"
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />

            <InputMultiSelect
                data-testid="standalone-error"
                options={OPTIONS}
                error
                placeholder="Error multi select"
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />
        </div>
    );
}
