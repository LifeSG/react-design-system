import { useEffect } from "react";
import { Wrapper } from "./masthead.style";

export const Masthead = (): JSX.Element => {
    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (!doAssetsExist()) {
            addAssets();
        }
    }, []);

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

    return <Wrapper dangerouslySetInnerHTML={createContent()} />;
};

// =============================================================================
// CONSTANTS
// =============================================================================
const SCRIPT_ID = "lifesg-ds-masthead-script";
const SCRIPT_SRC =
    "https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";
