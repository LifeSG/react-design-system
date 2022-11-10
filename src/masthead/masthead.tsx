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

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    return (
        <Wrapper>
            <sgds-masthead></sgds-masthead>
        </Wrapper>
    );
};

// =============================================================================
// CONSTANTS
// =============================================================================
const SCRIPT_ID = "lifesg-ds-masthead-script";
const SCRIPT_SRC =
    "https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";
