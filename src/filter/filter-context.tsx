import React from "react";
import { Mode } from "./types";

interface IFilterContext {
    mode: Mode;
}

export const FilterContext = React.createContext<IFilterContext>({
    mode: "default",
});
