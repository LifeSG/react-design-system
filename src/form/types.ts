import type { ColProps } from "../layout/types";
import type { FormLabelProps } from "./form-label/types";

/**
 * Controls how a form field's outer container is rendered.
 *
 * - `"flex"` — plain `div` with no column constraints.
 * - `"grid"` — `ColDiv` that accepts responsive column span props from `ColProps`.
 */
export type FormElementLayoutType = "flex" | "grid";

/**
 * Common props shared by all `Form.*` field components.
 */
export interface BaseFormElementProps extends ColProps {
    /**
     * Label rendered above the input. Accepts a plain string or a
     * `FormLabelProps` object to provide additional configuration.
     */
    label?: FormLabelProps | string | undefined;
    /**
     * Inline error text rendered below the input.
     */
    errorMessage?: string | React.ReactNode | undefined;
    "data-testid"?: string | undefined;
    "data-error-testid"?: string | undefined;
    /**
     * Controls whether the container uses flex layout or a responsive column grid.
     */
    layoutType?: FormElementLayoutType | undefined;
}

/**
 * Props for the `FormWrapper` layout container.
 */
export interface FormWrapperProps extends BaseFormElementProps {
    children: JSX.Element | JSX.Element[];
    /**
     * Base ID used to derive ARIA label, subtitle, and error-message element
     * IDs. A generated ID is used when omitted.
     */
    id?: string | undefined;
}
