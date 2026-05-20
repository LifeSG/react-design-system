"use client";
import { Timeline } from "@lifesg/react-design-system/timeline";
import styles from "./timeline.module.css";

export default function Story() {
    return (
        <div className={styles.grid}>
            <Timeline
                data-testid="timeline-narrow"
                title="Narrow (3 columns)"
                startCol={1}
                colSpan={3}
                items={[
                    {
                        title: "Step 1",
                        content: "Complete the first step.",
                    },
                    {
                        title: "Step 2",
                        content: "Continue with the second step.",
                    },
                ]}
            />
            <Timeline
                data-testid="timeline-wide"
                title="Wide (9 columns)"
                startCol={4}
                colSpan={9}
                items={[
                    {
                        title: "Step 1",
                        content: "Complete the first step.",
                    },
                    {
                        title: "Step 2",
                        content: "Continue with the second step.",
                    },
                ]}
            />
        </div>
    );
}
