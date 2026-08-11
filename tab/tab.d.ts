import type { TabProps } from "./types";
/**
 * A tabbed-panel layout that switches visible content by selecting a tab link.
 *
 * Use `Tab` to organise content into labelled panels where only one panel is
 * visible at a time. Compose with `Tab.Item` to define each panel.
 */
export declare const Tab: {
    ({ children, currentActive: currentActiveIndex, initialActive, onTabClick, "data-testid": testId, className, fullWidthIndicatorLine, fadeColor, ...otherProps }: TabProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    /** Renders an individual content panel within a `Tab`. */
    Item: {
        ({ index, children, titleAddon: _titleAddon, ...otherProps }: import("./tab-item").TabItemComponentProps): import("react/jsx-runtime").JSX.Element | null;
        displayName: string;
    };
};
