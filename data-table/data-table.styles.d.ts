interface TableProps {
    $end: boolean;
    $scrollable: boolean;
    $stickyHeader: boolean | undefined;
}
interface TableBodyProps {
    $showLastRowBottomBorder: boolean;
}
interface HeaderCellProps {
    $clickable: boolean;
    $isCheckbox: boolean;
}
interface BodyRowProps {
    $alternating: boolean;
    $isSelected?: boolean;
    $isSelectable?: boolean;
}
interface BodyCellProps {
    $isCheckbox: boolean;
}
interface ActionBarWrapperProps {
    $fixed: boolean;
    $left?: number | undefined;
    $width?: number | undefined;
}
interface ActionBarProps {
    $float: boolean;
    $scrollable: boolean;
}
export declare const TableWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const TableContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const Table: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, TableProps>> & string;
export declare const TableBody: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TableBodyProps>> & string;
export declare const ActionBarWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ActionBarWrapperProps>> & string;
export declare const TextButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "$variant"> & import("../shared/input-wrapper").InputStyleProps, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}, never>> & string;
export declare const ActionBar: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ActionBarProps>> & string;
export declare const HeaderRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, never>> & string;
export declare const HeaderCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, HeaderCellProps>> & string;
export declare const HeaderCellWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const BodyRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, BodyRowProps>> & string;
export declare const BodyCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, BodyCellProps>> & string;
export declare const BodyCellContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void) | import("react").RefObject<HTMLParagraphElement> | null | undefined;
}>, import("../typography").TypographyProps>, keyof import("../typography").TypographyProps> & import("../typography").TypographyProps, never>> & string;
export declare const CheckBoxWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const LoaderWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ErrorDisplayTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, "ref"> & {
    ref?: ((instance: HTMLObjectElement | null) => void) | import("react").RefObject<HTMLObjectElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGTextElementAttributes<SVGTextElement>, "ref"> & {
    ref?: ((instance: SVGTextElement | null) => void) | import("react").RefObject<SVGTextElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, "ref"> & {
    ref?: ((instance: HTMLStyleElement | null) => void) | import("react").RefObject<HTMLStyleElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    ref?: ((instance: HTMLElement | null) => void) | import("react").RefObject<HTMLElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, "ref"> & {
    ref?: ((instance: HTMLLinkElement | null) => void) | import("react").RefObject<HTMLLinkElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref"> & {
    ref?: ((instance: HTMLTableElement | null) => void) | import("react").RefObject<HTMLTableElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, "ref"> & {
    ref?: ((instance: HTMLMapElement | null) => void) | import("react").RefObject<HTMLMapElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, "ref"> & {
    ref?: ((instance: HTMLMeterElement | null) => void) | import("react").RefObject<HTMLMeterElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & {
    ref?: ((instance: HTMLTextAreaElement | null) => void) | import("react").RefObject<HTMLTextAreaElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, "ref"> & {
    ref?: ((instance: HTMLProgressElement | null) => void) | import("react").RefObject<HTMLProgressElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGCircleElement>, "ref"> & {
    ref?: ((instance: SVGCircleElement | null) => void) | import("react").RefObject<SVGCircleElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, "ref"> & {
    ref?: ((instance: HTMLEmbedElement | null) => void) | import("react").RefObject<HTMLEmbedElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLPreElement>, HTMLPreElement>, "ref"> & {
    ref?: ((instance: HTMLPreElement | null) => void) | import("react").RefObject<HTMLPreElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").MenuHTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    ref?: ((instance: HTMLElement | null) => void) | import("react").RefObject<HTMLElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "ref"> & {
    ref?: ((instance: HTMLTableSectionElement | null) => void) | import("react").RefObject<HTMLTableSectionElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref"> & {
    ref?: ((instance: HTMLFormElement | null) => void) | import("react").RefObject<HTMLFormElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    ref?: ((instance: HTMLAnchorElement | null) => void) | import("react").RefObject<HTMLAnchorElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, "ref"> & {
    ref?: ((instance: HTMLAreaElement | null) => void) | import("react").RefObject<HTMLAreaElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "ref"> & {
    ref?: ((instance: HTMLAudioElement | null) => void) | import("react").RefObject<HTMLAudioElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, "ref"> & {
    ref?: ((instance: HTMLBaseElement | null) => void) | import("react").RefObject<HTMLBaseElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> & {
    ref?: ((instance: HTMLQuoteElement | null) => void) | import("react").RefObject<HTMLQuoteElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, "ref"> & {
    ref?: ((instance: HTMLBodyElement | null) => void) | import("react").RefObject<HTMLBodyElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLBRElement>, HTMLBRElement>, "ref"> & {
    ref?: ((instance: HTMLBRElement | null) => void) | import("react").RefObject<HTMLBRElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, "ref"> & {
    ref?: ((instance: HTMLCanvasElement | null) => void) | import("react").RefObject<HTMLCanvasElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> & {
    ref?: ((instance: HTMLTableColElement | null) => void) | import("react").RefObject<HTMLTableColElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> & {
    ref?: ((instance: HTMLTableColElement | null) => void) | import("react").RefObject<HTMLTableColElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, "ref"> & {
    ref?: ((instance: HTMLDataElement | null) => void) | import("react").RefObject<HTMLDataElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, "ref"> & {
    ref?: ((instance: HTMLDataListElement | null) => void) | import("react").RefObject<HTMLDataListElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").DelHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> & {
    ref?: ((instance: HTMLModElement | null) => void) | import("react").RefObject<HTMLModElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, "ref"> & {
    ref?: ((instance: HTMLDetailsElement | null) => void) | import("react").RefObject<HTMLDetailsElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, "ref"> & {
    ref?: ((instance: HTMLDialogElement | null) => void) | import("react").RefObject<HTMLDialogElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDListElement>, HTMLDListElement>, "ref"> & {
    ref?: ((instance: HTMLDListElement | null) => void) | import("react").RefObject<HTMLDListElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, "ref"> & {
    ref?: ((instance: HTMLFieldSetElement | null) => void) | import("react").RefObject<HTMLFieldSetElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> & {
    ref?: ((instance: HTMLHeadingElement | null) => void) | import("react").RefObject<HTMLHeadingElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHRElement>, HTMLHRElement>, "ref"> & {
    ref?: ((instance: HTMLHRElement | null) => void) | import("react").RefObject<HTMLHRElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, "ref"> & {
    ref?: ((instance: HTMLHtmlElement | null) => void) | import("react").RefObject<HTMLHtmlElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, "ref"> & {
    ref?: ((instance: HTMLIFrameElement | null) => void) | import("react").RefObject<HTMLIFrameElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> & {
    ref?: ((instance: HTMLImageElement | null) => void) | import("react").RefObject<HTMLImageElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
    ref?: ((instance: HTMLInputElement | null) => void) | import("react").RefObject<HTMLInputElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").InsHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> & {
    ref?: ((instance: HTMLModElement | null) => void) | import("react").RefObject<HTMLModElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").KeygenHTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    ref?: ((instance: HTMLElement | null) => void) | import("react").RefObject<HTMLElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> & {
    ref?: ((instance: HTMLLabelElement | null) => void) | import("react").RefObject<HTMLLabelElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, "ref"> & {
    ref?: ((instance: HTMLLegendElement | null) => void) | import("react").RefObject<HTMLLegendElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & {
    ref?: ((instance: HTMLLIElement | null) => void) | import("react").RefObject<HTMLLIElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, "ref"> & {
    ref?: ((instance: HTMLMetaElement | null) => void) | import("react").RefObject<HTMLMetaElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & {
    ref?: ((instance: HTMLOListElement | null) => void) | import("react").RefObject<HTMLOListElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, "ref"> & {
    ref?: ((instance: HTMLOptGroupElement | null) => void) | import("react").RefObject<HTMLOptGroupElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, "ref"> & {
    ref?: ((instance: HTMLOptionElement | null) => void) | import("react").RefObject<HTMLOptionElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, "ref"> & {
    ref?: ((instance: HTMLOutputElement | null) => void) | import("react").RefObject<HTMLOutputElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void) | import("react").RefObject<HTMLParagraphElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>, "ref"> & {
    ref?: ((instance: HTMLParamElement | null) => void) | import("react").RefObject<HTMLParamElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> & {
    ref?: ((instance: HTMLQuoteElement | null) => void) | import("react").RefObject<HTMLQuoteElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, "ref"> & {
    ref?: ((instance: HTMLScriptElement | null) => void) | import("react").RefObject<HTMLScriptElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref"> & {
    ref?: ((instance: HTMLSelectElement | null) => void) | import("react").RefObject<HTMLSelectElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, "ref"> & {
    ref?: ((instance: HTMLSourceElement | null) => void) | import("react").RefObject<HTMLSourceElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | import("react").RefObject<HTMLSpanElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, "ref"> & {
    ref?: ((instance: HTMLTableDataCellElement | null) => void) | import("react").RefObject<HTMLTableDataCellElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, "ref"> & {
    ref?: ((instance: HTMLTableHeaderCellElement | null) => void) | import("react").RefObject<HTMLTableHeaderCellElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, "ref"> & {
    ref?: ((instance: HTMLTimeElement | null) => void) | import("react").RefObject<HTMLTimeElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "ref"> & {
    ref?: ((instance: HTMLTableRowElement | null) => void) | import("react").RefObject<HTMLTableRowElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, "ref"> & {
    ref?: ((instance: HTMLTrackElement | null) => void) | import("react").RefObject<HTMLTrackElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & {
    ref?: ((instance: HTMLUListElement | null) => void) | import("react").RefObject<HTMLUListElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGUseElement>, "ref"> & {
    ref?: ((instance: SVGUseElement | null) => void) | import("react").RefObject<SVGUseElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").DetailedHTMLProps<import("react").VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "ref"> & {
    ref?: ((instance: HTMLVideoElement | null) => void) | import("react").RefObject<HTMLVideoElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGClipPathElement>, "ref"> & {
    ref?: ((instance: SVGClipPathElement | null) => void) | import("react").RefObject<SVGClipPathElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGDefsElement>, "ref"> & {
    ref?: ((instance: SVGDefsElement | null) => void) | import("react").RefObject<SVGDefsElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGEllipseElement>, "ref"> & {
    ref?: ((instance: SVGEllipseElement | null) => void) | import("react").RefObject<SVGEllipseElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGForeignObjectElement>, "ref"> & {
    ref?: ((instance: SVGForeignObjectElement | null) => void) | import("react").RefObject<SVGForeignObjectElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGGElement>, "ref"> & {
    ref?: ((instance: SVGGElement | null) => void) | import("react").RefObject<SVGGElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGImageElement>, "ref"> & {
    ref?: ((instance: SVGImageElement | null) => void) | import("react").RefObject<SVGImageElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGLineElementAttributes<SVGLineElement>, "ref"> & {
    ref?: ((instance: SVGLineElement | null) => void) | import("react").RefObject<SVGLineElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGLinearGradientElement>, "ref"> & {
    ref?: ((instance: SVGLinearGradientElement | null) => void) | import("react").RefObject<SVGLinearGradientElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGMarkerElement>, "ref"> & {
    ref?: ((instance: SVGMarkerElement | null) => void) | import("react").RefObject<SVGMarkerElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGMaskElement>, "ref"> & {
    ref?: ((instance: SVGMaskElement | null) => void) | import("react").RefObject<SVGMaskElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGPathElement>, "ref"> & {
    ref?: ((instance: SVGPathElement | null) => void) | import("react").RefObject<SVGPathElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGPatternElement>, "ref"> & {
    ref?: ((instance: SVGPatternElement | null) => void) | import("react").RefObject<SVGPatternElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGPolygonElement>, "ref"> & {
    ref?: ((instance: SVGPolygonElement | null) => void) | import("react").RefObject<SVGPolygonElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGPolylineElement>, "ref"> & {
    ref?: ((instance: SVGPolylineElement | null) => void) | import("react").RefObject<SVGPolylineElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGRadialGradientElement>, "ref"> & {
    ref?: ((instance: SVGRadialGradientElement | null) => void) | import("react").RefObject<SVGRadialGradientElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGRectElement>, "ref"> & {
    ref?: ((instance: SVGRectElement | null) => void) | import("react").RefObject<SVGRectElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGStopElement>, "ref"> & {
    ref?: ((instance: SVGStopElement | null) => void) | import("react").RefObject<SVGStopElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<import("react").SVGProps<SVGTSpanElement>, "ref"> & {
    ref?: ((instance: SVGTSpanElement | null) => void) | import("react").RefObject<SVGTSpanElement> | null | undefined;
}>, import("../typography").TypographyProps> | import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<any, Omit<any, "ref"> & import("react").RefAttributes<import("react").Component<any, any, any>>>, import("../typography").TypographyProps>, import("../typography").TypographyProps> & import("styled-components/dist/types").BaseObject, import("styled-components/dist/types").BaseObject>> & string;
export declare const EmptyViewCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, never>> & string;
export {};
