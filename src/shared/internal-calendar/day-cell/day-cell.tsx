import {
    Cell,
    Label,
    LeftCircle,
    LeftHalf,
    LeftHalfShadow,
    RightCircle,
    RightHalf,
    RightHalfShadow,
} from "./day-cell.style";
import { DayCellProps } from "./types";

export const DayCell = ({
    bgLeft,
    bgRight,
    circleLeft,
    circleRight,
    shadow,
    circleShadow,
    label,
    disabled,
    interactive,
    date,
    onSelect,
    onHover,
}: DayCellProps) => {
    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleClick = () => {
        onSelect(date);
    };

    const handleHover = () => {
        onHover(date);
    };

    // =========================================================================
    // RENDER FUNCTION
    // =========================================================================
    return (
        <Cell>
            <LeftHalfShadow $shadow={bgLeft && shadow} />
            <LeftHalf $type={bgLeft} $shadow={bgLeft && shadow}></LeftHalf>
            <LeftCircle $type={circleLeft} $shadow={circleLeft && shadow} />
            <RightHalfShadow $shadow={bgRight && shadow} />
            <RightHalf $type={bgRight} $shadow={bgRight && shadow}></RightHalf>
            <RightCircle $type={circleRight} $shadow={circleRight && shadow} />
            <Label
                weight="regular"
                $type={label}
                $disabled={disabled}
                $interactive={interactive}
                onClick={handleClick}
                onMouseEnter={handleHover}
            >
                {date.date()}
            </Label>
        </Cell>
    );
};
