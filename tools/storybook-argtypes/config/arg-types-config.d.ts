/**
 * Configuration constants for Storybook argTypes generation.
 * Centralizes all configuration to improve testability and maintainability.
 */
/**
 * Glob patterns for source files containing type definitions.
 * Used to discover which component types.ts files to generate argTypes from.
 */
export declare const SOURCE_FILE_GLOBS: readonly ["src/*/types.ts", "src/filter/addons/types.ts", "src/form/form-*/types.ts", "src/popover/popover-inline/types.ts"];
/**
 * Root directories to watch for file changes (when in watch mode).
 */
export declare const WATCH_ROOTS: string[];
/**
 * Glob pattern for story files to scan for component references.
 */
export declare const STORY_FILE_GLOB = "stories/**/*.stories.@(ts|tsx)";
/**
 * Output file path for the generated registry mapping stories to argTypes imports.
 */
export declare const STORYBOOK_ARGTYPES_FILE: string;
/**
 * TypeScript type formatting flags for consistent text representation.
 * NoTruncation: Show full type text without truncation
 * UseSingleQuotesForStringLiteralType: Prefer 'string' over "string"
 */
export declare const TYPE_FORMAT_FLAGS: number;
/**
 * Header comment for all generated files.
 */
export declare const GENERATED_FILE_HEADER: "// This file is generated. Do not edit manually.\n// Run: npm run storybook:argtypes\n";
