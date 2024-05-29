import { MouseEvent } from "react";

export type CompositeOptionType = "checkbox" | "radio";

export interface CompositeOptionProps
    extends React.DOMAttributes<HTMLInputElement> {
    /**
     * The type of toggle. Values: "checkbox" | "radio"
     *
     * "checkbox" - allows deselection
     *
     * "radio" - does not allow deselection. However they
     * will determine the indicator to be displayed
     */
    type?: CompositeOptionType | undefined;

    /** Indicates if the element is checked */
    checked?: boolean | undefined;
    disabled?: boolean | undefined;
    /** The Composite Option title */
    title: string | JSX.Element;
    titleMaxLines?: { mobile?: number; desktop?: number } | undefined;
    /** The Composite Option subtitle */
    subtitle?: string | JSX.Element;
    /** The children inside the composite option */
    children?: React.ReactNode;
    showChildren?: boolean | undefined;
    /** specifies to show or hide view more or less button when remove button is not present */
    hideMoreOrLessButton?: boolean;
    onClick?:
        | ((
              event?:
                  | MouseEvent<HTMLDivElement, globalThis.MouseEvent>
                  | undefined
          ) => void)
        | undefined;
    /** specifies the list of errors that has to be shown inside the composite-option container when the show less button is clicked*/
    errorList?: string[] | JSX.Element | undefined;
    /** Specifies if the error display should be present */
    error?: boolean | undefined;
    errorMessage?: string;
    remove?: boolean | undefined;
    onRemove?: (() => void) | undefined;
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
}
