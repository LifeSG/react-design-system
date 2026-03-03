export type ThemeType =
    | "a11y-playground"
    | "bookingsg"
    | "ccube"
    | "default"
    | "imda"
    | "lifesg"
    | "mylegacy"
    | "oneservice"
    | "pa"
    | "rbs"
    | "sgw-digital-lobby"
    | "spf"
    | "supportgowhere";

export type ThemeMode = "light" | "dark";

export interface ThemeContextValue {
    theme: ThemeType;
    mode: ThemeMode;
    setTheme: (theme: ThemeType) => void;
    setMode: (mode: ThemeMode) => void;
}
