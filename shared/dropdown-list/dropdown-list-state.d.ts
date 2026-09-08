import React from "react";
interface DropdownListStateProps {
    children: React.ReactNode;
}
interface DropdownListStateContextProps {
    focusedIndex: number;
    setFocusedIndex: React.Dispatch<React.SetStateAction<number>>;
}
export declare const DropdownListStateContext: React.Context<DropdownListStateContextProps>;
export declare const DropdownListState: ({ children }: DropdownListStateProps) => import("react/jsx-runtime").JSX.Element;
export {};
