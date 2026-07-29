import type { GeneratedArgType } from "./table";

/** Extracts the interface-name prefix from a generated key like `"InterfaceName.propName"`. */
type KeyPrefix<K extends string> = K extends `${infer P}.${string}` ? P : never;

export const STORYBOOK_PLAYGROUND_EXCLUDE_PROPS = [
    "className",
    "data-testid",
    "id",
] as const;

/**
 * Shared iterator over generated argtypes with optional interface filtering.
 */
function eachGeneratedArgType<T extends Record<string, unknown>>(
    generatedArgTypes: T,
    interfaceName: KeyPrefix<string & keyof T> | undefined,
    callback: (argType: GeneratedArgType["value"]) => void
): void {
    const prefix = interfaceName ? `${interfaceName}.` : undefined;

    for (const [key, rawValue] of Object.entries(generatedArgTypes)) {
        console.log({ prefix, key });
        if (prefix && !key.startsWith(prefix)) continue;

        callback(rawValue as GeneratedArgType["value"]);
    }
}

/**
 * Convert a generated argtypes map to flat Storybook Controls-panel argTypes.
 *
 * @param generatedArgTypes - The value from `storybookArgTypesByTitle["Story/Title"]`
 * @param interfaceName - Optional interface name to include only props from that interface.
 *   Type-checked against the actual interface names present in the generated argtypes.
 * @returns Flat argTypes object suitable for `Meta.argTypes`
 *
 * @example
 * // All interfaces merged (first-seen wins on name collision)
 * toStoryArgTypes(storybookArgTypesByTitle["Core/Typography"])
 *
 * @example
 * // Only TypographyProps — TypeScript autocompletes the valid values
 * toStoryArgTypes(storybookArgTypesByTitle["Core/Typography"], "TypographyProps")
 */
export function toStoryArgTypes<T extends Record<string, unknown>>(
    generatedArgTypes: T,
    interfaceName?: KeyPrefix<string & keyof T>
): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    eachGeneratedArgType(generatedArgTypes, interfaceName, (argType) => {
        // Skip inherited-HTML-props placeholder rows (name is empty string)
        if (!argType.name) return;

        // First-seen wins — avoid clobbering a prop from an earlier interface
        if (argType.name in result) return;
        console.log({ argTypeName: argType.name, argType });

        result[argType.name] = {
            name: argType.name,
            description: argType.description,
            deprecated: argType.deprecated,
            control: argType.control,
            ...(argType.options && { options: argType.options }),
            type: argType.type,
        };
    });

    return result;
}

/**
 * Extract an `exclude` list for Storybook Controls from generated argtypes.
 *
 * A prop is excluded when its generated argtype has `control: false`.
 *
 * @param generatedArgTypes - The value from `storybookArgTypesByTitle["Story/Title"]`
 * @param interfaceName - Optional interface name to include only props from that interface.
 * @returns Prop names suitable for `parameters.docs.controls.exclude` or `<Controls exclude={...} />`
 */
export function toStoryExcludedProps<T extends Record<string, unknown>>(
    generatedArgTypes: T,
    interfaceName?: KeyPrefix<string & keyof T>
): string[] {
    const result: string[] = STORYBOOK_PLAYGROUND_EXCLUDE_PROPS.slice();
    const seen = new Set<string>(STORYBOOK_PLAYGROUND_EXCLUDE_PROPS);

    eachGeneratedArgType(generatedArgTypes, interfaceName, (argType) => {
        // Skip inherited-HTML-props placeholder rows (name is empty string)
        if (!argType.name) return;

        // First-seen wins — keep ordering stable and avoid duplicates
        if (seen.has(argType.name)) return;
        seen.add(argType.name);

        if (argType.control === false) {
            result.push(argType.name);
        }
    });

    return result;
}
