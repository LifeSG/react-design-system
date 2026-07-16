import { LitElement, html } from "lit";
import { customElement, property, state, query } from "lit/decorators.js";
import { dayjs, sanitizeInput, padValue } from "./date-helpers.js";
import { standaloneDateInput } from "../../styles";
import { fdsComponentStyles } from "../shared-styles.js";

@customElement("lifesg-standalone-date-input")
export class StandaloneDateInput extends LitElement {
    static styles = [fdsComponentStyles];

    @property() value = "";
    @property() label = "";
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) focused = false;

    @state() private _day = "";
    @state() private _month = "";
    @state() private _year = "";

    @query(`.${standaloneDateInput.inputDay}`)
    private _dayInput!: HTMLInputElement;
    @query(`.${standaloneDateInput.inputMonth}`)
    private _monthInput!: HTMLInputElement;
    @query(`.${standaloneDateInput.inputYear}`)
    private _yearInput!: HTMLInputElement;

    updated(changed: Map<string, unknown>) {
        if (changed.has("value")) {
            this._syncFromValue();
        }
        if (changed.has("focused") && this.focused) {
            this.updateComplete.then(() => {
                if (!this.shadowRoot?.activeElement) {
                    this._dayInput?.focus();
                }
            });
        }
    }

    private _syncFromValue() {
        const sanitized = sanitizeInput(this.value);
        if (!sanitized) {
            this._day = "";
            this._month = "";
            this._year = "";
            return;
        }
        const d = dayjs(sanitized, "YYYY-MM-DD", true);
        this._day = padValue(d.date().toString());
        this._month = padValue((d.month() + 1).toString());
        this._year = d.year().toString();
    }

    render() {
        return html`
            <div class=${standaloneDateInput.root}>
                <div
                    class=${standaloneDateInput.section}
                    role="group"
                    aria-label=${this.label || "Date input"}
                    @click=${this._handleSectionClick}
                >
                    <div class=${standaloneDateInput.container}>
                        <input
                            class="${standaloneDateInput.input} ${standaloneDateInput.inputDay}"
                            maxlength="2"
                            .value=${this._day}
                            placeholder="DD"
                            inputmode="numeric"
                            ?disabled=${this.disabled}
                            aria-label="Day"
                            @input=${this._handleDayInput}
                            @focus=${this._handleInputFocus}
                            @blur=${this._handleInputBlur}
                            @keydown=${this._handleKeyDown}
                        />
                        <span
                            class="${standaloneDateInput.divider} ${this._day
                                ? standaloneDateInput.dividerActive
                                : ""}"
                            >/</span
                        >
                        <input
                            class="${standaloneDateInput.input} ${standaloneDateInput.inputMonth}"
                            maxlength="2"
                            .value=${this._month}
                            placeholder="MM"
                            inputmode="numeric"
                            ?disabled=${this.disabled}
                            aria-label="Month"
                            @input=${this._handleMonthInput}
                            @focus=${this._handleInputFocus}
                            @blur=${this._handleInputBlur}
                            @keydown=${this._handleKeyDown}
                        />
                        <span
                            class="${standaloneDateInput.divider} ${this._month
                                ? standaloneDateInput.dividerActive
                                : ""}"
                            >/</span
                        >
                        <input
                            class="${standaloneDateInput.input} ${standaloneDateInput.inputYear}"
                            maxlength="4"
                            .value=${this._year}
                            placeholder="YYYY"
                            inputmode="numeric"
                            ?disabled=${this.disabled}
                            aria-label="Year"
                            @input=${this._handleYearInput}
                            @focus=${this._handleInputFocus}
                            @blur=${this._handleInputBlur}
                            @keydown=${this._handleKeyDown}
                        />
                    </div>
                </div>
            </div>
        `;
    }

    private _handleSectionClick() {
        if (this.disabled) return;
        if (!this.shadowRoot?.activeElement) {
            this._dayInput?.focus();
        }
    }

    private _handleInputFocus(e: FocusEvent) {
        (e.target as HTMLInputElement).select();
        this.dispatchEvent(
            new CustomEvent("input-focus", { bubbles: true, composed: true })
        );
    }

    private _handleInputBlur(e: FocusEvent) {
        const related = e.relatedTarget as Node | null;
        if (related && this.shadowRoot?.contains(related)) return;

        // pad single-digit day/month on blur
        if (this._day.length === 1) this._day = padValue(this._day);
        if (this._month.length === 1) this._month = padValue(this._month);
        this._emitChange();

        this.dispatchEvent(
            new CustomEvent("input-blur", { bubbles: true, composed: true })
        );
    }

    private _handleDayInput(e: InputEvent) {
        const input = e.target as HTMLInputElement;
        const val = input.value.replace(/[^0-9]/g, "");
        this._day = val;
        if (val.length === 2) {
            this._monthInput?.focus();
        }
        this._emitChange();
    }

    private _handleMonthInput(e: InputEvent) {
        const input = e.target as HTMLInputElement;
        const val = input.value.replace(/[^0-9]/g, "");
        this._month = val;
        if (val.length === 2) {
            this._yearInput?.focus();
        }
        this._emitChange();
    }

    private _handleYearInput(e: InputEvent) {
        const input = e.target as HTMLInputElement;
        const val = input.value.replace(/[^0-9]/g, "");
        this._year = val;
        this._emitChange();
    }

    private _handleKeyDown(e: KeyboardEvent) {
        if (e.key === "Backspace") {
            const target = e.target as HTMLInputElement;
            if (target === this._monthInput && this._month.length === 0) {
                this._dayInput?.focus();
            }
            if (target === this._yearInput && this._year.length === 0) {
                this._monthInput?.focus();
            }
        }
    }

    private _emitChange() {
        if (!this._day && !this._month && !this._year) {
            this.dispatchEvent(
                new CustomEvent("value-change", {
                    detail: { value: "" },
                    bubbles: true,
                    composed: true,
                })
            );
            return;
        }

        const dateStr = `${this._year}-${this._month}-${this._day}`;
        const isValid = dayjs(dateStr, "YYYY-MM-DD", true).isValid();

        if (isValid) {
            this.dispatchEvent(
                new CustomEvent("value-change", {
                    detail: { value: dateStr },
                    bubbles: true,
                    composed: true,
                })
            );
        }
    }

    focusDay() {
        this._dayInput?.focus();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lifesg-standalone-date-input": StandaloneDateInput;
    }
}
