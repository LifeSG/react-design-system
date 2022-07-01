import React from "react";
import { Icon, Label, TriggerArea } from "./form-label.style";
import {
    FormLabelAddonProps,
    FormLabelAddonTriggerProps,
    FormLabelProps,
} from "./types";
import infoIcon from "../../assets/img/icons/icon-global-info-tooltip.svg";
import { withPopover } from "../popover/popover-hoc";

// =============================================================================
// TRIGGER COMPONENT
// =============================================================================
export const FormLabelAddonTrigger = ({
    addonType = "popover",
    "data-testid": testId,
}: FormLabelAddonTriggerProps) => (
    <TriggerArea data-testid={testId}>
        <Icon src={infoIcon} alt={`${addonType}-icon`} />
    </TriggerArea>
);

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export const FormLabel = ({
    text,
    children,
    addon,
    ...otherProps
}: FormLabelProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const labelText = text || children; // For safeguard

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderAddon = () => {
        if (addon) {
            const AddonHOC = getAddonComponent(addon);
            return <AddonHOC addonType={addon.type} />;
        } else {
            return null;
        }
    };

    return (
        <Label {...otherProps}>
            {labelText}
            {renderAddon()}
        </Label>
    );
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const getAddonComponent = (addon: FormLabelAddonProps) => {
    switch (addon.type) {
        case "tooltip":
            return null;
        case "popover":
        default:
            return withPopover(FormLabelAddonTrigger, {
                content: addon.content,
                id: addon.id,
                "data-testid": addon["data-testid"],
            });
    }
};
