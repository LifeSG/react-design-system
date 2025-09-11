import { MutableRefObject, Ref } from "react";
import { isReact19 } from "./version";

export const mergeRefs = <T>(...refs: Ref<T>[]) => {
    return (value: T | null) => {
        const cleanups: (() => void)[] = [];

        for (const ref of refs) {
            if (typeof ref === "function") {
                const cleanup = ref(value);
                const isCleanup = typeof cleanup === "function";
                cleanups.push(isCleanup ? cleanup : () => ref(null));
            } else {
                (ref as MutableRefObject<T | null>).current = value;
                cleanups.push(() => {
                    (ref as MutableRefObject<T | null>).current = null;
                });
            }
        }

        if (isReact19()) {
            return () => {
                for (const cleanup of cleanups) cleanup();
            };
        }
    };
};
