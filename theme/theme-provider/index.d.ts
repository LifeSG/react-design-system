import type { ThemeProviderProps } from "./types";
/**
 * Establishes a themed scope for its subtree.
 *
 * Wrap a section of the tree in `ThemeProvider` to activate a design-token set
 * and colour mode. Components below it read tokens via CSS variables or the
 * `useTheme` hook. Providers can be nested to override a subtree's theme.
 */
export declare const ThemeProvider: (props: ThemeProviderProps & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null;
