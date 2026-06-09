"use client";

import { InputNestedMultiSelect } from "@lifesg/react-design-system/input-nested-multi-select";
import { OPTIONS } from "./mock";
import styles from "./nested-multi-select.module.css";

export default function Story() {
    return (
        <div className="story-column-container">
            <div className={styles["short-container"]}>
                <InputNestedMultiSelect
                    data-testid="nested-multi-select-min-width"
                    options={OPTIONS}
                />
            </div>
            <InputNestedMultiSelect
                data-testid="nested-multi-select-custom-width"
                options={OPTIONS}
                dropdownWidth="345px"
            />
        </div>
    );
}
