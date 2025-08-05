import { getPrimitiveColour } from "../../colour-primitive/theme-helper";
import { getSemanticColour } from "../../colour-semantic/theme-helper";
import { StyledComponentProps } from "../../helpers";
import { PrimitiveColourSet, SemanticColourSet } from "../../types";
import { ShadowSet } from "../types";

const createShadow =
    (shadowDef: string, colourKey: string, alpha: number) =>
    (props: StyledComponentProps) => {
        const color =
            getSemanticColour(colourKey as keyof SemanticColourSet)(props) ||
            getPrimitiveColour(colourKey as keyof PrimitiveColourSet)(props);
        return shadowDef.replace(
            /COLOUR/g,
            `rgba(from ${color} r g b / ${alpha * 100}%)`
        );
    };

export const DefaultShadowSet: ShadowSet = {
    "xs-subtle": createShadow("0 0 4px 1px COLOUR", "neutral-50", 0.24),
    "xs-strong": createShadow("0 0 4px 1px COLOUR", "neutral-50", 0.5),
    "xs-focus-strong": createShadow("0 0 4px 1px COLOUR", "border-focus", 0.5),
    "xs-error-strong": createShadow("0 0 4px 1px COLOUR", "border-error", 0.5),
    "sm-subtle": createShadow("0 2px 4px 0 COLOUR", "neutral-50", 0.24),
    "sm-strong": createShadow("0 2px 4px 0 COLOUR", "neutral-50", 0.5),
    "md-subtle": createShadow("0 2px 8px 0 COLOUR", "neutral-50", 0.24),
    "md-strong": createShadow("0 2px 8px 0 COLOUR", "neutral-50", 0.5),
    "lg-subtle": createShadow("0 2px 12px 1px COLOUR", "neutral-50", 0.24),
    "lg-strong": createShadow("0 2px 12px 1px COLOUR", "neutral-50", 0.5),
};
