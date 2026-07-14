import {
    Component,
    input,
    output,
    signal,
    effect,
    viewChild,
    ElementRef,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    OnInit,
} from "@angular/core";
import dayjs from "dayjs";
import { sanitizeInput, padValue } from "@lifesg/design-core";
import { standaloneDateInput } from "@lifesg/flagship-styles";

@Component({
    selector: "app-standalone-date-input",
    standalone: true,
    templateUrl: "./standalone-date-input.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandaloneDateInputComponent implements OnInit {
    readonly value = input("");
    readonly label = input("");
    readonly disabled = input(false);
    readonly focused = input(false);

    readonly valueChange = output<{ value: string }>();
    readonly inputFocus = output<void>();
    readonly inputBlur = output<void>();

    readonly dayInput = viewChild<ElementRef<HTMLInputElement>>("dayInput");
    readonly monthInput = viewChild<ElementRef<HTMLInputElement>>("monthInput");
    readonly yearInput = viewChild<ElementRef<HTMLInputElement>>("yearInput");

    readonly dayValue = signal("");
    readonly monthValue = signal("");
    readonly yearValue = signal("");

    readonly cls = standaloneDateInput;

    constructor() {
        effect(() => {
            const val = this.value();
            this.syncFromValue(val);
        });

        effect(() => {
            if (this.focused()) {
                // Schedule focus for after view update
                setTimeout(() => {
                    const dayEl = this.dayInput()?.nativeElement;
                    if (dayEl && document.activeElement !== dayEl) {
                        const container = dayEl.closest("." + this.cls.section);
                        if (
                            container &&
                            !container.contains(document.activeElement)
                        ) {
                            dayEl.focus();
                        }
                    }
                });
            }
        });
    }

    ngOnInit(): void {
        this.syncFromValue(this.value());
    }

    private syncFromValue(val: string): void {
        const sanitized = sanitizeInput(val);
        if (!sanitized) {
            this.dayValue.set("");
            this.monthValue.set("");
            this.yearValue.set("");
            return;
        }
        const d = dayjs(sanitized, "YYYY-MM-DD", true);
        this.dayValue.set(padValue(d.date().toString()));
        this.monthValue.set(padValue((d.month() + 1).toString()));
        this.yearValue.set(d.year().toString());
    }

    get dayDividerClass(): string {
        return this.dayValue()
            ? this.cls.divider + " " + this.cls.dividerActive
            : this.cls.divider;
    }

    get monthDividerClass(): string {
        return this.monthValue()
            ? this.cls.divider + " " + this.cls.dividerActive
            : this.cls.divider;
    }

    handleSectionClick(): void {
        if (this.disabled()) return;
        const dayEl = this.dayInput()?.nativeElement;
        if (dayEl && document.activeElement !== dayEl) {
            const container = dayEl.closest("." + this.cls.section);
            if (container && !container.contains(document.activeElement)) {
                dayEl.focus();
            }
        }
    }

    handleInputFocus(event: FocusEvent): void {
        (event.target as HTMLInputElement).select();
        this.inputFocus.emit();
    }

    handleInputBlur(event: FocusEvent): void {
        const related = event.relatedTarget as Node | null;
        const section = (event.target as HTMLElement).closest(
            "." + this.cls.section
        );
        if (related && section?.contains(related)) return;

        if (this.dayValue().length === 1) {
            this.dayValue.set(padValue(this.dayValue()));
        }
        if (this.monthValue().length === 1) {
            this.monthValue.set(padValue(this.monthValue()));
        }
        this.emitChange();
        this.inputBlur.emit();
    }

    handleDayInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        const val = input.value.replace(/[^0-9]/g, "");
        this.dayValue.set(val);
        if (val.length === 2) {
            this.monthInput()?.nativeElement.focus();
        }
        this.emitChange();
    }

    handleMonthInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        const val = input.value.replace(/[^0-9]/g, "");
        this.monthValue.set(val);
        if (val.length === 2) {
            this.yearInput()?.nativeElement.focus();
        }
        this.emitChange();
    }

    handleYearInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        const val = input.value.replace(/[^0-9]/g, "");
        this.yearValue.set(val);
        this.emitChange();
    }

    handleKeyDown(event: KeyboardEvent): void {
        if (event.key === "Backspace") {
            const target = event.target as HTMLInputElement;
            const monthEl = this.monthInput()?.nativeElement;
            const yearEl = this.yearInput()?.nativeElement;
            const dayEl = this.dayInput()?.nativeElement;

            if (target === monthEl && this.monthValue().length === 0) {
                dayEl?.focus();
            }
            if (target === yearEl && this.yearValue().length === 0) {
                monthEl?.focus();
            }
        }
    }

    focusDay(): void {
        this.dayInput()?.nativeElement.focus();
    }

    private emitChange(): void {
        const d = this.dayValue();
        const m = this.monthValue();
        const y = this.yearValue();

        if (!d && !m && !y) {
            this.valueChange.emit({ value: "" });
            return;
        }

        const dateStr = `${y}-${m}-${d}`;
        const isValid = dayjs(dateStr, "YYYY-MM-DD", true).isValid();

        if (isValid) {
            this.valueChange.emit({ value: dateStr });
        }
    }
}
