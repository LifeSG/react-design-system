import { TabProps } from "./types";
export declare const Tab: {
    ({ children, currentActive: currentActiveIndex, initialActive, onTabClick, "data-testid": testId, fullWidthIndicatorLine, fadeColor, ...otherProps }: TabProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Item: {
        ({ index, children, titleAddon: _titleAddon, ...otherProps }: import("./tab-item").TabItemComponentProps): import("react/jsx-runtime").JSX.Element | null;
        displayName: string;
    };
};
