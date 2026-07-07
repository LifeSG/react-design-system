"use client";
import { BoxContainer } from "@lifesg/react-design-system/box-container";
import styles from "./box-container.module.css";

export default function Story() {
    return (
        <BoxContainer
            title="Non-collapsible container"
            collapsible={false}
            data-testid="box-container-non-collapsible"
        >
            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
        </BoxContainer>
    );
}
