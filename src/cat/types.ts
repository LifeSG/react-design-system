export interface CatProps {
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
    type?: "tabby" | "siamese" | undefined;
    size?: "small" | "medium" | "large" | undefined;
}
