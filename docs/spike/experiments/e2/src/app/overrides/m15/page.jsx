"use client";
// E9 m15 (mechanism 15): styled-components as a stand-in for any runtime CSS-in-JS. The
// same single-class rules as m02, injected at runtime as an unlayered <style> tag by
// createGlobalStyle, so only the delivery differs from m02. Hand-written. Globals "default".
import "@lifesg/react-design-system/theme/styles/lifesg.css";

import { createGlobalStyle } from "styled-components";

import { Targets } from "../targets";

const Overrides = createGlobalStyle`
    .ovr-c-timeline { margin-bottom: 40px; }
    .ovr-c-button { background-color: rgb(10 20 30); }
    .ovr-c-navbar-icon { width: 40px; }
    .ovr-c-textarea { background-color: rgb(10 20 30); }
    .ovr-c-input-group { padding-left: 7px; }
    .ovr-c-modal { margin-left: 40px; }
`;

const classes = {
    timeline: "ovr-c-timeline",
    button: "ovr-c-button",
    "navbar-icon": "ovr-c-navbar-icon",
    textarea: "ovr-c-textarea",
    "input-group": "ovr-c-input-group",
    modal: "ovr-c-modal",
};

export default function Page() {
    return (
        <>
            <Overrides />
            <Targets classes={classes} />
        </>
    );
}
