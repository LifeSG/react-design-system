import { SquareTickFillIcon } from "@lifesg/react-icons/square-tick-fill";
import { SquareIcon } from "@lifesg/react-icons/square";
import { Wrapper } from "./toggle-icon.styles";
import { CircleDotIcon } from "@lifesg/react-icons/circle-dot";
import { CircleIcon } from "@lifesg/react-icons/circle";
import { TickIcon } from "@lifesg/react-icons/tick";
import { CrossIcon } from "@lifesg/react-icons/cross";

interface Props {
    type: "checkbox" | "radio" | "tick" | "cross";
    active?: boolean | undefined;
    className?: string | undefined;
}

export const ToggleIcon = ({ type, active = false, className }: Props) => {
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
        <Wrapper className={className} $active={active}>
            {component}
        </Wrapper>
    );
};
