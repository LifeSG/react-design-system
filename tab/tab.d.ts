import { TabProps } from "./types";
export declare const Tab: (({ children, currentActive: currentActiveIndex, initialActive, onTabClick, "data-testid": testId, ...otherProps }: TabProps) => import("react/jsx-runtime").JSX.Element) & {
    Item: ({ index, children, ...otherProps }: import("./tab-item").TabItemComponentProps) => import("react/jsx-runtime").JSX.Element;
};
