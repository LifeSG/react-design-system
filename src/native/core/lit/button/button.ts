import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { button } from "../../../styles";
import {
    getButtonClasses,
    type ButtonStyleType,
    type ButtonSizeType,
} from "../../design-core";
import { fdsComponentStyles } from "../shared-styles.js";
import "./loading-spinner.js";

@customElement("lifesg-button")
export class Button extends LitElement {
    static styles = [
        fdsComponentStyles,
        css`
            :host {
                display: inline-flex;
            }

            /* Hide the icon slot wrapper when empty */
            .icon-slot-wrapper {
                display: contents;
            }

            ::slotted(svg),
            ::slotted(img) {
                flex-shrink: 0;
                height: 1em;
                width: 1em;
            }
        `,
    ];

    @property({ attribute: "style-type" })
    styleType: ButtonStyleType = "default";

    @property({ attribute: "size-type" })
    sizeType: ButtonSizeType = "default";

    @property({ type: Boolean }) danger = false;
    @property({ type: Boolean }) loading = false;
    @property({ type: Boolean }) disabled = false;
    @property({ attribute: "focusable-when-disabled", type: Boolean })
    focusableWhenDisabled = false;
    @property({ attribute: "icon-position" })
    iconPosition: "left" | "right" = "left";
    @property() type: "button" | "submit" | "reset" = "button";

    @state() private _iconOnly = false;
    @state() private _hasIcon = false;

    render() {
        const isDisabled = this.disabled && !this.focusableWhenDisabled;

        const classes = getButtonClasses({
            styleType: this.styleType,
            sizeType: this.sizeType,
            danger: this.danger,
            disabled: this.disabled,
            focusableWhenDisabled: this.focusableWhenDisabled,
            iconOnly: this._iconOnly,
            iconPosition: this.iconPosition,
            hasChildren: !this._iconOnly,
        });

        return html`
            <button
                class=${classes}
                type=${this.type}
                ?disabled=${isDisabled}
                aria-disabled=${this.disabled ? "true" : "false"}
            >
                ${this.loading
                    ? html`<lifesg-loading-spinner
                          class="${button.spinner} ${!this._iconOnly
                              ? button.spinnerHasChildren
                              : ""}"
                          size="1em"
                      ></lifesg-loading-spinner>`
                    : html`<slot
                          name="icon"
                          @slotchange=${this._handleIconSlotChange}
                      ></slot>`}
                <slot @slotchange=${this._handleDefaultSlotChange}></slot>
            </button>
        `;
    }

    private _handleIconSlotChange(e: Event) {
        const slot = e.target as HTMLSlotElement;
        const nodes = slot.assignedNodes({ flatten: true });
        this._hasIcon = nodes.length > 0;
        this._updateIconOnly();
    }

    private _handleDefaultSlotChange(e: Event) {
        const slot = e.target as HTMLSlotElement;
        const nodes = slot.assignedNodes({ flatten: true });
        const hasText = nodes.some((n) => {
            if (n.nodeType === Node.TEXT_NODE) {
                return (n.textContent?.trim().length ?? 0) > 0;
            }
            return n.nodeType === Node.ELEMENT_NODE;
        });
        this._iconOnly = this._hasIcon && !hasText;
    }

    private _updateIconOnly() {
        // Re-check default slot
        const defaultSlot = this.shadowRoot?.querySelector(
            "slot:not([name])"
        ) as HTMLSlotElement | null;
        if (!defaultSlot) return;
        const nodes = defaultSlot.assignedNodes({ flatten: true });
        const hasText = nodes.some((n) => {
            if (n.nodeType === Node.TEXT_NODE) {
                return (n.textContent?.trim().length ?? 0) > 0;
            }
            return n.nodeType === Node.ELEMENT_NODE;
        });
        this._iconOnly = this._hasIcon && !hasText;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lifesg-button": Button;
    }
}
