"use client";
// Outer layout of the route group renders a library component and imports NO theme,
// so its component CSS is in the outer layout's chunk.
import { Divider } from "@lifesg/react-design-system/divider";

export default function OuterLayout({ children }) {
    return (
        <>
            <Divider data-testid="outer-divider" />
            {children}
        </>
    );
}
