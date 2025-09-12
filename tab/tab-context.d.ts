import React, { Dispatch, SetStateAction } from "react";
import { TabLinkProps } from "./types";
interface TabContextProps {
    currentActiveIndex: number;
    tabLinks: TabLinkProps[];
    setCurrentActiveIndex: Dispatch<SetStateAction<number>>;
}
export declare const noop: () => void;
export declare const TabContext: React.Context<TabContextProps>;
export {};
