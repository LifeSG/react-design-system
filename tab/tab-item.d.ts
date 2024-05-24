/// <reference types="react" />
import { TabItemProps } from "./types";
export interface TabItemComponentProps extends TabItemProps {
    index?: number | undefined;
}
export declare const TabItem: ({ index, children, ...otherProps }: TabItemComponentProps) => JSX.Element;
