import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import {
    RootImport,
    TextStyleHelperReferences,
    TypicalUsage,
} from "./test-data";

describe("Codemod Transformer for V2_Text to Typography", () => {
    const inputPath = path.join(__dirname, "input.tsx");
    const outputPath = path.join(__dirname, "output.tsx");

    afterEach(() => {
        // delete the files created for testing (comment this out to view files)
        fs.unlinkSync(inputPath);
        fs.unlinkSync(outputPath);
    });

    it.each`
        scenario                                                         | inputCode                          | expectedOutputCode
        ${"should transform to V3 modules correctly"}                    | ${TypicalUsage.input}              | ${TypicalUsage.expectedOutput}
        ${"should transform imports from the library root correctly"}    | ${RootImport.input}                | ${RootImport.expectedOutput}
        ${"should not transform remaining usages of V2_TextStyleHelper"} | ${TextStyleHelperReferences.input} | ${TextStyleHelperReferences.expectedOutput}
    `("$scenario", ({ inputCode, expectedOutputCode }) => {
        // create sample input file for testing
        fs.writeFileSync(inputPath, inputCode);
        fs.copyFileSync(inputPath, outputPath);

        // Execute the jscodeshift command for the codemod
        execSync(
            `jscodeshift --parser=tsx -t ./codemods/migrate-text/index.ts ${outputPath}`
        );

        // Check the transformed code
        const transformedCode = fs.readFileSync(outputPath, "utf8");

        // Compare the transformed code with the expected output
        expect(transformedCode.trim()).toEqual(expectedOutputCode.trim());
    });
});
