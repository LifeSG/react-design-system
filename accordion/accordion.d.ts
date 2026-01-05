import React from "react";
import { AccordionProps } from "./types";
export declare const Accordion: (({ children, title, enableExpandAll, initialDisplay, showTitleInMobile, className, }: AccordionProps) => JSX.Element) & {
    Item: (props: import("./types").AccordionItemProps & React.RefAttributes<import("./types").AccordionItemHandle>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
