import { IconType } from "../icon/types";

export interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Setting this will override the children prop */
    iconType?: IconType | undefined;
}
