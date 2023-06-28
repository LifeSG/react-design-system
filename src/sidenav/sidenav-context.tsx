import React, { Dispatch, SetStateAction, createContext } from "react";

export interface SelectedItem {
    itemId: string | undefined;
    prevSelectedId?: string | undefined;
    openDrawer?: boolean | undefined;
}

interface SidenavContextProps {
    currentItemId: string | undefined;
    selectedItem: SelectedItem | undefined;
    drawerContent: React.ReactNode | undefined;
    setCurrentItemId: Dispatch<SetStateAction<string | undefined>>;
    setSelectedItem: Dispatch<SetStateAction<SelectedItem | undefined>>;
    setDrawerContent: Dispatch<SetStateAction<React.ReactNode | undefined>>;
}

export const SidenavContext = createContext<SidenavContextProps>({
    currentItemId: undefined,
    selectedItem: undefined,
    drawerContent: undefined,
    setCurrentItemId: () => {
        /**  */
    },
    setSelectedItem: () => {
        /** */
    },
    setDrawerContent: () => {
        /** */
    },
});
