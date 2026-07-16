import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { loadingSpinner } from "../../../styles";
import { fdsComponentStyles } from "../shared-styles.js";

@customElement("lifesg-loading-spinner")
export class LoadingSpinner extends LitElement {
    static styles = [
        fdsComponentStyles,
        css`
            :host {
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }
        `,
    ];

    /** Spinner diameter, e.g. "1.5rem" or "24px". Falls back to 1em. */
    @property() size = "";

    /** Spinner colour. Falls back to currentColor. */
    @property() colour = "";

    render() {
        const style = [
            this.size
                ? `--fds-internal-loading-spinner-size: ${this.size}`
                : "",
            this.colour
                ? `--fds-internal-loading-spinner-colour: ${this.colour}`
                : "",
        ]
            .filter(Boolean)
            .join("; ");

        return html`
            <div class=${loadingSpinner.root} style=${style || ""}>
                <div class=${loadingSpinner.ring}></div>
                <div
                    class="${loadingSpinner.ring} ${loadingSpinner.ring2}"
                ></div>
                <div
                    class="${loadingSpinner.ring} ${loadingSpinner.ring3}"
                ></div>
                <div
                    class="${loadingSpinner.ring} ${loadingSpinner.ring4}"
                ></div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lifesg-loading-spinner": LoadingSpinner;
    }
}
