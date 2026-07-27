/**
 * FileSystemAdapter - Minimal abstraction for filesystem operations.
 *
 * This adapter abstracts path resolution and file existence checks,
 * making file operations testable via mocking without filesystem access.
 */

import { existsSync, statSync } from "node:fs";
import fs from "node:fs/promises";
import { resolve } from "node:path";

import type { FileStat } from "../types";

/**
 * Interface for filesystem operations used by path resolution services.
 * Allows mocking during tests without real filesystem access.
 */
export interface IFileSystemAdapter {
    /**
     * Check if a path exists (file or directory).
     * @param path The path to check
     * @returns true if path exists, false otherwise
     */
    existsSync(path: string): boolean;

    /**
     * Get file statistics for a path.
     * @param path The path to stat
     * @returns File stat object with isFile() and isDirectory() methods
     * @throws If path doesn't exist
     */
    statSync(path: string): FileStat;

    /**
     * Resolve one or more path segments relative to working directory.
     * @param segments Path segments to resolve
     * @returns Absolute resolved path
     */
    resolvePath(...segments: string[]): string;

    /**
     * Remove a file or directory.
     * @param path The path to remove
     * @param options.force If true, suppress errors if path doesn't exist
     */
    rm(path: string, options?: { force?: boolean }): Promise<void>;

    /**
     * Create a directory.
     * @param path The directory path
     * @param options.recursive If true, create parent directories as needed
     */
    mkdir(path: string, options?: { recursive?: boolean }): Promise<void>;

    /**
     * Write text content to a file.
     * @param path The file path
     * @param data The content to write
     */
    writeFile(path: string, data: string): Promise<void>;
}

/**
 * Default FileSystemAdapter implementation using Node.js fs module.
 */
export class FileSystemAdapter implements IFileSystemAdapter {
    public existsSync(path: string): boolean {
        return existsSync(path);
    }

    public statSync(path: string): FileStat {
        return statSync(path);
    }

    public resolvePath(...segments: string[]): string {
        return resolve(...segments);
    }

    public async rm(
        path: string,
        options?: { force?: boolean }
    ): Promise<void> {
        await fs.rm(path, options);
    }

    public async mkdir(
        path: string,
        options?: { recursive?: boolean }
    ): Promise<void> {
        await fs.mkdir(path, options);
    }

    public async writeFile(path: string, data: string): Promise<void> {
        await fs.writeFile(path, data);
    }
}
