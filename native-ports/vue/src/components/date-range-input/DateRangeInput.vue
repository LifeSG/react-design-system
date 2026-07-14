<script setup lang="ts">
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import {
    computed,
    nextTick,
    onBeforeUnmount,
    onMounted,
    reactive,
    ref,
    watch,
} from "vue";
import { dateRangeInput as cls } from "@lifesg/flagship-styles";
import CalendarManager from "./CalendarManager.vue";
import { sanitizeInput, toDayjs } from "./date-helpers";
import StandaloneDateInput from "./StandaloneDateInput.vue";
import type {
    CalendarAction,
    DateRangeState,
    DateRangeValue,
    FocusType,
} from "./types";

const props = withDefaults(
    defineProps<{
        startDate?: string;
        endDate?: string;
        minDate?: string;
        maxDate?: string;
        disabledDates?: string[];
        disabled?: boolean;
        error?: boolean;
        label?: string;
    }>(),
    {
        startDate: "",
        endDate: "",
        disabled: false,
        error: false,
    }
);

const emit = defineEmits<{
    change: [value: DateRangeValue];
}>();

// ---- state ----
const state = reactive<DateRangeState>({
    initialStart: props.startDate || "",
    initialEnd: props.endDate || "",
    selectedStart: props.startDate || "",
    selectedEnd: props.endDate || "",
    currentFocus: "none",
    calendarOpen: false,
    focused: false,
});

const hoverDate = ref("");

// ---- refs ----
const wrapperRef = ref<HTMLDivElement | null>(null);
const startInputRef = ref<InstanceType<typeof StandaloneDateInput> | null>(
    null
);
const endInputRef = ref<InstanceType<typeof StandaloneDateInput> | null>(null);
const calendarManagerRef = ref<InstanceType<typeof CalendarManager> | null>(
    null
);

// ---- sync props to state ----
watch(
    () => [props.startDate, props.endDate],
    ([s, e]) => {
        state.initialStart = s || "";
        state.initialEnd = e || "";
        state.selectedStart = s || "";
        state.selectedEnd = e || "";
    }
);

// ---- computed ----
const calendarInitialDate = computed(() => {
    if (state.selectedStart) return state.selectedStart;
    if (state.selectedEnd) return state.selectedEnd;
    return undefined;
});

const doneButtonDisabled = computed(() => {
    // Disabled if we don't have both start and end
    if (!state.selectedStart || !state.selectedEnd) return true;
    // Disabled if start > end
    if (dayjs(state.selectedStart).isAfter(state.selectedEnd, "day"))
        return true;
    return false;
});

const isStartFocused = computed(() => state.currentFocus === "start");
const isEndFocused = computed(() => state.currentFocus === "end");

const containerClasses = computed(() => {
    const classes: string[] = [cls.container];
    if (state.focused) classes.push(cls.containerFocused);
    if (props.disabled) classes.push(cls.containerDisabled);
    if (props.error) classes.push(cls.containerError);
    return classes;
});

// ---- outside click ----
function handleOutsideClick(event: MouseEvent) {
    if (!wrapperRef.value) return;
    if (wrapperRef.value.contains(event.target as Node)) return;

    if (state.calendarOpen) {
        handleCancel();
    }
}

onMounted(() => {
    document.addEventListener("mousedown", handleOutsideClick);
});

onBeforeUnmount(() => {
    document.removeEventListener("mousedown", handleOutsideClick);
});

// ---- input handlers ----
function handleStartFocus() {
    if (props.disabled) return;
    state.currentFocus = "start";
    state.focused = true;
    state.calendarOpen = true;
}

function handleEndFocus() {
    if (props.disabled) return;
    state.currentFocus = "end";
    state.focused = true;
    state.calendarOpen = true;
}

function handleStartChange(value: string) {
    state.selectedStart = value;

    // If valid, navigate calendar to that month
    if (value && sanitizeInput(value)) {
        calendarManagerRef.value?.setCalendarDateTo(value);
    }
}

function handleEndChange(value: string) {
    state.selectedEnd = value;

    if (value && sanitizeInput(value)) {
        calendarManagerRef.value?.setCalendarDateTo(value);
    }
}

function handleStartBlur(valid: boolean) {
    // If calendar is not open, the whole component lost focus
    if (!state.calendarOpen) {
        state.focused = false;
        state.currentFocus = "none";
    }
}

function handleEndBlur(valid: boolean) {
    if (!state.calendarOpen) {
        state.focused = false;
        state.currentFocus = "none";
    }
}

// ---- calendar handlers ----
function handleDaySelect(date: Dayjs) {
    const dateStr = date.format("YYYY-MM-DD");

    if (state.currentFocus === "start") {
        state.selectedStart = dateStr;

        // If the new start is after the current end, clear end
        if (state.selectedEnd && date.isAfter(state.selectedEnd, "day")) {
            state.selectedEnd = "";
        }

        // Auto-move focus to end
        state.currentFocus = "end";
        nextTick(() => {
            endInputRef.value?.focusDay();
        });
    } else if (state.currentFocus === "end") {
        // If selected date is before start, it becomes the new start instead
        if (state.selectedStart && date.isBefore(state.selectedStart, "day")) {
            state.selectedStart = dateStr;
            // Keep focus on end so user can pick the end date
        } else {
            state.selectedEnd = dateStr;
        }
    } else {
        // No focus yet - treat as start
        state.selectedStart = dateStr;
        state.currentFocus = "end";
        nextTick(() => {
            endInputRef.value?.focusDay();
        });
    }

    hoverDate.value = "";
}

function handleDayHover(dateStr: string) {
    hoverDate.value = dateStr;
}

function handleDismiss(action: CalendarAction) {
    if (action === "confirmed") {
        handleDone();
    } else {
        handleCancel();
    }
}

function handleDone() {
    // Confirm selection
    state.initialStart = state.selectedStart;
    state.initialEnd = state.selectedEnd;
    state.calendarOpen = false;
    state.focused = false;
    state.currentFocus = "none";
    hoverDate.value = "";

    emit("change", {
        start: state.selectedStart,
        end: state.selectedEnd,
    });
}

function handleCancel() {
    // Revert to initial values
    state.selectedStart = state.initialStart;
    state.selectedEnd = state.initialEnd;
    state.calendarOpen = false;
    state.focused = false;
    state.currentFocus = "none";
    hoverDate.value = "";

    // Reset inputs
    startInputRef.value?.resetInput();
    endInputRef.value?.resetInput();
}

function handleCalendarDateChange(date: Dayjs) {
    // Could be used for external tracking; no-op for now
}

function handleInputWrapperClick() {
    if (props.disabled) return;
    if (!state.calendarOpen) {
        state.calendarOpen = true;
        state.focused = true;
        if (state.currentFocus === "none") {
            state.currentFocus = "start";
            nextTick(() => {
                startInputRef.value?.focusDay();
            });
        }
    }
}
</script>

<template>
    <div
        ref="wrapperRef"
        :class="cls.root"
        style="position: relative; max-width: 400px"
    >
        <!-- Label -->
        <label
            v-if="label"
            style="
                display: block;
                font-size: 14px;
                font-weight: 600;
                color: var(--fds-colour-text);
                margin-bottom: 8px;
            "
        >
            {{ label }}
        </label>

        <!-- Input row -->
        <div :class="containerClasses" @click="handleInputWrapperClick">
            <StandaloneDateInput
                ref="startInputRef"
                side="start"
                :value="state.selectedStart"
                :focused="isStartFocused"
                :disabled="disabled"
                label="Start date"
                @change="handleStartChange"
                @focus="handleStartFocus"
                @blur="handleStartBlur"
            />
            <span :class="cls.separator">to</span>
            <StandaloneDateInput
                ref="endInputRef"
                side="end"
                :value="state.selectedEnd"
                :focused="isEndFocused"
                :disabled="disabled"
                label="End date"
                @change="handleEndChange"
                @focus="handleEndFocus"
                @blur="handleEndBlur"
            />
        </div>

        <!-- Calendar dropdown -->
        <div v-if="state.calendarOpen && !disabled" :class="cls.dropdown">
            <CalendarManager
                ref="calendarManagerRef"
                :initial-calendar-date="calendarInitialDate"
                :start-date="state.selectedStart"
                :end-date="state.selectedEnd"
                :current-focus="state.currentFocus"
                :hover-date="hoverDate"
                :min-date="minDate"
                :max-date="maxDate"
                :disabled-dates="disabledDates"
                :with-button="true"
                :done-button-disabled="doneButtonDisabled"
                @dismiss="handleDismiss"
                @select-day="handleDaySelect"
                @hover-day="handleDayHover"
                @calendar-date-change="handleCalendarDateChange"
            />
        </div>
    </div>
</template>
