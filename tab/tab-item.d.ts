import { TabItemProps } from "./types";
export interface TabItemComponentProps extends TabItemProps {
    index?: number | undefined;
}
export declare const TabItem: {
    ({ index, children, titleAddon: _titleAddon, ...otherProps }: TabItemComponentProps): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
