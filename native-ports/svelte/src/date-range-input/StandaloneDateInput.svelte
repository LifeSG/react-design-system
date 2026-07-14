<script lang="ts">
    import dayjs from "dayjs";
    import customParseFormat from "dayjs/plugin/customParseFormat";
    import { standaloneDateInput as cls } from "@lifesg/flagship-styles";
    import { padValue, sanitizeInput } from "./date-helpers";
    import { tick } from "svelte";

    dayjs.extend(customParseFormat);

    interface Props {
        side: "start" | "end";
        value: string | undefined;
        focused: boolean;
        disabled?: boolean;
        label?: string;
        onchange?: (value: string) => void;
        onfocus?: () => void;
        onblur?: (valid: boolean) => void;
    }

    let {
        side,
        value,
        focused,
        disabled = false,
        label,
        onchange,
        onfocus,
        onblur,
    }: Props = $props();

    let dayVal = $state("");
    let monthVal = $state("");
    let yearVal = $state("");
    let currentField = $state("none");

    let dayInputEl: HTMLInputElement | undefined = $state();
    let monthInputEl: HTMLInputElement | undefined = $state();
    let yearInputEl: HTMLInputElement | undefined = $state();
    let containerEl: HTMLDivElement | undefined = $state();

    function parseToInputValues(stringVal: string | undefined): [string, string, string] {
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

    $effect(() => {
        const [d, m, y] = parseToInputValues(value);
        dayVal = d;
        monthVal = m;
        yearVal = y;

        if (!d && !m && !y && containerEl?.contains(document.activeElement)) {
            tick().then(() => dayInputEl?.focus());
        }
    });

    $effect(() => {
        if (!focused) {
            currentField = "none";
            return;
        }
        tick().then(() => {
            if (containerEl && !containerEl.contains(document.activeElement)) {
                dayInputEl?.focus();
            }
        });
    });

    export function resetInput() {
        const [d, m, y] = parseToInputValues(value);
        dayVal = d;
        monthVal = m;
        yearVal = y;
    }

    export function focusDay() {
        dayInputEl?.focus();
    }

    function handleSectionClick() {
        if (disabled) return;
        if (containerEl && !containerEl.contains(document.activeElement)) {
            dayInputEl?.focus();
        }
    }

    function handleSectionFocus() {
        if (disabled) return;
        if (!focused) {
            onfocus?.();
        }
    }

    function handleInputFocus(event: FocusEvent) {
        const target = event.target as HTMLInputElement;
        target.select();
        currentField = target.name;
    }

    function handleInputBlur(event: FocusEvent) {
        const target = event.target as HTMLInputElement;
        const targetName = target.name;

        if (targetName === `${side}-day` && dayVal.length === 1) {
            dayVal = dayVal.padStart(2, "0");
        }
        if (targetName === `${side}-month` && monthVal.length === 1) {
            monthVal = monthVal.padStart(2, "0");
        }

        const val = `${yearVal}-${monthVal}-${dayVal}`;
        const isValid = dayjs(val, "YYYY-MM-DD", true).isValid();
        const isEmpty = !dayVal && !monthVal && !yearVal;

        if (isValid) {
            onchange?.(val);
        }

        const related = event.relatedTarget as Node | null;
        if (containerEl && !containerEl.contains(related)) {
            currentField = "none";
            onblur?.(isEmpty || isValid);
        }
    }

    function handleDayInput(event: Event) {
        const target = event.target as HTMLInputElement;
        const val = target.value.replace(/[^0-9]/g, "");
        dayVal = val;

        if (val.length === 2) {
            tick().then(() => monthInputEl?.focus());
        }
        emitIfValid();
    }

    function handleMonthInput(event: Event) {
        const target = event.target as HTMLInputElement;
        const val = target.value.replace(/[^0-9]/g, "");
        monthVal = val;

        if (val.length === 2) {
            tick().then(() => yearInputEl?.focus());
        }
        emitIfValid();
    }

    function handleYearInput(event: Event) {
        const target = event.target as HTMLInputElement;
        const val = target.value.replace(/[^0-9]/g, "");
        yearVal = val;
        emitIfValid();
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key !== "Backspace") return;
        const target = event.target as HTMLInputElement;

        if (target.name === `${side}-month` && monthVal.length === 0) {
            dayInputEl?.focus();
        }
        if (target.name === `${side}-year` && yearVal.length === 0) {
            monthInputEl?.focus();
        }
    }

    function emitIfValid() {
        if (!dayVal && !monthVal && !yearVal) {
            onchange?.("");
            return;
        }
        const val = `${yearVal}-${monthVal}-${dayVal}`;
        const isValid = dayjs(val, "YYYY-MM-DD", true).isValid();
        if (isValid) {
            onchange?.(val);
        }
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
    class={cls.section}
    role="group"
    aria-label={label || `${side} date`}
    onclick={handleSectionClick}
    onfocusin={handleSectionFocus}
>
    <div bind:this={containerEl} class={cls.container}>
        <input
            bind:this={dayInputEl}
            class="{cls.input} {cls.inputDay}"
            name="{side}-day"
            maxlength="2"
            value={dayVal}
            type="text"
            inputmode="numeric"
            pattern="[0-9]{2}"
            autocomplete="off"
            {disabled}
            tabindex={0}
            placeholder={currentField === `${side}-day` ? "" : "DD"}
            aria-label="Day"
            onfocus={handleInputFocus}
            onblur={handleInputBlur}
            oninput={handleDayInput}
            onkeydown={handleKeyDown}
        />
        <span class="{cls.divider} {dayVal.length > 0 || disabled ? cls.dividerActive : ''}">
            /
        </span>
        <input
            bind:this={monthInputEl}
            class="{cls.input} {cls.inputMonth}"
            name="{side}-month"
            maxlength="2"
            value={monthVal}
            type="text"
            inputmode="numeric"
            pattern="[0-9]{2}"
            autocomplete="off"
            {disabled}
            tabindex={0}
            placeholder={currentField === `${side}-month` ? "" : "MM"}
            aria-label="Month"
            onfocus={handleInputFocus}
            onblur={handleInputBlur}
            oninput={handleMonthInput}
            onkeydown={handleKeyDown}
        />
        <span class="{cls.divider} {monthVal.length > 0 || disabled ? cls.dividerActive : ''}">
            /
        </span>
        <input
            bind:this={yearInputEl}
            class="{cls.input} {cls.inputYear}"
            name="{side}-year"
            maxlength="4"
            value={yearVal}
            type="text"
            inputmode="numeric"
            pattern="[0-9]{4}"
            autocomplete="off"
            {disabled}
            tabindex={0}
            placeholder={currentField === `${side}-year` ? "" : "YYYY"}
            aria-label="Year"
            onfocus={handleInputFocus}
            onblur={handleInputBlur}
            oninput={handleYearInput}
            onkeydown={handleKeyDown}
        />
    </div>
</div>
