import {
    Dispatch,
    SetStateAction,
    createContext,
    useMemo,
    useState,
} from "react";

interface SidenavContextProps {
    selectedItemId: string | undefined;
    setSelectedItemId: Dispatch<SetStateAction<string | undefined>>;
}

interface SidenavProviderProps {
    children: React.ReactNode;
}

export const SidenavContext = createContext<SidenavContextProps>({
    selectedItemId: undefined,
    setSelectedItemId: (prevState: SetStateAction<string | undefined>) =>
        prevState,
});

export function SidenavProvider({
    children,
}: SidenavProviderProps): JSX.Element {
    const [selectedItemId, setSelectedItemId] = useState<string | undefined>(
        undefined
    );

    const value = useMemo(
        () => ({
            selectedItemId: selectedItemId,
            setSelectedItemId: setSelectedItemId,
        }),
        [selectedItemId, setSelectedItemId]
    );

    return (
        <SidenavContext.Provider value={value}>
            {children}
        </SidenavContext.Provider>
    );
}
