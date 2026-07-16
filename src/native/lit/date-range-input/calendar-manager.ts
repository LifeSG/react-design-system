import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
    dayjs,
    Dayjs,
    generateMonths,
    generateDecadeOfYears,
    isWithinRange,
} from "./date-helpers.js";
import type { View, CalendarAction } from "./types.js";
import { calendarManager } from "../../styles";
import { fdsComponentStyles } from "../shared-styles.js";
import "./calendar.js";

@customElement("lifesg-calendar-manager")
export class CalendarManager extends LitElement {
    static styles = [fdsComponentStyles];

    @property() calendarDate = "";
    @property() selectedStart = "";
    @property() selectedEnd = "";
    @property({ attribute: "min-date" }) minDate = "";
    @property({ attribute: "max-date" }) maxDate = "";
    @property({ type: Array, attribute: "disabled-dates" })
    disabledDates: string[] = [];
    @property({ type: Boolean, attribute: "with-button" }) withButton = true;
    @property({ type: Boolean, attribute: "done-disabled" }) doneDisabled =
        false;

    @state() private _currentView: View = "default";
    @state() private _viewDate = "";

    connectedCallback() {
        super.connectedCallback();
        if (!this._viewDate) {
            this._viewDate = this.calendarDate || dayjs().format("YYYY-MM-DD");
        }
    }

    updated(changed: Map<string, unknown>) {
        if (changed.has("calendarDate") && this.calendarDate) {
            this._viewDate = this.calendarDate;
            this._currentView = "default";
        }
    }

    render() {
        const viewDate = this._viewDate ? dayjs(this._viewDate) : dayjs();

        return html`
            <div class=${calendarManager.root}>
                ${this._renderHeader(viewDate)}
                ${this._currentView === "default"
                    ? this._renderCalendar(viewDate)
                    : this._currentView === "month-options"
                    ? this._renderMonthPicker(viewDate)
                    : this._renderYearPicker(viewDate)}
                ${this.withButton ? this._renderFooter() : nothing}
            </div>
        `;
    }

    private _renderHeader(viewDate: Dayjs) {
        const minD = this.minDate ? dayjs(this.minDate) : undefined;
        const maxD = this.maxDate ? dayjs(this.maxDate) : undefined;

        let prevDisabled = false;
        let nextDisabled = false;

        if (this._currentView === "default") {
            if (minD)
                prevDisabled = !isWithinRange(
                    viewDate.subtract(1, "month"),
                    minD,
                    undefined,
                    "month"
                );
            if (maxD)
                nextDisabled = !isWithinRange(
                    viewDate.add(1, "month"),
                    undefined,
                    maxD,
                    "month"
                );
        } else if (this._currentView === "year-options") {
            const decade = Math.floor(viewDate.year() / 10) * 10;
            if (minD)
                prevDisabled = !isWithinRange(
                    viewDate.year(decade - 1),
                    minD,
                    undefined,
                    "year"
                );
            if (maxD)
                nextDisabled = !isWithinRange(
                    viewDate.year(decade + 10),
                    undefined,
                    maxD,
                    "year"
                );
        } else {
            if (minD)
                prevDisabled = !isWithinRange(
                    viewDate.subtract(1, "year"),
                    minD,
                    undefined,
                    "year"
                );
            if (maxD)
                nextDisabled = !isWithinRange(
                    viewDate.add(1, "year"),
                    undefined,
                    maxD,
                    "year"
                );
        }

        const monthLabel = viewDate.format("MMM");
        const yearLabel =
            this._currentView === "year-options"
                ? (() => {
                      const decade = Math.floor(viewDate.year() / 10) * 10;
                      return `${decade} - ${decade + 9}`;
                  })()
                : viewDate.format("YYYY");

        return html`
            <div class=${calendarManager.header}>
                <button
                    class=${calendarManager.navBtn}
                    ?disabled=${prevDisabled}
                    @click=${this._handlePrev}
                    aria-label="Previous"
                >
                    &#8249;
                </button>
                <div class=${calendarManager.headerLabels}>
                    <button
                        class="${calendarManager.headerLabel} ${this
                            ._currentView === "month-options"
                            ? calendarManager.headerLabelActive
                            : ""}"
                        @click=${this._toggleMonthView}
                    >
                        ${monthLabel}
                    </button>
                    <button
                        class="${calendarManager.headerLabel} ${this
                            ._currentView === "year-options"
                            ? calendarManager.headerLabelActive
                            : ""}"
                        @click=${this._toggleYearView}
                    >
                        ${yearLabel}
                    </button>
                </div>
                <button
                    class=${calendarManager.navBtn}
                    ?disabled=${nextDisabled}
                    @click=${this._handleNext}
                    aria-label="Next"
                >
                    &#8250;
                </button>
            </div>
        `;
    }

    private _renderCalendar(viewDate: Dayjs) {
        return html`
            <lifesg-calendar
                calendarDate=${viewDate.format("YYYY-MM-DD")}
                selectedStart=${this.selectedStart}
                selectedEnd=${this.selectedEnd}
                min-date=${this.minDate}
                max-date=${this.maxDate}
                .disabledDates=${this.disabledDates}
            ></lifesg-calendar>
        `;
    }

    private _renderMonthPicker(viewDate: Dayjs) {
        const months = generateMonths(viewDate);
        const minD = this.minDate ? dayjs(this.minDate) : undefined;
        const maxD = this.maxDate ? dayjs(this.maxDate) : undefined;

        return html`
            <div class=${calendarManager.monthGrid}>
                ${months.map((m) => {
                    const disabled = !isWithinRange(m, minD, maxD, "month");
                    const selected = m.month() === viewDate.month();
                    return html`
                        <button
                            class="${calendarManager.gridBtn} ${selected
                                ? calendarManager.gridBtnSelected
                                : ""}"
                            ?disabled=${disabled}
                            @click=${() => this._selectMonth(m)}
                        >
                            ${m.format("MMM")}
                        </button>
                    `;
                })}
            </div>
        `;
    }

    private _renderYearPicker(viewDate: Dayjs) {
        const years = generateDecadeOfYears(viewDate);
        const minD = this.minDate ? dayjs(this.minDate) : undefined;
        const maxD = this.maxDate ? dayjs(this.maxDate) : undefined;
        const decade = Math.floor(viewDate.year() / 10) * 10;

        return html`
            <div class=${calendarManager.yearGrid}>
                ${years.map((y) => {
                    const yr = y.year();
                    const disabled = !isWithinRange(y, minD, maxD, "year");
                    const outOfDecade = yr < decade || yr > decade + 9;
                    const selected = yr === viewDate.year();
                    return html`
                        <button
                            class="${calendarManager.gridBtn} ${selected
                                ? calendarManager.gridBtnSelected
                                : ""}"
                            ?disabled=${disabled}
                            style=${outOfDecade ? "opacity: 0.4" : ""}
                            @click=${() => this._selectYear(y)}
                        >
                            ${yr}
                        </button>
                    `;
                })}
            </div>
        `;
    }

    private _renderFooter() {
        return html`
            <div class=${calendarManager.footer}>
                <button
                    class=${calendarManager.footerBtn}
                    @click=${this._handleCancel}
                >
                    Cancel
                </button>
                <button
                    class="${calendarManager.footerBtn} ${calendarManager.footerBtnPrimary}"
                    ?disabled=${this.doneDisabled}
                    @click=${this._handleDone}
                >
                    Done
                </button>
            </div>
        `;
    }

    private _handlePrev() {
        const viewDate = dayjs(this._viewDate);
        if (this._currentView === "default") {
            this._viewDate = viewDate.subtract(1, "month").format("YYYY-MM-DD");
        } else if (this._currentView === "year-options") {
            this._viewDate = viewDate.subtract(10, "year").format("YYYY-MM-DD");
        } else {
            this._viewDate = viewDate.subtract(1, "year").format("YYYY-MM-DD");
        }
    }

    private _handleNext() {
        const viewDate = dayjs(this._viewDate);
        if (this._currentView === "default") {
            this._viewDate = viewDate.add(1, "month").format("YYYY-MM-DD");
        } else if (this._currentView === "year-options") {
            this._viewDate = viewDate.add(10, "year").format("YYYY-MM-DD");
        } else {
            this._viewDate = viewDate.add(1, "year").format("YYYY-MM-DD");
        }
    }

    private _toggleMonthView() {
        this._currentView =
            this._currentView === "month-options" ? "default" : "month-options";
    }

    private _toggleYearView() {
        this._currentView =
            this._currentView === "year-options" ? "default" : "year-options";
    }

    private _selectMonth(month: Dayjs) {
        const viewDate = dayjs(this._viewDate);
        this._viewDate = viewDate.month(month.month()).format("YYYY-MM-DD");
        this._currentView = "default";
    }

    private _selectYear(year: Dayjs) {
        const viewDate = dayjs(this._viewDate);
        this._viewDate = viewDate.year(year.year()).format("YYYY-MM-DD");
        this._currentView = "default";
    }

    private _handleCancel() {
        this.dispatchEvent(
            new CustomEvent<CalendarAction>("calendar-dismiss", {
                detail: "reset",
                bubbles: true,
                composed: true,
            })
        );
    }

    private _handleDone() {
        this.dispatchEvent(
            new CustomEvent<CalendarAction>("calendar-dismiss", {
                detail: "confirmed",
                bubbles: true,
                composed: true,
            })
        );
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lifesg-calendar-manager": CalendarManager;
    }
}
