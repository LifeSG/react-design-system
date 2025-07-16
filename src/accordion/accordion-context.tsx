import React from "react";

interface IAccordionContext {
    expandAll: boolean;
    itemHeadingLevel?: number | undefined;
}

export const AccordionContext = React.createContext<IAccordionContext>({
    expandAll: false,
});
