import {
    Component,
    input,
    output,
    computed,
    ViewEncapsulation,
    ChangeDetectionStrategy,
} from "@angular/core";
import { DayCellComponent } from "./day-cell.component";
import dayjs, { Dayjs } from "dayjs";
import { generateDays, isDisabledDay } from "@lifesg/design-core";
import { calendar } from "@lifesg/flagship-styles";

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

@Component({
    selector: "app-calendar",
    standalone: true,
    imports: [DayCellComponent],
    templateUrl: "./calendar.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
    readonly calendarDate = input("");
    readonly selectedStart = input("");
    readonly selectedEnd = input("");
    readonly minDate = input("");
    readonly maxDate = input("");
    readonly disabledDates = input<string[]>([]);

    readonly daySelect = output<{ date: string }>();

    readonly cls = calendar;
    readonly weekdays = WEEKDAYS;

    readonly weeks = computed(() => {
        const date = this.calendarDate() ? dayjs(this.calendarDate()) : dayjs();
        return generateDays(date);
    });

    readonly currentMonth = computed(() => {
        const date = this.calendarDate() ? dayjs(this.calendarDate()) : dayjs();
        return date.month();
    });

    isCurrentMonth(day: Dayjs): boolean {
        return day.month() === this.currentMonth();
    }

    isToday(day: Dayjs): boolean {
        return day.isSame(dayjs(), "day");
    }

    isDayDisabled(day: Dayjs): boolean {
        return isDisabledDay(
            day,
            this.disabledDates(),
            this.minDate() || undefined,
            this.maxDate() || undefined
        );
    }

    isSelectedStart(day: Dayjs): boolean {
        const start = this.selectedStart();
        return start ? day.isSame(dayjs(start), "day") : false;
    }

    isSelectedEnd(day: Dayjs): boolean {
        const end = this.selectedEnd();
        return end ? day.isSame(dayjs(end), "day") : false;
    }

    isInRange(day: Dayjs): boolean {
        const start = this.selectedStart();
        const end = this.selectedEnd();
        if (!start || !end) return false;
        const startDay = dayjs(start);
        const endDay = dayjs(end);
        const withinRange =
            day.isAfter(startDay, "day") && day.isBefore(endDay, "day");
        const isStart = day.isSame(startDay, "day");
        const isEnd = day.isSame(endDay, "day");
        return withinRange || isStart || isEnd;
    }

    getDayDateStr(day: Dayjs): string {
        return day.format("YYYY-MM-DD");
    }

    getDayNumber(day: Dayjs): number {
        return day.date();
    }

    trackWeek(index: number): number {
        return index;
    }

    trackDay(_index: number, day: Dayjs): string {
        return day.format("YYYY-MM-DD");
    }

    onDaySelect(event: { date: string }): void {
        this.daySelect.emit(event);
    }
}
