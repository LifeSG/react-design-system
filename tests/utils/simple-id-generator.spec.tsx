import { SimpleIdGenerator } from "../../src/util/simple-id-generator";

describe("SimpleIdGenerator", () => {
    describe("generate", () => {
        it("should generate 3 unique ids in quick succession", () => {
            const id1 = SimpleIdGenerator.generate();
            const id2 = SimpleIdGenerator.generate();
            const id3 = SimpleIdGenerator.generate();

            expect(id1).not.toEqual(id2);
            expect(id1).not.toEqual(id3);
            expect(id2).not.toEqual(id3);
        });
    });
});
