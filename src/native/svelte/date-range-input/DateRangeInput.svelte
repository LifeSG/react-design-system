<script lang="ts">
    import type { Dayjs } from "dayjs";
    import dayjs from "dayjs";
    import { dateRangeInput as cls } from "../../styles";
    import CalendarManager from "./CalendarManager.svelte";
    import StandaloneDateInput from "./StandaloneDateInput.svelte";
    import { sanitizeInput, toDayjs } from "./date-helpers";
    import type { CalendarAction, DateRangeValue, FocusType } from "./types";
    import { onMount, tick } from "svelte";

    interface Props {
        startDate?: string;
        endDate?: string;
        minDate?: string;
        maxDate?: string;
        disabledDates?: string[];
        disabled?: boolean;
        error?: boolean;
        label?: string;
        onchange?: (value: DateRangeValue) => void;
    }

    let {
        startDate = "",
        endDate = "",
        minDate,
        maxDate,
        disabledDates,
        disabled = false,
        error = false,
        label,
        onchange,
    }: Props = $props();

    let initialStart = $state("");
    let initialEnd = $state("");
    let selectedStart = $state("");
    let selectedEnd = $state("");
    let currentFocus = $state<FocusType>("none");
    let calendarOpen = $state(false);
    let focused = $state(false);
    let hoverDate = $state("");

    let wrapperEl: HTMLDivElement | undefined = $state();
    let startInputRef: StandaloneDateInput | undefined = $state();
    let endInputRef: StandaloneDateInput | undefined = $state();
    let calendarManagerRef: CalendarManager | undefined = $state();

    $effect(() => {
        initialStart = startDate || "";
        initialEnd = endDate || "";
        selectedStart = startDate || "";
        selectedEnd = endDate || "";
    });

    let calendarInitialDate = $derived.by(() => {
        if (selectedStart) return selectedStart;
        if (selectedEnd) return selectedEnd;
        return undefined;
    });

    let doneButtonDisabled = $derived.by(() => {
        if (!selectedStart || !selectedEnd) return true;
        if (dayjs(selectedStart).isAfter(selectedEnd, "day")) return true;
        return false;
    });

    let isStartFocused = $derived(currentFocus === "start");
    let isEndFocused = $derived(currentFocus === "end");

    let containerClasses = $derived.by(() => {
        const classes: string[] = [cls.container];
        if (focused) classes.push(cls.containerFocused);
        if (disabled) classes.push(cls.containerDisabled);
        if (error) classes.push(cls.containerError);
        return classes.join(" ");
    });

    function handleOutsideClick(event: MouseEvent) {
        if (!wrapperEl) return;
        if (wrapperEl.contains(event.target as Node)) return;
        if (calendarOpen) {
            handleCancel();
        }
    }

    onMount(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    });

    function handleStartFocus() {
        if (disabled) return;
        currentFocus = "start";
        focused = true;
        calendarOpen = true;
    }

    function handleEndFocus() {
        if (disabled) return;
        currentFocus = "end";
        focused = true;
        calendarOpen = true;
    }

    function handleStartChange(value: string) {
        selectedStart = value;
        if (value && sanitizeInput(value)) {
            calendarManagerRef?.setCalendarDateTo(value);
        }
    }

    function handleEndChange(value: string) {
        selectedEnd = value;
        if (value && sanitizeInput(value)) {
            calendarManagerRef?.setCalendarDateTo(value);
        }
    }

    function handleStartBlur(valid: boolean) {
        if (!calendarOpen) {
            focused = false;
            currentFocus = "none";
        }
    }

    function handleEndBlur(valid: boolean) {
        if (!calendarOpen) {
            focused = false;
            currentFocus = "none";
        }
    }

    function handleDaySelect(date: Dayjs) {
        const dateStr = date.format("YYYY-MM-DD");

        if (currentFocus === "start") {
            selectedStart = dateStr;
            if (selectedEnd && date.isAfter(selectedEnd, "day")) {
                selectedEnd = "";
            }
            currentFocus = "end";
            tick().then(() => endInputRef?.focusDay());
        } else if (currentFocus === "end") {
            if (selectedStart && date.isBefore(selectedStart, "day")) {
                selectedStart = dateStr;
            } else {
                selectedEnd = dateStr;
            }
        } else {
            selectedStart = dateStr;
            currentFocus = "end";
            tick().then(() => endInputRef?.focusDay());
        }

        hoverDate = "";
    }

    function handleDayHover(dateStr: string) {
        hoverDate = dateStr;
    }

    function handleDismiss(action: CalendarAction) {
        if (action === "confirmed") {
            handleDone();
        } else {
            handleCancel();
        }
    }

    function handleDone() {
        initialStart = selectedStart;
        initialEnd = selectedEnd;
        calendarOpen = false;
        focused = false;
        currentFocus = "none";
        hoverDate = "";

        onchange?.({ start: selectedStart, end: selectedEnd });
    }

    function handleCancel() {
        selectedStart = initialStart;
        selectedEnd = initialEnd;
        calendarOpen = false;
        focused = false;
        currentFocus = "none";
        hoverDate = "";

        startInputRef?.resetInput();
        endInputRef?.resetInput();
    }

    function handleCalendarDateChange(date: Dayjs) {
        // no-op for now
    }

    function handleInputWrapperClick() {
        if (disabled) return;
        if (!calendarOpen) {
            calendarOpen = true;
            focused = true;
            if (currentFocus === "none") {
                currentFocus = "start";
                tick().then(() => startInputRef?.focusDay());
            }
        }
    }
</script>

<div bind:this={wrapperEl} class={cls.root} style="position: relative; max-width: 400px;">
    {#if label}
        <label
            style="display: block; font-size: 14px; font-weight: 600; color: var(--fds-colour-text); margin-bottom: 8px;"
        >
            {label}
        </label>
    {/if}

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class={containerClasses} onclick={handleInputWrapperClick}>
        <StandaloneDateInput
            bind:this={startInputRef}
            side="start"
            value={selectedStart}
            focused={isStartFocused}
            {disabled}
            label="Start date"
            onchange={handleStartChange}
            onfocus={handleStartFocus}
            onblur={handleStartBlur}
        />
        <span class={cls.separator}>to</span>
        <StandaloneDateInput
            bind:this={endInputRef}
            side="end"
            value={selectedEnd}
            focused={isEndFocused}
            {disabled}
            label="End date"
            onchange={handleEndChange}
            onfocus={handleEndFocus}
            onblur={handleEndBlur}
        />
    </div>

    {#if calendarOpen && !disabled}
        <div class={cls.dropdown}>
            <CalendarManager
                bind:this={calendarManagerRef}
                initialCalendarDate={calendarInitialDate}
                startDate={selectedStart}
                endDate={selectedEnd}
                {currentFocus}
                {hoverDate}
                {minDate}
                {maxDate}
                {disabledDates}
                withButton={true}
                {doneButtonDisabled}
                ondismiss={handleDismiss}
                onselectday={handleDaySelect}
                onhoverday={handleDayHover}
                oncalendardatechange={handleCalendarDateChange}
            />
        </div>
    {/if}
</div>
