import type { RefObject } from "react";
import React from "react";

import type { Mode } from "./types";

interface IFilterContext {
    mode: Mode;
    rootNode: RefObject<HTMLDivElement>;
}

export const FilterContext = React.createContext<IFilterContext>({
    mode: "default",
    rootNode: { current: null },
});
