import {
    DropdownDisplayExtractorProps,
    DropdownEventHandlerProps,
    DropdownStyleProps,
} from "../dropdown-list/types";

export interface InputSelectProps<T>
    extends React.HTMLAttributes<HTMLElement>,
        DropdownEventHandlerProps<T>,
        DropdownDisplayExtractorProps<T>,
        DropdownStyleProps {
    /** HTML button props */
    name?: string;

    /** Component specific props */
    disabled?: boolean;
    selectedOption?: any;
    placeholder?: string;
    error?: boolean;
    options: T[];
    "data-testid"?: string;
    displayValueExtractor?: (item: T) => any; // format function to derive display value upon selected
    enableSearch?: boolean;
    searchFunction?: (searchValue: string) => T[];
    onShowOptions?: () => void;
    onHideOptions?: () => void;
}

/** To be exposed for Form component inheritance */
export type InputSelectPartialProps<T> = Omit<InputSelectProps<T>, "error">;
