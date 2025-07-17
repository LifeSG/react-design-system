export type AvatarSize = "default" | "small";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    children: string | JSX.Element;
    sizeType?: AvatarSize;
    "data-testid"?: string | undefined;
}
