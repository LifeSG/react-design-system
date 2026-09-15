import type { Ref } from "react";
export declare const mergeRefs: <T>(...refs: (Ref<T> | undefined)[]) => (value: T | null) => (() => void) | undefined;
