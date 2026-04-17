import { CircleIcon } from "@lifesg/react-icons/circle";
import { CircleDotIcon } from "@lifesg/react-icons/circle-dot";
import { CrossIcon } from "@lifesg/react-icons/cross";
import { SquareIcon } from "@lifesg/react-icons/square";
import { SquareTickFillIcon } from "@lifesg/react-icons/square-tick-fill";
import { TickIcon } from "@lifesg/react-icons/tick";
import clsx from "clsx";

import * as styles from "./toggle-icon.styles";

export type ToggleIconType = "checkbox" | "radio" | "tick" | "cross";

export interface ToggleIconProps {
    type: ToggleIconType;
    active?: boolean | undefined;
    disabled?: boolean | undefined;
    className?: string | undefined;
}

export const ToggleIcon = ({
    type,
    active = false,
    disabled,
    className,
}: ToggleIconProps) => {
    let component: JSX.Element | null;

    const getWrapperStateClass = (() => {
        if (active && disabled) {
            return styles.wrapperActiveDisabled;
        }

        if (disabled) {
            return styles.wrapperDisabled;
        }

        if (active) {
            return styles.wrapperActive;
        }

        return undefined;
    })();

    switch (type) {
        case "checkbox":
            component = active ? <SquareTickFillIcon /> : <SquareIcon />;
            break;
        case "radio":
            component = active ? <CircleDotIcon /> : <CircleIcon />;
            break;
        case "tick":
            component = <TickIcon />;
            break;
        case "cross":
            component = <CrossIcon />;
            break;
        default:
            component = null;
            break;
    }

    return (
        <div
            className={clsx(
                styles.wrapperBase,
                getWrapperStateClass,
                className
            )}
            aria-hidden
        >
            {component}
        </div>
    );
};
