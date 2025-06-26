import { TabProps } from "./types";
interface Props extends Pick<TabProps, "fullWidthIndicatorLine" | "onTabClick" | "data-testid"> {
    controlledMode?: boolean | undefined;
}
export declare const TabLinkChain: ({ controlledMode, "data-testid": testId, onTabClick, fullWidthIndicatorLine, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
