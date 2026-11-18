"use client";
// Spike 01 / E9: the six override targets, rendered identically on every /overrides/*
// page. Each page only changes the consumer CSS it imports and the props passed here.
//   classes:    { <targetId>: className } passed to that target's component
//   styles:     { <targetId>: style object } passed as the inline `style` prop
//   themeStyle: inline style on ThemeProvider (documented token override, JS)
//   applyStyle: tokens set with useApplyStyle on ThemeProvider (documented, strict CSP)
// `.ovr-scope` wraps the in-tree targets; `.ovr-modal` sits on the modal, which
// renders in a portal outside `.ovr-scope`.
import { Button } from "@lifesg/react-design-system/button";
import { InputGroup } from "@lifesg/react-design-system/input-group";
import { Textarea } from "@lifesg/react-design-system/input-textarea";
import { ModalV2 } from "@lifesg/react-design-system/modal-v2";
import { Navbar } from "@lifesg/react-design-system/navbar";
import {
    ThemeProvider,
    useApplyStyle,
} from "@lifesg/react-design-system/theme";
import { Timeline } from "@lifesg/react-design-system/timeline";
import { useRef } from "react";

const navItems = [
    { id: "home", children: "Home", href: "https://www.life.gov.sg" },
    { id: "guides", children: "Guides", href: "https://www.life.gov.sg" },
];

export function Targets({ classes = {}, styles = {}, themeStyle, applyStyle }) {
    const themeRef = useRef(null);
    // As documented: called in the component that renders ThemeProvider. (Called from a
    // child, its layout effect runs before the ThemeProvider ref is attached: a no-op.)
    useApplyStyle(themeRef, applyStyle);
    return (
        <ThemeProvider ref={themeRef} style={themeStyle}>
            {/* read by measure-overrides.mjs to check the class / style reached the element */}
            <div
                hidden
                id="ovr-props"
                data-props={JSON.stringify({ classes, styles })}
            />

            <div className="ovr-scope" data-testid="ovr-scope">
                <Navbar
                    data-testid="ovr-navbar"
                    className={classes["navbar-icon"]}
                    style={styles["navbar-icon"]}
                    selectedId="guides"
                    items={{ desktop: navItems }}
                />
                <Timeline
                    data-testid="timeline"
                    title="What's next"
                    className={classes.timeline}
                    style={styles.timeline}
                    items={[
                        { title: "Step 1", content: "One" },
                        { title: "Step 2", content: "Two" },
                    ]}
                />
                <Button
                    data-testid="ovr-button"
                    className={classes.button}
                    style={styles.button}
                >
                    Continue
                </Button>
                <Textarea
                    data-testid="ovr-textarea"
                    readOnly
                    value="Read-only text"
                    className={classes.textarea}
                    style={styles.textarea}
                />
                <InputGroup
                    data-testid="ovr-input-group"
                    readOnly
                    value="Read-only value"
                    className={classes["input-group"]}
                    style={styles["input-group"]}
                />
            </div>
            <ModalV2 show className="ovr-modal" data-testid="ovr-modal">
                <ModalV2.Card>
                    <ModalV2.Content
                        className={classes.modal}
                        style={styles.modal}
                    >
                        Modal content
                    </ModalV2.Content>
                </ModalV2.Card>
            </ModalV2>
        </ThemeProvider>
    );
}
