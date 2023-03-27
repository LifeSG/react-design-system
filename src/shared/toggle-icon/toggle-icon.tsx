import { CircleIcon } from "@lifesg/react-icons/circle";
import { CircleDotIcon } from "@lifesg/react-icons/circle-dot";
import { CrossIcon } from "@lifesg/react-icons/cross";
import { SquareIcon } from "@lifesg/react-icons/square";
import { SquareTickFillIcon } from "@lifesg/react-icons/square-tick-fill";
import { TickIcon } from "@lifesg/react-icons/tick";
import { Wrapper } from "./toggle-icon.styles";

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
    let component: JSX.Element;

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
        <Wrapper className={className} $active={active} disabled={disabled}>
            {component}
        </Wrapper>
    );
};
