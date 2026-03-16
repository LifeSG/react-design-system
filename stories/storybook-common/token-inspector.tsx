import type { V3_PrimitiveColourSet, V3_SemanticColourSet } from "src/v3_theme";
import {
    V3_ColourSpec as PrimitiveColourSpec,
    V3_DarkColourSpec as PrimitiveDarkColourSpec,
} from "src/v3_theme/colour-primitive/theme-helper";
import {
    V3_ColourSpec as SemanticColourSpec,
    V3_DarkColourSpec as SemanticDarkColourSpec,
} from "src/v3_theme/colour-semantic/theme-helper";
import type { DefaultTheme } from "styled-components";

/**
 * Inspect the name of the colour token that was accessed
 *
 * Usage:
 * ```
 * ColourTokenInspector.from(theme).inspect(callback)
 * ```
 */
export class ColourTokenInspector {
    private primitiveOriginal!: V3_PrimitiveColourSet;
    private primitiveColourToken!: string | undefined;
    private semanticOriginal!: V3_SemanticColourSet;
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
            get(
                target: V3_PrimitiveColourSet,
                prop: keyof V3_PrimitiveColourSet
            ) {
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
            get(
                target: V3_SemanticColourSet,
                prop: keyof V3_SemanticColourSet
            ) {
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
