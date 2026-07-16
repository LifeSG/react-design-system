import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { dayCell } from "../../styles";
import { fdsComponentStyles } from "../shared-styles.js";

@customElement("lifesg-day-cell")
export class DayCell extends LitElement {
    static styles = [fdsComponentStyles];

    @property() date = "";
    @property({ type: Number }) day = 0;
    @property({ type: Boolean, attribute: "current-month" }) currentMonth =
        true;
    @property({ type: Boolean }) today = false;
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean, attribute: "selected-start" }) selectedStart =
        false;
    @property({ type: Boolean, attribute: "selected-end" }) selectedEnd = false;
    @property({ type: Boolean, attribute: "in-range" }) inRange = false;

    render() {
        const classes = {
            [dayCell.cell]: true,
            [dayCell.otherMonth]: !this.currentMonth,
            [dayCell.today]: this.today,
            [dayCell.disabled]: this.disabled,
            [dayCell.selectedStart]: this.selectedStart,
            [dayCell.selectedEnd]: this.selectedEnd,
            [dayCell.inRange]: this.inRange,
        };

        return html`
            <div class=${dayCell.root}>
                <button
                    class=${classMap(classes)}
                    ?disabled=${this.disabled}
                    @click=${this._handleClick}
                    aria-label=${`${this.day}`}
                >
                    ${this.day}
                </button>
            </div>
        `;
    }

    private _handleClick() {
        if (!this.disabled) {
            this.dispatchEvent(
                new CustomEvent("day-select", {
                    detail: { date: this.date },
                    bubbles: true,
                    composed: true,
                })
            );
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lifesg-day-cell": DayCell;
    }
}
