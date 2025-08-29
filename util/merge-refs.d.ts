import { Ref } from "react";
export declare const mergeRefs: <T>(...refs: Ref<T>[]) => (value: T | null) => () => void;
