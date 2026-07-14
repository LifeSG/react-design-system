import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
    DateRangeInputStore,
    type DateRangeInputState,
    type DateRangeInputConfig,
    type DateRangeInputCallbacks,
} from "@lifesg/design-core";
import dayjs from "dayjs";
import type { FocusType, CalendarAction } from "./types.js";
import { dateRangeInput } from "@lifesg/flagship-styles";
import { fdsComponentStyles } from "../shared-styles.js";
import "./standalone-date-input.js";
import "./calendar-manager.js";

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

    private _store!: DateRangeInputStore;
    @state() private _storeState!: DateRangeInputState;
    private _unsub?: () => void;

    private _buildConfig(): DateRangeInputConfig {
        return {
            variant: "range",
            numberOfDays: 0,
            withButton: this.withButton,
            readOnly: false,
            disabled: this.disabled,
            allowDisabledSelection: false,
            disabledDates: this.disabledDates,
            minDate: this.minDate || undefined,
            maxDate: this.maxDate || undefined,
        };
    }

    private _buildCallbacks(): DateRangeInputCallbacks {
        return {
            onChange: (start: string, end: string) => {
                this.dispatchEvent(
                    new CustomEvent("change", {
                        detail: { start, end },
                        bubbles: true,
                        composed: true,
                    })
                );
            },
        };
    }

    connectedCallback() {
        super.connectedCallback();

        this._store = new DateRangeInputStore(
            this._buildConfig(),
            this._buildCallbacks()
        );
        this._storeState = this._store.getState();

        // Sync initial values
        this._store.syncValues(this.value, this.valueEnd);
        this._storeState = this._store.getState();

        this._unsub = this._store.subscribe(() => {
            this._storeState = this._store.getState();
            this.requestUpdate();
        });

        this._onDocumentClick = this._onDocumentClick.bind(this);
        document.addEventListener("click", this._onDocumentClick);
    }

    disconnectedCallback() {
        this._unsub?.();
        document.removeEventListener("click", this._onDocumentClick);
        super.disconnectedCallback();
    }

    updated(changed: Map<string, unknown>) {
        if (changed.has("value") || changed.has("valueEnd")) {
            this._store.syncValues(this.value, this.valueEnd);
        }
        if (
            changed.has("withButton") ||
            changed.has("disabled") ||
            changed.has("disabledDates") ||
            changed.has("minDate") ||
            changed.has("maxDate")
        ) {
            this._store.updateConfig(this._buildConfig());
        }
    }

    render() {
        const { selectedStart, selectedEnd, currentFocus, calendarOpen } =
            this._storeState;

        const containerClasses = [
            dateRangeInput.container,
            this._storeState.focused ? dateRangeInput.containerFocused : "",
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
                        @input-focus=${() =>
                            this._store.handleInputFocus("start")}
                    ></lifesg-standalone-date-input>

                    <span class=${dateRangeInput.separator}>&ndash;</span>

                    <lifesg-standalone-date-input
                        .value=${selectedEnd}
                        label="End date"
                        ?disabled=${this.disabled}
                        ?focused=${currentFocus === "end"}
                        @value-change=${this._handleEndChange}
                        @input-focus=${() =>
                            this._store.handleInputFocus("end")}
                    ></lifesg-standalone-date-input>
                </div>

                ${calendarOpen ? this._renderDropdown() : nothing}
            </div>
        `;
    }

    private _renderDropdown() {
        const { selectedStart, selectedEnd } = this._storeState;
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
                    calendarDate=${this._storeState.selectedStart ||
                    dayjs().format("YYYY-MM-DD")}
                    selectedStart=${this._storeState.selectedStart}
                    selectedEnd=${this._storeState.selectedEnd}
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
        if (!this._storeState.calendarOpen) {
            this._store.handleFocus();
        }
    }

    private _handleStartChange(e: CustomEvent<{ value: string }>) {
        this._store.handleStartDateChange(e.detail.value);
    }

    private _handleEndChange(e: CustomEvent<{ value: string }>) {
        this._store.handleEndDateChange(e.detail.value);
    }

    private _handleDaySelect(e: CustomEvent<{ date: string }>) {
        this._store.handleCalendarSelect(e.detail.date);
    }

    private _handleCalendarDismiss(e: CustomEvent<CalendarAction>) {
        this._store.handleCalendarDismiss(e.detail);
    }

    private _onDocumentClick(e: MouseEvent) {
        if (!this._storeState.calendarOpen) return;
        const path = e.composedPath();
        if (!path.includes(this)) {
            this._store.handleClose();
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lifesg-date-range-input": DateRangeInput;
    }
}
