/**
 * Display mechanism for the form label addon.
 *
 * - `"popover"` renders an icon that triggers a popover.
 * - `"tooltip"` is currently unsupported.
 */
export type FormLabelAddonType = "tooltip" | "popover";

/**
 * Configuration for an informational icon rendered inline with a form label.
 */
export interface FormLabelAddonProps {
    /** Text or element displayed inside the popover overlay. */
    content: string | JSX.Element;
    /**
     * Display mechanism for the addon.
     * Omit to render no addon icon.
     */
    type?: FormLabelAddonType | undefined;
    /**
     * Custom icon element.
     *
     * @default <ICircleFillIcon />
     */
    icon?: JSX.Element | undefined;
    id?: string | undefined;
    /** Stacking order of the popover overlay. */
    zIndex?: number | undefined;
    "data-testid"?: string | undefined;
}

/**
 * Props for a form field label or `Form.Label` component.
 */
export interface FormLabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement> {
    /** Informational icon and popover rendered inline with the label text. */
    addon?: FormLabelAddonProps | undefined;
    /** Supporting description rendered below the label. */
    subtitle?: string | JSX.Element | undefined;
    "data-testid"?: string | undefined;
}
