import React from "react";
interface DropdownListStateProps {
    children: React.ReactNode;
}
interface DropdownListStateContext {
    focusedIndex: number;
    setFocusedIndex: React.Dispatch<React.SetStateAction<number>>;
}
export declare const DropdownListStateContext: React.Context<DropdownListStateContext>;
export declare const DropdownListState: ({ children }: DropdownListStateProps) => import("react/jsx-runtime").JSX.Element;
export {};
