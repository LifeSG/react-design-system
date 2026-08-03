import type React from "react";
import type { MarkupProps } from "./types";
/**
 * A container for rendering rich HTML markup.
 *
 * Use `Markup` to wrap CMS-generated or sanitised HTML content while applying
 * a consistent base font size and colour.
 */
export declare const Markup: (props: MarkupProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
