import { render, screen } from "@testing-library/react";
import { SimpleIdGenerator, useId } from "src/util/simple-id-generator";

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

    describe("useId", () => {
        const TestComponent = () => {
            const id1 = useId();
            const id2 = useId();
            return (
                <div>
                    <span data-testid="id1">{id1}</span>
                    <span data-testid="id2">{id2}</span>
                </div>
            );
        };

        it("should generate stable unique ids", () => {
            const { rerender } = render(<TestComponent />);

            const id1 = screen.getByTestId("id1").textContent;
            const id2 = screen.getByTestId("id2").textContent;

            expect(id1).not.toEqual(id2);

            rerender(<TestComponent />);

            const id1AfterRerender = screen.getByTestId("id1").textContent;
            const id2AfterRerender = screen.getByTestId("id2").textContent;

            expect(id1).toEqual(id1AfterRerender);
            expect(id2).toEqual(id2AfterRerender);
        });
    });
});
