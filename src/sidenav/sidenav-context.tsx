import React, { Dispatch, SetStateAction, createContext } from "react";

export interface SelectedItem {
    itemId: string | undefined;
    openDrawer?: boolean | undefined;
}

interface SidenavContextProps {
    selectedItem: SelectedItem | undefined;
    drawerContent: React.ReactNode | undefined;
    setSelectedItem: Dispatch<SetStateAction<SelectedItem | undefined>>;
    setDrawerContent: Dispatch<SetStateAction<React.ReactNode | undefined>>;
}

export const SidenavContext = createContext<SidenavContextProps>({
    selectedItem: undefined,
    drawerContent: undefined,
    setSelectedItem: (prevState: SetStateAction<SelectedItem | undefined>) =>
        prevState,
    setDrawerContent: (
        prevState: SetStateAction<React.ReactNode | undefined>
    ) => prevState,
});
