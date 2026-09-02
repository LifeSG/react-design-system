"use client";

import { useMinWidthMediaQuery } from "@lifesg/react-design-system";
import { useEffect, useState } from "react";

import styles from "./media-query-content-overflow.module.css";

export default function Story() {
    const [isMounted, setIsMounted] = useState(false);
    const [breakpoint, setBreakpoint] = useState<string>("");
    const isSm = useMinWidthMediaQuery("sm");
    const isMd = useMinWidthMediaQuery("md");

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const body = document.body;
            const breakpointClass = [...body.classList].find((cls) =>
                /^fds-breakpoint-[a-z]+$/.test(cls)
            );
            if (breakpointClass) {
                setBreakpoint(breakpointClass);
            }
        });
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="story-column-container">
            {isMounted && (
                <>
                    <div>isSm: {isSm ? "true" : "false"}</div>
                    <div>isMd: {isMd ? "true" : "false"}</div>
                    <div>breakpoint: {breakpoint}</div>
                </>
            )}
            <div className={styles["overflow-content"]}>
                <div>Overflow content</div>
                <div>Overflow content</div>
                <div>Overflow content</div>
            </div>
        </div>
    );
}
