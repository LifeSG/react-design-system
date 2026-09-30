import type { RefObject } from "react";
import React from "react";
import type { Mode } from "./types";
interface IFilterContext {
    mode: Mode;
    rootNode: RefObject<HTMLDivElement>;
}
export declare const FilterContext: React.Context<IFilterContext>;
export {};
