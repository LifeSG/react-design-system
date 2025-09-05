import React from "react";

interface IAccordionContext {
    expandAll: boolean;
    childState: Record<string, boolean>;
    onChildStateChange: (id: string, isExpanded: boolean) => void;
    itemHeadingLevel?: number | undefined;
}

export const AccordionContext = React.createContext<IAccordionContext>({
    expandAll: false,
    onChildStateChange: () => {},
    childState: {},
});
