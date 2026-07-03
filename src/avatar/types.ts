/** Visual size options for the `Avatar` component. */
export type AvatarSize = "default" | "small";

/** Props for the `Avatar` component. */
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * A string or JSX element to display inside the avatar. When a string is
     * provided, only the first Unicode code point is rendered as an uppercase
     * initial. Pass a JSX element (e.g. an `<img>`) to render custom content.
     */
    children: string | JSX.Element;
    /**
     * Controls the visual size of the avatar. `"small"` renders a compact variant
     * with reduced typography; `"default"` uses the standard size.
     */
    sizeType?: AvatarSize | undefined;
    "data-testid"?: string | undefined;
}
