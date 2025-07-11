import { RefObject, useEffect } from "react";

export function useBlur(ref: RefObject<HTMLElement>, onBlur: () => void) {
    useEffect(() => {
        const handleBlur = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onBlur();
            }
        };

        document.addEventListener("click", handleBlur, true);
        return () => {
            document.removeEventListener("click", handleBlur, true);
        };
    }, [ref, onBlur]);
}
