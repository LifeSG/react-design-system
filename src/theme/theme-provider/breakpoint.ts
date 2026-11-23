import { Breakpoint } from "../tokens/breakpoint";
import { BREAKPOINT_SIZES, type CSSVariableString } from "../types";
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

/**
 * Self-contained equivalent of `applyBreakpointClasses` for use as an inline
 * `<script>`. It runs while the HTML is parsed, so the `fds-breakpoint-*`
 * classes are on `<body>` before hydration and avoid a layout shift.
 *
 * Tokens are read from `:root` because the theme element is not in the DOM yet.
 */
export const BREAKPOINT_INLINE_SCRIPT = `
(function () {
    try {
        const classPrefix = ${JSON.stringify(BREAKPOINT_CLASS_PREFIX)};
        const breakpointKeys = ${JSON.stringify(BREAKPOINT_SIZES)};
        const body = document.body;

        if (!body || !window.matchMedia) return;

        const rootStyle = getComputedStyle(document.documentElement);

        function getBreakpointValue(name) {
            return rootStyle
                .getPropertyValue("--fds-breakpoint-" + name)
                .trim();
        }

        breakpointKeys.forEach(function (key, index) {
            const atMax = index === breakpointKeys.length - 1;
            const isMinMatched = window.matchMedia("(min-width: " + getBreakpointValue(key + "-min") + ")").matches;
            const isMaxMatched = atMax ? false : window.matchMedia("(max-width: " + getBreakpointValue(key + "-max") + ")").matches;
            const isWithinRange = isMinMatched && (atMax || isMaxMatched);

            if (isWithinRange) {
                body.classList.add(classPrefix + key);
            }

            if (isMinMatched) {
                body.classList.add(classPrefix + key + "-min");
            }

            if (isMaxMatched) {
                body.classList.add(classPrefix + key + "-max");
            }
        });
    } catch (e) {}
})();
`;

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
