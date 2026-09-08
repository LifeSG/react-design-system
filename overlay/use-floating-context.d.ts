/**
 * Called by the component that renders modal or overlay content, and expects
 * to have floating elements as children
 * @param zIndex - the z-index of the main container
 */
export declare const useFloatingParent: (zIndex: number) => void;
/**
 * Called by the component that renders a floating element
 * @returns parentZIndex - the z-index of the parent container, if present
 */
export declare const useFloatingChild: () => number | undefined;
