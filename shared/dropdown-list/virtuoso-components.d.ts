import type { ComponentProps } from "react";
import type { Components } from "react-virtuoso";
interface VirtuosoContext {
    listProps: React.HTMLAttributes<HTMLDivElement>;
    listItemProps: React.HTMLAttributes<HTMLDivElement>;
}
type VirtuosoListProps = Exclude<Components<unknown, VirtuosoContext>["List"], undefined>;
type VirtuosoItemProps = Exclude<Components<unknown, VirtuosoContext>["Item"], undefined>;
export declare const VirtuosoList: (props: ComponentProps<VirtuosoListProps> & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export declare const VirtuosoItem: (props: ComponentProps<VirtuosoItemProps> & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export {};
