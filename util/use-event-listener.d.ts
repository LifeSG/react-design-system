type Target = "window" | "document" | HTMLElement | null;
export declare const useEventListener: <K extends keyof WindowEventMap>(eventName: K, handler: (event: WindowEventMap[K]) => void, target?: Target, options?: AddEventListenerOptions | boolean) => void;
export {};
