import { OpenChangeReason } from "@floating-ui/react";
import { CSSProperties, RefObject } from "react";
import { DropdownAlignmentType } from "./types";
export interface DropdownRenderProps {
    elementWidth: number;
    styles: CSSProperties;
    setFloatingRef: (node: HTMLElement | null) => void;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
}
interface ElementWithDropdownProps {
    enabled: boolean;
    isOpen: boolean;
    onOpen?: () => void | undefined;
    onClose?: (reason: OpenChangeReason | undefined) => void | undefined;
    onDismiss?: () => void | undefined;
    renderElement: () => React.ReactNode;
    renderDropdown: (props: DropdownRenderProps) => React.ReactNode;
    customZIndex?: number | undefined;
    clickToToggle?: boolean | undefined;
    offset?: number | undefined;
    alignment?: DropdownAlignmentType | undefined;
    fitAvailableHeight?: boolean | undefined;
    /**
     * The root element that contains the popover element. Defaults to the document body.
     *
     * If the parent that contains the trigger element has a higher z-index than the popover,
     * the popover may not be visible. Specify the parent element here instead
     */
    rootNode?: RefObject<HTMLElement> | undefined;
}
export declare const DropdownRenderContext: import("react").Context<DropdownRenderProps>;
export declare const useDropdownRender: () => DropdownRenderProps;
/**
 * A wrapper to handle the common pattern of a field with a card-based dropdown
 * using Floating UI
 *
 * Usage:
 * - Specify `renderElement` for the main field
 * - Specify `renderDropdown` for the dropdown
 * - Use `isOpen` to control the visibility of the dropdown
 * - Handle changes in visibility with `onOpen`, `onClose` and `onDismiss`
 * - If your dropdown can resize, set the css like so: `max-height: var(--available-height);`
 * - If your dropdown has a preferred max-height, set the css like so:
 *   `max-height: min(100px, var(--available-height, infinity * 1px))`
 *
 * Pass the floating props to the dropdown:
 * ```
 * <DropdownContainer
 *   ref={setFloatingRef}
 *   style={styles}
 *   {...getFloatingProps()}
 * >
 * </DropdownContainer>
 * ```
 *
 * If you need event listeners, pass them to `getFloatingProps()`:
 * ```
 * getFloatingProps({
 *   onClick: handleOnClick
 * })
 * ```
 */
export declare const ElementWithDropdown: ({ enabled, isOpen, onOpen, onClose, onDismiss, renderElement, renderDropdown, customZIndex, clickToToggle, offset: dropdownOffset, alignment, fitAvailableHeight, rootNode, }: ElementWithDropdownProps) => import("react/jsx-runtime").JSX.Element;
export {};
