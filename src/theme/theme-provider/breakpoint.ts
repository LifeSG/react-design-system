import { Breakpoint } from "../tokens/breakpoint";
import type { CSSVariableString } from "../types";
import { parseCSSVariableValue } from "../utils";

function getBreakpointRanges(sourceElement: HTMLElement) {
    const getBreakpointValue = (token: CSSVariableString) => {
        const scopedValue = parseCSSVariableValue(token, sourceElement);
        if (scopedValue) return scopedValue;

        if (sourceElement !== document.documentElement) {
            return parseCSSVariableValue(token, document.documentElement);
        }

        return scopedValue;
    };

    return [
        {
            key: "xxs",
            min: getBreakpointValue(Breakpoint["xxs-min"]),
            max: getBreakpointValue(Breakpoint["xxs-max"]),
        },
        {
            key: "xs",
            min: getBreakpointValue(Breakpoint["xs-min"]),
            max: getBreakpointValue(Breakpoint["xs-max"]),
        },
        {
            key: "sm",
            min: getBreakpointValue(Breakpoint["sm-min"]),
            max: getBreakpointValue(Breakpoint["sm-max"]),
        },
        {
            key: "md",
            min: getBreakpointValue(Breakpoint["md-min"]),
            max: getBreakpointValue(Breakpoint["md-max"]),
        },
        {
            key: "lg",
            min: getBreakpointValue(Breakpoint["lg-min"]),
            max: getBreakpointValue(Breakpoint["lg-max"]),
        },
        {
            key: "xl",
            min: getBreakpointValue(Breakpoint["xl-min"]),
            max: getBreakpointValue(Breakpoint["xl-max"]),
        },
        {
            key: "xxl",
            min: getBreakpointValue(Breakpoint["xxl-min"]),
            max: Infinity,
        },
    ] as const;
}

const BREAKPOINT_CLASS_PREFIX = "fds-breakpoint-";

function applyBreakpointClasses(sourceElement: HTMLElement) {
    const body = document.body;

    [...body.classList].forEach((cls) => {
        if (cls.startsWith(BREAKPOINT_CLASS_PREFIX)) {
            body.classList.remove(cls);
        }
    });

    const BREAKPOINT_RANGES = getBreakpointRanges(sourceElement);

    BREAKPOINT_RANGES.forEach((range) => {
        const isMinMatched = window.matchMedia(
            `(min-width: ${range.min})`
        ).matches;
        const isMaxMatched =
            range.max === Infinity
                ? false
                : window.matchMedia(`(max-width: ${range.max})`).matches;
        const isWithinRange =
            isMinMatched && (range.max === Infinity || isMaxMatched);

        if (isWithinRange) {
            body.classList.add(`${BREAKPOINT_CLASS_PREFIX}${range.key}`);
        }

        if (isMinMatched) {
            body.classList.add(`${BREAKPOINT_CLASS_PREFIX}${range.key}-min`);
        }

        if (isMaxMatched) {
            body.classList.add(`${BREAKPOINT_CLASS_PREFIX}${range.key}-max`);
        }
    });
}

export function setupBreakpointListener(sourceElement: HTMLElement) {
    if (!globalThis.window || !globalThis.window.matchMedia) return;

    const handleBreakpointChange = () => {
        applyBreakpointClasses(sourceElement);
    };

    handleBreakpointChange();
    globalThis.window.addEventListener("resize", handleBreakpointChange);

    return () => {
        globalThis.window.removeEventListener("resize", handleBreakpointChange);
    };
}
