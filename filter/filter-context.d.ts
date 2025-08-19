import React, { MutableRefObject } from "react";
import { Mode } from "./types";
interface IFilterContext {
    mode: Mode;
    rootNode: MutableRefObject<HTMLDivElement> | null;
}
export declare const FilterContext: React.Context<IFilterContext>;
export {};
