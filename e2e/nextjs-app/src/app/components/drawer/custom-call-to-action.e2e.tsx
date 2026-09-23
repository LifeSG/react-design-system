"use client";

import { Button } from "@lifesg/react-design-system/button";
import { Drawer } from "@lifesg/react-design-system/drawer";
import { Typography } from "@lifesg/react-design-system/typography";
import { useState } from "react";

import styles from "./drawer.module.css";

export default function Story() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button onClick={() => setShow(true)}>Open drawer</Button>
            <Drawer
                data-testid="drawer"
                show={show}
                heading="Replace this slot in the right panel with your content"
                onClose={() => setShow(false)}
                onOverlayClick={() => setShow(false)}
                customCallToAction={
                    <>
                        <Button onClick={() => setShow(false)}>
                            Save changes
                        </Button>
                        <Button
                            styleType="light"
                            onClick={() => setShow(false)}
                        >
                            Cancel
                        </Button>
                    </>
                }
            >
                <div className={styles["content"]}>
                    <Typography.BodyBL>Drawer content</Typography.BodyBL>
                </div>
            </Drawer>
        </>
    );
}
