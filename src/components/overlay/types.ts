export interface OverlayProps {
    children?: JSX.Element;
    show?: boolean;
    rootId?: string /* the id of the root element to attach the overlay to */;
    backgroundOpacity?: number;
    backgroundBlur?: boolean;
    disableTransition?: boolean;
    enableOverlayClick?: boolean;
    stacked?: boolean;
    onOverlayClick?: () => void;
    id?: string;
}

export interface StyleProps {
    show: boolean;
    backgroundOpacity?: number;
    backgroundBlur?: boolean;
    disableTransition?: boolean;
    enableOverlayClick?: boolean;
}
