import { EffectCallback, useEffect, useState } from "react";

/**
 * Run this logic only on mount
 */
export const useMount = (onMount: EffectCallback): void => {
    useEffect(() => {
        return onMount();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export const useIsMount = (): boolean => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted;
};
