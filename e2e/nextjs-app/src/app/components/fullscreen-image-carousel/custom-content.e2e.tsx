"use client";
import { FullscreenImageCarousel } from "@lifesg/react-design-system/fullscreen-image-carousel";
import styles from "./custom-content.module.css";

export default function Story() {
    return (
        <FullscreenImageCarousel
            items={[
                {
                    fileName: "Custom content",
                    type: "custom",
                    renderContent: () => (
                        <div className={styles.custom}>My custom content</div>
                    ),
                },
            ]}
            show
            onClose={() => undefined}
            onDelete={() => undefined}
        />
    );
}
