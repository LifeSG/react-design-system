import React, {
    Dispatch,
    SetStateAction,
    createContext,
    useMemo,
    useState,
} from "react";

interface SelectedItem {
    itemId: string | undefined;
    openDrawer?: boolean | undefined;
}

interface SidenavContextProps {
    selectedItem: SelectedItem | undefined;
    drawerContent: React.ReactNode | undefined;
    setSelectedItem: Dispatch<SetStateAction<SelectedItem | undefined>>;
    setDrawerContent: Dispatch<SetStateAction<React.ReactNode | undefined>>;
}

interface SidenavProviderProps {
    children: React.ReactNode;
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

export function SidenavProvider({
    children,
}: SidenavProviderProps): JSX.Element {
    const [selectedItem, setSelectedItem] = useState<SelectedItem | undefined>(
        undefined
    );
    const [drawerContent, setDrawerContent] = useState<
        React.ReactNode | undefined
    >(undefined);

    const value = useMemo(
        () => ({
            selectedItem,
            drawerContent,
            setSelectedItem,
            setDrawerContent,
        }),
        [selectedItem, drawerContent, setSelectedItem, setDrawerContent]
    );

    return (
        <SidenavContext.Provider value={value}>
            {children}
        </SidenavContext.Provider>
    );
}
