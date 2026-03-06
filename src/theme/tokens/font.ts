import { generateFont } from "../helper";
import { FontCSSVariableString } from "../types";

export const Font = {
    "heading-xxl-light": generateFont("heading-xxl", "light"),
    "heading-xxl-regular": generateFont("heading-xxl", "regular"),
    "heading-xxl-semibold": generateFont("heading-xxl", "semibold"),
    "heading-xxl-bold": generateFont("heading-xxl", "bold"),

    "heading-xl-light": generateFont("heading-xl", "light"),
    "heading-xl-regular": generateFont("heading-xl", "regular"),
    "heading-xl-semibold": generateFont("heading-xl", "semibold"),
    "heading-xl-bold": generateFont("heading-xl", "bold"),

    "heading-lg-light": generateFont("heading-lg", "light"),
    "heading-lg-regular": generateFont("heading-lg", "regular"),
    "heading-lg-semibold": generateFont("heading-lg", "semibold"),
    "heading-lg-bold": generateFont("heading-lg", "bold"),

    "heading-md-light": generateFont("heading-md", "light"),
    "heading-md-regular": generateFont("heading-md", "regular"),
    "heading-md-semibold": generateFont("heading-md", "semibold"),
    "heading-md-bold": generateFont("heading-md", "bold"),

    "heading-sm-light": generateFont("heading-sm", "light"),
    "heading-sm-regular": generateFont("heading-sm", "regular"),
    "heading-sm-semibold": generateFont("heading-sm", "semibold"),
    "heading-sm-bold": generateFont("heading-sm", "bold"),

    "heading-xs-light": generateFont("heading-xs", "light"),
    "heading-xs-regular": generateFont("heading-xs", "regular"),
    "heading-xs-semibold": generateFont("heading-xs", "semibold"),
    "heading-xs-bold": generateFont("heading-xs", "bold"),

    "body-baseline-light": generateFont("body-baseline", "light"),
    "body-baseline-regular": generateFont("body-baseline", "regular"),
    "body-baseline-semibold": generateFont("body-baseline", "semibold"),
    "body-baseline-bold": generateFont("body-baseline", "bold"),

    "body-md-light": generateFont("body-md", "light"),
    "body-md-regular": generateFont("body-md", "regular"),
    "body-md-semibold": generateFont("body-md", "semibold"),
    "body-md-bold": generateFont("body-md", "bold"),

    "body-sm-light": generateFont("body-sm", "light"),
    "body-sm-regular": generateFont("body-sm", "regular"),
    "body-sm-semibold": generateFont("body-sm", "semibold"),
    "body-sm-bold": generateFont("body-sm", "bold"),

    "body-xs-light": generateFont("body-xs", "light"),
    "body-xs-regular": generateFont("body-xs", "regular"),
    "body-xs-semibold": generateFont("body-xs", "semibold"),
    "body-xs-bold": generateFont("body-xs", "bold"),

    "form-label-light": generateFont("form-label", "light"),
    "form-label-regular": generateFont("form-label", "regular"),
    "form-label-semibold": generateFont("form-label", "semibold"),
    "form-label-bold": generateFont("form-label", "bold"),

    "form-description-light": generateFont("form-description", "light"),
    "form-description-regular": generateFont("form-description", "regular"),
    "form-description-semibold": generateFont("form-description", "semibold"),
    "form-description-bold": generateFont("form-description", "bold"),

    Spec: {
        "font-family": "var(--fds-font-family)",
        "font-variant": "var(--fds-font-variant)",

        "weight-light": "var(--fds-font-weight-light)",
        "weight-regular": "var(--fds-font-weight-regular)",
        "weight-semibold": "var(--fds-font-weight-semibold)",
        "weight-bold": "var(--fds-font-weight-bold)",

        "heading-size-xxl": "var(--fds-font-heading-size-xxl)",
        "heading-size-xl": "var(--fds-font-heading-size-xl)",
        "heading-size-lg": "var(--fds-font-heading-size-lg)",
        "heading-size-md": "var(--fds-font-heading-size-md)",
        "heading-size-sm": "var(--fds-font-heading-size-sm)",
        "heading-size-xs": "var(--fds-font-heading-size-xs)",

        "heading-lh-xxl": "var(--fds-font-heading-lh-xxl)",
        "heading-lh-xl": "var(--fds-font-heading-lh-xl)",
        "heading-lh-lg": "var(--fds-font-heading-lh-lg)",
        "heading-lh-md": "var(--fds-font-heading-lh-md)",
        "heading-lh-sm": "var(--fds-font-heading-lh-sm)",
        "heading-lh-xs": "var(--fds-font-heading-lh-xs)",

        "heading-ls-xxl": "var(--fds-font-heading-ls-xxl)",
        "heading-ls-xl": "var(--fds-font-heading-ls-xl)",
        "heading-ls-lg": "var(--fds-font-heading-ls-lg)",
        "heading-ls-md": "var(--fds-font-heading-ls-md)",
        "heading-ls-sm": "var(--fds-font-heading-ls-sm)",
        "heading-ls-xs": "var(--fds-font-heading-ls-xs)",

        "body-size-baseline": "var(--fds-font-body-size-baseline)",
        "body-size-md": "var(--fds-font-body-size-md)",
        "body-size-sm": "var(--fds-font-body-size-sm)",
        "body-size-xs": "var(--fds-font-body-size-xs)",

        "body-lh-baseline": "var(--fds-font-body-lh-baseline)",
        "body-lh-md": "var(--fds-font-body-lh-md)",
        "body-lh-sm": "var(--fds-font-body-lh-sm)",
        "body-lh-xs": "var(--fds-font-body-lh-xs)",

        "body-ls-baseline": "var(--fds-font-body-ls-baseline)",
        "body-ls-md": "var(--fds-font-body-ls-md)",
        "body-ls-sm": "var(--fds-font-body-ls-sm)",
        "body-ls-xs": "var(--fds-font-body-ls-xs)",

        "form-label-size": "var(--fds-font-form-label-size)",
        "form-label-lh": "var(--fds-font-form-label-lh)",
        "form-label-ls": "var(--fds-font-form-label-ls)",

        "form-description-size": "var(--fds-font-form-description-size)",
        "form-description-lh": "var(--fds-font-form-description-lh)",
        "form-description-ls": "var(--fds-font-form-description-ls)",
    },
} as const satisfies Record<
    string,
    string | Record<string, FontCSSVariableString>
>;
