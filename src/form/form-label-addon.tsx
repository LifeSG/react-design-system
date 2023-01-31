import { ICircleFillIcon } from "@lifesg/react-icons/i-circle-fill";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ButtonProps } from "../button";
import { Popover } from "../popover";
import { MediaWidths } from "../spec/media-spec";
import { AddonWrapper, TriggerArea } from "./form-label-addon.style";
import { FormLabelAddonProps, FormLabelAddonType } from "./types";

// =============================================================================
// TRIGGER COMPONENT
// =============================================================================

interface Props extends ButtonProps {
    addonType?: FormLabelAddonType | undefined /* For informational purposes */;
    icon?: JSX.Element | undefined;
    "data-testid"?: string | undefined;
}

export const AddonTrigger = ({
    addonType = "popover",
    icon,
    "data-testid": testId,
    ...buttonProps
}: Props): JSX.Element => {
    const renderIcon = () => {
        if (icon) {
            return icon;
        } else {
            return <ICircleFillIcon id={`${addonType}-icon`} />;
        }
    };

    return (
        <TriggerArea data-testid={testId} {...buttonProps}>
            {renderIcon()}
        </TriggerArea>
    );
};

// =============================================================================
// POPOVER ADDON COMPONENT
// Note: We need to re-construct as using with the HOC causes some rendering
// issues
// =============================================================================
interface PopoverAddonProps {
    addon: FormLabelAddonProps;
}

export const PopoverAddon = ({ addon }: PopoverAddonProps): JSX.Element => {
    // -------------------------------------------------------------------------
    // CONST, STATE, REFS
    // -------------------------------------------------------------------------
    const [visible, _setVisible] = useState<boolean>(false);
    const nodeRef = useRef<HTMLDivElement>();
    const visibleRefValue = useRef<boolean>(false);
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
    });

    // -------------------------------------------------------------------------
    // REF FUNCTIONS
    // -------------------------------------------------------------------------
    const setVisible = (value: boolean) => {
        visibleRefValue.current = value;
        _setVisible(value);
    };

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------
    useEffect(() => {
        // NOTE: Do not add mouse down event if it's mobile
        if (isMobile) {
            return;
        }
        document.addEventListener("mousedown", handleMouseDownEvent);

        return () => {
            document.removeEventListener("mousedown", handleMouseDownEvent);
        };
    }, []);

    // -------------------------------------------------------------------------
    // EVENT HANDLERS
    // -------------------------------------------------------------------------
    const handleMobilePopoverClose = () => {
        if (visible) {
            setVisible(false);
        }
    };

    const handleMouseDownEvent = (event: MouseEvent) => {
        if (nodeRef && !(nodeRef.current as any).contains(event.target)) {
            // outside click
            if (visibleRefValue.current) {
                setVisible(false);
            }
        }
    };

    // -------------------------------------------------------------------------
    // RENDER FUNCTIONS
    // -------------------------------------------------------------------------
    return (
        <AddonWrapper ref={nodeRef} id="addon-popover-wrapper">
            <Popover
                visible={visible}
                id={addon.id}
                data-testid={addon["data-testid"]}
                onMobileClose={handleMobilePopoverClose}
            >
                {addon.content}
            </Popover>
            <AddonTrigger
                addonType={addon.type}
                icon={addon.icon}
                id={`popover-hoc-trigger${
                    addon["data-testid"] && `-${addon["data-testid"]}`
                }`}
                onClick={() => setVisible(!visible)}
                aria-label="popover-button"
                type="button"
            />
        </AddonWrapper>
    );
};
