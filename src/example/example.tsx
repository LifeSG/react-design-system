import { useLayoutEffect, useRef } from "react";
import { ExampleProps } from "./types";

// TODO: remove after v4 migration is complete
export const Example = ({
    children,
    ...otherProps
}: ExampleProps): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (ref.current) {
            const element = ref.current;
            element.style.setProperty("border", "1px solid black");
            element.style.setProperty("padding", "1rem");
            element.style.setProperty("border-radius", "0.5rem");
            element.style.setProperty("width", "50%");
        }
    }, []);

    return (
        <div ref={ref} {...otherProps}>
            {children}
        </div>
    );
};
