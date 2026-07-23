import { ICircleFillIcon } from "@lifesg/react-icons/i-circle-fill";
import type { RefObject } from "react";

import { PopoverInline } from "../../popover";
import * as styles from "./form-label-addon.styles";
import type { FormLabelAddonProps } from "./types";

// =============================================================================
// POPOVER ADDON COMPONENT
// Note: We need to re-construct as using with the HOC causes some rendering
// issues
// =============================================================================
interface PopoverAddonProps {
    addon: FormLabelAddonProps;
    rootNode?: RefObject<HTMLElement>;
}

export const PopoverAddon = ({
    addon,
    rootNode,
}: PopoverAddonProps): JSX.Element => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const { content, type, icon, id, zIndex, "data-testid": testId } = addon;

    // =========================================================================
    // RENDER FUNCTION
    // =========================================================================
    return (
        <div className={styles.addonWrapper}>
            <PopoverInline
                trigger="click"
                id={id}
                data-testid={testId}
                popoverContent={content}
                rootNode={rootNode}
                zIndex={zIndex}
                icon={icon ?? <ICircleFillIcon data-testid={`${type}-icon`} />}
                ariaLabel="More info"
            />
        </div>
    );
};
