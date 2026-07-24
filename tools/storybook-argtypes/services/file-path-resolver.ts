/**
 * FilePathResolver - Resolve file paths and import paths for components and types.
 *
 * Handles mapping story files to their corresponding type files
 * and resolving import paths for components.
 */

import * as path from "node:path";

import type { IFileSystemAdapter } from "../adapters/file-system-adapter";
import { FileSystemAdapter } from "../adapters/file-system-adapter";

/**
 * Resolves file paths for type definitions and story imports.
 * Maps story files to component types and resolves import paths.
 *
 * Usage:
 * ```typescript
 * const resolver = new FilePathResolver();
 * const typesFile = resolver.getTypesFileFromStoryDirectory('stories/button/button.stories.ts');
 * ```
 */
export class FilePathResolver {
    private readonly fileSystemAdapter: IFileSystemAdapter;

    /**
     * Create a new FilePathResolver.
     *
     * @param fileSystemAdapter Adapter for filesystem operations (optional, uses default)
     */
    public constructor(
        fileSystemAdapter: IFileSystemAdapter = new FileSystemAdapter()
    ) {
        this.fileSystemAdapter = fileSystemAdapter;
    }

    // =========================================================================
    // Story file parsing
    // =========================================================================

    /**
     * Extract the story title from story file text.
     *
     * @param fileText Content of the story file
     * @returns Story title or undefined if not found
     */
    public getStoryTitle(fileText: string): string | undefined {
        const match = /title:\s*["'`]([^"'`]+)["'`]/.exec(fileText);
        return match?.[1];
    }

    /**
     * Extract the component reference from story file text.
     * Matches `component: Form.CustomField` style declarations.
     *
     * @param fileText Content of the story file
     * @returns Object with rootIdentifier and memberPath, or undefined if not found
     */
    public getComponentReference(
        fileText: string
    ): { rootIdentifier: string; memberPath: string[] } | undefined {
        const match = /component:\s*([A-Za-z0-9_.]+)/.exec(fileText);

        if (!match?.[1]) {
            return undefined;
        }

        const [rootIdentifier, ...memberPath] = match[1].split(".");

        if (!rootIdentifier) {
            return undefined;
        }

        return { rootIdentifier, memberPath };
    }

    /**
     * Get the import path for a referenced identifier in story file text.
     *
     * @param fileText Story file content
     * @param identifier Component identifier to find
     * @returns Import path or undefined if not found
     */
    public getImportPathForIdentifier(
        fileText: string,
        identifier: string
    ): string | undefined {
        const importRegex = new RegExp(
            `import\\s+(?:\\{[^}]*\\b${identifier}\\b[^}]*\\}|${identifier})\\s+from\\s+["']([^"']+)["']`
        );
        return importRegex.exec(fileText)?.[1];
    }

    // =========================================================================
    // Path resolution
    // =========================================================================

    private toKebabCase(name: string): string {
        return name
            .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
            .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
            .toLowerCase();
    }

    private buildResolutionCandidates(basePath: string): string[] {
        return [
            basePath,
            `${basePath}.ts`,
            `${basePath}.tsx`,
            path.join(basePath, "index.ts"),
            path.join(basePath, "index.tsx"),
        ];
    }

    /**
     * Resolve an import path to an absolute file path.
     * Handles `src/`-prefixed paths and relative paths.
     *
     * @param storyFilePath Path to the story file (for relative resolution)
     * @param importPath Import path to resolve
     * @returns Absolute file path or undefined if not found
     */
    public resolveImportPath(
        storyFilePath: string,
        importPath: string
    ): string | undefined {
        let basePath: string;

        if (importPath.startsWith("src/")) {
            basePath = path.resolve(importPath);
        } else if (importPath.startsWith(".")) {
            basePath = path.resolve(path.dirname(storyFilePath), importPath);
        } else {
            return undefined;
        }

        return this.buildResolutionCandidates(basePath).find((candidate) => {
            if (!this.fileSystemAdapter.existsSync(candidate)) {
                return false;
            }
            return this.fileSystemAdapter.statSync(candidate).isFile();
        });
    }

    /**
     * Get component directory from a component source path.
     *
     * @param componentSourcePath Path to component source file
     * @returns Component directory path
     */
    public getComponentDirectory(componentSourcePath: string): string {
        return path.dirname(componentSourcePath);
    }

    /**
     * Get the types.ts file for a component directory.
     *
     * @param componentDirectory Component directory path
     * @returns Path to types.ts or undefined if not found
     */
    public getTypesFileForComponentDirectory(
        componentDirectory: string
    ): string | undefined {
        const typesFilePath = path.join(componentDirectory, "types.ts");
        return this.fileSystemAdapter.existsSync(typesFilePath)
            ? typesFilePath
            : undefined;
    }

    /**
     * Get the types file for a nested form component (e.g., Form.CustomField).
     * Maps `form` directory + member path to `form-{leaf-member}/types.ts`.
     *
     * @param componentDirectory Component directory (must be the `form` directory)
     * @param memberPath Member access path (e.g., ["CustomField"])
     * @returns Path to the types file or undefined
     */
    public getNestedFormTypesFile(
        componentDirectory: string,
        memberPath: string[]
    ): string | undefined {
        if (
            path.basename(componentDirectory) !== "form" ||
            memberPath.length === 0
        ) {
            return undefined;
        }

        const leafMember = memberPath.at(-1);

        if (!leafMember) {
            return undefined;
        }

        const nestedDirectory = path.join(
            componentDirectory,
            `form-${this.toKebabCase(leafMember)}`
        );

        return this.getTypesFileForComponentDirectory(nestedDirectory);
    }

    /**
     * Get the types file inferred from a story file's location.
     * Resolves `stories/{dir}/{story-name}.stories.ts` to `src/{dir}/types.ts`
     * with subdirectory-aware fallback logic.
     *
     * @param storyFilePath Path to the story file
     * @returns Path to the inferred types file or undefined
     */
    public getTypesFileFromStoryDirectory(
        storyFilePath: string
    ): string | undefined {
        const storiesRoot = path.resolve("stories");
        const relativeStoryDirectory = path.relative(
            storiesRoot,
            path.dirname(storyFilePath)
        );

        if (
            !relativeStoryDirectory ||
            relativeStoryDirectory.startsWith("..") ||
            path.isAbsolute(relativeStoryDirectory)
        ) {
            return undefined;
        }

        const topLevelStoryDirectory = relativeStoryDirectory.split(
            path.sep
        )[0];

        if (!topLevelStoryDirectory) {
            return undefined;
        }

        const storyBaseName = path
            .basename(storyFilePath)
            .replace(/\.stories\.(ts|tsx)$/, "");

        const strippedSubDir = storyBaseName.replace(
            new RegExp(`^${topLevelStoryDirectory}-`),
            ""
        );

        if (strippedSubDir !== storyBaseName) {
            const subDirTypesFile = this.getTypesFileForComponentDirectory(
                path.resolve("src", topLevelStoryDirectory, strippedSubDir)
            );

            if (subDirTypesFile) {
                return subDirTypesFile;
            }
        }

        const fullNameTypesFile = this.getTypesFileForComponentDirectory(
            path.resolve("src", topLevelStoryDirectory, storyBaseName)
        );

        if (fullNameTypesFile) {
            return fullNameTypesFile;
        }

        return this.getTypesFileForComponentDirectory(
            path.resolve("src", topLevelStoryDirectory)
        );
    }
}
