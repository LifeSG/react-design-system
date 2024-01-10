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
    labelType,
    disabled,
    interactive,
    date,
    onSelect,
    onHover,
    onMouseout,
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

    const handleMouseout = () => {
        onMouseout && onMouseout(date);
    };

    // =========================================================================
    // RENDER FUNCTION
    // =========================================================================
    return (
        <Cell>
            <LeftHalfShadow $shadow={bgLeft && shadow} />
            <LeftHalf $type={bgLeft} $shadow={bgLeft && shadow}></LeftHalf>
            <LeftCircle
                $type={circleLeft}
                $shadow={circleLeft && circleShadow}
            />
            <RightHalfShadow $shadow={bgRight && shadow} />
            <RightHalf $type={bgRight} $shadow={bgRight && shadow}></RightHalf>
            <RightCircle
                $type={circleRight}
                $shadow={circleRight && circleShadow}
            />
            <Label
                weight="regular"
                $type={labelType}
                $disabled={disabled}
                $interactive={interactive}
                onClick={handleClick}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseout}
            >
                {date.date()}
            </Label>
        </Cell>
    );
};
