import React from "react";
interface IAccordionContext {
    expandAll: boolean;
    itemState: Record<string, boolean>;
    onItemStateChange: (id: string, isExpanded: boolean) => void;
    onItemDeregister?: (id: string) => void;
    itemHeadingLevel?: number | undefined;
}
export declare const AccordionContext: React.Context<IAccordionContext>;
export {};
