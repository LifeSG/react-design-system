"use client";
import { BoxContainer } from "@lifesg/react-design-system/box-container";
import { Button } from "@lifesg/react-design-system/button";
import styles from "./box-container.module.css";

export default function Story() {
    const handleEdit = () => {
        console.log("Edit button clicked");
    };

    return (
        <BoxContainer
            title="Container with call-to-action"
            callToActionComponent={
                <Button
                    styleType="light"
                    onClick={handleEdit}
                    data-testid="cta-button"
                >
                    Edit
                </Button>
            }
            data-testid="box-container-cta"
        >
            <div className={styles.content}>
                <p>This container has a call-to-action button in the header.</p>
            </div>
        </BoxContainer>
    );
}
