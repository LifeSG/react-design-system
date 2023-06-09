import {
    Dispatch,
    SetStateAction,
    createContext,
    useMemo,
    useState,
} from "react";

interface SideNavContextProps {
    selectedItem: string | undefined;
    setSelectedItem: Dispatch<SetStateAction<string | undefined>>;
}

interface SideNavProviderProps {
    children: React.ReactNode;
}

export const SideNavContext = createContext<SideNavContextProps>({
    selectedItem: undefined,
    setSelectedItem: (prevState: SetStateAction<string | undefined>) =>
        prevState,
});

export function SideNavProvider({
    children,
}: SideNavProviderProps): JSX.Element {
    const [selectedItem, setSelectedItem] = useState<string | undefined>(
        undefined
    );

    const value = useMemo(
        () => ({ selectedItem, setSelectedItem }),
        [selectedItem, setSelectedItem]
    );

    return (
        <SideNavContext.Provider value={value}>
            {children}
        </SideNavContext.Provider>
    );
}
