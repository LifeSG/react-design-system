<script setup lang="ts">
import { computed, useSlots } from "vue";
import { button as cls } from "../../styles";
import LoadingSpinner from "./LoadingSpinner.vue";
import type {
    ButtonStyleType,
    ButtonSizeType,
    ButtonIconPosition,
} from "./types";

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

const styleClass = computed(() => {
    if (props.disabled) return cls.styleDisabled;

    const map: Record<string, Record<string, string>> = {
        default: { normal: cls.styleDefault, danger: cls.styleDefaultDanger },
        secondary: {
            normal: cls.styleSecondary,
            danger: cls.styleSecondaryDanger,
        },
        light: { normal: cls.styleLight, danger: cls.styleLightDanger },
        link: { normal: cls.styleLink, danger: cls.styleLinkDanger },
    };

    const variant = props.danger ? "danger" : "normal";
    return map[props.styleType]?.[variant] ?? cls.styleDefault;
});

const sizeClass = computed(() => {
    const map: Record<string, Record<string, string>> = {
        default: { normal: cls.sizeDefault, iconOnly: cls.sizeDefaultIconOnly },
        small: { normal: cls.sizeSmall, iconOnly: cls.sizeSmallIconOnly },
        large: { normal: cls.sizeLarge, iconOnly: cls.sizeLargeIconOnly },
    };

    const variant = iconOnly.value ? "iconOnly" : "normal";
    return map[props.sizeType]?.[variant] ?? cls.sizeDefault;
});

const buttonClasses = computed(() => {
    const classes: string[] = [cls.root];

    if (slots.icon && props.iconPosition === "right") {
        classes.push(cls.iconRight);
    }
    if (!iconOnly.value) {
        classes.push(cls.hasMinWidth);
    }

    classes.push(styleClass.value);
    classes.push(sizeClass.value);

    return classes;
});

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
