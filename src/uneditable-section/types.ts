export type UneditableSectionItemDisplayWidth = "half" | "full";

export interface UneditableSectionItemProps {
    label: string;
    value: string;
    /** The width that the item can span across. Values: "half", "full" */
    displayWidth?: UneditableSectionItemDisplayWidth | undefined;
}

export interface UneditableSectionProps {
    items?: UneditableSectionItemProps[] | undefined;
    title?: string | undefined;
    description?: string | undefined;
    /** A custom section at the top of the main uneditable items section */
    topSection?: JSX.Element | undefined;
    /** A custom section at the bottom of the main uneditable items section */
    bottomSection?: JSX.Element | undefined;
    /** The body of the entire section */
    children?: JSX.Element | JSX.Element[] | undefined;
}
