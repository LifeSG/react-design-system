const BREAKPOINT_RANGES = [
    { key: "xxs", min: 0, max: 320 },
    { key: "xs", min: 321, max: 375 },
    { key: "sm", min: 376, max: 480 },
    { key: "md", min: 481, max: 768 },
    { key: "lg", min: 769, max: 1200 },
    { key: "xl", min: 1201, max: 1440 },
    { key: "xxl", min: 1441, max: Infinity },
] as const;

const BREAKPOINT_CLASS_PREFIX = "fds-breakpoint-";

export function applyBreakpointClasses() {
    const body = document.body;
    const width = window.innerWidth;

    body.classList.forEach((cls) => {
        if (cls.startsWith(BREAKPOINT_CLASS_PREFIX)) {
            body.classList.remove(cls);
        }
    });

    const current = BREAKPOINT_RANGES.find(
        (r) => width >= r.min && (r.max === Infinity || width <= r.max)
    )!;

    body.classList.add(`${BREAKPOINT_CLASS_PREFIX}${current.key}-min`);

    if (current.max !== Infinity) {
        body.classList.add(`${BREAKPOINT_CLASS_PREFIX}${current.key}-max`);
    }

    body.classList.add(`${BREAKPOINT_CLASS_PREFIX}${current.key}`);
}

export function setupBreakpointListener() {
    if (typeof window === "undefined") return;

    applyBreakpointClasses();
    window.addEventListener("resize", applyBreakpointClasses);

    return () => {
        window.removeEventListener("resize", applyBreakpointClasses);
    };
}
