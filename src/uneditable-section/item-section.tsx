import clsx from "clsx";
import React from "react";

import type { UneditableSectionItemSectionProps } from "./types";
import * as styles from "./uneditable-section.styles";

export const Component = (
    { stretch, className, ...otherProps }: UneditableSectionItemSectionProps,
    ref: React.Ref<HTMLUListElement>
) => {
    return (
        <ul
            ref={ref}
            className={clsx(
                styles.gridUl,
                stretch && styles.columnWidthStretch,
                className
            )}
            {...otherProps}
        />
    );
};

export const UneditableItemSection = React.forwardRef(Component);
