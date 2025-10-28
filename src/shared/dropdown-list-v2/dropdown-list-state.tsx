import React, { useState } from "react";

interface DropdownListState extends DropdownListStateContext {
    context: DropdownListStateContext;
}

interface DropdownListStateContextProps {
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

const noop = () => {
    // do nothing
};

export const DropdownListStateContext =
    React.createContext<DropdownListStateContextProps>({
        focusedIndex: -1,
        setFocusedIndex: noop,
        selectedIndex: -1,
        setSelectedIndex: noop,
        focusFirstItem: noop,
        focusLastItem: noop,
        onKeyDown: noop,
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

    const getPreviousItemIndex = (index: number) => {
        if (!options) {
            return index;
        }
        return Math.max(index - 1, 0);
    };

    const getNextItemIndex = (index: number) => {
        if (!options) {
            return index;
        }
        return Math.min(index + 1, options.length - 1);
    };

    const onKeyDown = (event: React.KeyboardEvent) => {
        if (!options?.length) {
            return;
        }

        event.stopPropagation();

        if (event.key === "ArrowDown") {
            event.preventDefault();
            const index = selectedIndex > -1 ? selectedIndex : focusedIndex;
            setFocusedIndex(getNextItemIndex(index));
            onOpenChange?.(true);
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            const index = selectedIndex > -1 ? selectedIndex : focusedIndex;
            setFocusedIndex(getPreviousItemIndex(index));
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
