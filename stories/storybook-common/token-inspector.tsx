import { PrimitiveColourSet, SemanticColourSet } from "src/theme";
import { ColourSpec as PrimitiveColourSpec } from "src/theme/colour-primitive/theme-helper";
import { ColourSpec as SematicColourSpec } from "src/theme/colour-semantic/theme-helper";
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

        this.primitiveOriginal = PrimitiveColourSpec.collections[scheme];
        const primitiveProxy = {
            get(target: PrimitiveColourSet, prop: keyof PrimitiveColourSet) {
                self.primitiveColourToken = prop;
                return target[prop];
            },
        };
        PrimitiveColourSpec.collections[scheme] = new Proxy(
            this.primitiveOriginal,
            primitiveProxy
        );

        this.semanticOriginal = SematicColourSpec.collections[scheme];
        const semanticProxy = {
            get(target: SemanticColourSet, prop: keyof SemanticColourSet) {
                self.semanticColourToken = prop;
                return target[prop];
            },
        };
        SematicColourSpec.collections[scheme] = new Proxy(
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
        PrimitiveColourSpec.collections[scheme] = this.primitiveOriginal;
        SematicColourSpec.collections[scheme] = this.semanticOriginal;
    }
}
