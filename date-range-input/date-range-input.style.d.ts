interface StyleProps {
    $wrap: boolean;
    $readOnly?: boolean;
}
export declare const MOBILE_WRAP_WIDTH = 320;
export declare const Container: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("../shared/input-wrapper").InputWrapperProps & import("react").RefAttributes<HTMLDivElement>, keyof StyleProps> & StyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("../shared/input-wrapper").InputWrapperProps & import("react").RefAttributes<HTMLDivElement>, keyof StyleProps> & StyleProps, never>>> & string & Omit<(props: import("../shared/input-wrapper").InputWrapperProps & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const InputContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof StyleProps> & StyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof StyleProps> & StyleProps, never>>> & string;
export {};
