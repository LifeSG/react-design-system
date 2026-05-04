"use client";

import { Button } from "@lifesg/react-design-system/button";
import { InputMultiSelect } from "@lifesg/react-design-system/input-multi-select";
import { OPTIONS } from "./mock";
import styles from "./input-multi-select.module.css";

export default function Story() {
    return (
        <InputMultiSelect
            data-testid="multi-select"
            options={OPTIONS}
            enableSearch
            valueExtractor={(item) => item.value}
            listExtractor={(item) => item.label}
            renderCustomCallToAction={(onDismiss) => (
                <div className={styles["cta-button-container"]}>
                    <Button
                        data-testid="custom-cta-button"
                        onClick={() => onDismiss?.()}
                    >
                        Custom CTA
                    </Button>
                </div>
            )}
        />
    );
}
