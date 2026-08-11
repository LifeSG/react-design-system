import React, { Dispatch, SetStateAction } from "react";
import { TabItemProps } from "./types";
export type TabLinkProps = Pick<TabItemProps, "title" | "width" | "titleAddon">;
interface TabContextProps {
    currentActiveIndex: number;
    tabLinks: TabLinkProps[];
    setCurrentActiveIndex: Dispatch<SetStateAction<number>>;
}
export declare const noop: () => void;
export declare const TabContext: React.Context<TabContextProps>;
export {};
