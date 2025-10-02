import React, { useState } from "react";

interface DropdownListState extends DropdownListStateContext {
    context: DropdownListStateContext;
}

interface DropdownListStateContext {
    focusedIndex: number;
    setFocusedIndex: React.Dispatch<React.SetStateAction<number>>;
    selectedIndex: number;
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
    focusFirstItem: () => void;
    focusLastItem: () => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
}

interface DropdownListStateProps {
    children: React.ReactNode;
    context: DropdownListStateContext;
}

interface UseDropdownListStateOptions<T> {
    options: T[] | undefined;
    onOpenChange?: ((isOpen: boolean) => void) | undefined;
}

export const DropdownListStateContext =
    React.createContext<DropdownListStateContext>({
        focusedIndex: -1,
        setFocusedIndex: () => {
            // do nothing
        },
        selectedIndex: -1,
        setSelectedIndex: () => {
            // do nothing
        },
        focusFirstItem: () => {
            // do nothing
        },
        focusLastItem: () => {
            // do nothing
        },
        onKeyDown: () => {
            // do nothing
        },
    });

export const useDropdownListState = <T,>({
    options,
    onOpenChange,
}: UseDropdownListStateOptions<T>): DropdownListState => {
    const [focusedIndex, setFocusedIndex] = useState<number>(-1);
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);

    const focusFirstItem = () => setFocusedIndex(0);
    const focusLastItem = () => {
        if (options?.length) {
            setFocusedIndex(options.length - 1);
        }
    };

    const onKeyDown = (event: React.KeyboardEvent) => {
        if (!options?.length) {
            return;
        }

        event.stopPropagation();

        if (event.key === "ArrowDown") {
            event.preventDefault();
            if (selectedIndex > -1) {
                setFocusedIndex(selectedIndex);
            } else {
                setFocusedIndex(0);
                // setFocusedIndex((prevIndex) =>
                //     prevIndex < options.length - 1 ? prevIndex + 1 : 0
                // );
            }
            onOpenChange?.(true);
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            if (selectedIndex > -1) {
                setFocusedIndex(selectedIndex);
            } else {
                setFocusedIndex(options.length - 1);
                // setFocusedIndex((prevIndex) =>
                //     prevIndex > 0 ? prevIndex - 1 : options.length - 1
                // );
            }
            onOpenChange?.(true);
        } else if (event.key === "Home") {
            event.preventDefault();
            setFocusedIndex(0);
            onOpenChange?.(true);
        } else if (event.key === "End") {
            event.preventDefault();
            setFocusedIndex(options.length - 1);
            onOpenChange?.(true);
        }
    };

    const context = {
        focusedIndex,
        setFocusedIndex,
        selectedIndex,
        setSelectedIndex,
        focusFirstItem,
        focusLastItem,
        onKeyDown,
    };
    return { ...context, context };
};

export const DropdownListState = ({
    children,
    context,
}: DropdownListStateProps) => {
    return (
        <DropdownListStateContext.Provider value={context}>
            {children}
        </DropdownListStateContext.Provider>
    );
};
