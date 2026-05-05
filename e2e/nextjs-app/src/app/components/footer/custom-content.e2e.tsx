"use client";
import { Footer } from "@lifesg/react-design-system/footer";
import styles from "./footer.module.css";

export default function Story() {
    return (
        <Footer
            data-testid="footer-custom-content"
            lastUpdated={new Date("2026-01-01T00:00:00Z")}
        >
            <div className={styles.custom}>My custom content</div>
        </Footer>
    );
}
