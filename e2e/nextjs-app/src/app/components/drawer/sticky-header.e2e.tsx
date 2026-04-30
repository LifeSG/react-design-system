"use client";

import { useState } from "react";
import { Button } from "@lifesg/react-design-system/button";
import { Drawer } from "@lifesg/react-design-system/drawer";
import { Typography } from "@lifesg/react-design-system/typography";

export default function Story() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button onClick={() => setShow(true)}>Open drawer</Button>
            <Drawer
                show={show}
                heading="Drawer with scrollable content"
                onClose={() => setShow(false)}
                onOverlayClick={() => setShow(false)}
            >
                <div style={{ padding: "1rem" }}>
                    {Array.from({ length: 20 }).map((_, i) => (
                        <Typography.BodyBL
                            key={i}
                            style={{ marginBottom: "1rem" }}
                        >
                            Paragraph {i + 1}: Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </Typography.BodyBL>
                    ))}
                </div>
            </Drawer>
        </>
    );
}
