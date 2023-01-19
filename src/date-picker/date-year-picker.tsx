import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { VariantYear, YearMonthTransition, YearPickerProps } from "./types";
import { YearCell, YearPickerContainer } from "./date-year-picker-style";

export const YearPicker = ({
    calendarDate,
    focusTo,
    onClick,
    showView,
    controlTransitionValue,
}: YearPickerProps) => {
    const [yearDate, setYearDate] = useState<string[]>(Array(12).fill(""));
    const [yearTransition, setYearTransition] = useState<YearMonthTransition>({
        start: "",
        range: "",
    });

    useEffect(() => {
        if (showView === "Year") {
            const value = controlTransitionValue();

            setYearTransition(value);
            generateDecadeOfYear();
        }
    }, [showView, calendarDate]);

    const generateYearStatus = (date: string) => {
        if (!Object.keys(yearTransition).length) return;
        const { start, range }: any = yearTransition;

        const grayYearIndex = [0, 11];
        const isDecadedYear = grayYearIndex.includes(yearDate.indexOf(date));
        const year = date.split("-")[0];

        let variant: VariantYear = "default";
        let disabledBefore = false;
        let disabledAfter = false;

        variant = isDecadedYear
            ? "nextDecaded"
            : dayjs().isSame(date, "year")
            ? "currentYear"
            : "default";

        switch (focusTo.container) {
            case "start":
                variant = dayjs(start).isSame(date, "year")
                    ? "selectedYear"
                    : variant;

                disabledAfter =
                    start.length && range.length
                        ? false
                        : dayjs(date).isAfter(range, "month");
                break;
            case "range":
                variant = dayjs(range).isSame(date, "month")
                    ? "selectedYear"
                    : variant;

                disabledBefore =
                    start.length && range.length
                        ? false
                        : dayjs(date).isBefore(start, "month");
                break;
            case "none":
                break;
        }

        return {
            disabledAfter,
            disabledBefore,
            year,
            value: date,
            variant: variant,
        };
    };
    const generateDecadeOfYear = () => {
        const [yyyy, mm, dd] = calendarDate.format("YYYY-MM-DD").split("-");

        const decaded = Math.floor(+yyyy / 10) * 10;
        const years: string[] = [];

        for (let i = 0; i <= 10; i++) {
            let year = "";

            if (i === 0) {
                year = dayjs(`${decaded}-${mm}-${dd}`)
                    .subtract(1, "year")
                    .format("YYYY-MM-DD");

                years.push(year, `${decaded}-${mm}-${dd}`);
            }

            if (i !== 0) {
                year = dayjs(`${decaded}-${mm}-${dd}`)
                    .add(i, "year")
                    .format("YYYY-MM-DD");

                years.push(year);
            }
        }

        setYearDate(years);
    };

    if (!yearDate.length) return null;

    return (
        <YearPickerContainer>
            {yearDate.map((date, yearIndex) => {
                const { variant, year, value, disabledBefore, disabledAfter } =
                    generateYearStatus(date);

                return (
                    <YearCell
                        key={`${date}-${yearIndex}`}
                        data-value={value}
                        onClick={onClick}
                        disabledBefore={disabledBefore}
                        disabledAfter={disabledAfter}
                        variant={variant}
                    >
                        {year}
                    </YearCell>
                );
            })}
        </YearPickerContainer>
    );
};
