import React, {
    Dispatch,
    SetStateAction,
    createContext,
    useMemo,
    useState,
} from "react";

interface SidenavContextProps {
    selectedItemId: string | undefined;
    drawerContent: React.ReactNode | undefined;
    setSelectedItemId: Dispatch<SetStateAction<string | undefined>>;
    setDrawerContent: Dispatch<SetStateAction<React.ReactNode | undefined>>;
}

interface SidenavProviderProps {
    children: React.ReactNode;
}

export const SidenavContext = createContext<SidenavContextProps>({
    selectedItemId: undefined,
    drawerContent: undefined,
    setSelectedItemId: (prevState: SetStateAction<string | undefined>) =>
        prevState,
    setDrawerContent: (
        prevState: SetStateAction<React.ReactNode | undefined>
    ) => prevState,
});

export function SidenavProvider({
    children,
}: SidenavProviderProps): JSX.Element {
    const [selectedItemId, setSelectedItemId] = useState<string | undefined>(
        undefined
    );
    const [drawerContent, setDrawerContent] = useState<
        React.ReactNode | undefined
    >(undefined);

    const value = useMemo(
        () => ({
            selectedItemId,
            drawerContent,
            setSelectedItemId,
            setDrawerContent,
        }),
        [selectedItemId, drawerContent, setSelectedItemId, setDrawerContent]
    );

    return (
        <SidenavContext.Provider value={value}>
            {children}
        </SidenavContext.Provider>
    );
}
