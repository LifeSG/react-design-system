/**
 * Props for the IconButton component - icon-only button.
 *
 * Renders a square button containing only an icon child. Extends all
 * `HTMLButtonElement` attributes. Choose the style type based on hierarchy
 * and the size type based on available space.
 *
 * @example
 * ```tsx
 * <IconButton styleType="secondary" sizeType="small" onClick={handleEdit}>
 *     <EditIcon />
 * </IconButton>
 * ```
 * @keywords symbol button, toolbar button, icon action, ghost button, square button
 */
export interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
    /**
     * The visual style variant of the button.
     *
     * @default "primary"
     */
    styleType?: StyleType;
    /**
     * The size variant of the button.
     *
     * @default "default"
     */
    sizeType?: SizeType;
    focusableWhenDisabled?: boolean | undefined;
}

export type StyleType = "primary" | "secondary" | "light";

export type SizeType = "large" | "default" | "small";
