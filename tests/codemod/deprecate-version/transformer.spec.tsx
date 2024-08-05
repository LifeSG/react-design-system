import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import { expectedOutputCode, inputCode } from "./testData";

describe("Codemod Transformer for updating version", () => {
    const inputPath = path.join(__dirname, "input.tsx");
    const outputPath = path.join(__dirname, "output.tsx");

    beforeAll(() => {
        // create sample input file for testing
        jest.resetAllMocks();
        fs.writeFileSync(inputPath, inputCode);
        console.log(`Input file created at: ${inputPath}`);
        console.log(`Input code:\n${inputCode}`);
    });

    afterAll(() => {
        // To delete the files created for testing comment to view the files
        fs.unlinkSync(inputPath);
        fs.unlinkSync(outputPath);
    });

    it("should transform the code to updated version", () => {
        // copy the input file to the transformed output file
        fs.copyFileSync(inputPath, outputPath);
        console.log(`Output file created at: ${outputPath}`);

        // do the jscodeshift command
        console.log(`Running jscodeshift command...`);
        execSync(
            `jscodeshift -t ../react-design-system/codemods/deprecate-version ${outputPath}`
        );

        // execSync(`jscodeshift -t ../../codemods/v2_version_change.ts ${outputPath}`);

        // check the transformed code
        const transformedCode = fs.readFileSync(outputPath, "utf8");
        console.log(`Transformed code:\n${transformedCode}`);

        // compare the transformed code with the expected output
        console.log(`Expected output code:\n${expectedOutputCode}`);
        expect(transformedCode.trim().split("\n")).toMatchObject(
            expectedOutputCode.trim().split("\n")
        );
    });
});
