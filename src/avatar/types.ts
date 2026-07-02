/** Visual size options for the `Avatar` component. */
export type AvatarSize = "default" | "small";

/** Props for the `Avatar` component. */
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    children: string | JSX.Element;
    /**
     * Controls the visual size of the avatar. `"small"` renders a compact variant
     * with reduced typography; `"default"` uses the standard size.
     */
    sizeType?: AvatarSize | undefined;
    "data-testid"?: string | undefined;
}
