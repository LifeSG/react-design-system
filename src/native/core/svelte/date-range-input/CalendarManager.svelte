<script lang="ts">
    import type { Dayjs } from "dayjs";
    import dayjs from "dayjs";
    import { calendarManager as cls } from "../../../styles";
    import Calendar from "./Calendar.svelte";
    import {
        generateDecadeOfYears,
        generateMonths,
        getStartEndDecade,
        isWithinRange,
        toDayjs,
    } from "../../design-core";
    import type { CalendarAction, View } from "./types";

    interface Props {
        initialCalendarDate?: string;
        startDate: string | undefined;
        endDate: string | undefined;
        currentFocus: "start" | "end" | "none";
        hoverDate: string;
        minDate?: string;
        maxDate?: string;
        disabledDates?: string[];
        withButton?: boolean;
        doneButtonDisabled?: boolean;
        ondismiss?: (action: CalendarAction) => void;
        onselectday?: (date: Dayjs) => void;
        onhoverday?: (dateStr: string) => void;
        oncalendardatechange?: (date: Dayjs) => void;
    }

    let {
        initialCalendarDate,
        startDate,
        endDate,
        currentFocus,
        hoverDate,
        minDate,
        maxDate,
        disabledDates,
        withButton = false,
        doneButtonDisabled = false,
        ondismiss,
        onselectday,
        onhoverday,
        oncalendardatechange,
    }: Props = $props();

    let calendarDate = $state(toDayjs());
    let viewCalendarDate = $state(toDayjs());
    let currentView: View = $state("default");

    $effect(() => {
        const d = toDayjs(initialCalendarDate);
        calendarDate = d;
        viewCalendarDate = d;
    });

    $effect(() => {
        oncalendardatechange?.(viewCalendarDate);
    });

    export function resetView() {
        const d = toDayjs(initialCalendarDate);
        calendarDate = d;
        viewCalendarDate = d;
        currentView = "default";
    }

    export function setCalendarDateTo(value?: string) {
        const d = toDayjs(value);
        calendarDate = d;
        viewCalendarDate = d;
    }

    let monthLabel = $derived(calendarDate.format("MMM"));
    let yearLabel = $derived.by(() => {
        if (currentView === "year-options") {
            const { beginDecade, endDecade } = getStartEndDecade(calendarDate);
            return `${beginDecade} to ${endDecade}`;
        }
        return calendarDate.format("YYYY");
    });

    let months = $derived(generateMonths(calendarDate));
    let years = $derived(generateDecadeOfYears(calendarDate));

    let isLeftDisabled = $derived.by(() => {
        if (!minDate) return false;
        const min = dayjs(minDate);
        if (currentView === "month-options") {
            return !isWithinRange(calendarDate.subtract(1, "year"), min, undefined, "year");
        }
        if (currentView === "year-options") {
            const { beginDecade } = getStartEndDecade(calendarDate);
            return !isWithinRange(
                calendarDate.year(beginDecade).subtract(1, "year"),
                min,
                undefined,
                "year"
            );
        }
        return !isWithinRange(calendarDate.subtract(1, "month"), min, undefined, "month");
    });

    let isRightDisabled = $derived.by(() => {
        if (!maxDate) return false;
        const max = dayjs(maxDate);
        if (currentView === "month-options") {
            return !isWithinRange(calendarDate.add(1, "year"), undefined, max, "year");
        }
        if (currentView === "year-options") {
            const { endDecade } = getStartEndDecade(calendarDate);
            return !isWithinRange(
                calendarDate.year(endDecade).add(1, "year"),
                undefined,
                max,
                "year"
            );
        }
        return !isWithinRange(calendarDate.add(1, "month"), undefined, max, "month");
    });

    function handleLeftArrow() {
        switch (currentView) {
            case "default":
                calendarDate = calendarDate.subtract(1, "month");
                viewCalendarDate = calendarDate;
                break;
            case "month-options":
                calendarDate = calendarDate.subtract(1, "year");
                break;
            case "year-options":
                calendarDate = calendarDate.subtract(10, "year");
                break;
        }
    }

    function handleRightArrow() {
        switch (currentView) {
            case "default":
                calendarDate = calendarDate.add(1, "month");
                viewCalendarDate = calendarDate;
                break;
            case "month-options":
                calendarDate = calendarDate.add(1, "year");
                break;
            case "year-options":
                calendarDate = calendarDate.add(10, "year");
                break;
        }
    }

    function handleMonthDropdownClick() {
        if (currentView !== "month-options") {
            currentView = "month-options";
        } else {
            currentView = "default";
            calendarDate = viewCalendarDate;
        }
    }

    function handleYearDropdownClick() {
        if (currentView !== "default") {
            currentView = "default";
            calendarDate = viewCalendarDate;
        } else {
            currentView = "year-options";
        }
    }

    function handleMonthSelect(month: Dayjs) {
        calendarDate = month;
        viewCalendarDate = month;
        currentView = "default";
    }

    function handleYearSelect(year: Dayjs) {
        calendarDate = year;
        viewCalendarDate = year;
        currentView = "default";
    }

    function handleCancel() {
        const initial = toDayjs(initialCalendarDate);
        calendarDate = initial;
        viewCalendarDate = initial;

        if (currentView === "default") {
            ondismiss?.("reset");
        } else {
            currentView = "default";
        }
    }

    function handleDone() {
        if (doneButtonDisabled && currentView === "default") return;

        calendarDate = viewCalendarDate;

        if (currentView === "default") {
            ondismiss?.("confirmed");
        } else {
            currentView = "default";
        }
    }

    function isMonthSelected(month: Dayjs): boolean {
        if (startDate && month.isSame(startDate, "month")) return true;
        if (endDate && month.isSame(endDate, "month")) return true;
        return month.isSame(viewCalendarDate, "month");
    }

    function isMonthDisabled(month: Dayjs): boolean {
        if (!minDate && !maxDate) return false;
        return !isWithinRange(
            month,
            minDate ? dayjs(minDate) : undefined,
            maxDate ? dayjs(maxDate) : undefined,
            "month"
        );
    }

    function isYearSelected(year: Dayjs): boolean {
        if (startDate && year.isSame(startDate, "year")) return true;
        if (endDate && year.isSame(endDate, "year")) return true;
        return year.isSame(viewCalendarDate, "year");
    }

    function isYearDisabled(year: Dayjs): boolean {
        if (!minDate && !maxDate) return false;
        return !isWithinRange(
            year,
            minDate ? dayjs(minDate) : undefined,
            maxDate ? dayjs(maxDate) : undefined,
            "year"
        );
    }

    function isYearOutsideDecade(year: Dayjs): boolean {
        const { beginDecade, endDecade } = getStartEndDecade(calendarDate);
        const y = year.year();
        return y < beginDecade || y > endDecade;
    }
</script>

<div class={cls.root} role="group" aria-label={viewCalendarDate.format("MMMM, YYYY")}>
    <!-- Header -->
    <div class={cls.header}>
        <div class={cls.headerLabels}>
            {#if currentView === "default"}
                <button
                    type="button"
                    class={cls.headerLabel}
                    aria-label="{calendarDate.format('MMMM')}, Select month"
                    onclick={handleMonthDropdownClick}
                >
                    {monthLabel}
                </button>
            {/if}
            <button
                type="button"
                class="{cls.headerLabel} {currentView !== 'default' ? cls.headerLabelActive : ''}"
                aria-label="{yearLabel}, Select year"
                onclick={handleYearDropdownClick}
            >
                {yearLabel}
            </button>
        </div>
        <div style="display: flex; gap: 4px;">
            <button
                type="button"
                class={cls.navBtn}
                disabled={isLeftDisabled}
                aria-label="Previous"
                onclick={handleLeftArrow}
            >
                &lsaquo;
            </button>
            <button
                type="button"
                class={cls.navBtn}
                disabled={isRightDisabled}
                aria-label="Next"
                onclick={handleRightArrow}
            >
                &rsaquo;
            </button>
        </div>
    </div>

    <!-- Views -->
    <div>
        <!-- Default: Day grid -->
        {#if currentView === "default"}
            <Calendar
                calendarDate={viewCalendarDate}
                {startDate}
                {endDate}
                {currentFocus}
                {hoverDate}
                {minDate}
                {maxDate}
                {disabledDates}
                onselect={onselectday}
                onhover={onhoverday}
            />
        {/if}

        <!-- Month picker -->
        {#if currentView === "month-options"}
            <div class={cls.monthGrid}>
                {#each months as month}
                    <button
                        type="button"
                        class="{cls.gridBtn} {isMonthSelected(month) ? cls.gridBtnSelected : ''}"
                        disabled={isMonthDisabled(month)}
                        onclick={() => handleMonthSelect(month)}
                    >
                        {month.format("MMM")}
                    </button>
                {/each}
            </div>
        {/if}

        <!-- Year picker -->
        {#if currentView === "year-options"}
            <div class={cls.yearGrid}>
                {#each years as year}
                    <button
                        type="button"
                        class="{cls.gridBtn} {isYearSelected(year) ? cls.gridBtnSelected : ''}"
                        disabled={isYearDisabled(year)}
                        onclick={() => handleYearSelect(year)}
                    >
                        {year.year()}
                    </button>
                {/each}
            </div>
        {/if}
    </div>

    <!-- Action buttons -->
    {#if withButton}
        <div class={cls.footer}>
            <button type="button" class={cls.footerBtn} onclick={handleCancel}>
                Cancel
            </button>
            <button
                type="button"
                class="{cls.footerBtn} {cls.footerBtnPrimary}"
                disabled={doneButtonDisabled && currentView === "default"}
                onclick={handleDone}
            >
                Done
            </button>
        </div>
    {/if}
</div>
