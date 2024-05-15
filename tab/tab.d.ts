/// <reference types="react" />
import { TabProps } from "./types";
export declare const Tab: (({ children, currentActive: currentActiveIndex, initialActive, onTabClick, "data-testid": testId, ...otherProps }: TabProps) => JSX.Element) & {
    Item: ({ index, children, ...otherProps }: import("./tab-item").TabItemComponentProps) => JSX.Element;
};
