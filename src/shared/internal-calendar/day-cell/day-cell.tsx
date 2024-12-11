import dayjs from "dayjs";
import {
    Cell,
    Indicator,
    Label,
    LeftCircle,
    LeftHalf,
    RightCircle,
    RightHalf,
} from "./day-cell.style";
import { DayCellProps } from "./types";

export const DayCell = ({
    bgLeft,
    bgRight,
    circleLeft,
    circleRight,
    labelType,
    disabled,
    interactive,
    currentDateIndicator,
    date,
    onSelect,
    onHover,
    onHoverEnd,
}: DayCellProps) => {
    // =========================================================================
    // CONST
    // =========================================================================
    const today = dayjs().isSame(date, "day");

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
        onHoverEnd && onHoverEnd(date);
    };

    // =========================================================================
    // RENDER FUNCTION
    // =========================================================================
    return (
        <Cell>
            <LeftHalf $type={bgLeft}></LeftHalf>
            <LeftCircle $type={circleLeft} />
            <RightHalf $type={bgRight}></RightHalf>
            <RightCircle $type={circleRight} />
            <Label
                $type={labelType}
                $disabled={disabled}
                $interactive={interactive}
                onClick={handleClick}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseout}
            >
                {date.date()}
                {currentDateIndicator && today && (
                    <Indicator $disabled={disabled} />
                )}
            </Label>
        </Cell>
    );
};
