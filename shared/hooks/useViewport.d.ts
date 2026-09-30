interface UseViewportProps {
    enabled?: boolean;
    onBeforeStart?: () => void;
}
export declare const useViewport: ({ enabled, onBeforeStart, }?: UseViewportProps) => {
    verticalHeight: number | undefined;
    ready: boolean;
};
export {};
