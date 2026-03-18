import { Breakpoint } from "../tokens/breakpoint";
import { parseCSSVariableValue, parsePxOrRemValue } from "../utils";

function getBreakpointRanges(sourceElement: HTMLElement) {
    return [
        {
            key: "xxs",
            min: parseCSSVariableValue(Breakpoint["xxs-min"], sourceElement),
            max: parseCSSVariableValue(Breakpoint["xxs-max"], sourceElement),
        },
        {
            key: "xs",
            min: parseCSSVariableValue(Breakpoint["xs-min"], sourceElement),
            max: parseCSSVariableValue(Breakpoint["xs-max"], sourceElement),
        },
        {
            key: "sm",
            min: parseCSSVariableValue(Breakpoint["sm-min"], sourceElement),
            max: parseCSSVariableValue(Breakpoint["sm-max"], sourceElement),
        },
        {
            key: "md",
            min: parseCSSVariableValue(Breakpoint["md-min"], sourceElement),
            max: parseCSSVariableValue(Breakpoint["md-max"], sourceElement),
        },
        {
            key: "lg",
            min: parseCSSVariableValue(Breakpoint["lg-min"], sourceElement),
            max: parseCSSVariableValue(Breakpoint["lg-max"], sourceElement),
        },
        {
            key: "xl",
            min: parseCSSVariableValue(Breakpoint["xl-min"], sourceElement),
            max: parseCSSVariableValue(Breakpoint["xl-max"], sourceElement),
        },
        {
            key: "xxl",
            min: parseCSSVariableValue(Breakpoint["xxl-min"], sourceElement),
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

    const BREAKPOINT_RANGES = getBreakpointRanges(document.documentElement);

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
