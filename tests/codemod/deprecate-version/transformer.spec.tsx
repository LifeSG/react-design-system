import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import { expectedOutputCode, inputCode } from "./test-data";

describe("Codemod Transformer for updating version", () => {
    const inputPath = path.join(__dirname, "input.tsx");
    const outputPath = path.join(__dirname, "output.tsx");

    beforeAll(() => {
        // create sample input file for testing
        jest.resetAllMocks();
        fs.writeFileSync(inputPath, inputCode);
    });

    afterAll(() => {
        // To delete the files created for testing comment to view the files
        fs.unlinkSync(inputPath);
        fs.unlinkSync(outputPath);
    });

    it("should transform the code to updated version", () => {
        // copy the input file to the transformed output file
        fs.copyFileSync(inputPath, outputPath);

        // do the jscodeshift command
        execSync(`jscodeshift -t ./codemods/deprecate-v2-tokens ${outputPath}`);

        // check the transformed code
        const transformedCode = fs.readFileSync(outputPath, "utf8");

        // compare the transformed code with the expected output
        expect(transformedCode.trim().split("\n")).toMatchObject(
            expectedOutputCode.trim().split("\n")
        );
    });
});
