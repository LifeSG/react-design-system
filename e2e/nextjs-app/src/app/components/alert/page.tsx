"use client";

import {
    AlertKeyboardNav,
    AlertSizeVariants,
    AlertTypeVariants,
    AlertWithActionLink,
    AlertWithIcons,
    AlertWithShowMore,
} from "./alert.e2e";

export default function AlertPage() {
    return (
        <>
            <section data-testid="story-type-variants">
                <AlertTypeVariants />
            </section>
            <section data-testid="story-with-icons">
                <AlertWithIcons />
            </section>
            <section data-testid="story-size-variants">
                <AlertSizeVariants />
            </section>
            <section data-testid="story-with-action-link">
                <AlertWithActionLink />
            </section>
            <section data-testid="story-show-more">
                <AlertWithShowMore />
            </section>
            <section data-testid="story-keyboard-nav">
                <AlertKeyboardNav />
            </section>
        </>
    );
}
