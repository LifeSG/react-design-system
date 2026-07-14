import {
    Component,
    input,
    computed,
    signal,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    AfterContentInit,
    ElementRef,
    inject,
} from "@angular/core";
import { LoadingSpinnerComponent } from "./loading-spinner.component";
import { button } from "@lifesg/flagship-styles";
import { getButtonClasses } from "@lifesg/design-core";
import type { ButtonStyleType, ButtonSizeType } from "./types";

@Component({
    selector: "app-button",
    standalone: true,
    imports: [LoadingSpinnerComponent],
    template: `
        <button
            [class]="buttonClasses()"
            [disabled]="effectiveDisabled()"
            [attr.aria-disabled]="effectiveAriaDisabled()"
            [attr.type]="'button'"
        >
            @if (loading()) {
            <span [class]="spinnerClasses()">
                <app-loading-spinner />
            </span>
            } @else if (hasIconSlot) {
            <span class="fds-button__icon-wrapper">
                <ng-content select="[icon]" />
            </span>
            }
            <ng-content />
        </button>
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements AfterContentInit {
    readonly styleType = input<ButtonStyleType>("default");
    readonly sizeType = input<ButtonSizeType>("default");
    readonly danger = input(false);
    readonly loading = input(false);
    readonly disabled = input(false);
    readonly focusableWhenDisabled = input(false);
    readonly iconPosition = input<"left" | "right">("left");

    readonly cls = button;

    /** Set after content init to detect icon-only mode */
    hasIconSlot = false;
    private hasChildren = false;

    private readonly elementRef = inject(ElementRef);

    readonly isIconOnly = signal(false);

    readonly effectiveDisabled = computed(() => {
        if (this.focusableWhenDisabled()) return false;
        return this.disabled();
    });

    readonly effectiveAriaDisabled = computed(() => {
        if (this.focusableWhenDisabled() && this.disabled()) return true;
        return undefined;
    });

    readonly buttonClasses = computed(() => {
        return getButtonClasses({
            styleType: this.styleType(),
            sizeType: this.sizeType(),
            danger: this.danger(),
            disabled: this.disabled(),
            focusableWhenDisabled: this.focusableWhenDisabled(),
            iconOnly: this.isIconOnly(),
            iconPosition: this.iconPosition(),
            hasChildren: !this.isIconOnly(),
        });
    });

    readonly spinnerClasses = computed(() => {
        const classes = [this.cls.spinner];
        if (this.hasChildren) {
            classes.push(this.cls.spinnerHasChildren);
        }
        return classes.join(" ");
    });

    ngAfterContentInit(): void {
        const el = this.elementRef.nativeElement as HTMLElement;
        this.hasIconSlot = el.querySelector("[icon]") !== null;

        // Check if there's text content (non-icon children)
        const buttonEl = el.querySelector("button");
        if (buttonEl) {
            // Check for non-empty text content excluding the icon wrapper and spinner
            const textContent = Array.from(buttonEl.childNodes).filter(
                (node) => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        return node.textContent?.trim() !== "";
                    }
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const elem = node as HTMLElement;
                        return (
                            !elem.classList.contains(
                                "fds-button__icon-wrapper"
                            ) &&
                            !elem.classList.contains(this.cls.spinner) &&
                            !elem.matches("[icon]") &&
                            !elem.matches("app-loading-spinner")
                        );
                    }
                    return false;
                }
            );
            this.hasChildren = textContent.length > 0;
        }

        this.isIconOnly.set(this.hasIconSlot && !this.hasChildren);
    }
}
