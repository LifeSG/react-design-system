/**
 * Configuration constants for Storybook argTypes generation.
 * Centralizes all configuration to improve testability and maintainability.
 */

import * as path from "node:path";

import { TypeFormatFlags } from "ts-morph";

/**
 * Glob patterns for source files containing type definitions.
 * Used to discover which component types.ts files to generate argTypes from.
 */
export const SOURCE_FILE_GLOBS = [
    "src/*/types.ts",
    "src/filter/addons/types.ts",
    "src/form/form-*/types.ts",
    "src/popover/popover-inline/types.ts",
] as const;

/**
 * Root directories to watch for file changes (when in watch mode).
 */
export const WATCH_ROOTS = ["src", "stories"];

/**
 * Glob pattern for story files to scan for component references.
 */
export const STORY_FILE_GLOB = "stories/**/*.stories.@(ts|tsx)";

/**
 * Output file path for the generated registry mapping stories to argTypes imports.
 */
export const STORYBOOK_ARGTYPES_FILE = path.resolve(
    ".storybook/generated/storybook-argtypes.generated.ts"
);

/**
 * TypeScript type formatting flags for consistent text representation.
 * NoTruncation: Show full type text without truncation
 * UseSingleQuotesForStringLiteralType: Prefer 'string' over "string"
 */
export const TYPE_FORMAT_FLAGS =
    TypeFormatFlags.NoTruncation |
    TypeFormatFlags.UseSingleQuotesForStringLiteralType;

/**
 * Header comment for all generated files.
 */
export const GENERATED_FILE_HEADER =
    `// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes
` as const;
