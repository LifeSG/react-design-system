import { Breakpoint } from "../tokens/breakpoint";
import type { CSSVariableString } from "../types";
import { parseCSSVariableValue, parsePxOrRemValue } from "../utils";

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

export function applyBreakpointClasses(sourceElement: HTMLElement) {
    const body = document.body;
    const width = window.innerWidth;

    [...body.classList].forEach((cls) => {
        if (cls.startsWith(BREAKPOINT_CLASS_PREFIX)) {
            body.classList.remove(cls);
        }
    });

    const BREAKPOINT_RANGES = getBreakpointRanges(sourceElement);

    BREAKPOINT_RANGES.forEach((range) => {
        const minValue = parsePxOrRemValue(range.min);
        const maxValue =
            range.max === Infinity
                ? Infinity
                : parsePxOrRemValue(range.max as string);

        const isMinMatched = width >= minValue;
        const isMaxMatched = maxValue === Infinity ? false : width <= maxValue;
        const isWithinRange =
            isMinMatched && (maxValue === Infinity || isMaxMatched);

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
    if (!globalThis.window) return;

    const handleBreakpointChange = () => {
        applyBreakpointClasses(sourceElement);
    };

    handleBreakpointChange();
    globalThis.window.addEventListener("resize", handleBreakpointChange);

    return () => {
        globalThis.window.removeEventListener("resize", handleBreakpointChange);
    };
}
