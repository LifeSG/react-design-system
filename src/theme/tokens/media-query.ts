const MAX_WIDTH_BREAKPOINTS = ["xxs", "xs", "sm", "md", "lg", "xl"] as const;
const MIN_WIDTH_BREAKPOINTS = [...MAX_WIDTH_BREAKPOINTS, "xxl"] as const;
const ORIENTATIONS = ["landscape", "portrait"] as const;

type WidthConstraint = "min" | "max";
type OrientationConstraint = (typeof ORIENTATIONS)[number];
type PseudoMediaQuerySpec<T extends readonly string[]> = Record<
    T[number],
    string
>;

const getPseudoMediaQuery = (breakpoint: string, type: WidthConstraint) =>
    `:where(body.fds-breakpoint-${breakpoint}-${type}) &`;

const getPseudoMediaQuerySpec = <T extends readonly string[]>(
    breakpoints: T,
    type: WidthConstraint
): PseudoMediaQuerySpec<T> => {
    const spec = {} as Record<T[number], string>;

    breakpoints.forEach((breakpoint) => {
        spec[breakpoint as T[number]] = getPseudoMediaQuery(breakpoint, type);
    });

    return spec;
};

const getOrientationMediaQuery = (orientation: OrientationConstraint) =>
    `@media (orientation: ${orientation})`;

const getOrientationMediaQuerySpec = <
    T extends readonly OrientationConstraint[]
>(
    orientations: T
): PseudoMediaQuerySpec<T> => {
    const spec = {} as Record<T[number], string>;

    orientations.forEach((orientation) => {
        spec[orientation as T[number]] = getOrientationMediaQuery(orientation);
    });

    return spec;
};

export const MediaQuery = {
    MaxWidth: getPseudoMediaQuerySpec(MAX_WIDTH_BREAKPOINTS, "max"),
    MinWidth: getPseudoMediaQuerySpec(MIN_WIDTH_BREAKPOINTS, "min"),
    Orientation: getOrientationMediaQuerySpec(ORIENTATIONS),
} as const;
