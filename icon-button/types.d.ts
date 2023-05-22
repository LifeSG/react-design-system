/// <reference types="react" />
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    focusHighlight?: boolean;
    focusOutline?: "none" | "browser";
}
