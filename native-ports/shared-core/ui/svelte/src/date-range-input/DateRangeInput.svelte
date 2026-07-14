<script lang="ts">
    import { DateRangeInputStore } from "@lifesg/design-core";
    import type { DateRangeInputState } from "@lifesg/design-core";
    import { dateRangeInput as cls } from "@lifesg/flagship-styles";
    import CalendarManager from "./CalendarManager.svelte";
    import StandaloneDateInput from "./StandaloneDateInput.svelte";
    import type { DateRangeValue } from "./types";
    import { onMount } from "svelte";

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

    const store = new DateRangeInputStore(
        {
            variant: "range",
            numberOfDays: 1,
            withButton: true,
            readOnly: false,
            disabled: false,
            allowDisabledSelection: false,
        },
        {}
    );

    let storeState: DateRangeInputState = $state(store.getState());

    $effect(() => {
        return store.subscribe(() => {
            storeState = store.getState();
        });
    });

    $effect(() => {
        store.syncValues(startDate, endDate);
    });

    $effect(() => {
        store.updateConfig({ disabled, disabledDates, minDate, maxDate });
    });

    $effect(() => {
        store.updateCallbacks({
            onChange: (s, e) => onchange?.({ start: s, end: e }),
        });
    });

    let wrapperEl: HTMLDivElement | undefined = $state();
    let startInputRef: StandaloneDateInput | undefined = $state();
    let endInputRef: StandaloneDateInput | undefined = $state();
    let calendarManagerRef: CalendarManager | undefined = $state();

    $effect(() => {
        if (calendarManagerRef) {
            store.setCalendarRef({
                setCalendarDate: (val) => calendarManagerRef!.setCalendarDateTo(val),
            });
        }
    });

    $effect(() => {
        if (startInputRef) {
            store.setStartInputRef({
                resetPlaceholder: () => startInputRef!.resetPlaceholder(),
                resetInput: () => startInputRef!.resetInput(),
                focusYearRef: () => startInputRef!.focusYear(),
            });
        }
    });

    $effect(() => {
        if (endInputRef) {
            store.setEndInputRef({
                resetPlaceholder: () => endInputRef!.resetPlaceholder(),
                resetInput: () => endInputRef!.resetInput(),
                focusYearRef: () => endInputRef!.focusYear(),
            });
        }
    });

    let doneButtonDisabled = $derived(!storeState.selectedStart || !storeState.selectedEnd);
    let isStartFocused = $derived(storeState.currentFocus === "start");
    let isEndFocused = $derived(storeState.currentFocus === "end");

    let containerClasses = $derived.by(() => {
        const classes: string[] = [cls.container];
        if (storeState.focused) classes.push(cls.containerFocused);
        if (disabled) classes.push(cls.containerDisabled);
        if (error) classes.push(cls.containerError);
        return classes.join(" ");
    });

    function handleOutsideClick(event: MouseEvent) {
        if (!wrapperEl) return;
        if (wrapperEl.contains(event.target as Node)) return;
        if (storeState.calendarOpen) {
            store.handleCalendarDismiss("reset");
        }
    }

    onMount(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    });

    function handleInputWrapperClick() {
        if (disabled) return;
        if (!storeState.calendarOpen) {
            store.handleFocus();
        }
    }

    function handleStartChange(val: string) {
        store.handleStartDateChange(val);
    }

    function handleEndChange(val: string) {
        store.handleEndDateChange(val);
    }

    function handleStartFocus() {
        store.handleInputFocus("start");
    }

    function handleEndFocus() {
        store.handleInputFocus("end");
    }

    function handleStartBlur(valid: boolean) {
        store.handleStartInputBlur(valid);
    }

    function handleEndBlur(valid: boolean) {
        store.handleEndInputBlur(valid);
    }

    function handleDaySelect(date: import("dayjs").Dayjs) {
        store.handleCalendarSelect(date.format("YYYY-MM-DD"));
    }

    function handleDayHover(dateStr: string) {
        store.handleCalendarHover(dateStr);
    }

    function handleDismiss(action: "reset" | "confirmed") {
        store.handleCalendarDismiss(action);
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
            value={storeState.selectedStart}
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
            value={storeState.selectedEnd}
            focused={isEndFocused}
            {disabled}
            label="End date"
            onchange={handleEndChange}
            onfocus={handleEndFocus}
            onblur={handleEndBlur}
        />
    </div>

    {#if storeState.calendarOpen && !disabled}
        <div class={cls.dropdown}>
            <CalendarManager
                bind:this={calendarManagerRef}
                initialCalendarDate={storeState.initialCalendarDate}
                startDate={storeState.selectedStart}
                endDate={storeState.selectedEnd}
                currentFocus={storeState.currentFocus}
                hoverDate={storeState.hoverValue ?? ""}
                {minDate}
                {maxDate}
                {disabledDates}
                withButton={true}
                {doneButtonDisabled}
                ondismiss={handleDismiss}
                onselectday={handleDaySelect}
                onhoverday={handleDayHover}
            />
        </div>
    {/if}
</div>
