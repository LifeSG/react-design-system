/**
 * Storybook ArgTypes Generation Tool - Public API
 *
 * Main entry point for the storybook-argtypes utility.
 * Exports all public interfaces, classes, and utilities.
 */

// Configuration
export {
    GENERATED_FILE_HEADER,
    SOURCE_FILE_GLOBS,
    STORY_FILE_GLOB,
    STORYBOOK_ARGTYPES_FILE,
    TYPE_FORMAT_FLAGS,
    WATCH_ROOTS,
} from "./config/arg-types-config";

// Types
export type {
    ArgTypesGenerationConfig,
    ComponentReference,
    FileStat,
    GeneratedArgType,
    JsDocMeta,
    JsDocSupportedNode,
    ResolvedSymbol,
    ResolvedTypesFile,
    StorybookTaggedDeclarationNode,
    StoryMetadata,
} from "./types/arg-types-types";

// Adapters
export {
    FileSystemAdapter,
    type IFileSystemAdapter,
} from "./adapters/file-system-adapter";
export { TsMorphProjectFactory } from "./adapters/ts-morph-project-factory";

// Services
export { ArgTypesRowBuilder } from "./services/arg-types-row-builder";
export { FilePathResolver } from "./services/file-path-resolver";
export { JsDocMetadataExtractor } from "./services/jsdoc-metadata-extractor";
export { StoryRegistryGenerator } from "./services/story-registry-generator";
export { TypeDependencyCache } from "./services/type-dependency-cache";
export { TypeFormattingService } from "./services/type-formatting-service";
export { TypeScriptSourceAnalyzer } from "./services/typescript-source-analyzer";
