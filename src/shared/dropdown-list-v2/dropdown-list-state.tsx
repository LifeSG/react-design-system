import React, { useState } from "react";

interface DropdownListStateProps {
    children: React.ReactNode;
}

interface DropdownListStateContext {
    focusedIndex: number;
    setFocusedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const DropdownListStateContext =
    React.createContext<DropdownListStateContext>({
        focusedIndex: -1,
        setFocusedIndex: () => {
            // do nothing
        },
    });

export const DropdownListState = ({ children }: DropdownListStateProps) => {
    const [focusedIndex, setFocusedIndex] = useState<number>(-1);

    return (
        <DropdownListStateContext.Provider
            value={{
                focusedIndex,
                setFocusedIndex,
            }}
        >
            {children}
        </DropdownListStateContext.Provider>
    );
};
