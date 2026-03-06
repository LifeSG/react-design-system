import { Border } from "./border";
import { Breakpoint } from "./breakpoint";
import { Colour, PrimitiveColours } from "./colour";
import { Component } from "./component";
import { FontSpec } from "./font";
import { Motion } from "./motion";
import { Radius } from "./radius";
import { Shadow } from "./shadow";
import { Spacing } from "./spacing";

export const Tokens = {
    ...Border,
    ...Breakpoint,
    ...Colour,
    ...Component,
    ...FontSpec,
    ...Motion,
    ...PrimitiveColours,
    ...Radius,
    ...Shadow,
    ...Spacing,
} as const;
