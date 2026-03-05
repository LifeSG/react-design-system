export type ThemeType =
    | "a11y-playground"
    | "bookingsg"
    | "ccube"
    | "default"
    | "imda"
    | "lifesg"
    | "mylegacy"
    | "oneservice"
    | "pa"
    | "rbs"
    | "sgw-digital-lobby"
    | "spf"
    | "supportgowhere";

export type ThemeMode = "light" | "dark";

export type FontSize =
    | "heading-xxl"
    | "heading-xl"
    | "heading-lg"
    | "heading-md"
    | "heading-sm"
    | "heading-xs"
    | "body-baseline"
    | "body-md"
    | "body-sm"
    | "body-xs"
    | "form-label"
    | "form-description";

export type FontWeight = "light" | "regular" | "semibold" | "bold";

// ========================================================================
// Breakpoint Variables
// ========================================================================
export type FDSBreakpointVariableName =
    | "--fds-breakpoint-xxs-min"
    | "--fds-breakpoint-xxs-max"
    | "--fds-breakpoint-xs-min"
    | "--fds-breakpoint-xs-max"
    | "--fds-breakpoint-sm-min"
    | "--fds-breakpoint-sm-max"
    | "--fds-breakpoint-md-min"
    | "--fds-breakpoint-md-max"
    | "--fds-breakpoint-lg-min"
    | "--fds-breakpoint-lg-max"
    | "--fds-breakpoint-xl-min"
    | "--fds-breakpoint-xl-max"
    | "--fds-breakpoint-xxl-min"
    | "--fds-breakpoint-column-xxs"
    | "--fds-breakpoint-column-xs"
    | "--fds-breakpoint-column-sm"
    | "--fds-breakpoint-column-md"
    | "--fds-breakpoint-column-lg"
    | "--fds-breakpoint-column-xl"
    | "--fds-breakpoint-column-xxl"
    | "--fds-breakpoint-gutter-xxs"
    | "--fds-breakpoint-gutter-xs"
    | "--fds-breakpoint-gutter-sm"
    | "--fds-breakpoint-gutter-md"
    | "--fds-breakpoint-gutter-lg"
    | "--fds-breakpoint-gutter-xl"
    | "--fds-breakpoint-gutter-xxl"
    | "--fds-breakpoint-margin-xxs"
    | "--fds-breakpoint-margin-xs"
    | "--fds-breakpoint-margin-sm"
    | "--fds-breakpoint-margin-md"
    | "--fds-breakpoint-margin-lg"
    | "--fds-breakpoint-margin-xl"
    | "--fds-breakpoint-margin-xxl";

// ========================================================================
// Border Variables
// ========================================================================
export type FDSBorderVariableName =
    | "--fds-border-width-005"
    | "--fds-border-width-010"
    | "--fds-border-width-020"
    | "--fds-border-width-040"
    | "--fds-border-style-solid";

// ========================================================================
// Button Variables
// ========================================================================
export type FDSButtonVariableName =
    | "--fds-button-radius"
    | "--fds-button-default-colour-bg"
    | "--fds-button-default-colour-bg-hover"
    | "--fds-button-default-colour-text"
    | "--fds-button-secondary-colour-border"
    | "--fds-button-secondary-colour-text"
    | "--fds-button-light-colour-text"
    | "--fds-button-link-colour-text";

// ========================================================================
// Animation Variables
// ========================================================================
export type FDSAnimationVariableName = "--fds-loading-dots-spinner-colour";

// ========================================================================
// Navbar Variables
// ========================================================================
export type FDSNavbarVariableName =
    | "--fds-navbar-full-height"
    | "--fds-navbar-full-logo-height"
    | "--fds-navbar-compressed-height"
    | "--fds-navbar-compressed-logo-height"
    | "--fds-navbar-mobile-height"
    | "--fds-navbar-mobile-logo-height"
    | "--fds-navbar-colour-bg"
    | "--fds-navbar-colour-icon"
    | "--fds-navbar-link-colour-text"
    | "--fds-navbar-link-colour-text-hover"
    | "--fds-navbar-link-colour-text-selected-hover";

// ========================================================================
// Footer Variables
// ========================================================================
export type FDSFooterVariableName =
    | "--fds-footer-colour-bg"
    | "--fds-footer-colour-text"
    | "--fds-footer-link-colour-text"
    | "--fds-footer-link-colour-text-hover"
    | "--fds-footer-disclaimer-link-colour-text"
    | "--fds-footer-disclaimer-link-colour-text-hover";

// ========================================================================
// Font Variables
// ========================================================================
export type FDSFontVariableName =
    | "--fds-font-variant"
    | "--fds-font-heading-size-xxl"
    | "--fds-font-heading-size-xl"
    | "--fds-font-heading-size-lg"
    | "--fds-font-heading-size-md"
    | "--fds-font-heading-size-sm"
    | "--fds-font-heading-size-xs"
    | "--fds-font-heading-lh-xxl"
    | "--fds-font-heading-lh-xl"
    | "--fds-font-heading-lh-lg"
    | "--fds-font-heading-lh-md"
    | "--fds-font-heading-lh-sm"
    | "--fds-font-heading-lh-xs"
    | "--fds-font-heading-ls-xxl"
    | "--fds-font-heading-ls-xl"
    | "--fds-font-heading-ls-lg"
    | "--fds-font-heading-ls-md"
    | "--fds-font-heading-ls-sm"
    | "--fds-font-heading-ls-xs"
    | "--fds-font-weight-light"
    | "--fds-font-weight-regular"
    | "--fds-font-weight-semibold"
    | "--fds-font-weight-bold"
    | "--fds-font-family"
    | "--fds-font-body-size-baseline"
    | "--fds-font-body-size-md"
    | "--fds-font-body-size-sm"
    | "--fds-font-body-size-xs"
    | "--fds-font-body-lh-baseline"
    | "--fds-font-body-lh-md"
    | "--fds-font-body-lh-sm"
    | "--fds-font-body-lh-xs"
    | "--fds-font-body-ls-baseline"
    | "--fds-font-body-ls-md"
    | "--fds-font-body-ls-sm"
    | "--fds-font-body-ls-xs"
    | "--fds-font-form-label-size"
    | "--fds-font-form-description-size"
    | "--fds-font-form-label-lh"
    | "--fds-font-form-description-lh"
    | "--fds-font-form-label-ls"
    | "--fds-font-form-description-ls";

// ========================================================================
// Spacing Variables
// ========================================================================
export type FDSSpacingVariableName =
    | "--fds-spacing-0"
    | "--fds-spacing-4"
    | "--fds-spacing-8"
    | "--fds-spacing-12"
    | "--fds-spacing-16"
    | "--fds-spacing-20"
    | "--fds-spacing-24"
    | "--fds-spacing-32"
    | "--fds-spacing-40"
    | "--fds-spacing-48"
    | "--fds-spacing-64"
    | "--fds-spacing-72"
    | "--fds-layout-xs"
    | "--fds-layout-sm"
    | "--fds-layout-md"
    | "--fds-layout-lg"
    | "--fds-layout-xl"
    | "--fds-layout-xxl"
    | "--fds-layout-xxxl";

// ========================================================================
// Motion Variables
// ========================================================================
export type FDSMotionVariableName =
    | "--fds-motion-duration-150"
    | "--fds-motion-duration-250"
    | "--fds-motion-duration-350"
    | "--fds-motion-duration-500"
    | "--fds-motion-duration-800"
    | "--fds-motion-duration-1000"
    | "--fds-motion-timing-ease-default"
    | "--fds-motion-timing-ease-standard"
    | "--fds-motion-timing-ease-entrance"
    | "--fds-motion-timing-ease-exit";

// ========================================================================
// Radius Variables
// ========================================================================
export type FDSRadiusVariableName =
    | "--fds-radius-none"
    | "--fds-radius-xs"
    | "--fds-radius-sm"
    | "--fds-radius-md"
    | "--fds-radius-lg"
    | "--fds-radius-full";

// ========================================================================
// Shadow Variables
// ========================================================================
export type FDSShadowVariableName =
    | "--fds-shadow-xs-subtle"
    | "--fds-shadow-xs-strong"
    | "--fds-shadow-xs-focus-strong"
    | "--fds-shadow-xs-error-strong"
    | "--fds-shadow-sm-subtle"
    | "--fds-shadow-sm-strong"
    | "--fds-shadow-md-subtle"
    | "--fds-shadow-md-strong"
    | "--fds-shadow-lg-subtle"
    | "--fds-shadow-lg-strong";

// ========================================================================
// Primitive Colour Variables
// ========================================================================
export type FDSPrimitiveColourVariableName =
    | "--fds-colour-brand-10"
    | "--fds-colour-brand-20"
    | "--fds-colour-brand-30"
    | "--fds-colour-brand-40"
    | "--fds-colour-brand-50"
    | "--fds-colour-brand-60"
    | "--fds-colour-brand-70"
    | "--fds-colour-brand-80"
    | "--fds-colour-brand-90"
    | "--fds-colour-brand-95"
    | "--fds-colour-brand-100"
    | "--fds-colour-primary-10"
    | "--fds-colour-primary-20"
    | "--fds-colour-primary-30"
    | "--fds-colour-primary-40"
    | "--fds-colour-primary-50"
    | "--fds-colour-primary-60"
    | "--fds-colour-primary-70"
    | "--fds-colour-primary-80"
    | "--fds-colour-primary-90"
    | "--fds-colour-primary-95"
    | "--fds-colour-primary-100"
    | "--fds-colour-secondary-10"
    | "--fds-colour-secondary-20"
    | "--fds-colour-secondary-30"
    | "--fds-colour-secondary-40"
    | "--fds-colour-secondary-50"
    | "--fds-colour-secondary-60"
    | "--fds-colour-secondary-70"
    | "--fds-colour-secondary-80"
    | "--fds-colour-secondary-90"
    | "--fds-colour-secondary-95"
    | "--fds-colour-secondary-100"
    | "--fds-colour-neutral-10"
    | "--fds-colour-neutral-20"
    | "--fds-colour-neutral-30"
    | "--fds-colour-neutral-40"
    | "--fds-colour-neutral-50"
    | "--fds-colour-neutral-60"
    | "--fds-colour-neutral-70"
    | "--fds-colour-neutral-80"
    | "--fds-colour-neutral-90"
    | "--fds-colour-neutral-95"
    | "--fds-colour-neutral-100"
    | "--fds-colour-success-10"
    | "--fds-colour-success-20"
    | "--fds-colour-success-30"
    | "--fds-colour-success-40"
    | "--fds-colour-success-50"
    | "--fds-colour-success-60"
    | "--fds-colour-success-70"
    | "--fds-colour-success-80"
    | "--fds-colour-success-90"
    | "--fds-colour-success-95"
    | "--fds-colour-success-100"
    | "--fds-colour-warning-10"
    | "--fds-colour-warning-20"
    | "--fds-colour-warning-30"
    | "--fds-colour-warning-40"
    | "--fds-colour-warning-50"
    | "--fds-colour-warning-60"
    | "--fds-colour-warning-70"
    | "--fds-colour-warning-80"
    | "--fds-colour-warning-90"
    | "--fds-colour-warning-95"
    | "--fds-colour-warning-100"
    | "--fds-colour-error-10"
    | "--fds-colour-error-20"
    | "--fds-colour-error-30"
    | "--fds-colour-error-40"
    | "--fds-colour-error-50"
    | "--fds-colour-error-60"
    | "--fds-colour-error-70"
    | "--fds-colour-error-80"
    | "--fds-colour-error-90"
    | "--fds-colour-error-95"
    | "--fds-colour-error-100"
    | "--fds-colour-info-10"
    | "--fds-colour-info-20"
    | "--fds-colour-info-30"
    | "--fds-colour-info-40"
    | "--fds-colour-info-50"
    | "--fds-colour-info-60"
    | "--fds-colour-info-70"
    | "--fds-colour-info-80"
    | "--fds-colour-info-90"
    | "--fds-colour-info-95"
    | "--fds-colour-info-100"
    | "--fds-colour-white"
    | "--fds-colour-black"
    | "--fds-colour-primary-inverse";

// ========================================================================
// Semantic Colour Variables
// ========================================================================
export type FDSSemanticColourVariableName =
    | "--fds-colour-text"
    | "--fds-colour-text-subtle"
    | "--fds-colour-text-subtler"
    | "--fds-colour-text-subtlest"
    | "--fds-colour-text-primary"
    | "--fds-colour-text-primary-strongest"
    | "--fds-colour-text-hover"
    | "--fds-colour-text-selected"
    | "--fds-colour-text-selected-hover"
    | "--fds-colour-text-disabled"
    | "--fds-colour-text-disabled-subtle"
    | "--fds-colour-text-disabled-subtlest"
    | "--fds-colour-text-selected-disabled"
    | "--fds-colour-text-success"
    | "--fds-colour-text-warning"
    | "--fds-colour-text-error"
    | "--fds-colour-text-info"
    | "--fds-colour-text-inverse"
    | "--fds-colour-icon"
    | "--fds-colour-icon-subtle"
    | "--fds-colour-icon-strongest"
    | "--fds-colour-icon-primary"
    | "--fds-colour-icon-primary-subtle"
    | "--fds-colour-icon-primary-subtlest"
    | "--fds-colour-icon-hover"
    | "--fds-colour-icon-selected"
    | "--fds-colour-icon-selected-hover"
    | "--fds-colour-icon-disabled"
    | "--fds-colour-icon-disabled-subtle"
    | "--fds-colour-icon-selected-disabled"
    | "--fds-colour-icon-success"
    | "--fds-colour-icon-warning"
    | "--fds-colour-icon-error"
    | "--fds-colour-icon-error-strong"
    | "--fds-colour-icon-info"
    | "--fds-colour-icon-inverse"
    | "--fds-colour-icon-primary-inverse"
    | "--fds-colour-border"
    | "--fds-colour-border-strong"
    | "--fds-colour-border-stronger"
    | "--fds-colour-border-primary"
    | "--fds-colour-border-primary-subtle"
    | "--fds-colour-border-hover"
    | "--fds-colour-border-hover-strong"
    | "--fds-colour-border-selected"
    | "--fds-colour-border-selected-subtle"
    | "--fds-colour-border-selected-subtlest"
    | "--fds-colour-border-selected-hover"
    | "--fds-colour-border-focus"
    | "--fds-colour-border-focus-strong"
    | "--fds-colour-border-disabled"
    | "--fds-colour-border-selected-disabled"
    | "--fds-colour-border-success"
    | "--fds-colour-border-warning"
    | "--fds-colour-border-error"
    | "--fds-colour-border-error-focus"
    | "--fds-colour-border-error-focus-strong"
    | "--fds-colour-border-error-strong"
    | "--fds-colour-border-info"
    | "--fds-colour-bg"
    | "--fds-colour-bg-strong"
    | "--fds-colour-bg-stronger"
    | "--fds-colour-bg-strongest"
    | "--fds-colour-bg-hover"
    | "--fds-colour-bg-hover-strong"
    | "--fds-colour-bg-hover-subtle"
    | "--fds-colour-bg-hover-neutral"
    | "--fds-colour-bg-hover-neutral-strong"
    | "--fds-colour-bg-selected"
    | "--fds-colour-bg-selected-hover"
    | "--fds-colour-bg-selected-strong"
    | "--fds-colour-bg-selected-stronger"
    | "--fds-colour-bg-selected-strongest"
    | "--fds-colour-bg-selected-strongest-hover"
    | "--fds-colour-bg-disabled"
    | "--fds-colour-bg-selected-disabled"
    | "--fds-colour-bg-selected-stronger-disabled"
    | "--fds-colour-bg-success"
    | "--fds-colour-bg-success-hover"
    | "--fds-colour-bg-success-strong"
    | "--fds-colour-bg-success-strong-hover"
    | "--fds-colour-bg-warning"
    | "--fds-colour-bg-warning-hover"
    | "--fds-colour-bg-warning-strong"
    | "--fds-colour-bg-warning-strong-hover"
    | "--fds-colour-bg-info"
    | "--fds-colour-bg-info-hover"
    | "--fds-colour-bg-info-strong"
    | "--fds-colour-bg-info-strong-hover"
    | "--fds-colour-bg-error"
    | "--fds-colour-bg-error-hover"
    | "--fds-colour-bg-error-strong"
    | "--fds-colour-bg-error-strong-hover"
    | "--fds-colour-bg-inverse"
    | "--fds-colour-bg-inverse-subtle"
    | "--fds-colour-bg-inverse-subtler"
    | "--fds-colour-bg-inverse-subtlest"
    | "--fds-colour-bg-inverse-hover"
    | "--fds-colour-bg-primary"
    | "--fds-colour-bg-primary-subtle"
    | "--fds-colour-bg-primary-subtler"
    | "--fds-colour-bg-primary-subtlest"
    | "--fds-colour-bg-available"
    | "--fds-colour-bg-primary-hover"
    | "--fds-colour-bg-primary-subtlest-hover"
    | "--fds-colour-bg-primary-subtlest-selected"
    | "--fds-colour-overlay-strong"
    | "--fds-colour-overlay-subtle"
    | "--fds-colour-hyperlink"
    | "--fds-colour-hyperlink-hover"
    | "--fds-colour-hyperlink-visited"
    | "--fds-colour-hyperlink-inverse"
    | "--fds-colour-focus-ring"
    | "--fds-colour-focus-ring-inverse";

// ========================================================================
// Union of all FDS CSS variable names
// ========================================================================
/**
 * Type representing all FDS CSS variable names
 */
export type FDSVariableName =
    | FDSBreakpointVariableName
    | FDSBorderVariableName
    | FDSButtonVariableName
    | FDSAnimationVariableName
    | FDSNavbarVariableName
    | FDSFooterVariableName
    | FDSFontVariableName
    | FDSSpacingVariableName
    | FDSMotionVariableName
    | FDSRadiusVariableName
    | FDSShadowVariableName
    | FDSPrimitiveColourVariableName
    | FDSSemanticColourVariableName;

/**
 * Type for CSS variable strings with var() wrapper
 */
export type CSSVariableString = `var(${FDSVariableName})`;

export type BreakpointCSSVariableString = `var(${FDSBreakpointVariableName})`;
export type BorderCSSVariableString = `var(${FDSBorderVariableName})`;
export type FontCSSVariableString = `var(${FDSFontVariableName})`;
export type MotionCSSVariableString = `var(${FDSMotionVariableName})`;
export type PrimitiveColourCSSVariableString =
    `var(${FDSPrimitiveColourVariableName})`;
export type RadiusCSSVariableString = `var(${FDSRadiusVariableName})`;
export type SemanticColourCSSVariableString =
    `var(${FDSSemanticColourVariableName})`;
export type ShadowCSSVariableString = `var(${FDSShadowVariableName})`;
export type SpacingCSSVariableString = `var(${FDSSpacingVariableName})`;
