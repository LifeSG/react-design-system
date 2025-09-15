import React from "react";

interface IAccordionContext {
    expandAll: boolean;
    itemState: Record<string, boolean>;
    onItemStateChange: (id: string, isExpanded: boolean) => void;
    onItemDeregister?: (id: string) => void;
    itemHeadingLevel?: number | undefined;
}

export const AccordionContext = React.createContext<IAccordionContext>({
    expandAll: false,
    onItemStateChange: () => {},
    onItemDeregister: () => {},
    itemState: {},
});
