export interface InputBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    $disabled?: boolean | undefined;
    $error?: boolean | undefined;
    $readOnly?: boolean | undefined;
    $focused?: boolean | undefined;
    $noBorder?: boolean | undefined;
}

export interface InputWrapperProps
    extends React.HTMLAttributes<HTMLDivElement>,
        InputBoxProps {
    $position?: "left" | "right" | undefined;
}

export interface BasicInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    $variant?: "small" | "default" | undefined;
}

export interface BasicButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
