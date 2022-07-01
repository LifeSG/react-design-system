export interface DateInputTarget {
    value: string;
    type?: string; // input type
    name?: string;
    id?: string;
}

/* This mimics the React.SyntheticEvent */
export interface DateInputEvent {
    bubbles: boolean;
    target: DateInputTarget;
}

export interface DateInputProps extends React.AriaAttributes {
    // Standard HTML Attributes
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;

    // WAI-ARIA
    role?: string;

    // Input-specific Attributes
    value?: string;
    name?: string;
    error?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
}
