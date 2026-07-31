import { GeneratedFileFormatter } from "tools/shared/generated-file-formatter";

jest.mock("node:child_process", () => ({
    spawnSync: jest.fn().mockReturnValue({ status: 0 }),
}));

jest.mock("node:fs", () => ({
    ...jest.requireActual("node:fs"),
    existsSync: jest.fn().mockReturnValue(true),
}));

describe("GeneratedFileFormatter", () => {
    let formatter: GeneratedFileFormatter;

    beforeEach(() => {
        formatter = new GeneratedFileFormatter();
        jest.clearAllMocks();
    });

    it("invokes pretty-quick with the given pattern", () => {
        const { spawnSync } = jest.requireMock("node:child_process") as {
            spawnSync: jest.Mock;
        };

        formatter.format("docs/**/*");

        expect(spawnSync).toHaveBeenCalledWith(
            expect.stringContaining("pretty-quick"),
            ["--pattern", "docs/**/*"],
            { shell: false, stdio: "inherit" }
        );
    });

    it("throws when pretty-quick binary is not found", () => {
        const { existsSync } = jest.requireMock("node:fs") as {
            existsSync: jest.Mock;
        };
        existsSync.mockReturnValueOnce(false);

        expect(() => formatter.format("docs/**/*")).toThrow(
            "Could not find pretty-quick"
        );
    });

    it("throws when pretty-quick exits with a non-zero status", () => {
        const { spawnSync } = jest.requireMock("node:child_process") as {
            spawnSync: jest.Mock;
        };
        spawnSync.mockReturnValueOnce({ status: 1 });

        expect(() => formatter.format("docs/**/*")).toThrow(
            "pretty-quick failed with exit code 1"
        );
    });
});
