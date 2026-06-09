import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

import {
    CombinedUsage,
    RootImport,
    UnknownV1Usage,
    V1Usage,
    V2Usage,
} from "./test-data";

describe("V3->V4 Codemod: Migrate Popover", () => {
    const inputPath = path.join(__dirname, "input.tsx");
    const outputPath = path.join(__dirname, "output.tsx");

    afterEach(() => {
        // delete the files created for testing (comment this out to view files)
        fs.unlinkSync(inputPath);
        fs.unlinkSync(outputPath);
    });

    it.each`
        scenario                                                      | inputCode               | expectedOutputCode
        ${"should transform PopoverV2 to V4 imports correctly"}       | ${V2Usage.input}        | ${V2Usage.expectedOutput}
        ${"should transform imports from the library root correctly"} | ${RootImport.input}     | ${RootImport.expectedOutput}
        ${"should transform Popover usage correctly"}                 | ${V1Usage.input}        | ${V1Usage.expectedOutput}
        ${"should skip unknown Popover usage correctly"}              | ${UnknownV1Usage.input} | ${UnknownV1Usage.expectedOutput}
        ${"should handle both Popover and PopoverV2 usage correctly"} | ${CombinedUsage.input}  | ${CombinedUsage.expectedOutput}
    `("$scenario", ({ inputCode, expectedOutputCode }) => {
        // create sample input file for testing
        fs.writeFileSync(inputPath, inputCode);
        fs.copyFileSync(inputPath, outputPath);

        // Execute the jscodeshift command for the codemod
        execSync(
            `jscodeshift --parser=tsx -t ./codemods/migrate-popover/index.ts ${outputPath}`
        );

        // Check the transformed code
        const transformedCode = fs.readFileSync(outputPath, "utf8");

        // Compare the transformed code with the expected output
        expect(transformedCode.trim()).toEqual(expectedOutputCode.trim());
    });
});
