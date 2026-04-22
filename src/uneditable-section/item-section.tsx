import React from "react";
import { UneditableSectionItemSectionProps } from "./types";
import { GridUl } from "./uneditable-section.styles";

export const Component = (
    { stretch, ...otherProps }: UneditableSectionItemSectionProps,
    ref: React.Ref<HTMLUListElement>
) => {
    return <GridUl ref={ref} $stretch={stretch} {...otherProps} />;
};

export const UneditableItemSection = React.forwardRef(Component);
