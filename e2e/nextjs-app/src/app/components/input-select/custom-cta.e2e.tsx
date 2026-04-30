"use client";

import { Form } from "@lifesg/react-design-system/form";
import { Button } from "@lifesg/react-design-system";
import styles from "./input-select.module.css";

const OPTIONS = [
    { value: "A", label: "Option A" },
    { value: "B", label: "Option B" },
    { value: "C", label: "Option C" },
    { value: "D", label: "Option D" },
];

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.Select
                data-testid="input-select-cta"
                label="Visual custom CTA"
                options={OPTIONS}
                enableSearch
                hideNoResultsDisplay
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
                renderCustomCallToAction={(hideOptions) => (
                    <div className={styles["cta-button-container"]}>
                        <Button
                            type="button"
                            data-testid="cta-button"
                            onClick={() => hideOptions()}
                        >
                            Custom Action
                        </Button>
                    </div>
                )}
            />
        </div>
    );
}
