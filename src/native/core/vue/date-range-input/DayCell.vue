<script setup lang="ts">
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { computed } from "vue";
import { dayCell as cls } from "../../../styles";

export interface DayCellProps {
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
}

const props = defineProps<DayCellProps>();

const emit = defineEmits<{
    select: [date: Dayjs];
    hover: [dateStr: string];
}>();

const dateStr = computed(() => props.date.format("YYYY-MM-DD"));

const isOtherMonth = computed(
    () => props.calendarDate.month() !== props.date.month()
);

const isToday = computed(
    () => dayjs().isSame(props.date, "day") && !props.disabled
);

const isStart = computed(
    () => props.startDate && props.date.isSame(props.startDate, "day")
);

const isEnd = computed(
    () => props.endDate && props.date.isSame(props.endDate, "day")
);

const isInRange = computed(() => {
    if (!props.startDate || !props.endDate) return false;
    return props.date.isBetween(props.startDate, props.endDate, "day", "()");
});

const cellClasses = computed(() => {
    const classes: string[] = [cls.cell];

    if (isOtherMonth.value) classes.push(cls.otherMonth);
    if (props.disabled) classes.push(cls.disabled);
    if (isToday.value) classes.push(cls.today);
    if (isStart.value) classes.push(cls.selectedStart);
    if (isEnd.value) classes.push(cls.selectedEnd);
    if (isInRange.value) classes.push(cls.inRange);

    return classes;
});

function handleClick() {
    if (props.disabled || isOtherMonth.value) return;
    emit("select", props.date);
}

function handleMouseEnter() {
    if (props.disabled || isOtherMonth.value) return;
    emit("hover", dateStr.value);
}
</script>

<template>
    <div :class="cls.root">
        <button
            type="button"
            :class="cellClasses"
            :disabled="disabled || isOtherMonth"
            :aria-label="date.format('D MMMM YYYY')"
            :tabindex="isOtherMonth ? -1 : 0"
            @click="handleClick"
            @mouseenter="handleMouseEnter"
        >
            {{ isOtherMonth ? "" : date.date() }}
        </button>
    </div>
</template>
