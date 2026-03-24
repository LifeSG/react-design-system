const Base = "all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)";
const Custom = (duration: number) =>
    `all ${duration}ms cubic-bezier(0.21, 0.79, 0.53, 1)`;

/** @deprecated */
export const V2_Transition = {
    Base,
    Custom,
};
