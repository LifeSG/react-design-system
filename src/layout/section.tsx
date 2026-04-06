import clsx from "clsx";
import React from "react";

import * as styles from "./section.styles";
import type { SectionProps } from "./types";

const Component = (
    props: SectionProps,
    ref: React.Ref<HTMLDivElement>
): JSX.Element => {
    const {
        children,
        "data-testid": testId = "section",
        className,
        ...otherProps
    } = props;

    return (
        <section
            ref={ref}
            data-testid={testId}
            className={clsx(styles.section, className)}
            {...otherProps}
        >
            {children}
        </section>
    );
};

export const Section = React.forwardRef(Component);
