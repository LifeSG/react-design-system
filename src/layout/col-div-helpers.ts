import * as styles from "./col-div.styles";

export const BREAKPOINTS = [
    "xxs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
] as const;

export type BreakpointType = (typeof BREAKPOINTS)[number];

export const TOKEN_MAP = {
    xxs: {
        start: styles.tokens.xxsStart,
        span: styles.tokens.xxsSpan,
        end: styles.tokens.xxsEnd,
        startAttr: styles.tokens.xxsStartAttr,
        spanAttr: styles.tokens.xxsSpanAttr,
        endAttr: styles.tokens.xxsEndAttr,
    },
    xs: {
        start: styles.tokens.xsStart,
        span: styles.tokens.xsSpan,
        end: styles.tokens.xsEnd,
        startAttr: styles.tokens.xsStartAttr,
        spanAttr: styles.tokens.xsSpanAttr,
        endAttr: styles.tokens.xsEndAttr,
    },
    sm: {
        start: styles.tokens.smStart,
        span: styles.tokens.smSpan,
        end: styles.tokens.smEnd,
        startAttr: styles.tokens.smStartAttr,
        spanAttr: styles.tokens.smSpanAttr,
        endAttr: styles.tokens.smEndAttr,
    },
    md: {
        start: styles.tokens.mdStart,
        span: styles.tokens.mdSpan,
        end: styles.tokens.mdEnd,
        startAttr: styles.tokens.mdStartAttr,
        spanAttr: styles.tokens.mdSpanAttr,
        endAttr: styles.tokens.mdEndAttr,
    },
    lg: {
        start: styles.tokens.lgStart,
        span: styles.tokens.lgSpan,
        end: styles.tokens.lgEnd,
        startAttr: styles.tokens.lgStartAttr,
        spanAttr: styles.tokens.lgSpanAttr,
        endAttr: styles.tokens.lgEndAttr,
    },
    xl: {
        start: styles.tokens.xlStart,
        span: styles.tokens.xlSpan,
        end: styles.tokens.xlEnd,
        startAttr: styles.tokens.xlStartAttr,
        spanAttr: styles.tokens.xlSpanAttr,
        endAttr: styles.tokens.xlEndAttr,
    },
    xxl: {
        start: styles.tokens.xxlStart,
        span: styles.tokens.xxlSpan,
        end: styles.tokens.xxlEnd,
        startAttr: styles.tokens.xxlStartAttr,
        spanAttr: styles.tokens.xxlSpanAttr,
        endAttr: styles.tokens.xxlEndAttr,
    },
} as const;
