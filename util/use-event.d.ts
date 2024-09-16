/**
 * Alternative to `useEffectEvent` which is only available in React 18+
 */
export declare function useEvent<T extends (...args: any[]) => any>(callback: T): T;
