import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.intro}>
                    <h1>E2E test suite</h1>
                    <p>
                        You&apos;re on the landing page of the E2E test suite.
                    </p>
                </div>
            </main>
        </div>
    );
}
