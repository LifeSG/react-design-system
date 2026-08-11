"use client";

import { DateInput } from "@lifesg/react-design-system/date-input";
import { useEffect, useState } from "react";

export default function Story() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(
            '[data-fds-theme="lifesg"] { --fds-font-body-size-baseline: 32px; --fds-font-body-size-md: 30px; --fds-font-body-size-sm: 28px; --fds-font-body-size-xs: 24px; }'
        );

        document.adoptedStyleSheets.push(sheet);

         
        setLoaded(true);
    }, []);

    return (
        <div className="story-background">
            {loaded && <DateInput data-testid="date-input" />}
        </div>
    );
}
