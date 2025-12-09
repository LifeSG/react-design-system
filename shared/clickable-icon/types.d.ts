/// <reference types="react" />
export interface ClickableIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    focusHighlight?: boolean;
    focusOutline?: "none" | "browser";
}
