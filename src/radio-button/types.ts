/**
 * Props for the RadioButton component - single-choice input control.
 *
 * Renders a styled radio button. Inherits all standard `HTMLInputElement`
 * attributes including `checked`, `disabled`, `value`, and `onChange`.
 *
 * @example
 * ```tsx
 * <RadioButton
 *     name="plan"
 *     value="basic"
 *     checked={selectedPlan === "basic"}
 *     onChange={() => setSelectedPlan("basic")}
 * />
 * ```
 * @keywords radio, single choice, option button, exclusive select, choice input
 */
export interface RadioButtonProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}
