"use client";
import {
    Colour,
    ThemeProvider,
    useApplyStyle,
    useInheritedThemeScope,
} from "@lifesg/react-design-system/theme";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { createPortal } from "react-dom";

const PortalledComponent = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const [mounted, setIsMounted] = useState(false);
    const { themeProps, themeStyle } = useInheritedThemeScope(true);
    const styledElementRef = useRef<HTMLDivElement>(null);

    const handler = useEffectEvent(() => setIsMounted(true));
    useEffect(() => {
        handler();
    }, []);

    useApplyStyle(styledElementRef, {
        background: Colour["bg-primary"],
        height: "50px",
        width: "50px",
        margin: "10px",
    });

    return mounted
        ? createPortal(
              <div {...props} {...themeProps} style={{ ...themeStyle }}>
                  <div ref={styledElementRef}></div>
              </div>,
              document.body
          )
        : null;
};

export default function Story() {
    const themeProviderRef = useRef<HTMLDivElement>(null);

    useApplyStyle(themeProviderRef, {
        "--fds-colour-bg-primary": "red",
    });

    return (
        <div>
            <PortalledComponent data-testid="portalled-component-main" />
            <ThemeProvider ref={themeProviderRef}>
                <PortalledComponent data-testid="portalled-component-nested" />
            </ThemeProvider>
        </div>
    );
}
