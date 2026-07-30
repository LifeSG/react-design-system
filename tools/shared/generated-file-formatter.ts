import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import * as path from "node:path";

/**
 * Shared formatter for generated files.
 */
export class GeneratedFileFormatter {
    public format(pattern: string): void {
        const binary = path.resolve("node_modules", ".bin", "pretty-quick");

        if (!existsSync(binary)) {
            throw new Error(
                `Could not find pretty-quick at ${binary}. Install dependencies before formatting generated files.`
            );
        }

        const result = spawnSync(binary, ["--pattern", pattern], {
            stdio: "inherit",
            shell: false,
        });

        if (result.error) {
            throw result.error;
        }

        if (typeof result.status === "number" && result.status !== 0) {
            throw new Error(
                `pretty-quick failed with exit code ${result.status}`
            );
        }
    }
}
