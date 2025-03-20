interface Props {
    controlledMode?: boolean | undefined;
    "data-testid"?: string | undefined;
    onTabClick?: ((title: string, order: number) => void) | undefined;
    fullWidthIndicatorLine?: boolean | undefined;
}
export declare const TabLinkChain: ({ controlledMode, "data-testid": testId, onTabClick, fullWidthIndicatorLine, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
