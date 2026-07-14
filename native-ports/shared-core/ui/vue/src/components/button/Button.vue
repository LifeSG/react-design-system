<script setup lang="ts">
import { computed, useSlots } from "vue";
import { button as cls } from "@lifesg/flagship-styles";
import { getButtonClasses } from "@lifesg/design-core";
import type {
    ButtonStyleType,
    ButtonSizeType,
    ButtonIconPosition,
} from "@lifesg/design-core";
import LoadingSpinner from "./LoadingSpinner.vue";

const props = withDefaults(
    defineProps<{
        styleType?: ButtonStyleType;
        sizeType?: ButtonSizeType;
        danger?: boolean;
        loading?: boolean;
        disabled?: boolean;
        focusableWhenDisabled?: boolean;
        iconPosition?: ButtonIconPosition;
    }>(),
    {
        styleType: "default",
        sizeType: "default",
        danger: false,
        loading: false,
        disabled: false,
        focusableWhenDisabled: false,
        iconPosition: "left",
    }
);

const slots = useSlots();

const iconOnly = computed(() => !!slots.icon && !slots.default);

const buttonClasses = computed(() =>
    getButtonClasses({
        styleType: props.styleType,
        sizeType: props.sizeType,
        danger: props.danger,
        disabled: props.disabled,
        focusableWhenDisabled: props.focusableWhenDisabled,
        iconOnly: iconOnly.value,
        iconPosition: props.iconPosition,
        hasChildren: !!slots.default,
    })
);

const isDisabledAttr = computed(
    () => props.disabled && !props.focusableWhenDisabled
);
</script>

<template>
    <button
        type="button"
        :class="buttonClasses"
        :disabled="isDisabledAttr || undefined"
        :aria-disabled="disabled || undefined"
    >
        <!-- Spinner or icon slot -->
        <template v-if="loading">
            <LoadingSpinner
                :class="[cls.spinner, !iconOnly && cls.spinnerHasChildren]"
            />
        </template>
        <template v-else-if="$slots.icon">
            <slot name="icon" />
        </template>

        <!-- Default slot (text content) -->
        <slot />
    </button>
</template>
