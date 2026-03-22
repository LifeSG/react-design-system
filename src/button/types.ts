import React from "react";
import { ComponentLoadingSpinnerProps } from "src/shared/component-loading-spinner/component-loading-spinner";

type StyleType = "default" | "secondary" | "light" | "link";

/**
 * Props for the Button component - primary call-to-action element
 *
 * Use buttons to trigger immediate actions like form submissions, dialog confirmations,
 * or navigation. Choose the appropriate style type based on action hierarchy. The button
 * comes in two sizes: Default and Small, available via Button.Default and Button.Small.
 *
 * @example
 * ```tsx
 * // Primary action button
 * <Button.Default onClick={handleSubmit}>
 *   Submit Form
 * </Button.Default>
 *
 * // Secondary action with loading state
 * <Button.Default styleType="secondary" loading={isLoading} onClick={handleSave}>
 *   Save Draft
 * </Button.Default>
 *
 * // Dangerous action (e.g., delete)
 * <Button.Default danger onClick={handleDelete}>
 *   Delete Account
 * </Button.Default>
 *
 * // Small button variant
 * <Button.Small styleType="light">
 *   Cancel
 * </Button.Small>
 * ```
 * @keywords CTA, submit, action trigger, primary button, click handler
 */
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The visual style variant of the button
     *
     * - `default`: Primary blue button for main CTAs and form submissions
     * - `secondary`: Outlined button for secondary actions that need less emphasis
     * - `light`: Minimal button with transparent background for tertiary actions
     * - `link`: Text-only button styled as a hyperlink, no background or border
     *
     * Choose the style based on action hierarchy in your interface. Use `default` for
     * primary actions, `secondary` for alternative actions, and `light`/`link` for
     * low-emphasis actions.
     *
     * @default "default"
     */
    styleType?: StyleType | undefined;
    /**
     * Displays a loading spinner and disables all interaction
     *
     * Use this to provide feedback during asynchronous operations (API calls, file
     * uploads) and prevent duplicate submissions. The button remains disabled until
     * this prop is set back to `false`.
     *
     * The loading spinner automatically adapts to the button's style type and size,
     * and maintains accessibility by announcing the loading state to screen readers.
     *
     * @default false
     * @example
     * ```tsx
     * const [isLoading, setIsLoading] = useState(false);
     *
     * const handleSubmit = async () => {
     *   setIsLoading(true);
     *   try {
     *     await submitForm();
     *   } finally {
     *     setIsLoading(false);
     *   }
     * };
     *
     * <Button.Default loading={isLoading} onClick={handleSubmit}>
     *   Submit
     * </Button.Default>
     * ```
     */
    loading?: boolean | undefined;
    /**
     * Applies danger/destructive styling with a red color scheme
     *
     * Use this for actions that:
     * - Delete or permanently remove data
     * - Cancel important operations
     * - Perform other irreversible or high-risk actions
     *
     * The danger styling works with all `styleType` variants. Consider pairing
     * dangerous actions with a confirmation dialog for added protection against
     * accidental clicks.
     *
     * @default false
     * @example
     * ```tsx
     * <Button.Default danger onClick={handleDeleteAccount}>
     *   Delete Account
     * </Button.Default>
     *
     * <Button.Default styleType="secondary" danger onClick={handleCancel}>
     *   Cancel Subscription
     * </Button.Default>
     * ```
     */
    danger?: boolean | undefined;
}

export type ButtonRef = React.Ref<HTMLButtonElement>;

export type MainButtonStyle =
    | "default"
    | "disabled"
    | "secondary"
    | "light"
    | "link";
export type MainButtonSize = "default" | "small";
export interface MainStyleProps extends ComponentLoadingSpinnerProps {
    $buttonStyle: MainButtonStyle;
    $buttonSizeStyle?: MainButtonSize | undefined;
    $buttonIsDanger?: boolean;
}
