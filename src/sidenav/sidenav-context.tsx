import { Dispatch, SetStateAction, createContext } from "react";

export interface SidenavContextItem {
    itemId: string | undefined;
    content: React.ReactNode | undefined;
}

interface SidenavContextProps {
    currentItem: SidenavContextItem | undefined;
    previouslySelectedItemId: string | undefined;
    selectedItem: SidenavContextItem | undefined;
    setCurrentItem: Dispatch<SetStateAction<SidenavContextItem | undefined>>;
    setPreviouslySelectedItemId: Dispatch<SetStateAction<string | undefined>>;
    setSelectedItem: Dispatch<SetStateAction<SidenavContextItem | undefined>>;
}

export const SidenavContext = createContext<SidenavContextProps>({
    selectedItem: undefined,
    currentItem: undefined,
    previouslySelectedItemId: undefined,
    setCurrentItem: () => {
        // do nothing
    },
    setPreviouslySelectedItemId: () => {
        // do nothing
    },
    setSelectedItem: () => {
        // do nothing
    },
});
