import type { TabProps } from "./types";
/**
 * A tabbed-panel layout that switches visible content by selecting a tab link.
 *
 * Use `Tab` to organise content into labelled panels where only one panel is
 * visible at a time. Compose with `Tab.Item` to define each panel.
 *
 * For cases where the tab bar and panels need to be positioned independently,
 * use the standalone composition: `Tab.Context`, `Tab.TabList`,
 * `Tab.TabListItem`, and `Tab.Panel`.
 * @keywords navigation, panel, tabbed, tabs
 */
export declare const Tab: {
    ({ children, currentActive: currentActiveIndex, initialActive, onTabClick, "data-testid": testId, className, fullWidthIndicatorLine, fadeColor, ...otherProps }: TabProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    /** Renders an individual content panel within a `Tab`. Inactive items are unmounted — inner state is not preserved across tab switches. */
    Item: {
        ({ index, children, titleAddon: _titleAddon, ...otherProps }: import("./tab-item").TabItemComponentProps): import("react/jsx-runtime").JSX.Element | null;
        displayName: string;
    };
    /** Context provider for the standalone TabList + Panel composition. */
    Context: {
        ({ children, currentActive: currentActiveIndex, initialActive, onTabClick, }: import("./types").TabContextProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    /** Renders the tab link bar within a `Tab.Context`. */
    TabList: {
        ({ children, fullWidthIndicatorLine, fadeColor, "data-testid": testId, }: import("./types").TabListProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    /** Declares a tab entry inside a `Tab.TabList`. */
    TabListItem: {
        (_props: import("./types").TabListItemProps): null;
        displayName: string;
    };
    /** Renders a content panel within a `Tab.Context`. Inactive panels are unmounted — inner state is not preserved across tab switches. */
    Panel: {
        ({ index, children, ...otherProps }: import("./types").TabPanelProps): import("react/jsx-runtime").JSX.Element | null;
        displayName: string;
    };
};
