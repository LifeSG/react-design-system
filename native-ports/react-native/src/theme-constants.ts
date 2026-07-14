/**
 * Resolved hex colour values from the LifeSG theme (light mode).
 *
 * These are extracted from @lifesg/flagship-styles lifesg.css so that
 * React Native StyleSheets can reference concrete values instead of
 * CSS custom-property indirections.
 *
 * The semantic token names mirror the CSS variable names (minus the
 * `--fds-colour-` prefix) for easy cross-referencing.
 */

// ---------------------------------------------------------------------------
// Primitive palette
// ---------------------------------------------------------------------------
export const PrimitiveColours = {
    brand10: "#2C0C0B",
    brand20: "#4C1513",
    brand30: "#6C1D1B",
    brand40: "#922825",
    brand50: "#BF3431",
    brand60: "#F15D5A",
    brand70: "#F69491",
    brand80: "#FABAB7",
    brand90: "#FCD7D2",
    brand95: "#FFEBE7",
    brand100: "#FFF6F4",

    primary10: "#001731",
    primary20: "#002752",
    primary30: "#003874",
    primary40: "#004D9F",
    primary50: "#1768BE",
    primary60: "#3C91EC",
    primary70: "#6CB4FF",
    primary80: "#A5CDFF",
    primary90: "#CFE1FE",
    primary95: "#E8F0FE",
    primary100: "#F7F9FF",

    secondary10: "#131529",
    secondary20: "#222547",
    secondary30: "#2F3565",
    secondary40: "#42498B",
    secondary50: "#5B62A7",
    secondary60: "#858CBD",
    secondary70: "#A8ADCF",
    secondary80: "#C6C9E0",
    secondary90: "#DDDFEC",
    secondary95: "#EDEEF5",
    secondary100: "#F8F8FB",

    neutral10: "#161616",
    neutral20: "#282828",
    neutral30: "#393939",
    neutral40: "#4E4E4E",
    neutral50: "#686868",
    neutral60: "#8E8E8E",
    neutral70: "#AFAFB0",
    neutral80: "#C7CACA",
    neutral90: "#DDE1E2",
    neutral95: "#EDEFEF",
    neutral100: "#F9F9F9",

    success10: "#081A0F",
    success20: "#0E2D1B",
    success30: "#154126",
    success40: "#1C5A34",
    success50: "#257645",
    success60: "#44A068",
    success70: "#64C189",
    success80: "#80DCA5",
    success90: "#B4ECCB",
    success95: "#D5F6E2",
    success100: "#EFFCF4",

    warning10: "#221302",
    warning20: "#3B2204",
    warning30: "#543106",
    warning40: "#744408",
    warning50: "#98590C",
    warning60: "#D07A13",
    warning70: "#E4A244",
    warning80: "#F5C26C",
    warning90: "#FADBA6",
    warning95: "#FCECD4",
    warning100: "#FDF7F0",

    error10: "#330505",
    error20: "#550808",
    error30: "#750C0C",
    error40: "#9E130F",
    error50: "#CB2213",
    error60: "#DE6C6C",
    error70: "#E89B9B",
    error80: "#EFBEBE",
    error90: "#F5D9D9",
    error95: "#F9ECEC",
    error100: "#FCF7F7",

    info10: "#021824",
    info20: "#032B3F",
    info30: "#053D59",
    info40: "#06547B",
    info50: "#176E9B",
    info60: "#5296BE",
    info70: "#82B5DA",
    info80: "#ACCFE7",
    info90: "#CCE3F1",
    info95: "#E3F1F8",
    info100: "#F4FAFD",

    white: "#FFFFFF",
    black: "#000000",
    primaryInverse: "#FEAB10",
} as const;

// ---------------------------------------------------------------------------
// Semantic tokens  (light-mode resolved values)
// ---------------------------------------------------------------------------
export const ThemeColours = {
    // text
    text: PrimitiveColours.neutral20, // #282828
    textSubtle: PrimitiveColours.neutral30, // #393939
    textSubtler: PrimitiveColours.neutral50, // #686868
    textSubtlest: PrimitiveColours.neutral60, // #8E8E8E
    textPrimary: PrimitiveColours.primary50, // #1768BE
    textPrimaryStrong: PrimitiveColours.primary40, // #004D9F
    textBrand: PrimitiveColours.brand50, // #BF3431
    textHover: PrimitiveColours.primary40, // #004D9F
    textSelected: PrimitiveColours.primary50, // #1768BE
    textDisabled: PrimitiveColours.neutral50, // #686868
    textDisabledSubtle: PrimitiveColours.neutral60, // #8E8E8E
    textDisabledSubtlest: PrimitiveColours.neutral80, // #C7CACA
    textError: PrimitiveColours.error40, // #9E130F
    textInverse: PrimitiveColours.white, // #FFFFFF

    // icon
    icon: PrimitiveColours.neutral50,
    iconPrimary: PrimitiveColours.primary50,
    iconDisabled: PrimitiveColours.neutral50,
    iconError: PrimitiveColours.error50,
    iconInverse: PrimitiveColours.white,

    // border
    border: PrimitiveColours.neutral90, // #DDE1E2
    borderStrong: PrimitiveColours.neutral70, // #AFAFB0
    borderStronger: PrimitiveColours.neutral50, // #686868
    borderPrimary: PrimitiveColours.primary50, // #1768BE
    borderSelected: PrimitiveColours.primary50, // #1768BE
    borderFocus: PrimitiveColours.primary60, // #3C91EC
    borderDisabled: PrimitiveColours.neutral90, // #DDE1E2
    borderError: PrimitiveColours.error60, // #DE6C6C
    borderErrorStrong: PrimitiveColours.error40, // #9E130F

    // background
    bg: PrimitiveColours.white, // #FFFFFF
    bgStrong: PrimitiveColours.neutral100, // #F9F9F9
    bgStronger: PrimitiveColours.neutral95, // #EDEFEF
    bgStrongest: PrimitiveColours.neutral90, // #DDE1E2
    bgHover: PrimitiveColours.primary95, // #E8F0FE
    bgHoverStrong: PrimitiveColours.primary90, // #CFE1FE
    bgSelected: PrimitiveColours.primary95, // #E8F0FE
    bgSelectedStrongest: PrimitiveColours.primary50, // #1768BE
    bgSelectedStrongestHover: PrimitiveColours.primary40, // #004D9F
    bgDisabled: PrimitiveColours.neutral95, // #EDEFEF
    bgPrimary: PrimitiveColours.primary50, // #1768BE
    bgPrimaryHover: PrimitiveColours.primary40, // #004D9F
    bgPrimarySubtler: PrimitiveColours.primary95, // #E8F0FE
    bgPrimarySubtlest: PrimitiveColours.primary100, // #F7F9FF
    bgErrorStrong: PrimitiveColours.error50, // #CB2213
    bgErrorStrongHover: PrimitiveColours.error40, // #9E130F

    // component: button
    buttonDefaultBg: PrimitiveColours.primary50, // --fds-button-default-colour-bg
    buttonDefaultBgHover: PrimitiveColours.primary40,
    buttonDefaultText: PrimitiveColours.white, // --fds-button-default-colour-text
    buttonSecondaryBorder: PrimitiveColours.primary50,
    buttonSecondaryText: PrimitiveColours.primary50,
    buttonLightText: PrimitiveColours.primary50,
    buttonLinkText: PrimitiveColours.primary50,

    // animation
    loadingSpinnerColour: PrimitiveColours.brand50, // #BF3431

    // misc
    white: PrimitiveColours.white,
    black: PrimitiveColours.black,
    focusRing: PrimitiveColours.primary50,
} as const;
