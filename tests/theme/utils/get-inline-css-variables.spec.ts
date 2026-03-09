import { getInheritedInlineCssVariables } from "../../../src/theme/utils";

describe("getInheritedInlineCssVariables", () => {
    it("returns empty object when referenceElement is null", () => {
        const result = getInheritedInlineCssVariables(null);

        expect(result).toEqual({});
    });

    it("extracts variables from the reference element", () => {
        const element = document.createElement("div");
        element.style.setProperty("--color", "red");

        const result = getInheritedInlineCssVariables(element);

        expect(result).toEqual({
            "--color": "red",
        });
    });

    it("inherits variables from parent elements", () => {
        const parent = document.createElement("div");
        const child = document.createElement("div");

        parent.style.setProperty("--color", "blue");

        parent.appendChild(child);

        const result = getInheritedInlineCssVariables(child);

        expect(result).toEqual({
            "--color": "blue",
        });
    });

    it("merges inherited inline variables from boundary to reference, with descendant precedence", () => {
        const boundary = document.createElement("div");
        const ancestor = document.createElement("div");
        const reference = document.createElement("button");

        boundary.style.setProperty("--token-a", "theme-value");
        boundary.style.setProperty("--token-b", "theme-only");

        ancestor.style.setProperty("--token-a", "ancestor-value");

        ancestor.appendChild(boundary);
        boundary.appendChild(reference);
        document.body.appendChild(boundary);

        expect(getInheritedInlineCssVariables(reference, boundary)).toEqual({
            "--token-a": "theme-value",
            "--token-b": "theme-only",
        });
    });

    it("collects variables from multiple ancestors", () => {
        const grandParent = document.createElement("div");
        const parent = document.createElement("div");
        const child = document.createElement("div");

        grandParent.style.setProperty("--color", "blue");
        parent.style.setProperty("--spacing", "8px");
        child.style.setProperty("--radius", "4px");

        grandParent.appendChild(parent);
        parent.appendChild(child);

        const result = getInheritedInlineCssVariables(child);

        expect(result).toEqual({
            "--color": "blue",
            "--spacing": "8px",
            "--radius": "4px",
        });
    });

    it("stops collecting variables at the boundary element", () => {
        const root = document.createElement("div");
        const boundary = document.createElement("div");
        const child = document.createElement("div");

        root.style.setProperty("--root-color", "black");
        boundary.style.setProperty("--boundary-color", "green");

        root.appendChild(boundary);
        boundary.appendChild(child);

        const result = getInheritedInlineCssVariables(child, boundary);

        expect(result).toEqual({
            "--boundary-color": "green",
        });
    });

    it("ignores non CSS variable styles", () => {
        const element = document.createElement("div");

        element.style.color = "red";
        element.style.setProperty("--color", "blue");

        const result = getInheritedInlineCssVariables(element);

        expect(result).toEqual({
            "--color": "blue",
        });
    });
});
