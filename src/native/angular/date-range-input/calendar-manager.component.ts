import {
    Component,
    input,
    output,
    signal,
    computed,
    effect,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    OnInit,
} from "@angular/core";
import { CalendarComponent } from "./calendar.component";
import {
    dayjs,
    Dayjs,
    generateMonths,
    generateDecadeOfYears,
    isWithinRange,
} from "./date-helpers";
import { calendarManager } from "../../styles";
import type { View, CalendarAction } from "./types";

@Component({
    selector: "app-calendar-manager",
    standalone: true,
    imports: [CalendarComponent],
    templateUrl: "./calendar-manager.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarManagerComponent implements OnInit {
    readonly calendarDate = input("");
    readonly selectedStart = input("");
    readonly selectedEnd = input("");
    readonly minDate = input("");
    readonly maxDate = input("");
    readonly disabledDates = input<string[]>([]);
    readonly withButton = input(true);
    readonly doneDisabled = input(false);

    readonly daySelect = output<{ date: string }>();
    readonly calendarDismiss = output<CalendarAction>();

    readonly currentView = signal<View>("default");
    readonly viewDate = signal("");

    readonly cls = calendarManager;

    constructor() {
        effect(() => {
            const cd = this.calendarDate();
            if (cd) {
                this.viewDate.set(cd);
                this.currentView.set("default");
            }
        });
    }

    ngOnInit(): void {
        if (!this.viewDate()) {
            this.viewDate.set(
                this.calendarDate() || dayjs().format("YYYY-MM-DD")
            );
        }
    }

    readonly viewDateDayjs = computed(() => {
        const vd = this.viewDate();
        return vd ? dayjs(vd) : dayjs();
    });

    readonly monthLabel = computed(() => {
        return this.viewDateDayjs().format("MMM");
    });

    readonly yearLabel = computed(() => {
        if (this.currentView() === "year-options") {
            const decade = Math.floor(this.viewDateDayjs().year() / 10) * 10;
            return `${decade} - ${decade + 9}`;
        }
        return this.viewDateDayjs().format("YYYY");
    });

    readonly prevDisabled = computed(() => {
        const viewDate = this.viewDateDayjs();
        const minD = this.minDate() ? dayjs(this.minDate()) : undefined;
        if (!minD) return false;

        if (this.currentView() === "default") {
            return !isWithinRange(
                viewDate.subtract(1, "month"),
                minD,
                undefined,
                "month"
            );
        } else if (this.currentView() === "year-options") {
            const decade = Math.floor(viewDate.year() / 10) * 10;
            return !isWithinRange(
                viewDate.year(decade - 1),
                minD,
                undefined,
                "year"
            );
        } else {
            return !isWithinRange(
                viewDate.subtract(1, "year"),
                minD,
                undefined,
                "year"
            );
        }
    });

    readonly nextDisabled = computed(() => {
        const viewDate = this.viewDateDayjs();
        const maxD = this.maxDate() ? dayjs(this.maxDate()) : undefined;
        if (!maxD) return false;

        if (this.currentView() === "default") {
            return !isWithinRange(
                viewDate.add(1, "month"),
                undefined,
                maxD,
                "month"
            );
        } else if (this.currentView() === "year-options") {
            const decade = Math.floor(viewDate.year() / 10) * 10;
            return !isWithinRange(
                viewDate.year(decade + 10),
                undefined,
                maxD,
                "year"
            );
        } else {
            return !isWithinRange(
                viewDate.add(1, "year"),
                undefined,
                maxD,
                "year"
            );
        }
    });

    readonly months = computed(() => {
        return generateMonths(this.viewDateDayjs());
    });

    readonly years = computed(() => {
        return generateDecadeOfYears(this.viewDateDayjs());
    });

    readonly currentDecade = computed(() => {
        return Math.floor(this.viewDateDayjs().year() / 10) * 10;
    });

    readonly monthHeaderClass = computed(() => {
        return this.currentView() === "month-options"
            ? this.cls.headerLabel + " " + this.cls.headerLabelActive
            : this.cls.headerLabel;
    });

    readonly yearHeaderClass = computed(() => {
        return this.currentView() === "year-options"
            ? this.cls.headerLabel + " " + this.cls.headerLabelActive
            : this.cls.headerLabel;
    });

    isMonthDisabled(month: Dayjs): boolean {
        const minD = this.minDate() ? dayjs(this.minDate()) : undefined;
        const maxD = this.maxDate() ? dayjs(this.maxDate()) : undefined;
        return !isWithinRange(month, minD, maxD, "month");
    }

    isMonthSelected(month: Dayjs): boolean {
        return month.month() === this.viewDateDayjs().month();
    }

    isYearDisabled(year: Dayjs): boolean {
        const minD = this.minDate() ? dayjs(this.minDate()) : undefined;
        const maxD = this.maxDate() ? dayjs(this.maxDate()) : undefined;
        return !isWithinRange(year, minD, maxD, "year");
    }

    isYearSelected(year: Dayjs): boolean {
        return year.year() === this.viewDateDayjs().year();
    }

    isYearOutOfDecade(year: Dayjs): boolean {
        const yr = year.year();
        const decade = this.currentDecade();
        return yr < decade || yr > decade + 9;
    }

    getMonthLabel(month: Dayjs): string {
        return month.format("MMM");
    }

    getYearNumber(year: Dayjs): number {
        return year.year();
    }

    getGridBtnClass(selected: boolean): string {
        return selected
            ? this.cls.gridBtn + " " + this.cls.gridBtnSelected
            : this.cls.gridBtn;
    }

    handlePrev(): void {
        const viewDate = this.viewDateDayjs();
        if (this.currentView() === "default") {
            this.viewDate.set(
                viewDate.subtract(1, "month").format("YYYY-MM-DD")
            );
        } else if (this.currentView() === "year-options") {
            this.viewDate.set(
                viewDate.subtract(10, "year").format("YYYY-MM-DD")
            );
        } else {
            this.viewDate.set(
                viewDate.subtract(1, "year").format("YYYY-MM-DD")
            );
        }
    }

    handleNext(): void {
        const viewDate = this.viewDateDayjs();
        if (this.currentView() === "default") {
            this.viewDate.set(viewDate.add(1, "month").format("YYYY-MM-DD"));
        } else if (this.currentView() === "year-options") {
            this.viewDate.set(viewDate.add(10, "year").format("YYYY-MM-DD"));
        } else {
            this.viewDate.set(viewDate.add(1, "year").format("YYYY-MM-DD"));
        }
    }

    toggleMonthView(): void {
        this.currentView.set(
            this.currentView() === "month-options" ? "default" : "month-options"
        );
    }

    toggleYearView(): void {
        this.currentView.set(
            this.currentView() === "year-options" ? "default" : "year-options"
        );
    }

    selectMonth(month: Dayjs): void {
        const viewDate = this.viewDateDayjs();
        this.viewDate.set(viewDate.month(month.month()).format("YYYY-MM-DD"));
        this.currentView.set("default");
    }

    selectYear(year: Dayjs): void {
        const viewDate = this.viewDateDayjs();
        this.viewDate.set(viewDate.year(year.year()).format("YYYY-MM-DD"));
        this.currentView.set("default");
    }

    handleCancel(): void {
        this.calendarDismiss.emit("reset");
    }

    handleDone(): void {
        this.calendarDismiss.emit("confirmed");
    }

    onDaySelect(event: { date: string }): void {
        this.daySelect.emit(event);
    }

    trackMonth(index: number): number {
        return index;
    }

    trackYear(index: number): number {
        return index;
    }
}
