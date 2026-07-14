<script lang="ts">
    import type { Dayjs } from "dayjs";
    import { calendar as cls } from "@lifesg/flagship-styles";
    import { generateDays } from "./date-helpers";
    import DayCell from "./DayCell.svelte";

    interface Props {
        calendarDate: Dayjs;
        startDate: string | undefined;
        endDate: string | undefined;
        currentFocus: "start" | "end" | "none";
        hoverDate: string;
        minDate?: string;
        maxDate?: string;
        disabledDates?: string[];
        onselect?: (date: Dayjs) => void;
        onhover?: (dateStr: string) => void;
    }

    let {
        calendarDate,
        startDate,
        endDate,
        currentFocus,
        hoverDate,
        minDate,
        maxDate,
        disabledDates,
        onselect,
        onhover,
    }: Props = $props();

    const weekDayLabels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    let weeks = $derived(generateDays(calendarDate));

    function isDayDisabled(day: Dayjs): boolean {
        if (minDate && day.isBefore(minDate, "day")) return true;
        if (maxDate && day.isAfter(maxDate, "day")) return true;
        if (disabledDates?.includes(day.format("YYYY-MM-DD"))) return true;
        return false;
    }
</script>

<div class={cls.root} role="grid" aria-label="Calendar">
    <div class={cls.grid}>
        <div class={cls.weekdayHeader}>
            {#each weekDayLabels as label}
                <span aria-label={label}>{label}</span>
            {/each}
        </div>
        {#each weeks as week, wIdx}
            <div class={cls.weekRow}>
                {#each week as day, dIdx}
                    <DayCell
                        date={day}
                        {calendarDate}
                        {startDate}
                        {endDate}
                        {currentFocus}
                        {hoverDate}
                        {minDate}
                        {maxDate}
                        {disabledDates}
                        disabled={isDayDisabled(day)}
                        {onselect}
                        {onhover}
                    />
                {/each}
            </div>
        {/each}
    </div>
</div>
