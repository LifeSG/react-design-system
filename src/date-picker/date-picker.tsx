import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { DateInput } from "src/date-input";
import { Icon } from "../icon";
import dayjs, { Dayjs } from "dayjs";
import { useMediaQuery } from "react-responsive";
import {
    ButtonContainer,
    CalendarContainer,
    CalendarDaySection,
    CalendarHeaderWrapper,
    CancelButton,
    Circle,
    Container,
    DayNumber,
    DayView,
    DoneButton,
    DropdownMonth,
    DropdownYear,
    GrowDayCell,
    HeaderDropdown,
    HeaderIcon,
    InputPlaceholder,
    InteractiveCircle,
    LeftCell,
    MonthView,
    RightCell,
    Views,
    WeekDayCell,
    WeekDaysContainer,
    YearView,
} from "./date-picker.style";
import {
    DatePickerProps,
    DatePickerType,
    FocusToTypes,
    GenerateDayStatusValue,
    InputContainerType,
    TransitionValue,
    ValidateDate,
    VariantDay,
    View,
} from "./types";
import isBetween from "dayjs/plugin/isBetween";
import { MonthPicker } from "./date-month-picker";
import { YearPicker } from "./date-year-picker";
import { Text } from "src/text";
import { MediaWidths } from "../spec/media-spec";

dayjs.extend(isBetween);

type PlaceholderValue = Record<DatePickerType, boolean>;

export const DatePicker = ({
    disabledDate = [],
    hasButton,
    value,
    rangeValue,
    onChange,
    type,
    disabled,
    error,
    readOnly,
}: DatePickerProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [isOpen, _setIsOpen] = useState<boolean>(false);
    const [calendarDate, setCalendarDate] = useState<Dayjs>(dayjs());
    const [transitionValue, setTransitionValue] = useState<TransitionValue>({
        start: "",
        range: "",
        startStatus: "pre-confirmed",
        rangeStatus: "pre-confirmed",
        tmpStateValue: "",
    });
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
    });

    const [showView, setShowView] = useState<View>("Day");
    const [selectedStartDate, setSelectedStartDate] = useState<string>(""); // YYYY-MM-DD
    const [selectedRangeDate, setSelectedRangeDate] = useState<string>(""); // YYYY-MM-DD
    const [buttonDisable, setButtonDisable] = useState<boolean>(true);
    const [focusTo, setFocusTo] = useState<FocusToTypes>({
        container: "none",
        countToEvenClose: 0,
    });
    const [hoverValue, setHoverValue] = useState<string>("");
    const [showPlaceholder, setShowPlaceholder] = useState<PlaceholderValue>({
        start: true,
        range: true,
    });
    const containerRef = useRef<HTMLDivElement | null>(null);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (value === undefined || value === "") return;
        setSelectedStartDate(value);
        handleInitialData(value, rangeValue);
    }, [value]);

    useEffect(() => {
        // Handle Done button status
        const { start, range } = transitionValue;

        switch (showView) {
            case "Day":
                setButtonDisable(true);

                if (type === "start" && start.length) {
                    setButtonDisable(false);
                }

                if (start.length && range.length) {
                    setButtonDisable(false);
                }

                if (selectedStartDate.length && selectedRangeDate.length) {
                    setButtonDisable(false);
                }

                if (hasButton && type === "start" && selectedStartDate.length) {
                    setButtonDisable(false);
                }

                break;
            case "Month":
                setButtonDisable(false);
                break;
            case "Year":
                setButtonDisable(false);
                break;
        }
    }, [showView, transitionValue]);

    useEffect(() => {
        if (rangeValue === undefined || rangeValue === "") return;

        setSelectedRangeDate(rangeValue);
    }, [rangeValue]);

    useEffect(() => {
        // Auto close calendar once complete both
        if (!isOpen || hasButton || focusTo.countToEvenClose === 0) return;

        if (type === "start") return;

        if (focusTo.countToEvenClose % 2 === 0) {
            setIsOpen(false).then(() => {
                setFocusTo({ container: "none", countToEvenClose: 0 });

                if (
                    transitionValue.start.length &&
                    transitionValue.range.length
                ) {
                    setTransitionValue({
                        ...transitionValue,
                        startStatus: "confirmed",
                        rangeStatus: "confirmed",
                    });

                    setSelectedStartDate(transitionValue.start);
                    setSelectedRangeDate(transitionValue.range);
                }
            });
        }
    }, [focusTo]);

    useEffect(() => {
        // Listen outside click
        document.addEventListener("mousedown", outsideDetecter);

        return () => {
            document.removeEventListener("mousedown", outsideDetecter);
        };
    }, [focusTo]);

    useEffect(() => {
        if (!isOpen) return;
        const { start, range } = transitionValue;
        // show selected calender date
        switch (focusTo.container) {
            case "start":
                if (start.length) setCalendarDate(dayjs(start));
                break;
            case "range":
                if (range.length) setCalendarDate(dayjs(range));
                break;
        }
    }, [isOpen]);

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const outsideDetecter = async (event: MouseEvent) => {
        if (focusTo.container === "none") return;

        const target = event.target as Element;
        if (!target) return;

        if (containerRef.current && !containerRef.current.contains(target)) {
            // outside click
            await handleCancelButton();
        }
    };

    const handleInitialData = (startValue: string, rangeValue: string) => {
        setShowPlaceholder({ start: false, range: false });

        switch (type) {
            case "start":
                setTransitionValue({
                    start: startValue,
                    range: "",
                    startStatus: "confirmed",
                    rangeStatus: "confirmed",
                });
                break;
            case "range":
                setTransitionValue({
                    start: startValue,
                    range: rangeValue,
                    startStatus: "confirmed",
                    rangeStatus: "confirmed",
                });
                setSelectedStartDate(startValue);
                setSelectedRangeDate(rangeValue);
                break;
        }
    };

    const setIsOpen = async (boolean: boolean): Promise<void> => {
        if (!boolean) await sleep(150);
        _setIsOpen(boolean);
    };

    const sleep = (ms: number): Promise<void> => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const controlTransitionValue = (): TransitionValue => {
        const {
            start: _start,
            range: _range,
            startStatus,
            rangeStatus,
        } = transitionValue;

        let start = selectedStartDate;
        let range = selectedRangeDate;

        switch (startStatus) {
            case "pre-confirmed":
                start = _start;
                break;
            case "confirmed":
                start = selectedStartDate;
                break;
        }

        switch (rangeStatus) {
            case "pre-confirmed":
                range = _range;
                break;
            case "confirmed":
                range = selectedRangeDate;
                break;
        }

        return {
            start,
            range,
            startStatus,
            rangeStatus,
        };
    };

    const revertedDateFormat = (date: string) => {
        // DD-MM-YYYY to YYYY-MM-DD
        return date.split("-").reverse().join("-");
    };

    const validateDate = (): ValidateDate => {
        const { start, range } = transitionValue;

        const isStartBeforeRange = dayjs(start).isBefore(range);
        const isRangeAfterStart = dayjs(range).isAfter(start);

        return {
            isStartBeforeRange,
            isRangeAfterStart,
            start,
            range,
        };
    };

    const generateDayStatus = (day: Date): GenerateDayStatusValue => {
        const _dateStartWithDay = new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        })
            .format(day)
            .replaceAll("/", "-");

        // YYYY-MM-DD
        const dateStartWithYear = revertedDateFormat(_dateStartWithDay);

        let isDisabled = false;
        if (disabledDate && disabledDate.length) {
            isDisabled = disabledDate.includes(dateStartWithYear);
        }

        let disabledBefore = false;
        let disabledAfter = false;

        const { start, range, startStatus, rangeStatus } =
            controlTransitionValue();

        const variant: VariantDay =
            calendarDate?.clone().toDate().getMonth() !== day.getMonth()
                ? "nextMonth"
                : dayjs(start).isSame(day, "day")
                ? "startSelected"
                : dayjs(range).isSame(day, "day")
                ? "rangeSelected"
                : dayjs().isSame(day, "day")
                ? "today"
                : "default";

        if (type === "range") {
            disabledBefore = dayjs(day).isBefore(start, "day");
            disabledAfter = dayjs(day).isAfter(range, "day");

            if (range.length || start.length) {
                if (focusTo.container === "range") {
                    disabledAfter = false;
                }

                if (focusTo.container === "start") {
                    disabledBefore = false;
                }
            }

            if (startStatus === "confirmed" && rangeStatus === "confirmed") {
                // remove disabled if alredy been confirmed before
                disabledBefore = false;
                disabledAfter = false;
            }
        }

        return {
            dateStartWithYear,
            isDisabled,
            variant,
            disabledBefore,
            disabledAfter,
        };
    };

    const generateDayClass = (date: string, variant: VariantDay): string => {
        const classes: string[] = [];
        const { start, range, startStatus, rangeStatus } =
            controlTransitionValue();

        const rangeClasses = handleSelectRange(date);
        const startClasses = handleSelectStart(date);
        const hoverClasses = handleHovering(date);

        /* handle selected between date */
        if (
            start.length &&
            range.length &&
            dayjs(date).isBetween(start, range, "day", "[]")
        ) {
            classes.push("selected-between pre-selected-between");

            if (dayjs().isSame(date, "day")) {
                // remove default today bg the date between start and range
                classes.push("start-today-range");
            }

            if (disabledDate.includes(date)) {
                classes.push("start-disabled-range");
            }
        }

        if (variant === "nextMonth") {
            classes.push("next-month");
        }

        if (variant === "nextMonth" && range === date) {
            classes.push("next-month-selected");
        }
        if (variant === "nextMonth" && start === date) {
            classes.push("next-month-selected");
        }

        if (hoverClasses.length) classes.push(hoverClasses);
        if (startClasses.length) classes.push(startClasses);
        if (rangeClasses.length) classes.push(rangeClasses);

        if (hoverValue === date && focusTo.container === "start")
            classes.push("hover-start");
        if (hoverValue === date && focusTo.container === "range")
            classes.push("hover-end");

        if (start === date && startStatus === "pre-confirmed")
            classes.push("pre-selected-start");
        if (range === date && rangeStatus === "pre-confirmed")
            classes.push("pre-selected-end");

        if (start === date && startStatus === "confirmed")
            classes.push("selected-start");
        if (range === date && rangeStatus === "confirmed") {
            classes.push("selected-end");
        }

        if (
            focusTo.container === "start" &&
            dayjs(hoverValue).isAfter(range, "day") &&
            dayjs(date).isBetween(start, range, "day", "[]")
        ) {
            // remove selected-between if start over range
            classes.push("start-hover-after-range");
        }
        if (
            focusTo.container === "range" &&
            dayjs(hoverValue).isBefore(start, "day") &&
            dayjs(date).isBetween(start, range, "day", "[]")
        ) {
            // remove selected-between if range isBefore start
            classes.push("range-hover-before-start");
        }

        return classes.join(" ");
    };

    const handleHovering = (date: string) => {
        const classes: string[] = [];
        const { start, range } = controlTransitionValue();

        if (
            hoverValue.length &&
            start.length &&
            range.length &&
            dayjs(date).isBetween(start, range, "day", "[]")
        ) {
            if (
                focusTo.container === "start" &&
                dayjs(date).isBetween(hoverValue, range, "day", "[]") &&
                dayjs(hoverValue).isAfter(start, "day")
            ) {
                classes.push("hover-reselected-start");
            }

            if (
                focusTo.container === "range" &&
                dayjs(date).isBetween(hoverValue, start, "day", "[]") &&
                dayjs(hoverValue).isBefore(range, "day")
            ) {
                classes.push("hover-reselected-range");
            }

            if (
                dayjs(hoverValue).isBefore(start, "day") ||
                dayjs(hoverValue).isAfter(range, "day")
            ) {
                classes.push("hover-outside-selected-between");
            }
        }

        return classes.join(" ");
    };

    const handleSelectStart = (date: string): string => {
        const classes: string[] = [];
        const { start, range } = controlTransitionValue();

        /* handle selecting the start */
        if (
            focusTo.container === "start" &&
            dayjs(date).isBetween(range, hoverValue, "day", "[]") &&
            dayjs(hoverValue).isBefore(range, "day") &&
            !start.length
        ) {
            classes.push("hover-to-start");
        }

        if (
            focusTo.container === "start" &&
            start.length &&
            range.length &&
            dayjs(hoverValue).isBefore(start, "day") &&
            dayjs(date).isBetween(hoverValue, range, "day", "[]")
        ) {
            classes.push("hover-reselecting-start");
        }

        /* handle re-selecting the start (pre-selected) */
        if (
            focusTo.container === "start" &&
            !start.length &&
            !range.length &&
            dayjs(hoverValue).isBefore(start, "day") &&
            dayjs(date).isBetween(hoverValue, range, "day", "[]")
        ) {
            classes.push("hover-reselecting-start");
        }

        return classes.join(" ");
    };

    const handleSelectRange = (date: string): string => {
        const classes: string[] = [];
        const { start, range } = controlTransitionValue();

        /* handle selecting the range */
        if (
            focusTo.container === "range" &&
            dayjs(date).isBetween(start, hoverValue, "day", "[]") &&
            dayjs(hoverValue).isAfter(start, "day") &&
            !range.length
        ) {
            classes.push("hover-to-range");
        }

        if (
            focusTo.container === "range" &&
            dayjs(hoverValue).isAfter(range, "day") &&
            dayjs(date).isBetween(hoverValue, start, "day", "[]")
        ) {
            classes.push("hover-reselecting-range");
        }

        return classes.join(" ");
    };

    const performOnChangeHandler = (changeValue: string) => {
        if (onChange) {
            onChange(changeValue);
        }
    };

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleHoverValue = (event: React.MouseEvent<HTMLDivElement>) => {
        const value = event.currentTarget.dataset.day || "";

        setHoverValue(value);
    };

    const handleRemoveHover = () => {
        setHoverValue("");
    };

    const handleOnChange = (value: string): void => {
        const dateFromYearArr = value.split("-").reverse();
        const [year, month, day] = dateFromYearArr;
        let manualInputValidation = true;

        /* remove pre-comfirmed select higlighted in calendar if remove the date value */
        if (focusTo.container === "start" && !year && !month && !day)
            setTransitionValue({ ...transitionValue, start: "" });
        if (focusTo.container === "range" && !year && !month && !day)
            setTransitionValue({ ...transitionValue, range: "" });

        // Update the specific field value into calendar once those fields is updated
        if (day.length === 2 && month.length === 2 && year.length === 4) {
            const dateFromYear = dateFromYearArr.join("-");

            switch (focusTo.container) {
                case "start":
                    setTransitionValue({
                        ...transitionValue,
                        start: dateFromYear,
                    });

                    if (!hasButton && transitionValue.range) {
                        manualInputValidation = dayjs(dateFromYear).isBefore(
                            transitionValue.range
                        );
                    }
                    break;
                case "range":
                    setTransitionValue({
                        ...transitionValue,
                        range: dateFromYear,
                    });

                    if (!hasButton && transitionValue.start) {
                        manualInputValidation = dayjs(
                            transitionValue.range
                        ).isBefore(dateFromYear);
                    }
                    break;
                default:
                    break;
            }

            setCalendarDate(dayjs(dateFromYear));

            performOnChangeHandler(dateFromYear);

            if (!manualInputValidation) {
                switch (focusTo.container) {
                    case "start":
                        setTransitionValue({
                            ...transitionValue,
                            range: "",
                            start: dateFromYear,
                        });
                        break;
                    case "range":
                        setTransitionValue({
                            ...transitionValue,
                            start: "",
                            range: dateFromYear,
                        });
                        break;
                }

                // return
                return;
            }

            // handle behavior of manual updating the input value in not button calendar
            if (!hasButton) {
                setShowPlaceholder({
                    start: false,
                    range: false,
                });

                _handleNoButtonOnChange();
            }
        }
    };

    const _handleNoButtonOnChange = async () => {
        setFocusTo((prev) => ({
            container: prev.container === "start" ? "range" : "start",
            countToEvenClose: ++prev.countToEvenClose,
        }));

        const rootContainer = containerRef.current as Element;
        if (focusTo.container === "start") {
            const rangeContainer = rootContainer.firstElementChild
                .lastElementChild as HTMLDivElement;
            const dayInput = rangeContainer.firstElementChild
                .firstElementChild as HTMLInputElement;

            dayInput.select();
        }
        if (focusTo.container === "range") {
            const startContainer = rootContainer.firstElementChild
                .firstElementChild as HTMLDivElement;

            const dayInput =
                startContainer.firstElementChild as HTMLInputElement;

            dayInput.select();
        }
    };

    const handleDayClick = async (value: string) => {
        const isNextMonthDay =
            calendarDate?.clone().toDate().getMonth() !== dayjs(value).month();

        if (isNextMonthDay) {
            setCalendarDate(dayjs(value));
        }

        const isStartInvalid =
            transitionValue.start &&
            dayjs(value).isBefore(transitionValue.start)
                ? true
                : false;
        const isRangeInvalid =
            transitionValue.range && dayjs(value).isAfter(transitionValue.range)
                ? true
                : false;

        switch (focusTo.container) {
            case "start":
                setTransitionValue({
                    ...transitionValue,
                    start: value,
                    startStatus: "pre-confirmed",
                    ...(isRangeInvalid && {
                        range: "",
                        rangeStatus: "pre-confirmed",
                    }),
                });

                if (type === "range") {
                    if (focusTo.countToEvenClose >= 1 && hasButton) {
                        break;
                    }

                    setFocusTo((prev) => ({
                        container: "range",
                        countToEvenClose: ++prev.countToEvenClose,
                    }));
                }

                break;
            case "range":
                setTransitionValue({
                    ...transitionValue,
                    range: value,
                    rangeStatus: "pre-confirmed",
                    ...(isStartInvalid && {
                        start: "",
                        startStatus: "pre-confirmed",
                    }),
                });

                if (type === "range") {
                    if (focusTo.countToEvenClose >= 1 && hasButton) {
                        break;
                    }

                    setFocusTo((prev) => ({
                        container: "start",
                        countToEvenClose: ++prev.countToEvenClose,
                    }));
                }
                break;
            default:
                break;
        }

        setShowPlaceholder({ start: false, range: false });
        if (type === "start" && !hasButton) await setIsOpen(false);
    };

    const _handleMonthYearClick = (
        type: InputContainerType,
        date: string[],
        value: string,
        view: View
    ) => {
        const selectedMonth = value.split("-")[1];
        const selectedYear = value.split("-")[0];
        const [yyyy, mm, dd] = date;

        const fullDate =
            view === "Month"
                ? `${selectedYear}-${selectedMonth}-${dd}`
                : view === "Year"
                ? `${selectedYear}-${mm}-${dd}`
                : dayjs().format("YYYY-MM-DD");

        const nameStatus = `${type}Status` as keyof Pick<
            TransitionValue,
            "startStatus" | "rangeStatus"
        >;

        if (
            date.length === 3 &&
            (transitionValue.startStatus === "confirmed" ||
                transitionValue.rangeStatus === "confirmed")
        ) {
            /* store confirmed value into tmpState */
            if (!transitionValue.tmpStateValue.length) {
                setTransitionValue({
                    ...transitionValue,
                    [type]: fullDate,
                    [nameStatus]: "pre-confirmed",
                    tmpStateValue: transitionValue[type],
                    tmpStateType: type,
                });
                return;
            }

            /* update the selected value (confirmed value been stored) */
            setTransitionValue({
                ...transitionValue,
                [type]: fullDate,
                [nameStatus]: "pre-confirmed",
            });
            return;
        }

        setTransitionValue({
            ...transitionValue,
            [type]: value,
            [nameStatus]: "pre-confirmed",
        });
    };

    const handleMonthYearClick = (
        event: React.MouseEvent<HTMLDivElement>,
        view: View
    ) => {
        const value = event.currentTarget.dataset.value || "";

        if (!value.length) return;

        const { start, range } = transitionValue;
        const hasStartDate = start.split("-");
        const hasRangeDate = range.split("-");

        const selectedExistDate =
            focusTo.container === "start"
                ? hasStartDate
                : focusTo.container === "range"
                ? hasRangeDate
                : [dayjs().format("YYYY-MM-DD")];

        _handleMonthYearClick(
            focusTo.container,
            selectedExistDate,
            value,
            view
        );

        /* generate new calendar date */
        setCalendarDate(dayjs(value));
    };

    const handleShowPlaceholder = async (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        if (disabled || readOnly) {
            return;
        }

        const attributeValue = e.currentTarget.getAttribute("data-id");
        const key = attributeValue.split("-")[0] as DatePickerType;
        if (!key) return;

        setShowPlaceholder({ ...showPlaceholder, [key]: false });
        setFocusTo({ container: key, countToEvenClose: 0 });
        await setIsOpen(true);
    };

    const handleDoneButton = async (): Promise<void> => {
        const { isStartBeforeRange, isRangeAfterStart, start, range } =
            validateDate();

        switch (showView) {
            case "Day":
                await setIsOpen(false);

                if (start.length && range.length) {
                    setSelectedStartDate(start);
                    setSelectedRangeDate(range);
                }

                setTransitionValue({
                    ...transitionValue,
                    startStatus: "confirmed",
                    rangeStatus: "confirmed",
                });

                if (type === "start") {
                    setSelectedStartDate(start);

                    setTransitionValue({
                        ...transitionValue,
                        start,
                        startStatus: "confirmed",
                    });
                }

                setFocusTo({ container: "none", countToEvenClose: 0 });
                break;
            case "Month":
            case "Year":
                if (!isStartBeforeRange && focusTo.container === "start") {
                    setTransitionValue({
                        ...transitionValue,
                        range: "",
                        rangeStatus: "pre-confirmed",
                        tmpStateValue: "",
                        tmpStateType: "none",
                    });
                }

                if (!isRangeAfterStart && focusTo.container === "range") {
                    setTransitionValue({
                        ...transitionValue,
                        start: "",
                        startStatus: "pre-confirmed",
                        tmpStateValue: "",
                        tmpStateType: "none",
                    });
                }

                if (isStartBeforeRange && isRangeAfterStart) {
                    setTransitionValue({
                        ...transitionValue,
                        tmpStateValue: "",
                        tmpStateType: "none",
                    });
                }

                setFocusTo((prev) => ({
                    container: prev.container === "start" ? "range" : "start",
                    countToEvenClose: ++prev.countToEvenClose,
                }));

                setShowPlaceholder({ start: false, range: false });
                break;
        }

        setShowView("Day");
    };

    const handleCancelButton = async (): Promise<void> => {
        let goToDate = "";

        const hasLength = [
            selectedStartDate.length,
            selectedRangeDate.length,
        ].every(Boolean);

        switch (showView) {
            case "Day":
                await setIsOpen(false);
                setButtonDisable(true);
                setCalendarDate(dayjs());

                if (hasButton && type === "start") {
                    /* handle status in single calender with button */
                    setTransitionValue({
                        ...transitionValue,
                        start: selectedStartDate.length
                            ? selectedStartDate
                            : "",
                        startStatus: "pre-confirmed",
                    });
                }

                if (selectedStartDate.length && selectedRangeDate.length) {
                    setTransitionValue({
                        ...transitionValue,
                        start: selectedStartDate,
                        range: selectedRangeDate,
                        startStatus: "confirmed",
                        rangeStatus: "confirmed",
                    });
                }

                if (
                    (!selectedStartDate.length || !selectedRangeDate.length) &&
                    type === "range"
                ) {
                    setTransitionValue({
                        ...transitionValue,
                        start: "",
                        range: "",
                        startStatus: "pre-confirmed",
                        rangeStatus: "pre-confirmed",
                    });
                }

                if (!hasLength)
                    setShowPlaceholder({ start: true, range: true });

                setFocusTo({ container: "none", countToEvenClose: 0 });
                break;
            case "Month":
            case "Year":
                setTransitionValue((prev) => {
                    goToDate = prev.tmpStateValue;
                    return {
                        ...transitionValue,
                        [prev.tmpStateType]: prev.tmpStateValue,
                        tmpStateValue: "",
                    };
                });

                if (goToDate) {
                    setCalendarDate(dayjs(goToDate));
                }
                break;
        }

        if (selectedStartDate.length && selectedRangeDate.length) {
            // handle status value from pre-confirmed to confirmed if exist confirmed value
            setTransitionValue({
                ...transitionValue,
                startStatus: "confirmed",
                rangeStatus: "confirmed",
            });
        }

        setShowView("Day");
    };

    const handleView = (view: View) => {
        switch (view) {
            case "Day":
                setShowView("Day");
                break;
            case "Month":
                setShowView("Month");
                break;
            case "Year":
                if (showView === "Month") {
                    setShowView("Day");
                    return;
                }

                if (showView === "Year") {
                    setShowView("Day");
                    return;
                }

                setShowView("Year");
                break;
            default:
                setShowView("Day");
                break;
        }
    };

    const handleLeftArrowClick = () => {
        switch (showView) {
            case "Day":
                setCalendarDate((date) => date.subtract(1, "month"));
                break;
            case "Month":
                setCalendarDate((date) => date.subtract(1, "year"));
                break;
            case "Year":
                setCalendarDate((date) => date.subtract(10, "year"));
                break;
        }
    };

    const handleRightArrowClick = () => {
        switch (showView) {
            case "Day":
                setCalendarDate((date) => date.add(1, "month"));
                break;
            case "Month":
                setCalendarDate((date) => date.add(1, "year"));
                break;
            case "Year":
                setCalendarDate((date) => date.add(10, "year"));
                break;
        }
    };

    // =============================================================================
    // Calendar Generate
    // =============================================================================
    const firstDayOfTheMonth = useMemo(
        () => calendarDate.clone().startOf("month"),
        [calendarDate]
    );

    const firstDayOfFirstWeekOfMonth = useMemo(
        () => dayjs(firstDayOfTheMonth).startOf("week"),
        [firstDayOfTheMonth]
    );

    const generateFirstDayOfEachWeek = useCallback((day: Dayjs): Dayjs[] => {
        const dates: Dayjs[] = [day];
        for (let i = 1; i < 6; i++) {
            const date = day.clone().add(i, "week");
            dates.push(date);
        }
        return dates;
    }, []);

    const generateWeek = useCallback((day: Dayjs): Date[] => {
        const dates: Date[] = [];
        for (let i = 0; i < 7; i++) {
            const date = day.clone().add(i, "day").toDate();
            dates.push(date);
        }
        return dates;
    }, []);

    const generateWeeksOfTheMonth = useMemo((): Date[][] => {
        const firstDayOfEachWeek = generateFirstDayOfEachWeek(
            firstDayOfFirstWeekOfMonth
        );

        return firstDayOfEachWeek.map((date) => generateWeek(date));
    }, [generateFirstDayOfEachWeek, firstDayOfFirstWeekOfMonth, generateWeek]);

    // =============================================================================
    // Render Function
    // =============================================================================

    const YearHeaderComponent = () => {
        if (showView === "Year") {
            const beginDecaded =
                Math.floor(+calendarDate.format("YYYY") / 10) * 10;

            const endDecaded = dayjs(`${beginDecaded}-01-01`)
                .add(9, "year")
                .format("YYYY");

            return (
                <Text.BodySmall>
                    {beginDecaded} to {endDecaded}
                </Text.BodySmall>
            );
        }

        return (
            <Text.BodySmall>
                {dayjs(calendarDate).format("YYYY")}
            </Text.BodySmall>
        );
    };

    const WeekDate = (props: { day: Date }) => {
        const day = props.day;

        if (!isMobile) {
            return <>{dayjs(day).format("ddd")}</>;
        }

        return <>{dayjs(day).format("dd")}</>;
    };

    return (
        <Container
            ref={containerRef}
            disabled={disabled}
            $error={error}
            $readOnly={readOnly}
            type={type}
        >
            <DateInput
                value={selectedStartDate}
                rangeValue={selectedRangeDate}
                onChange={handleOnChange}
                setIsOpenCalendar={setIsOpen}
                setFocusTo={setFocusTo}
                type={type}
                setTransitionValue={setTransitionValue}
                transitionValues={transitionValue}
                hoverValue={hoverValue}
                focusTo={focusTo}
                readOnly={readOnly}
            />
            <CalendarContainer isOpen={isOpen}>
                <CalendarHeaderWrapper>
                    <HeaderDropdown>
                        <DropdownMonth
                            view={showView}
                            onClick={() => handleView("Month")}
                        >
                            <Text.BodySmall>
                                {dayjs(calendarDate).format("MMM")}
                            </Text.BodySmall>
                            <Icon type="chevron-down" />
                        </DropdownMonth>
                        <DropdownYear
                            view={showView}
                            onClick={() => handleView("Year")}
                        >
                            {YearHeaderComponent()}
                            <Icon type="chevron-down" />
                        </DropdownYear>
                    </HeaderDropdown>
                    <HeaderIcon>
                        <Icon
                            type="chevron-left"
                            onClick={handleLeftArrowClick}
                        />
                        <Icon
                            type="chevron-right"
                            onClick={handleRightArrowClick}
                        />
                    </HeaderIcon>
                </CalendarHeaderWrapper>
                <Views show={showView}>
                    <DayView>
                        <WeekDaysContainer>
                            {generateWeeksOfTheMonth[0].map((day, index) => (
                                <WeekDayCell key={`week-day-${index}`}>
                                    <WeekDate day={day} />
                                </WeekDayCell>
                            ))}
                        </WeekDaysContainer>

                        {generateWeeksOfTheMonth.map((week, weekIndex) => (
                            <CalendarDaySection
                                key={`week-${weekIndex}`}
                                onMouseLeave={handleRemoveHover}
                            >
                                {week.map((day, dayIndex) => {
                                    const {
                                        dateStartWithYear,
                                        isDisabled,
                                        variant,
                                        disabledBefore,
                                        disabledAfter,
                                    } = generateDayStatus(day);

                                    const classNames = generateDayClass(
                                        dateStartWithYear,
                                        variant
                                    );

                                    return (
                                        <GrowDayCell
                                            key={`day-${dayIndex}`}
                                            className={classNames}
                                        >
                                            <LeftCell data-cell="left">
                                                <Circle
                                                    data-circle="left"
                                                    position="left"
                                                    variant={variant}
                                                />
                                            </LeftCell>
                                            <RightCell data-cell="right">
                                                <Circle
                                                    data-circle="right"
                                                    position="right"
                                                    variant={variant}
                                                />
                                            </RightCell>
                                            <DayNumber
                                                data-type="number"
                                                variant={variant}
                                                disabled={isDisabled}
                                                disabledBefore={disabledBefore}
                                                disabledAfter={disabledAfter}
                                            >
                                                {day.getDate()}
                                            </DayNumber>
                                            <InteractiveCircle
                                                onMouseEnter={handleHoverValue}
                                                data-day={dateStartWithYear}
                                                disabled={isDisabled}
                                                disabledBefore={disabledBefore}
                                                disabledAfter={disabledAfter}
                                                onClick={() =>
                                                    handleDayClick(
                                                        dateStartWithYear
                                                    )
                                                }
                                            />
                                        </GrowDayCell>
                                    );
                                })}
                            </CalendarDaySection>
                        ))}
                    </DayView>
                    <MonthView>
                        <MonthPicker
                            calendarDate={calendarDate}
                            focusTo={focusTo}
                            showView={showView}
                            controlTransitionValue={controlTransitionValue}
                            onClick={(e) => handleMonthYearClick(e, "Month")}
                        />
                    </MonthView>
                    <YearView>
                        <YearPicker
                            calendarDate={calendarDate}
                            focusTo={focusTo}
                            showView={showView}
                            controlTransitionValue={controlTransitionValue}
                            onClick={(e) => handleMonthYearClick(e, "Year")}
                        />
                    </YearView>
                </Views>
                {hasButton && (
                    <ButtonContainer>
                        <CancelButton
                            styleType="light"
                            onClick={handleCancelButton}
                        >
                            Cancel
                        </CancelButton>
                        <DoneButton
                            disabled={buttonDisable}
                            onClick={handleDoneButton}
                        >
                            Done
                        </DoneButton>
                    </ButtonContainer>
                )}
            </CalendarContainer>
            <InputPlaceholder
                placeholder="From"
                data-id="start-placeholder"
                type={type}
                left="10px"
                show={showPlaceholder.start.toString()}
                onClick={handleShowPlaceholder}
                disabled={disabled}
                focusTo={focusTo}
            />
            <InputPlaceholder
                placeholder="To"
                data-id="range-placeholder"
                type={type}
                right="18px"
                show={showPlaceholder.range.toString()}
                onClick={handleShowPlaceholder}
                disabled={disabled}
                focusTo={focusTo}
            />
        </Container>
    );
};
