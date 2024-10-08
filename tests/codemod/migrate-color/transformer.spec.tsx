import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import { expectedOutputCode, inputCode } from "./test-data";

describe("Codemod Transformer for V2_Color to Colour", () => {
    const inputPath = path.join(__dirname, "input.tsx");
    const outputPath = path.join(__dirname, "output.tsx");

    beforeAll(() => {
        // Create sample input file for testing
        jest.resetAllMocks();
        fs.writeFileSync(inputPath, inputCode);
    });

    afterAll(() => {
        // Delete the files created for testing (comment this out to view files)
        fs.unlinkSync(inputPath);
        fs.unlinkSync(outputPath);
    });

    it("should transform V2_Color tokens to Colour tokens and map theme correctly", () => {
        fs.copyFileSync(inputPath, outputPath);

        // Execute the jscodeshift command for the codemod
        execSync(
            `jscodeshift --parser=tsx --verbose=2 -t ./codemods/migrate-colour --mapping=lifesg ${outputPath}`
        );

        // Check the transformed code
        const transformedCode = fs.readFileSync(outputPath, "utf8");

        // Compare the transformed code with the expected output
        expect(transformedCode.trim()).toEqual(expectedOutputCode.trim());
    });
});
