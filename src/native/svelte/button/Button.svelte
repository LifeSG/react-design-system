<script lang="ts">
    import type { Snippet } from "svelte";
    import { button as cls } from "../../styles";
    import LoadingSpinner from "./LoadingSpinner.svelte";
    import type { ButtonIconPosition, ButtonSizeType, ButtonStyleType } from "./types";

    interface Props {
        styleType?: ButtonStyleType;
        sizeType?: ButtonSizeType;
        danger?: boolean;
        loading?: boolean;
        disabled?: boolean;
        focusableWhenDisabled?: boolean;
        iconPosition?: ButtonIconPosition;
        type?: "button" | "submit" | "reset";
        "aria-label"?: string;
        onclick?: (event: MouseEvent) => void;
        icon?: Snippet;
        children?: Snippet;
    }

    let {
        styleType = "default",
        sizeType = "default",
        danger = false,
        loading = false,
        disabled = false,
        focusableWhenDisabled = false,
        iconPosition = "left",
        type = "button",
        "aria-label": ariaLabel,
        onclick,
        icon,
        children,
    }: Props = $props();

    let hasIcon = $derived(!!icon);
    let hasChildren = $derived(!!children);
    let isIconOnly = $derived(hasIcon && !hasChildren);

    let styleClass = $derived.by(() => {
        if (disabled && !focusableWhenDisabled) return cls.styleDisabled;
        switch (styleType) {
            case "secondary":
                return danger ? cls.styleSecondaryDanger : cls.styleSecondary;
            case "light":
                return danger ? cls.styleLightDanger : cls.styleLight;
            case "link":
                return danger ? cls.styleLinkDanger : cls.styleLink;
            default:
                return danger ? cls.styleDefaultDanger : cls.styleDefault;
        }
    });

    let sizeClass = $derived.by(() => {
        switch (sizeType) {
            case "small":
                return isIconOnly ? cls.sizeSmallIconOnly : cls.sizeSmall;
            case "large":
                return isIconOnly ? cls.sizeLargeIconOnly : cls.sizeLarge;
            default:
                return isIconOnly ? cls.sizeDefaultIconOnly : cls.sizeDefault;
        }
    });

    let buttonClasses = $derived.by(() => {
        const classes: string[] = [cls.root, styleClass, sizeClass];
        if (iconPosition === "right") classes.push(cls.iconRight);
        if (hasChildren) classes.push(cls.hasMinWidth);
        return classes.join(" ");
    });

    let isDisabled = $derived(disabled && !focusableWhenDisabled);
    let isAriaDisabled = $derived(disabled && focusableWhenDisabled);

    function handleClick(event: MouseEvent) {
        if (disabled) {
            event.preventDefault();
            return;
        }
        onclick?.(event);
    }
</script>

<button
    {type}
    class={buttonClasses}
    disabled={isDisabled}
    aria-disabled={isAriaDisabled || undefined}
    aria-label={ariaLabel}
    onclick={handleClick}
>
    {#if loading}
        <span class="{cls.spinner} {hasChildren ? cls.spinnerHasChildren : ''}">
            <LoadingSpinner />
        </span>
    {:else if icon}
        <span aria-hidden="true">
            {@render icon()}
        </span>
    {/if}
    {#if children}
        {@render children()}
    {/if}
</button>
