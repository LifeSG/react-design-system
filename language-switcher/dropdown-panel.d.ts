import type React from "react";
import type { LanguageSwitcherCode } from "./types";
interface DropdownPanelProps {
    focusedIndex: number;
    handleItemSelect: (code: LanguageSwitcherCode) => void;
    handleListKeyDown: (event: React.KeyboardEvent<HTMLUListElement>) => void;
    itemRefs: React.MutableRefObject<(HTMLLIElement | null)[]>;
    listboxId: string;
    selectedLanguage: LanguageSwitcherCode;
    testId: string;
}
export declare const DropdownPanel: ({ focusedIndex, handleItemSelect, handleListKeyDown, itemRefs, listboxId, selectedLanguage, testId, }: DropdownPanelProps) => import("react/jsx-runtime").JSX.Element;
export {};
