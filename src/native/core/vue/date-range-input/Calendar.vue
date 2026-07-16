<script setup lang="ts">
import type { Dayjs } from "dayjs";
import { computed } from "vue";
import { calendar as cls } from "../../../styles";
import { generateDays } from "../../design-core";
import DayCell from "./DayCell.vue";

const props = defineProps<{
    calendarDate: Dayjs;
    startDate: string | undefined;
    endDate: string | undefined;
    currentFocus: "start" | "end" | "none";
    hoverDate: string;
    minDate?: string;
    maxDate?: string;
    disabledDates?: string[];
}>();

const emit = defineEmits<{
    select: [date: Dayjs];
    hover: [dateStr: string];
}>();

const weekDayLabels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const weeks = computed(() => generateDays(props.calendarDate));

function isDayDisabled(day: Dayjs): boolean {
    if (props.minDate && day.isBefore(props.minDate, "day")) return true;
    if (props.maxDate && day.isAfter(props.maxDate, "day")) return true;
    if (props.disabledDates?.includes(day.format("YYYY-MM-DD"))) return true;
    return false;
}

function handleSelect(date: Dayjs) {
    emit("select", date);
}

function handleHover(dateStr: string) {
    emit("hover", dateStr);
}
</script>

<template>
    <div :class="cls.root" role="grid" aria-label="Calendar">
        <div :class="cls.grid">
            <div :class="cls.weekdayHeader">
                <span
                    v-for="label in weekDayLabels"
                    :key="label"
                    :aria-label="label"
                >
                    {{ label }}
                </span>
            </div>
            <div v-for="(week, wIdx) in weeks" :key="wIdx" :class="cls.weekRow">
                <DayCell
                    v-for="(day, dIdx) in week"
                    :key="dIdx"
                    :date="day"
                    :calendar-date="calendarDate"
                    :start-date="startDate"
                    :end-date="endDate"
                    :current-focus="currentFocus"
                    :hover-date="hoverDate"
                    :min-date="minDate"
                    :max-date="maxDate"
                    :disabled-dates="disabledDates"
                    :disabled="isDayDisabled(day)"
                    @select="handleSelect"
                    @hover="handleHover"
                />
            </div>
        </div>
    </div>
</template>
