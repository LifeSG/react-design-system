/// <reference types="react" />
/**
 * Lets you access the latest value through a ref after calling setState
 */
export declare const useStateRef: <T>(initialValue: T) => readonly [T, import("react").Dispatch<import("react").SetStateAction<T>>, import("react").MutableRefObject<T>];
