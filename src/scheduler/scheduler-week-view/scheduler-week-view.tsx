import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { SchedulerWeekViewProps } from "./types";
import { TimeHelper } from "../../util/time-helper";
import {
    TimeIndicatorColumn,
    ServiceColumnsContainer,
    SlotCell,
} from "../scheduler-day-view/timeslot-day-view.styles";
import { Border, Colour } from "../../theme";
import { TimeIndicator } from "../time-indicator";
import { HEADER_HEIGHT } from "../const";

export const ServiceHeader = styled.div`
    padding: 16px;
    padding: 24px 16px;
    height: ${HEADER_HEIGHT}px;
    border-bottom: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-left: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    &:first-child {
        border-left: none;
    }
    position: sticky;
    top: 0;
    background: ${Colour["bg"]};
    z-index: 1;
`;
export const BlankCell = styled.div`
    height: ${HEADER_HEIGHT}px;
    position: sticky;
    top: 0;
    z-index: 1;
    background: ${Colour["bg"]};
`;

const DayHeaderTitle = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: ${Colour["text-primary"]};
`;

const DayHeaderSubtitle = styled.div`
    font-size: 14px;
    color: ${Colour["text-subtler"]};
    margin-top: 4px;
`;

export const ServiceColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const SchedulerWeekView = ({
    date,
    rowData: _rowData,
    loading,
    minTime,
    maxTime,
    onSlotClick: _onSlotClick,
}: SchedulerWeekViewProps) => {
    const weekDays = React.useMemo(() => {
        const startOfWeek = dayjs(date).startOf("week");
        return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));
    }, [date]);

    const timeSlots = TimeHelper.generateTimings(30, "24hr", minTime, maxTime);

    return (
        <div style={{ display: "flex", width: "100%" }}>
            <TimeIndicatorColumn>
                <BlankCell />
                <TimeIndicator
                    minTime={minTime}
                    maxTime={maxTime}
                    format="24hr"
                />
            </TimeIndicatorColumn>

            <ServiceColumnsContainer serviceCount={weekDays.length}>
                {weekDays.map((day) => (
                    <ServiceColumn key={day.format("YYYY-MM-DD")}>
                        <ServiceHeader>
                            <DayHeaderTitle>{day.format("D")}</DayHeaderTitle>
                            <DayHeaderSubtitle>
                                {day.format("ddd")}
                            </DayHeaderSubtitle>
                        </ServiceHeader>
                        {timeSlots.map((time) => (
                            <SlotCell key={time}>
                                {/* Render your slot content here if needed */}
                            </SlotCell>
                        ))}
                    </ServiceColumn>
                ))}
            </ServiceColumnsContainer>
        </div>
    );
};
