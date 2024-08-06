import { V2_TextSizeType } from "../v2_text";

export interface MarkupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The default font size. If not specified, inherited from the parent */
    baseTextSize?: V2_TextSizeType | undefined;
    /** The default font color. If not specified, inherited from the parent */
    baseTextColor?: string | ((props: unknown) => string) | undefined;
    /**
     * Specifies if element is rendered as block element `div` or inline
     * element `span`
     */
    inline?: boolean | undefined;
}
