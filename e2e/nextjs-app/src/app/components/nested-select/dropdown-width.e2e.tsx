"use client";

import { Form } from "@lifesg/react-design-system/form";
import { OPTIONS } from "./mock";
import styles from "./nested-select.module.css";

export default function Story() {
    return (
        <div className="story-column-container">
            <div className={styles["short-container"]}>
                <Form.NestedSelect
                    label="Default state"
                    data-testid="form-nested-select-min-width"
                    options={OPTIONS}
                    dropdownWidth="200px"
                />
            </div>

            <Form.NestedSelect
                label="Default state"
                data-testid="form-nested-select-custom-width"
                options={OPTIONS}
                dropdownWidth="200px"
            />
        </div>
    );
}
