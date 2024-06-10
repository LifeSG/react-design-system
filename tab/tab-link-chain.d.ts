interface Props {
    controlledMode?: boolean | undefined;
    "data-testid"?: string | undefined;
    onTabClick?: ((title: string, order: number) => void) | undefined;
}
export declare const TabLinkChain: ({ controlledMode, "data-testid": testId, onTabClick, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
