import React, { RefObject } from "react";
import { Mode } from "./types";

interface IFilterContext {
    mode: Mode;
    rootNode: RefObject<HTMLDivElement>;
}

export const FilterContext = React.createContext<IFilterContext>({
    mode: "default",
    rootNode: { current: null },
});
