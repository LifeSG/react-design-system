import React from "react";
interface IAccordionContext {
    expandAll: boolean;
    itemHeadingLevel?: number | undefined;
}
export declare const AccordionContext: React.Context<IAccordionContext>;
export {};
