export type AvatarSize = "default" | "small";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    children: string | JSX.Element;
    sizeType?: AvatarSize | undefined;
    "data-testid"?: string | undefined;
}
