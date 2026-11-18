"use client";
// E9 m14a (mechanism 14): Tailwind v4 utilities via className. Hand-written.
// Built under globals setup "default". tailwind.css is compiled from tailwind.input.css by
// make-overrides.mjs; imported first, as a real app's globals.css would load it.
import "./tailwind.css";
import "@lifesg/react-design-system/theme/styles/lifesg.css";

import { Targets } from "../targets";

// literal class strings so the Tailwind CLI finds them (TAILWIND in overrides-spec.mjs)
const classes = {
    timeline: "mb-[40px]",
    button: "bg-[rgb(10,20,30)]",
    "navbar-icon": "w-[40px]",
    textarea: "bg-[rgb(10,20,30)]",
    "input-group": "pl-[7px]",
    modal: "ml-[40px]",
};

export default function Page() {
    return <Targets classes={classes} />;
}
