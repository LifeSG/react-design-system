<script lang="ts">
    import type { Snippet } from "svelte";
    import { button as cls } from "@lifesg/flagship-styles";
    import { getButtonClasses } from "@lifesg/design-core";
    import type { ButtonIconPosition, ButtonSizeType, ButtonStyleType } from "@lifesg/design-core";
    import LoadingSpinner from "./LoadingSpinner.svelte";

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

    let buttonClasses = $derived(
        getButtonClasses({
            styleType,
            sizeType,
            danger,
            disabled,
            focusableWhenDisabled,
            iconOnly: isIconOnly,
            iconPosition,
            hasChildren,
        })
    );

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
