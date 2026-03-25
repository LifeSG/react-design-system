export type AvatarSize = "default" | "small";

/**
 * A component that displays a visual representation of a user or entity.
 *
 * @keywords avatar, user, profile, icon, initials
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Content to display in the avatar, typically an initial or a custom element. */
    children: string | JSX.Element;
    /** Size of the avatar. @default "default" */
    sizeType?: AvatarSize | undefined;
    /** Test identifier for automated testing. @default "avatar" */
    "data-testid"?: string | undefined;
}
