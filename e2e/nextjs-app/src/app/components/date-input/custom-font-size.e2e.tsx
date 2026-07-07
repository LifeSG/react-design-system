"use client";

import { DateInput } from "@lifesg/react-design-system/date-input";
import { useEffect } from "react";
import styles from "./date-input.module.css";

export default function Story() {
    useEffect(() => {
        const bodyClassName = styles["custom-font-size"];

        document.body.classList.add(bodyClassName);

        return () => {
            document.body.classList.remove(bodyClassName);
        };
    }, []);

    return (
        <div className="story-background">
            <DateInput data-testid="date-input" />
        </div>
    );
}
