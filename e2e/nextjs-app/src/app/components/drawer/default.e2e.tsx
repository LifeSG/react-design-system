"use client";

import { useState } from "react";
import { Button } from "@lifesg/react-design-system/button";
import { Drawer } from "@lifesg/react-design-system/drawer";
import { Typography } from "@lifesg/react-design-system/typography";
import styles from "./drawer.module.css";

export default function Story() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button onClick={() => setShow(true)}>Open drawer</Button>
            <Drawer
                data-testid="drawer"
                show={show}
                heading="Drawer heading"
                onClose={() => setShow(false)}
                onOverlayClick={() => setShow(false)}
            >
                <div className={styles["content"]}>
                    <Typography.BodyBL>Drawer content </Typography.BodyBL>
                </div>
            </Drawer>
        </>
    );
}
