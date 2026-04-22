import { PrimitiveColourSet, SemanticColourSet } from "src/theme";
import {
    ColourSpec as PrimitiveColourSpec,
    DarkColourSpec as PrimitiveDarkColourSpec,
} from "src/theme/colour-primitive/theme-helper";
import {
    ColourSpec as SemanticColourSpec,
    DarkColourSpec as SemanticDarkColourSpec,
} from "src/theme/colour-semantic/theme-helper";
import { DefaultTheme } from "styled-components";

/**
 * Inspect the name of the colour token that was accessed
 *
 * Usage:
 * ```
 * ColourTokenInspector.from(theme).inspect(callback)
 * ```
 */
export class ColourTokenInspector {
    private primitiveOriginal!: PrimitiveColourSet;
    private primitiveColourToken!: string | undefined;
    private semanticOriginal!: SemanticColourSet;
    private semanticColourToken!: string | undefined;

    private constructor(private theme: DefaultTheme) {}

    public static from(theme: DefaultTheme) {
        return new ColourTokenInspector(theme);
    }

    public inspect<T>(fn: () => T) {
        this.setup();
        const result = fn();
        const { primitive, semantic } = this.get();
        this.cleanup();

        return { primitive, semantic, result };
    }

    public setup() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;

        const scheme = this.theme.colourScheme;
        const mode = this.theme.colourMode;
        const primitiveSpec =
            mode === "dark" ? PrimitiveDarkColourSpec : PrimitiveColourSpec;
        const semanticSpec =
            mode === "dark" ? SemanticDarkColourSpec : SemanticColourSpec;

        this.primitiveOriginal = primitiveSpec.collections[scheme];
        const primitiveProxy = {
            get(target: PrimitiveColourSet, prop: keyof PrimitiveColourSet) {
                self.primitiveColourToken = prop;
                return target[prop];
            },
        };
        primitiveSpec.collections[scheme] = new Proxy(
            this.primitiveOriginal,
            primitiveProxy
        );

        this.semanticOriginal = semanticSpec.collections[scheme];
        const semanticProxy = {
            get(target: SemanticColourSet, prop: keyof SemanticColourSet) {
                self.semanticColourToken = prop;
                return target[prop];
            },
        };
        semanticSpec.collections[scheme] = new Proxy(
            this.semanticOriginal,
            semanticProxy
        );
    }

    public get() {
        return {
            primitive: this.primitiveColourToken,
            semantic: this.semanticColourToken,
        };
    }

    public cleanup() {
        const scheme = this.theme.colourScheme;
        const mode = this.theme.colourMode;
        const primitiveSpec =
            mode === "dark" ? PrimitiveDarkColourSpec : PrimitiveColourSpec;
        const semanticSpec =
            mode === "dark" ? SemanticDarkColourSpec : SemanticColourSpec;

        primitiveSpec.collections[scheme] = this.primitiveOriginal;
        semanticSpec.collections[scheme] = this.semanticOriginal;
    }
}
