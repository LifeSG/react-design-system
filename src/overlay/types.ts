type OverlayClickProps =
    | {
          enableOverlayClick?: false | undefined;
          onOverlayClick?: (() => void) | undefined;
      }
    | {
          enableOverlayClick: true;
          onOverlayClick: () => void;
      };

export type OverlayProps = {
    children?: JSX.Element | undefined;
    show?: boolean | undefined;
    rootId?:
        | string
        | undefined /* the id of the root element to attach the overlay to */;
    /** @deprecated no longer has effect */
    backgroundOpacity?: number | undefined;
    backgroundBlur?: boolean | undefined;
    disableTransition?: boolean | undefined;
    zIndex?: number | undefined;
    id?: string | undefined;
} & OverlayClickProps;

/**
 * @deprecated For library internal use only
 */
export interface StyleProps {
    $show: boolean;
    $backgroundBlur?: boolean | undefined;
    $disableTransition?: boolean | undefined;
    $enableOverlayClick?: boolean | undefined;
    zIndex?: number | undefined;
    $stacked?: boolean | undefined;
}
