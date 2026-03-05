import { Breakpoint } from "../tokens/breakpoint";
import { parseCSSVariableValue } from "../utils";

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

    body.classList.forEach((cls) => {
        if (cls.startsWith(BREAKPOINT_CLASS_PREFIX)) {
            body.classList.remove(cls);
        }
    });

    const BREAKPOINT_RANGES = getBreakpointRanges();

    const currentIndex = BREAKPOINT_RANGES.findIndex(
        (r) => width >= r.min && (r.max === Infinity || width <= r.max)
    );

    if (currentIndex === -1) return;

    for (let i = 0; i <= currentIndex; i++) {
        const range = BREAKPOINT_RANGES[i];
        body.classList.add(`${BREAKPOINT_CLASS_PREFIX}${range.key}`);
    }

    const current = BREAKPOINT_RANGES[currentIndex];
    body.classList.add(`${BREAKPOINT_CLASS_PREFIX}${current.key}-min`);
    if (current.max !== Infinity) {
        body.classList.add(`${BREAKPOINT_CLASS_PREFIX}${current.key}-max`);
    }
}

export function setupBreakpointListener() {
    if (typeof window === "undefined") return;

    applyBreakpointClasses();
    window.addEventListener("resize", applyBreakpointClasses);

    return () => {
        window.removeEventListener("resize", applyBreakpointClasses);
    };
}
