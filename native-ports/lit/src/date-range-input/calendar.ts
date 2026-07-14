import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { dayjs, generateDays, isDisabledDay, Dayjs } from "./date-helpers.js";
import { calendar } from "@lifesg/flagship-styles";
import { fdsComponentStyles } from "../shared-styles.js";
import "./day-cell.js";

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

@customElement("lifesg-calendar")
export class Calendar extends LitElement {
    static styles = [fdsComponentStyles];

    @property() calendarDate = "";
    @property() selectedStart = "";
    @property() selectedEnd = "";
    @property({ attribute: "min-date" }) minDate = "";
    @property({ attribute: "max-date" }) maxDate = "";
    @property({ type: Array, attribute: "disabled-dates" })
    disabledDates: string[] = [];

    render() {
        const date = this.calendarDate ? dayjs(this.calendarDate) : dayjs();
        const weeks = generateDays(date);

        return html`
            <div class=${calendar.root}>
                <div class=${calendar.grid}>
                    <div class=${calendar.weekdayHeader}>
                        ${WEEKDAYS.map((d) => html`<span>${d}</span>`)}
                    </div>
                    ${weeks.map(
                        (week) => html`
                            <div class=${calendar.weekRow}>
                                ${week.map((day) => this._renderDay(day, date))}
                            </div>
                        `
                    )}
                </div>
            </div>
        `;
    }

    private _renderDay(day: Dayjs, currentMonth: Dayjs) {
        const dateStr = day.format("YYYY-MM-DD");
        const isCurrentMonth = day.month() === currentMonth.month();
        const isToday = day.isSame(dayjs(), "day");
        const disabled = isDisabledDay(
            day,
            this.disabledDates,
            this.minDate || undefined,
            this.maxDate || undefined
        );

        const startDay = this.selectedStart ? dayjs(this.selectedStart) : null;
        const endDay = this.selectedEnd ? dayjs(this.selectedEnd) : null;

        const isSelectedStart = startDay ? day.isSame(startDay, "day") : false;
        const isSelectedEnd = endDay ? day.isSame(endDay, "day") : false;
        const isInRange =
            startDay && endDay
                ? day.isAfter(startDay, "day") && day.isBefore(endDay, "day")
                : false;

        return html`
            <lifesg-day-cell
                date=${dateStr}
                .day=${day.date()}
                ?current-month=${isCurrentMonth}
                ?today=${isToday}
                ?disabled=${disabled}
                ?selected-start=${isSelectedStart}
                ?selected-end=${isSelectedEnd}
                ?in-range=${isInRange || isSelectedStart || isSelectedEnd}
            ></lifesg-day-cell>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lifesg-calendar": Calendar;
    }
}
