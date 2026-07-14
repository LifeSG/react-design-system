import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { dayjs } from "./date-helpers.js";
import type {
    FocusType,
    CalendarAction,
    DateRangeInputState,
} from "./types.js";
import { dateRangeInput } from "@lifesg/flagship-styles";
import { fdsComponentStyles } from "../shared-styles.js";
import "./standalone-date-input.js";
import "./calendar-manager.js";

const INITIAL_STATE: DateRangeInputState = {
    initialStart: "",
    initialEnd: "",
    selectedStart: "",
    selectedEnd: "",
    currentFocus: "none",
    calendarOpen: false,
    focused: false,
};

@customElement("lifesg-date-range-input")
export class DateRangeInput extends LitElement {
    static styles = [fdsComponentStyles];

    @property() value = "";
    @property({ attribute: "value-end" }) valueEnd = "";
    @property({ attribute: "min-date" }) minDate = "";
    @property({ attribute: "max-date" }) maxDate = "";
    @property({ type: Array, attribute: "disabled-dates" })
    disabledDates: string[] = [];
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) error = false;
    @property({ type: Boolean, attribute: "with-button" }) withButton = true;

    @state() private _state: DateRangeInputState = { ...INITIAL_STATE };

    connectedCallback() {
        super.connectedCallback();
        this._state = {
            ...INITIAL_STATE,
            initialStart: this.value,
            initialEnd: this.valueEnd,
            selectedStart: this.value,
            selectedEnd: this.valueEnd,
        };
        this._onDocumentClick = this._onDocumentClick.bind(this);
        document.addEventListener("click", this._onDocumentClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener("click", this._onDocumentClick);
    }

    updated(changed: Map<string, unknown>) {
        if (changed.has("value") || changed.has("valueEnd")) {
            this._state = {
                ...this._state,
                initialStart: this.value,
                selectedStart: this.value,
                initialEnd: this.valueEnd,
                selectedEnd: this.valueEnd,
            };
        }
    }

    render() {
        const { selectedStart, selectedEnd, currentFocus, calendarOpen } =
            this._state;

        const containerClasses = [
            dateRangeInput.container,
            this._state.focused ? dateRangeInput.containerFocused : "",
            this.disabled ? dateRangeInput.containerDisabled : "",
            this.error ? dateRangeInput.containerError : "",
        ]
            .filter(Boolean)
            .join(" ");

        return html`
            <div class=${dateRangeInput.root}>
                <div
                    class=${containerClasses}
                    @click=${this._handleContainerClick}
                >
                    <lifesg-standalone-date-input
                        .value=${selectedStart}
                        label="Start date"
                        ?disabled=${this.disabled}
                        ?focused=${currentFocus === "start"}
                        @value-change=${this._handleStartChange}
                        @input-focus=${() => this._handleFocus("start")}
                    ></lifesg-standalone-date-input>

                    <span class=${dateRangeInput.separator}>&ndash;</span>

                    <lifesg-standalone-date-input
                        .value=${selectedEnd}
                        label="End date"
                        ?disabled=${this.disabled}
                        ?focused=${currentFocus === "end"}
                        @value-change=${this._handleEndChange}
                        @input-focus=${() => this._handleFocus("end")}
                    ></lifesg-standalone-date-input>
                </div>

                ${calendarOpen ? this._renderDropdown() : nothing}
            </div>
        `;
    }

    private _renderDropdown() {
        const { selectedStart, selectedEnd } = this._state;
        const bothFilled =
            selectedStart &&
            selectedEnd &&
            dayjs(selectedStart, "YYYY-MM-DD", true).isValid() &&
            dayjs(selectedEnd, "YYYY-MM-DD", true).isValid();
        const doneDisabled = !bothFilled;

        return html`
            <div
                class=${dateRangeInput.dropdown}
                @click=${(e: Event) => e.stopPropagation()}
            >
                <lifesg-calendar-manager
                    calendarDate=${this._state.selectedStart ||
                    dayjs().format("YYYY-MM-DD")}
                    selectedStart=${this._state.selectedStart}
                    selectedEnd=${this._state.selectedEnd}
                    min-date=${this.minDate}
                    max-date=${this.maxDate}
                    .disabledDates=${this.disabledDates}
                    ?with-button=${this.withButton}
                    ?done-disabled=${doneDisabled}
                    @day-select=${this._handleDaySelect}
                    @calendar-dismiss=${this._handleCalendarDismiss}
                ></lifesg-calendar-manager>
            </div>
        `;
    }

    private _handleContainerClick() {
        if (this.disabled) return;
        if (!this._state.calendarOpen) {
            this._handleFocus("start");
        }
    }

    private _handleFocus(focus: FocusType) {
        this._state = {
            ...this._state,
            currentFocus: focus,
            calendarOpen: true,
            focused: true,
        };
    }

    private _handleStartChange(e: CustomEvent<{ value: string }>) {
        const val = e.detail.value;
        this._state = {
            ...this._state,
            selectedStart: val,
        };

        if (!this.withButton && val && this._state.selectedEnd) {
            this._tryAutoConfirm();
        }
    }

    private _handleEndChange(e: CustomEvent<{ value: string }>) {
        const val = e.detail.value;
        this._state = {
            ...this._state,
            selectedEnd: val,
        };

        if (!this.withButton && val && this._state.selectedStart) {
            this._tryAutoConfirm();
        }
    }

    private _handleDaySelect(e: CustomEvent<{ date: string }>) {
        const date = e.detail.date;

        if (
            this._state.currentFocus === "start" ||
            this._state.currentFocus === "none"
        ) {
            this._state = {
                ...this._state,
                selectedStart: date,
                currentFocus: "end",
            };
        } else {
            const start = dayjs(this._state.selectedStart);
            const end = dayjs(date);

            if (end.isBefore(start, "day")) {
                this._state = {
                    ...this._state,
                    selectedStart: date,
                    selectedEnd: "",
                    currentFocus: "end",
                };
            } else {
                this._state = {
                    ...this._state,
                    selectedEnd: date,
                };

                if (!this.withButton) {
                    this._confirmSelection(this._state.selectedStart, date);
                }
            }
        }
    }

    private _handleCalendarDismiss(e: CustomEvent<CalendarAction>) {
        if (e.detail === "confirmed") {
            this._confirmSelection(
                this._state.selectedStart,
                this._state.selectedEnd
            );
        } else {
            this._state = {
                ...this._state,
                selectedStart: this._state.initialStart,
                selectedEnd: this._state.initialEnd,
                currentFocus: "none",
                calendarOpen: false,
            };
        }
    }

    private _confirmSelection(start: string, end: string) {
        this._state = {
            ...this._state,
            initialStart: start,
            initialEnd: end,
            selectedStart: start,
            selectedEnd: end,
            currentFocus: "none",
            calendarOpen: false,
        };

        this.dispatchEvent(
            new CustomEvent("change", {
                detail: { start, end },
                bubbles: true,
                composed: true,
            })
        );
    }

    private _tryAutoConfirm() {
        const { selectedStart, selectedEnd } = this._state;
        const s = dayjs(selectedStart, "YYYY-MM-DD", true);
        const e = dayjs(selectedEnd, "YYYY-MM-DD", true);

        if (s.isValid() && e.isValid() && !e.isBefore(s, "day")) {
            this._confirmSelection(selectedStart, selectedEnd);
        }
    }

    private _onDocumentClick(e: MouseEvent) {
        if (!this._state.calendarOpen) return;
        const path = e.composedPath();
        if (!path.includes(this)) {
            this._state = {
                ...this._state,
                selectedStart: this._state.initialStart,
                selectedEnd: this._state.initialEnd,
                currentFocus: "none",
                calendarOpen: false,
                focused: false,
            };
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lifesg-date-range-input": DateRangeInput;
    }
}
