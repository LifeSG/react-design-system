"use client";
// E9 m14p (mechanism 14, control): Tailwind v4 imported with no utility classes, so only
// its preflight (@layer base) and theme variables load. Hand-written. Globals "default".
import "./tailwind.css";
import "@lifesg/react-design-system/theme/styles/lifesg.css";

import { Targets } from "../targets";

export default function Page() {
    return <Targets />;
}
