import {
    Component,
    input,
    output,
    signal,
    computed,
    effect,
    ElementRef,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    OnInit,
    OnDestroy,
    inject,
} from "@angular/core";
import { StandaloneDateInputComponent } from "./standalone-date-input.component";
import { CalendarManagerComponent } from "./calendar-manager.component";
import { dayjs } from "./date-helpers";
import { dateRangeInput } from "@lifesg/flagship-styles";
import type { FocusType, CalendarAction, DateRangeValue } from "./types";

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

    readonly initialStart = signal("");
    readonly initialEnd = signal("");
    readonly selectedStart = signal("");
    readonly selectedEnd = signal("");
    readonly currentFocus = signal<FocusType>("none");
    readonly calendarOpen = signal(false);

    readonly cls = dateRangeInput;

    private boundDocumentClick = this.onDocumentClick.bind(this);

    readonly containerClasses = computed(() => {
        const classes = [this.cls.container];
        if (this.calendarOpen()) classes.push(this.cls.containerFocused);
        if (this.disabled()) classes.push(this.cls.containerDisabled);
        if (this.error()) classes.push(this.cls.containerError);
        return classes.join(" ");
    });

    readonly doneDisabled = computed(() => {
        const start = this.selectedStart();
        const end = this.selectedEnd();
        if (!start || !end) return true;
        return (
            !dayjs(start, "YYYY-MM-DD", true).isValid() ||
            !dayjs(end, "YYYY-MM-DD", true).isValid()
        );
    });

    readonly calendarDateForManager = computed(() => {
        return this.selectedStart() || dayjs().format("YYYY-MM-DD");
    });

    constructor() {
        effect(() => {
            const v = this.value();
            const ve = this.valueEnd();
            this.initialStart.set(v);
            this.selectedStart.set(v);
            this.initialEnd.set(ve);
            this.selectedEnd.set(ve);
        });
    }

    ngOnInit(): void {
        document.addEventListener("click", this.boundDocumentClick);
    }

    ngOnDestroy(): void {
        document.removeEventListener("click", this.boundDocumentClick);
    }

    handleContainerClick(): void {
        if (this.disabled()) return;
        if (!this.calendarOpen()) {
            this.handleFocus("start");
        }
    }

    handleFocus(focus: FocusType): void {
        this.currentFocus.set(focus);
        this.calendarOpen.set(true);
    }

    handleStartChange(event: { value: string }): void {
        this.selectedStart.set(event.value);
        if (!this.withButton() && event.value && this.selectedEnd()) {
            this.tryAutoConfirm();
        }
    }

    handleEndChange(event: { value: string }): void {
        this.selectedEnd.set(event.value);
        if (!this.withButton() && event.value && this.selectedStart()) {
            this.tryAutoConfirm();
        }
    }

    handleDaySelect(event: { date: string }): void {
        const date = event.date;
        const focus = this.currentFocus();

        if (focus === "start" || focus === "none") {
            this.selectedStart.set(date);
            this.currentFocus.set("end");
        } else {
            const start = dayjs(this.selectedStart());
            const end = dayjs(date);

            if (end.isBefore(start, "day")) {
                this.selectedStart.set(date);
                this.selectedEnd.set("");
                this.currentFocus.set("end");
            } else {
                this.selectedEnd.set(date);

                if (!this.withButton()) {
                    this.confirmSelection(this.selectedStart(), date);
                }
            }
        }
    }

    handleCalendarDismiss(action: CalendarAction): void {
        if (action === "confirmed") {
            this.confirmSelection(this.selectedStart(), this.selectedEnd());
        } else {
            this.selectedStart.set(this.initialStart());
            this.selectedEnd.set(this.initialEnd());
            this.currentFocus.set("none");
            this.calendarOpen.set(false);
        }
    }

    stopPropagation(event: Event): void {
        event.stopPropagation();
    }

    private confirmSelection(start: string, end: string): void {
        this.initialStart.set(start);
        this.initialEnd.set(end);
        this.selectedStart.set(start);
        this.selectedEnd.set(end);
        this.currentFocus.set("none");
        this.calendarOpen.set(false);

        this.dateChange.emit({ start, end });
    }

    private tryAutoConfirm(): void {
        const start = this.selectedStart();
        const end = this.selectedEnd();
        const s = dayjs(start, "YYYY-MM-DD", true);
        const e = dayjs(end, "YYYY-MM-DD", true);

        if (s.isValid() && e.isValid() && !e.isBefore(s, "day")) {
            this.confirmSelection(start, end);
        }
    }

    private onDocumentClick(event: MouseEvent): void {
        if (!this.calendarOpen()) return;
        const el = this.elementRef.nativeElement as HTMLElement;
        if (!el.contains(event.target as Node)) {
            this.selectedStart.set(this.initialStart());
            this.selectedEnd.set(this.initialEnd());
            this.currentFocus.set("none");
            this.calendarOpen.set(false);
        }
    }
}
