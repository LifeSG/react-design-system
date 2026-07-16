<script setup lang="ts">
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { nextTick, ref, watch } from "vue";
import { standaloneDateInput as cls } from "../../styles";
import { padValue, sanitizeInput } from "./date-helpers";

dayjs.extend(customParseFormat);

const props = defineProps<{
    /** "start" or "end" -- used to namespace input names */
    side: "start" | "end";
    /** The date value in YYYY-MM-DD format */
    value: string | undefined;
    /** Whether this input section is focused */
    focused: boolean;
    /** Whether the input is disabled */
    disabled?: boolean;
    /** Accessible label for the group */
    label?: string;
}>();

const emit = defineEmits<{
    change: [value: string];
    focus: [];
    blur: [valid: boolean];
}>();

const dayVal = ref("");
const monthVal = ref("");
const yearVal = ref("");
const currentField = ref<string>("none");

const dayInputRef = ref<HTMLInputElement | null>(null);
const monthInputRef = ref<HTMLInputElement | null>(null);
const yearInputRef = ref<HTMLInputElement | null>(null);
const containerRef = ref<HTMLDivElement | null>(null);

function parseToInputValues(
    stringVal: string | undefined
): [string, string, string] {
    if (!stringVal) return ["", "", ""];

    const sanitized = sanitizeInput(stringVal);
    if (!sanitized) return ["", "", ""];

    const d = dayjs(sanitized, "YYYY-MM-DD", true);
    return [
        padValue(d.date().toString()),
        padValue((d.month() + 1).toString()),
        d.year().toString(),
    ];
}

// Sync internal values when prop changes
watch(
    () => props.value,
    (newVal) => {
        const [d, m, y] = parseToInputValues(newVal);
        dayVal.value = d;
        monthVal.value = m;
        yearVal.value = y;

        // If all cleared while input is focused, refocus day input
        if (
            !d &&
            !m &&
            !y &&
            containerRef.value?.contains(document.activeElement)
        ) {
            nextTick(() => dayInputRef.value?.focus());
        }
    },
    { immediate: true }
);

// Handle parent-driven focus
watch(
    () => props.focused,
    (focused) => {
        if (!focused) {
            currentField.value = "none";
            return;
        }
        // If focused externally but none of our inputs have focus, focus the day
        nextTick(() => {
            if (
                containerRef.value &&
                !containerRef.value.contains(document.activeElement)
            ) {
                dayInputRef.value?.focus();
            }
        });
    }
);

// ---- public methods ----
function resetInput() {
    const [d, m, y] = parseToInputValues(props.value);
    dayVal.value = d;
    monthVal.value = m;
    yearVal.value = y;
}

function focusDay() {
    dayInputRef.value?.focus();
}

defineExpose({ resetInput, focusDay, containerRef });

// ---- event handlers ----
function handleSectionClick() {
    if (props.disabled) return;
    if (
        containerRef.value &&
        !containerRef.value.contains(document.activeElement)
    ) {
        dayInputRef.value?.focus();
    }
}

function handleSectionFocus() {
    if (props.disabled) return;
    if (!props.focused) {
        emit("focus");
    }
}

function handleInputFocus(event: FocusEvent) {
    const target = event.target as HTMLInputElement;
    target.select();
    currentField.value = target.name;
}

function handleInputBlur(event: FocusEvent) {
    const target = event.target as HTMLInputElement;
    const targetName = target.name;

    // Pad single-digit day/month on blur
    if (targetName === `${props.side}-day` && dayVal.value.length === 1) {
        dayVal.value = dayVal.value.padStart(2, "0");
    }
    if (targetName === `${props.side}-month` && monthVal.value.length === 1) {
        monthVal.value = monthVal.value.padStart(2, "0");
    }

    // Emit valid date if padded
    const value = `${yearVal.value}-${monthVal.value}-${dayVal.value}`;
    const isValid = dayjs(value, "YYYY-MM-DD", true).isValid();
    const isEmpty = !dayVal.value && !monthVal.value && !yearVal.value;

    if (isValid) {
        emit("change", value);
    }

    // Check if entire field blurred
    const related = event.relatedTarget as Node | null;
    if (containerRef.value && !containerRef.value.contains(related)) {
        currentField.value = "none";
        emit("blur", isEmpty || isValid);
    }
}

function handleDayInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const val = target.value.replace(/[^0-9]/g, "");
    dayVal.value = val;

    if (val.length === 2) {
        nextTick(() => monthInputRef.value?.focus());
    }

    emitIfValid();
}

function handleMonthInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const val = target.value.replace(/[^0-9]/g, "");
    monthVal.value = val;

    if (val.length === 2) {
        nextTick(() => yearInputRef.value?.focus());
    }

    emitIfValid();
}

function handleYearInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const val = target.value.replace(/[^0-9]/g, "");
    yearVal.value = val;

    emitIfValid();
}

function handleKeyDown(event: KeyboardEvent) {
    if (event.key !== "Backspace") return;
    const target = event.target as HTMLInputElement;

    if (target.name === `${props.side}-month` && monthVal.value.length === 0) {
        dayInputRef.value?.focus();
    }
    if (target.name === `${props.side}-year` && yearVal.value.length === 0) {
        monthInputRef.value?.focus();
    }
}

function emitIfValid() {
    if (!dayVal.value && !monthVal.value && !yearVal.value) {
        emit("change", "");
        return;
    }
    const value = `${yearVal.value}-${monthVal.value}-${dayVal.value}`;
    const isValid = dayjs(value, "YYYY-MM-DD", true).isValid();
    if (isValid) {
        emit("change", value);
    }
}
</script>

<template>
    <div
        :class="cls.section"
        role="group"
        :aria-label="label || `${side} date`"
        @click="handleSectionClick"
        @focusin="handleSectionFocus"
    >
        <div ref="containerRef" :class="cls.container">
            <input
                ref="dayInputRef"
                :class="[cls.input, cls.inputDay]"
                :name="`${side}-day`"
                maxlength="2"
                :value="dayVal"
                type="text"
                inputmode="numeric"
                pattern="[0-9]{2}"
                autocomplete="off"
                :disabled="disabled"
                :tabindex="0"
                :placeholder="currentField === `${side}-day` ? '' : 'DD'"
                aria-label="Day"
                @focus="handleInputFocus"
                @blur="handleInputBlur"
                @input="handleDayInput"
                @keydown="handleKeyDown"
            />
            <span
                :class="[
                    cls.divider,
                    (dayVal.length > 0 || disabled) && cls.dividerActive,
                ]"
            >
                /
            </span>
            <input
                ref="monthInputRef"
                :class="[cls.input, cls.inputMonth]"
                :name="`${side}-month`"
                maxlength="2"
                :value="monthVal"
                type="text"
                inputmode="numeric"
                pattern="[0-9]{2}"
                autocomplete="off"
                :disabled="disabled"
                :tabindex="0"
                :placeholder="currentField === `${side}-month` ? '' : 'MM'"
                aria-label="Month"
                @focus="handleInputFocus"
                @blur="handleInputBlur"
                @input="handleMonthInput"
                @keydown="handleKeyDown"
            />
            <span
                :class="[
                    cls.divider,
                    (monthVal.length > 0 || disabled) && cls.dividerActive,
                ]"
            >
                /
            </span>
            <input
                ref="yearInputRef"
                :class="[cls.input, cls.inputYear]"
                :name="`${side}-year`"
                maxlength="4"
                :value="yearVal"
                type="text"
                inputmode="numeric"
                pattern="[0-9]{4}"
                autocomplete="off"
                :disabled="disabled"
                :tabindex="0"
                :placeholder="currentField === `${side}-year` ? '' : 'YYYY'"
                aria-label="Year"
                @focus="handleInputFocus"
                @blur="handleInputBlur"
                @input="handleYearInput"
                @keydown="handleKeyDown"
            />
        </div>
    </div>
</template>
