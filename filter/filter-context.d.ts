import React, { RefObject } from "react";
import { Mode } from "./types";
interface IFilterContext {
    mode: Mode;
    rootNode: RefObject<HTMLDivElement>;
}
export declare const FilterContext: React.Context<IFilterContext>;
export {};
