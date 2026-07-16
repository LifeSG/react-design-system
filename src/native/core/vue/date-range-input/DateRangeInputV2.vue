<script setup lang="ts">
/**
 * DateRangeInputV2 — Vue 3 port consuming @lifesg/design-core store.
 *
 * Full parity with the React DateRangeInput:
 *   - 3 variants: range, week, fixed-range
 *   - dirty tracking (isStartDirty / isEndDirty)
 *   - unselectable validation (disabled dates, min/max)
 *   - hover preview in inputs
 *   - blur / dismiss / cancel distinction
 *   - withButton toggle
 *   - focus management
 */
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import {
    computed,
    nextTick,
    onBeforeUnmount,
    onMounted,
    ref,
    shallowRef,
    watch,
} from "vue";
import { dateRangeInput as cls } from "../../../styles";
import { DateRangeInputStore } from "../../design-core";
import type {
    DateRangeVariant,
    FocusType,
    InputRefActions,
    CalendarRefActions,
} from "../../design-core";
import CalendarManager from "./CalendarManager.vue";
import StandaloneDateInput from "./StandaloneDateInput.vue";
import type { CalendarAction, DateRangeValue } from "./types";

// =============================================================================
// PROPS & EMIT
// =============================================================================

const props = withDefaults(
    defineProps<{
        startDate?: string;
        endDate?: string;
        minDate?: string;
        maxDate?: string;
        disabledDates?: string[];
        disabled?: boolean;
        readOnly?: boolean;
        error?: boolean;
        label?: string;
        variant?: DateRangeVariant;
        numberOfDays?: number;
        withButton?: boolean;
        allowDisabledSelection?: boolean;
    }>(),
    {
        startDate: "",
        endDate: "",
        disabled: false,
        readOnly: false,
        error: false,
        variant: "range",
        numberOfDays: 7,
        withButton: true,
        allowDisabledSelection: false,
    }
);

const emit = defineEmits<{
    change: [value: DateRangeValue];
    focus: [];
    blur: [];
}>();

// =============================================================================
// STORE
// =============================================================================

const store = new DateRangeInputStore(
    {
        variant: props.variant,
        numberOfDays: props.numberOfDays,
        withButton: props.withButton,
        readOnly: props.readOnly,
        disabled: props.disabled,
        allowDisabledSelection: props.allowDisabledSelection,
        disabledDates: props.disabledDates,
        minDate: props.minDate,
        maxDate: props.maxDate,
    },
    {
        onChange: (start, end) => emit("change", { start, end }),
        onFocus: () => emit("focus"),
        onBlur: () => emit("blur"),
    }
);

const state = shallowRef(store.getState());
const unsubscribe = store.subscribe(() => {
    state.value = store.getState();
});

onBeforeUnmount(() => {
    unsubscribe();
});

// =============================================================================
// SYNC PROPS → STORE
// =============================================================================

watch(
    () => [props.startDate, props.endDate],
    ([s, e]) => store.syncValues(s, e),
    { immediate: true }
);

watch(
    () => [
        props.variant,
        props.numberOfDays,
        props.withButton,
        props.readOnly,
        props.disabled,
        props.allowDisabledSelection,
        props.disabledDates,
        props.minDate,
        props.maxDate,
    ],
    () => {
        store.updateConfig({
            variant: props.variant,
            numberOfDays: props.numberOfDays,
            withButton: props.withButton,
            readOnly: props.readOnly,
            disabled: props.disabled,
            allowDisabledSelection: props.allowDisabledSelection,
            disabledDates: props.disabledDates,
            minDate: props.minDate,
            maxDate: props.maxDate,
        });
    }
);

// =============================================================================
// REFS
// =============================================================================

const wrapperRef = ref<HTMLDivElement | null>(null);
const startInputRef = ref<InstanceType<typeof StandaloneDateInput> | null>(
    null
);
const endInputRef = ref<InstanceType<typeof StandaloneDateInput> | null>(null);
const calendarManagerRef = ref<InstanceType<typeof CalendarManager> | null>(
    null
);

function wrapStartInputRef(): InputRefActions {
    return {
        resetPlaceholder: () => startInputRef.value?.resetInput(),
        resetInput: () => startInputRef.value?.resetInput(),
        focusYearRef: () => startInputRef.value?.focusDay(),
    };
}

function wrapEndInputRef(): InputRefActions {
    return {
        resetPlaceholder: () => endInputRef.value?.resetInput(),
        resetInput: () => endInputRef.value?.resetInput(),
        focusYearRef: () => endInputRef.value?.focusDay(),
    };
}

function wrapCalendarRef(): CalendarRefActions {
    return {
        setCalendarDate: (val: string) =>
            calendarManagerRef.value?.setCalendarDateTo(val),
    };
}

onMounted(() => {
    store.setStartInputRef(wrapStartInputRef());
    store.setEndInputRef(wrapEndInputRef());
    store.setCalendarRef(wrapCalendarRef());
    document.addEventListener("mousedown", handleOutsideClick);
});

onBeforeUnmount(() => {
    document.removeEventListener("mousedown", handleOutsideClick);
});

// =============================================================================
// COMPUTED
// =============================================================================

const isStartFocused = computed(() => state.value.currentFocus === "start");
const isEndFocused = computed(() => state.value.currentFocus === "end");

const containerClasses = computed(() => {
    const classes: string[] = [cls.container];
    if (state.value.focused) classes.push(cls.containerFocused);
    if (props.disabled) classes.push(cls.containerDisabled);
    if (props.error) classes.push(cls.containerError);
    return classes;
});

const calendarInitialDate = computed(() => state.value.initialCalendarDate);

const doneButtonDisabled = computed(() => {
    const s = state.value;
    if (!s.selectedStart || !s.selectedEnd) return true;
    if (dayjs(s.selectedStart).isAfter(s.selectedEnd, "day")) return true;
    return false;
});

const startHoverValue = computed(() => store.getHoverValue("start"));
const endHoverValue = computed(() => store.getHoverValue("end"));

const startInputReadOnly = computed(
    () => state.value.isStartDisabled || props.readOnly
);
const endInputReadOnly = computed(
    () => state.value.isEndDisabled || props.readOnly
);

const selectWithinRange = computed(() => store.getSelectWithinRange());

// =============================================================================
// HANDLERS (thin wrappers delegating to store)
// =============================================================================

function handleOutsideClick(event: MouseEvent) {
    if (!wrapperRef.value) return;
    if (wrapperRef.value.contains(event.target as Node)) return;

    if (state.value.calendarOpen || state.value.focused) {
        store.handleBlur(true);
    }
}

function handleInputWrapperClick() {
    if (props.disabled || props.readOnly) return;
    store.handleFocus();
}

function handleStartFocus() {
    store.handleInputFocus("start");
}

function handleEndFocus() {
    store.handleInputFocus("end");
}

function handleStartChange(value: string) {
    const handler = store.getStartInputHandler();
    handler(value);
}

function handleEndChange(value: string) {
    store.handleEndDateChange(value);
}

function handleStartBlur(valid: boolean) {
    store.handleStartInputBlur(valid);
}

function handleEndBlur(valid: boolean) {
    store.handleEndInputBlur(valid);
}

function handleDaySelect(date: Dayjs) {
    const dateStr = date.format("YYYY-MM-DD");
    store.handleCalendarSelect(dateStr);
}

function handleDayHover(dateStr: string) {
    store.handleCalendarHover(dateStr);
}

function handleDismiss(action: CalendarAction) {
    store.handleCalendarDismiss(action);
}

function handleNodeKeyDown(event: KeyboardEvent) {
    store.handleNodeKeyDown(event.code);
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
        <div
            :class="containerClasses"
            @click="handleInputWrapperClick"
            @keydown="handleNodeKeyDown"
            tabindex="0"
        >
            <StandaloneDateInput
                ref="startInputRef"
                side="start"
                :value="state.selectedStart"
                :focused="isStartFocused"
                :disabled="disabled"
                :read-only="startInputReadOnly"
                :hover-value="startHoverValue"
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
                :read-only="endInputReadOnly"
                :hover-value="endHoverValue"
                label="End date"
                @change="handleEndChange"
                @focus="handleEndFocus"
                @blur="handleEndBlur"
            />
        </div>

        <!-- Calendar dropdown -->
        <div
            v-if="state.calendarOpen && !disabled && !readOnly"
            :class="cls.dropdown"
        >
            <CalendarManager
                ref="calendarManagerRef"
                :initial-calendar-date="calendarInitialDate"
                :start-date="state.selectedStart"
                :end-date="state.selectedEnd"
                :current-focus="state.currentFocus"
                :hover-date="state.hoverValue || ''"
                :min-date="minDate"
                :max-date="maxDate"
                :disabled-dates="disabledDates"
                :with-button="withButton"
                :done-button-disabled="doneButtonDisabled"
                :select-within-range="selectWithinRange"
                :variant="variant"
                :number-of-days="numberOfDays"
                :allow-disabled-selection="allowDisabledSelection"
                @dismiss="handleDismiss"
                @select-day="handleDaySelect"
                @hover-day="handleDayHover"
            />
        </div>
    </div>
</template>
