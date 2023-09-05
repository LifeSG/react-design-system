/// <reference types="react" />
export interface ImageButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** The image source to be rendered */
    imgSrc: string;
    selected?: boolean | undefined;
    error?: boolean | undefined;
}
