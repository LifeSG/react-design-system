export interface DropdownDisplayExtractorProps<T> {
    valueExtractor?: (item: T) => any; // format function to derive value upon selected
    listExtractor?: (item: T) => string; // format function to derive value displayed in the options
}

export interface DropdownStyleProps {
    listStyleWidth?: string;
}

export interface DropdownEventHandlerProps<T> {
    onSelectItem?: (item: T, extractedValue: any) => void;
}

export interface DropdownListProps<T>
    extends React.HTMLAttributes<HTMLUListElement>,
        DropdownEventHandlerProps<T>,
        DropdownDisplayExtractorProps<T>,
        DropdownStyleProps {
    listItems?: T[];
    visible?: boolean;
    enableSearch?: boolean;
    searchFunction?: (searchValue: string) => T[];
    onSearch?: () => void;
    onDismiss?: () => void;
}
