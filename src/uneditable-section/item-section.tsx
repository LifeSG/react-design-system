import clsx from "clsx";
import React from "react";

import type { UneditableSectionItemSectionProps } from "./types";
import { GridUl } from "./uneditable-section.styles";

export const Component = (
    { stretch, className, ...otherProps }: UneditableSectionItemSectionProps,
    ref: React.Ref<HTMLUListElement>
) => {
    return (
        <GridUl
            ref={ref}
            className={clsx(stretch && "columnWidthStretch", className)}
            {...otherProps}
        />
    );
};

export const UneditableItemSection = React.forwardRef(Component);
