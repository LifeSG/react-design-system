import { RefObject, useEffect, useState } from "react";

export const useIntersectionObserver = (
    ref: RefObject<HTMLElement>,
    options: IntersectionObserverInit
): boolean => {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref.current, options]);

    return isIntersecting;
};
