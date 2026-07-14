<script lang="ts">
    import type { Dayjs } from "dayjs";
    import dayjs from "dayjs";
    import { dayCell as cls } from "@lifesg/flagship-styles";

    interface Props {
        date: Dayjs;
        calendarDate: Dayjs;
        startDate: string | undefined;
        endDate: string | undefined;
        currentFocus: "start" | "end" | "none";
        hoverDate: string;
        minDate?: string;
        maxDate?: string;
        disabledDates?: string[];
        disabled: boolean;
        onselect?: (date: Dayjs) => void;
        onhover?: (dateStr: string) => void;
    }

    let {
        date,
        calendarDate,
        startDate,
        endDate,
        currentFocus,
        hoverDate,
        minDate,
        maxDate,
        disabledDates,
        disabled,
        onselect,
        onhover,
    }: Props = $props();

    let dateStr = $derived(date.format("YYYY-MM-DD"));
    let isOtherMonth = $derived(calendarDate.month() !== date.month());
    let isToday = $derived(dayjs().isSame(date, "day") && !disabled);
    let isStart = $derived(!!startDate && date.isSame(startDate, "day"));
    let isEnd = $derived(!!endDate && date.isSame(endDate, "day"));
    let isInRange = $derived(
        !!startDate && !!endDate && date.isBetween(startDate, endDate, "day", "()")
    );

    let cellClasses = $derived.by(() => {
        const classes: string[] = [cls.cell];
        if (isOtherMonth) classes.push(cls.otherMonth);
        if (disabled) classes.push(cls.disabled);
        if (isToday) classes.push(cls.today);
        if (isStart) classes.push(cls.selectedStart);
        if (isEnd) classes.push(cls.selectedEnd);
        if (isInRange) classes.push(cls.inRange);
        return classes.join(" ");
    });

    function handleClick() {
        if (disabled || isOtherMonth) return;
        onselect?.(date);
    }

    function handleMouseEnter() {
        if (disabled || isOtherMonth) return;
        onhover?.(dateStr);
    }
</script>

<div class={cls.root}>
    <button
        type="button"
        class={cellClasses}
        disabled={disabled || isOtherMonth}
        aria-label={date.format("D MMMM YYYY")}
        tabindex={isOtherMonth ? -1 : 0}
        onclick={handleClick}
        onmouseenter={handleMouseEnter}
    >
        {isOtherMonth ? "" : date.date()}
    </button>
</div>
