type Target = Window | HTMLElement | Document | null;
export declare const useEventListener: <K extends keyof WindowEventMap>(eventName: K, handler: (event: WindowEventMap[K]) => void, element?: Target) => void;
export {};
