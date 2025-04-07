/// <reference types="react" />
export interface OverlayProps {
    children?: JSX.Element | undefined;
    show?: boolean | undefined;
    rootId?: string | undefined;
    backgroundOpacity?: number | undefined;
    backgroundBlur?: boolean | undefined;
    disableTransition?: boolean | undefined;
    enableOverlayClick?: boolean | undefined;
    zIndex?: number | undefined;
    onOverlayClick?: (() => void) | undefined;
    id?: string | undefined;
}
/**
 * Transient props are denoted with $
 * https://styled-components.com/docs/api#transient-props
 */
/**
 * @deprecated For library internal use only
 */
export interface StyleProps {
    $show: boolean;
    $backgroundOpacity?: number | undefined;
    $backgroundBlur?: boolean | undefined;
    $disableTransition?: boolean | undefined;
    $enableOverlayClick?: boolean | undefined;
    zIndex?: number | undefined;
    $stacked?: boolean | undefined;
}
