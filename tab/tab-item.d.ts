import { TabItemProps } from "./types";
export interface TabItemComponentProps extends TabItemProps {
    index?: number | undefined;
}
export declare const TabItem: ({ index, children, ...otherProps }: TabItemComponentProps) => import("react/jsx-runtime").JSX.Element | null;
