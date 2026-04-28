import "@govtechsg/sgds-web-component/themes/day.css";
import "@govtechsg/sgds-web-component/themes/night.css";

import clsx from "clsx";
import { memo, useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";

import * as styles from "./masthead.styles";
import type { MastheadProps } from "./types";

const MastheadComponent = ({ stretch = false }: MastheadProps): JSX.Element => {
    const theme = useContext(ThemeContext);
    const isDarkMode = theme?.colourMode === "dark";

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        void loadMastheadElement();
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
    const loadMastheadElement = async () => {
        if (customElements.get(SGDS_MASTHEAD_TAGNAME)) {
            return;
        }

        await import(SGDS_MASTHEAD_MODULE);
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

export const Masthead = memo(MastheadComponent);

// =============================================================================
// CONSTANTS
// =============================================================================
const SGDS_MASTHEAD_TAGNAME = "sgds-masthead";
const SGDS_THEME_NIGHT_CLASSNAME = "sgds-night-theme";
const SGDS_MASTHEAD_MODULE =
    "@govtechsg/sgds-web-component/components/Masthead/index.js";
