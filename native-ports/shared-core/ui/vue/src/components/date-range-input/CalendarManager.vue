<script setup lang="ts">
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { computed, ref, watch } from "vue";
import { calendarManager as cls } from "@lifesg/flagship-styles";
import Calendar from "./Calendar.vue";
import {
    generateDecadeOfYears,
    generateMonths,
    getStartEndDecade,
    isWithinRange,
    toDayjs,
} from "@lifesg/design-core";
import type { CalendarAction, View } from "./types";

const props = defineProps<{
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
}>();

const emit = defineEmits<{
    dismiss: [action: CalendarAction];
    "select-day": [date: Dayjs];
    "hover-day": [dateStr: string];
    "calendar-date-change": [date: Dayjs];
}>();

const calendarDate = ref<Dayjs>(toDayjs(props.initialCalendarDate));
const viewCalendarDate = ref<Dayjs>(toDayjs(props.initialCalendarDate));
const currentView = ref<View>("default");

// Sync when initialCalendarDate prop changes
watch(
    () => props.initialCalendarDate,
    (val) => {
        const d = toDayjs(val);
        calendarDate.value = d;
        viewCalendarDate.value = d;
    }
);

watch(viewCalendarDate, (val) => {
    emit("calendar-date-change", val);
});

// ---- expose for parent ----
function resetView() {
    const d = toDayjs(props.initialCalendarDate);
    calendarDate.value = d;
    viewCalendarDate.value = d;
    currentView.value = "default";
}

function setCalendarDateTo(value?: string) {
    const d = toDayjs(value);
    calendarDate.value = d;
    viewCalendarDate.value = d;
}

defineExpose({ resetView, setCalendarDateTo });

// ---- computed ----
const monthLabel = computed(() => calendarDate.value.format("MMM"));
const yearLabel = computed(() => {
    if (currentView.value === "year-options") {
        const { beginDecade, endDecade } = getStartEndDecade(
            calendarDate.value
        );
        return `${beginDecade} to ${endDecade}`;
    }
    return calendarDate.value.format("YYYY");
});

const months = computed(() => generateMonths(calendarDate.value));
const years = computed(() => generateDecadeOfYears(calendarDate.value));

const isLeftDisabled = computed(() => {
    if (!props.minDate) return false;
    const min = dayjs(props.minDate);
    if (currentView.value === "month-options") {
        return !isWithinRange(
            calendarDate.value.subtract(1, "year"),
            min,
            undefined,
            "year"
        );
    }
    if (currentView.value === "year-options") {
        const { beginDecade } = getStartEndDecade(calendarDate.value);
        return !isWithinRange(
            calendarDate.value.year(beginDecade).subtract(1, "year"),
            min,
            undefined,
            "year"
        );
    }
    return !isWithinRange(
        calendarDate.value.subtract(1, "month"),
        min,
        undefined,
        "month"
    );
});

const isRightDisabled = computed(() => {
    if (!props.maxDate) return false;
    const max = dayjs(props.maxDate);
    if (currentView.value === "month-options") {
        return !isWithinRange(
            calendarDate.value.add(1, "year"),
            undefined,
            max,
            "year"
        );
    }
    if (currentView.value === "year-options") {
        const { endDecade } = getStartEndDecade(calendarDate.value);
        return !isWithinRange(
            calendarDate.value.year(endDecade).add(1, "year"),
            undefined,
            max,
            "year"
        );
    }
    return !isWithinRange(
        calendarDate.value.add(1, "month"),
        undefined,
        max,
        "month"
    );
});

// ---- handlers ----
function handleLeftArrow() {
    switch (currentView.value) {
        case "default":
            calendarDate.value = calendarDate.value.subtract(1, "month");
            viewCalendarDate.value = calendarDate.value;
            break;
        case "month-options":
            calendarDate.value = calendarDate.value.subtract(1, "year");
            break;
        case "year-options":
            calendarDate.value = calendarDate.value.subtract(10, "year");
            break;
    }
}

function handleRightArrow() {
    switch (currentView.value) {
        case "default":
            calendarDate.value = calendarDate.value.add(1, "month");
            viewCalendarDate.value = calendarDate.value;
            break;
        case "month-options":
            calendarDate.value = calendarDate.value.add(1, "year");
            break;
        case "year-options":
            calendarDate.value = calendarDate.value.add(10, "year");
            break;
    }
}

function handleMonthDropdownClick() {
    if (currentView.value !== "month-options") {
        currentView.value = "month-options";
    } else {
        currentView.value = "default";
        calendarDate.value = viewCalendarDate.value;
    }
}

function handleYearDropdownClick() {
    if (currentView.value !== "default") {
        currentView.value = "default";
        calendarDate.value = viewCalendarDate.value;
    } else {
        currentView.value = "year-options";
    }
}

function handleMonthSelect(month: Dayjs) {
    calendarDate.value = month;
    viewCalendarDate.value = month;
    currentView.value = "default";
}

function handleYearSelect(year: Dayjs) {
    calendarDate.value = year;
    viewCalendarDate.value = year;
    currentView.value = "default";
}

function handleCancel() {
    const initial = toDayjs(props.initialCalendarDate);
    calendarDate.value = initial;
    viewCalendarDate.value = initial;

    if (currentView.value === "default") {
        emit("dismiss", "reset");
    } else {
        currentView.value = "default";
    }
}

function handleDone() {
    if (props.doneButtonDisabled && currentView.value === "default") return;

    calendarDate.value = viewCalendarDate.value;

    if (currentView.value === "default") {
        emit("dismiss", "confirmed");
    } else {
        currentView.value = "default";
    }
}

function handleDaySelect(date: Dayjs) {
    emit("select-day", date);
}

function handleDayHover(dateStr: string) {
    emit("hover-day", dateStr);
}

function isMonthSelected(month: Dayjs): boolean {
    if (props.startDate && month.isSame(props.startDate, "month")) return true;
    if (props.endDate && month.isSame(props.endDate, "month")) return true;
    return month.isSame(viewCalendarDate.value, "month");
}

function isMonthDisabled(month: Dayjs): boolean {
    if (!props.minDate && !props.maxDate) return false;
    return !isWithinRange(
        month,
        props.minDate ? dayjs(props.minDate) : undefined,
        props.maxDate ? dayjs(props.maxDate) : undefined,
        "month"
    );
}

function isYearSelected(year: Dayjs): boolean {
    if (props.startDate && year.isSame(props.startDate, "year")) return true;
    if (props.endDate && year.isSame(props.endDate, "year")) return true;
    return year.isSame(viewCalendarDate.value, "year");
}

function isYearDisabled(year: Dayjs): boolean {
    if (!props.minDate && !props.maxDate) return false;
    return !isWithinRange(
        year,
        props.minDate ? dayjs(props.minDate) : undefined,
        props.maxDate ? dayjs(props.maxDate) : undefined,
        "year"
    );
}

function isYearOutsideDecade(year: Dayjs): boolean {
    const { beginDecade, endDecade } = getStartEndDecade(calendarDate.value);
    const y = year.year();
    return y < beginDecade || y > endDecade;
}
</script>

<template>
    <div
        :class="cls.root"
        role="group"
        :aria-label="viewCalendarDate.format('MMMM, YYYY')"
    >
        <!-- Header -->
        <div :class="cls.header">
            <div :class="cls.headerLabels">
                <button
                    v-show="currentView === 'default'"
                    type="button"
                    :class="[
                        cls.headerLabel,
                        currentView === 'month-options' &&
                            cls.headerLabelActive,
                    ]"
                    :aria-label="`${calendarDate.format('MMMM')}, Select month`"
                    @click="handleMonthDropdownClick"
                >
                    {{ monthLabel }}
                </button>
                <button
                    type="button"
                    :class="[
                        cls.headerLabel,
                        currentView !== 'default' && cls.headerLabelActive,
                    ]"
                    :aria-label="`${yearLabel}, Select year`"
                    @click="handleYearDropdownClick"
                >
                    {{ yearLabel }}
                </button>
            </div>
            <div style="display: flex; gap: 4px">
                <button
                    type="button"
                    :class="cls.navBtn"
                    :disabled="isLeftDisabled"
                    aria-label="Previous"
                    @click="handleLeftArrow"
                >
                    &lsaquo;
                </button>
                <button
                    type="button"
                    :class="cls.navBtn"
                    :disabled="isRightDisabled"
                    aria-label="Next"
                    @click="handleRightArrow"
                >
                    &rsaquo;
                </button>
            </div>
        </div>

        <!-- Views -->
        <div>
            <!-- Default: Day grid -->
            <div v-show="currentView === 'default'">
                <Calendar
                    :calendar-date="viewCalendarDate"
                    :start-date="startDate"
                    :end-date="endDate"
                    :current-focus="currentFocus"
                    :hover-date="hoverDate"
                    :min-date="minDate"
                    :max-date="maxDate"
                    :disabled-dates="disabledDates"
                    @select="handleDaySelect"
                    @hover="handleDayHover"
                />
            </div>

            <!-- Month picker overlay -->
            <div v-if="currentView === 'month-options'" :class="cls.monthGrid">
                <button
                    v-for="month in months"
                    :key="month.month()"
                    type="button"
                    :class="[
                        cls.gridBtn,
                        isMonthSelected(month) && cls.gridBtnSelected,
                    ]"
                    :disabled="isMonthDisabled(month)"
                    @click="handleMonthSelect(month)"
                >
                    {{ month.format("MMM") }}
                </button>
            </div>

            <!-- Year picker overlay -->
            <div v-if="currentView === 'year-options'" :class="cls.yearGrid">
                <button
                    v-for="year in years"
                    :key="year.year()"
                    type="button"
                    :class="[
                        cls.gridBtn,
                        isYearSelected(year) && cls.gridBtnSelected,
                    ]"
                    :disabled="isYearDisabled(year)"
                    @click="handleYearSelect(year)"
                >
                    {{ year.year() }}
                </button>
            </div>
        </div>

        <!-- Action buttons -->
        <div v-if="withButton" :class="cls.footer">
            <button type="button" :class="cls.footerBtn" @click="handleCancel">
                Cancel
            </button>
            <button
                type="button"
                :class="[cls.footerBtn, cls.footerBtnPrimary]"
                :disabled="doneButtonDisabled && currentView === 'default'"
                @click="handleDone"
            >
                Done
            </button>
        </div>
    </div>
</template>
