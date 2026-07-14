import {
    Component,
    input,
    output,
    effect,
    ElementRef,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    OnInit,
    OnDestroy,
    inject,
} from "@angular/core";
import { StandaloneDateInputComponent } from "./standalone-date-input.component";
import { CalendarManagerComponent } from "./calendar-manager.component";
import { DateRangeInputStore } from "@lifesg/design-core";
import type {
    DateRangeInputState,
    DateRangeInputConfig,
    DateRangeInputCallbacks,
} from "@lifesg/design-core";
import { dateRangeInput } from "@lifesg/flagship-styles";
import type { CalendarAction, DateRangeValue } from "./types";

@Component({
    selector: "app-date-range-input",
    standalone: true,
    imports: [StandaloneDateInputComponent, CalendarManagerComponent],
    templateUrl: "./date-range-input.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateRangeInputComponent implements OnInit, OnDestroy {
    readonly value = input("");
    readonly valueEnd = input("");
    readonly minDate = input("");
    readonly maxDate = input("");
    readonly disabledDates = input<string[]>([]);
    readonly disabled = input(false);
    readonly error = input(false);
    readonly withButton = input(true);

    readonly dateChange = output<DateRangeValue>();

    private readonly elementRef = inject(ElementRef);
    private readonly cdr = inject(ChangeDetectorRef);

    private store!: DateRangeInputStore;
    storeState!: DateRangeInputState;
    private unsubscribe?: () => void;

    readonly cls = dateRangeInput;

    private boundDocumentClick = this.onDocumentClick.bind(this);

    constructor() {
        // Sync input props to store config when they change
        effect(() => {
            const config: Partial<DateRangeInputConfig> = {
                withButton: this.withButton(),
                disabled: this.disabled(),
                disabledDates: this.disabledDates(),
                minDate: this.minDate() || undefined,
                maxDate: this.maxDate() || undefined,
            };
            if (this.store) {
                this.store.updateConfig(config);
            }
        });

        // Sync value/valueEnd to store
        effect(() => {
            const v = this.value();
            const ve = this.valueEnd();
            if (this.store) {
                this.store.syncValues(v, ve);
            }
        });
    }

    ngOnInit(): void {
        const config: DateRangeInputConfig = {
            variant: "range",
            numberOfDays: 1,
            withButton: this.withButton(),
            readOnly: false,
            disabled: this.disabled(),
            allowDisabledSelection: false,
            disabledDates: this.disabledDates(),
            minDate: this.minDate() || undefined,
            maxDate: this.maxDate() || undefined,
        };

        const callbacks: DateRangeInputCallbacks = {
            onChange: (start: string, end: string) => {
                this.dateChange.emit({ start, end });
            },
        };

        this.store = new DateRangeInputStore(config, callbacks);
        this.storeState = this.store.getState();

        // Sync initial values
        this.store.syncValues(this.value(), this.valueEnd());
        this.storeState = this.store.getState();

        this.unsubscribe = this.store.subscribe(() => {
            this.storeState = this.store.getState();
            this.cdr.markForCheck();
        });

        document.addEventListener("click", this.boundDocumentClick);
    }

    ngOnDestroy(): void {
        this.unsubscribe?.();
        document.removeEventListener("click", this.boundDocumentClick);
    }

    // =========================================================================
    // Computed values derived from store state
    // =========================================================================

    get containerClasses(): string {
        const s = this.storeState;
        if (!s) return this.cls.container;
        const classes = [this.cls.container];
        if (s.calendarOpen) classes.push(this.cls.containerFocused);
        if (this.disabled()) classes.push(this.cls.containerDisabled);
        if (this.error()) classes.push(this.cls.containerError);
        return classes.join(" ");
    }

    // =========================================================================
    // Template accessors for store state
    // =========================================================================

    get selectedStart(): string {
        return this.storeState?.selectedStart ?? "";
    }

    get selectedEnd(): string {
        return this.storeState?.selectedEnd ?? "";
    }

    get currentFocus(): string {
        return this.storeState?.currentFocus ?? "none";
    }

    get calendarOpen(): boolean {
        return this.storeState?.calendarOpen ?? false;
    }

    get doneDisabled(): boolean {
        const s = this.storeState;
        if (!s) return true;
        return !s.selectedStart || !s.selectedEnd;
    }

    get calendarDateForManager(): string {
        const s = this.storeState;
        if (!s) return "";
        return s.initialCalendarDate || s.selectedStart || "";
    }

    // =========================================================================
    // Event handlers delegating to store
    // =========================================================================

    handleContainerClick(): void {
        if (this.disabled()) return;
        if (!this.calendarOpen) {
            this.store.handleFocus();
        }
    }

    handleFocus(focus: "start" | "end"): void {
        this.store.handleInputFocus(focus);
    }

    handleStartChange(event: { value: string }): void {
        this.store.handleStartDateChange(event.value);
    }

    handleEndChange(event: { value: string }): void {
        this.store.handleEndDateChange(event.value);
    }

    handleDaySelect(event: { date: string }): void {
        this.store.handleCalendarSelect(event.date);
    }

    handleCalendarDismiss(action: CalendarAction): void {
        this.store.handleCalendarDismiss(action);
    }

    stopPropagation(event: Event): void {
        event.stopPropagation();
    }

    private onDocumentClick(event: MouseEvent): void {
        if (!this.calendarOpen) return;
        const el = this.elementRef.nativeElement as HTMLElement;
        if (!el.contains(event.target as Node)) {
            this.store.handleClose();
        }
    }
}
