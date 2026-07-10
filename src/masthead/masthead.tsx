import "@govtechsg/sgds-web-component/themes/day.css";
import "@govtechsg/sgds-web-component/themes/night.css";

import clsx from "clsx";
import { memo, useEffect } from "react";

import { useTheme } from "../theme";
import * as styles from "./masthead.styles";
import type { MastheadProps } from "./types";

const MastheadComponent = ({ stretch = false }: MastheadProps): JSX.Element => {
    const { mode } = useTheme();
    const isDarkMode = mode === "dark";

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (!doAssetsExist()) {
            addAssets();
        }
    }, []);

    useEffect(() => {
        // SGDS dark mode only takes effect when this class is set on the :root element
        if (isDarkMode) {
            document.documentElement.classList.add(SGDS_THEME_NIGHT_CLASSNAME);
        } else {
            document.documentElement.classList.remove(
                SGDS_THEME_NIGHT_CLASSNAME
            );
        }
    }, [isDarkMode]);

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const doAssetsExist = () => {
        return document.getElementById(SCRIPT_ID);
    };

    const addAssets = () => {
        if (!document.getElementById(SCRIPT_ID)) {
            const script = document.createElement("script");
            script.id = SCRIPT_ID;
            script.type = "module";
            script.src = SCRIPT_SRC;

            document.head.appendChild(script);
        }
    };

    const createContent = () => {
        /**
         * Note: Had to use this method because we had to create a
         * custom type to handle Web Components (refer to this guide
         * https://blog.devgenius.io/how-to-use-web-components-in-react-54c951399bfd)
         * But we are having troubles exporting the custom type definition
         * via rollup
         */
        return { __html: "<sgds-masthead></sgds-masthead>" };
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    return (
        <div
            className={clsx(styles.wrapper, stretch && styles.wrapperStretch)}
            dangerouslySetInnerHTML={createContent()}
        />
    );
};

/**
 * Displays the Singapore Government Design System (SGDS) masthead banner.
 *
 * Use `Masthead` at the top of government digital services to meet the SGDS
 * masthead requirement.
 */
export const Masthead = memo(MastheadComponent);

// =============================================================================
// CONSTANTS
// =============================================================================
const SCRIPT_ID = "lifesg-ds-masthead-script";
const SCRIPT_SRC =
    "https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component@3/components/Masthead/index.umd.js";
const SGDS_THEME_NIGHT_CLASSNAME = "sgds-night-theme";
