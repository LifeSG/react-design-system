export interface SelectedTagListItem {
    key: string;
    label: string;
    onRemove: () => void;
}
interface SelectedTagListProps {
    items: SelectedTagListItem[];
    /** Whether the remove button is shown on each tag */
    removable: boolean;
    /**
     * Rows shown before the remaining tags collapse into an "and X more" tag
     * @default 4
     */
    maxRows?: number | undefined;
}
export declare const SelectedTagList: ({ items, removable, maxRows, }: SelectedTagListProps) => JSX.Element;
export {};
