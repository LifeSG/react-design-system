"use client";

import { InputSelect } from "@lifesg/react-design-system";
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
            <div className={styles["short-container"]}>
                <InputSelect
                    data-testid="input-select-min-width"
                    options={OPTIONS}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                />
            </div>
            <InputSelect
                data-testid="input-select-custom-width"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
                dropdownWidth="200px"
            />
        </div>
    );
}
