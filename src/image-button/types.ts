export interface ImageButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    src: string;
    focusOutline?: "none" | "browser";
}
