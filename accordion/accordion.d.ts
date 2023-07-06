/// <reference types="react" />
import { AccordionProps } from "./types";
export declare const Accordion: (({ children, title, enableExpandAll, initialDisplay, showTitleInMobile, className, }: AccordionProps) => JSX.Element) & {
    Item: ({ title, children, expanded, type, ...otherProps }: import("./types").AccordionItemProps) => JSX.Element;
};
