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
        const classes = [this.cls.root];

        // Style variant
        if (this.disabled() && !this.focusableWhenDisabled()) {
            classes.push(this.cls.styleDisabled);
        } else {
            const style = this.styleType();
            const isDanger = this.danger();
            switch (style) {
                case "secondary":
                    classes.push(
                        isDanger
                            ? this.cls.styleSecondaryDanger
                            : this.cls.styleSecondary
                    );
                    break;
                case "light":
                    classes.push(
                        isDanger
                            ? this.cls.styleLightDanger
                            : this.cls.styleLight
                    );
                    break;
                case "link":
                    classes.push(
                        isDanger ? this.cls.styleLinkDanger : this.cls.styleLink
                    );
                    break;
                default:
                    classes.push(
                        isDanger
                            ? this.cls.styleDefaultDanger
                            : this.cls.styleDefault
                    );
                    break;
            }
        }

        // Size variant
        const size = this.sizeType();
        const iconOnly = this.isIconOnly();
        switch (size) {
            case "small":
                classes.push(
                    iconOnly ? this.cls.sizeSmallIconOnly : this.cls.sizeSmall
                );
                break;
            case "large":
                classes.push(
                    iconOnly ? this.cls.sizeLargeIconOnly : this.cls.sizeLarge
                );
                break;
            default:
                classes.push(
                    iconOnly
                        ? this.cls.sizeDefaultIconOnly
                        : this.cls.sizeDefault
                );
                break;
        }

        // Icon position
        if (this.iconPosition() === "right") {
            classes.push(this.cls.iconRight);
        }

        // Min width for non-icon-only buttons with text
        if (!iconOnly) {
            classes.push(this.cls.hasMinWidth);
        }

        return classes.join(" ");
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
