import React from "react";
import { AccordionProps } from "./types";
export declare const Accordion: (({ children, title, enableExpandAll, initialDisplay, showTitleInMobile, id, "data-testid": testId, className, headingLevel, }: AccordionProps) => JSX.Element) & {
    Item: (props: import("./types").AccordionItemProps & React.RefAttributes<import("./types").AccordionItemHandle>) => React.ReactElement | null;
};
