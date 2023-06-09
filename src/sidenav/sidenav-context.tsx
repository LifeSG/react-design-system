import {
    Dispatch,
    SetStateAction,
    createContext,
    useMemo,
    useState,
} from "react";

interface SidenavContextProps {
    selectedItem: string | undefined;
    setSelectedItem: Dispatch<SetStateAction<string | undefined>>;
}

interface SidenavProviderProps {
    children: React.ReactNode;
}

export const SidenavContext = createContext<SidenavContextProps>({
    selectedItem: undefined,
    setSelectedItem: (prevState: SetStateAction<string | undefined>) =>
        prevState,
});

export function SidenavProvider({
    children,
}: SidenavProviderProps): JSX.Element {
    const [selectedItem, setSelectedItem] = useState<string | undefined>(
        undefined
    );

    const value = useMemo(
        () => ({ selectedItem, setSelectedItem }),
        [selectedItem, setSelectedItem]
    );

    return (
        <SidenavContext.Provider value={value}>
            {children}
        </SidenavContext.Provider>
    );
}
