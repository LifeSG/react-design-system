import React, { MutableRefObject } from "react";
import { Mode } from "./types";

interface IFilterContext {
    mode: Mode;
    rootNode: MutableRefObject<HTMLDivElement> | null;
}

export const FilterContext = React.createContext<IFilterContext>({
    mode: "default",
    rootNode: null,
});
