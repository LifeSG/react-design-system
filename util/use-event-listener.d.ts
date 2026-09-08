type Target = "window" | "document" | HTMLElement | null;
type EventHandler<K extends keyof WindowEventMap> = (event: WindowEventMap[K]) => void;
export declare const useEventListener: <K extends keyof WindowEventMap>(eventName: K, handler: EventHandler<K>, target?: Target, options?: AddEventListenerOptions | boolean) => void;
export {};
