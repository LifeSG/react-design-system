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
                    <p>
                        To make changes, edit the files in the{" "}
                        <code>e2e/nextjs-app/src/app</code> directory.
                    </p>
                </div>
            </main>
        </div>
    );
}
