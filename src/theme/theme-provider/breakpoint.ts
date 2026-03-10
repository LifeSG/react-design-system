import { Breakpoint } from "../tokens/breakpoint";
import { parseCSSVariableValue, parsePxOrRemValue } from "../utils";

function getBreakpointRanges() {
    return [
        {
            key: "xxs",
            min: parseCSSVariableValue(Breakpoint["xxs-min"]),
            max: parseCSSVariableValue(Breakpoint["xxs-max"]),
        },
        {
            key: "xs",
            min: parseCSSVariableValue(Breakpoint["xs-min"]),
            max: parseCSSVariableValue(Breakpoint["xs-max"]),
        },
        {
            key: "sm",
            min: parseCSSVariableValue(Breakpoint["sm-min"]),
            max: parseCSSVariableValue(Breakpoint["sm-max"]),
        },
        {
            key: "md",
            min: parseCSSVariableValue(Breakpoint["md-min"]),
            max: parseCSSVariableValue(Breakpoint["md-max"]),
        },
        {
            key: "lg",
            min: parseCSSVariableValue(Breakpoint["lg-min"]),
            max: parseCSSVariableValue(Breakpoint["lg-max"]),
        },
        {
            key: "xl",
            min: parseCSSVariableValue(Breakpoint["xl-min"]),
            max: parseCSSVariableValue(Breakpoint["xl-max"]),
        },
        {
            key: "xxl",
            min: parseCSSVariableValue(Breakpoint["xxl-min"]),
            max: Infinity,
        },
    ] as const;
}

const BREAKPOINT_CLASS_PREFIX = "fds-breakpoint-";

export function applyBreakpointClasses() {
    const body = document.body;
    const width = window.innerWidth;

    [...body.classList].forEach((cls) => {
        if (cls.startsWith(BREAKPOINT_CLASS_PREFIX)) {
            body.classList.remove(cls);
        }
    });

    const BREAKPOINT_RANGES = getBreakpointRanges();

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

export function setupBreakpointListener() {
    if (!globalThis.window) return;

    applyBreakpointClasses();
    globalThis.window.addEventListener("resize", applyBreakpointClasses);

    return () => {
        globalThis.window.removeEventListener("resize", applyBreakpointClasses);
    };
}
