"use client";
import { Footer } from "@lifesg/react-design-system/footer";
import styles from "./footer.module.css";

export default function Story() {
    return (
        <Footer data-testid="footer-custom-content">
            <div className={styles.custom}>My custom content</div>
        </Footer>
    );
}
