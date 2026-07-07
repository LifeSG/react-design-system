"use client";
import { useApplyStyle } from "@lifesg/react-design-system/theme";
import { useRef } from "react";
import styles from "./use-apply-style.module.css";

export default function Story() {
    const elementRef = useRef<HTMLDivElement>(null);

    useApplyStyle(elementRef, {
        "--fds-colour-text": "#ffffff",
        padding: "10px",
    });

    return (
        <div ref={elementRef} className={styles.element}>
            Example text
        </div>
    );
}
