"use client";
// Spike 01 / E4: the F10 pair with its two rules forced into the hostile source order
// (see make-adversarial.mjs). forced.css is imported after the component, so it comes
// last in the page's CSS.
// The theme stylesheet defines --fds-spacing-8 and the layer order statement; without
// it the child's `margin-top: var(--fds-spacing-8)` is invalid and computes to 0px
// whatever wins the cascade, which made a first run of this check pass everywhere.
import "@lifesg/react-design-system/theme/styles/lifesg.css";

import { Textarea } from "@lifesg/react-design-system/input-textarea";
import { ThemeProvider } from "@lifesg/react-design-system/theme";

import "./forced.css";

export default function Page() {
    return (
        <ThemeProvider>
            <Textarea
                data-testid="textarea-error-message"
                errorMessage="This field is required"
            />
        </ThemeProvider>
    );
}
