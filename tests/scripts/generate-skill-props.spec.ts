import {
    insertPropsSection,
    stripPropsSection,
} from "scripts/generate-skill-props";

const PROPS_BLOCK = `## Props — \`FooProps\`

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| \`name\` | \`string\` | — | — |`;

const BASE_WITH_RULES = `# Foo

Some intro.

## Rules

- Rule one.`;

const BASE_WITH_ANTIPATTERNS = `# Foo

Some intro.

## Anti-patterns

- Do not do this.`;

const BASE_NO_SECTIONS = `# Foo

Some intro.`;

// =============================================================================
// stripPropsSection
// =============================================================================

describe("stripPropsSection", () => {
    it("removes a single ## Props section", () => {
        const input = `# Foo\n\n${PROPS_BLOCK}\n\n## Rules\n\n- Rule one.`;
        const result = stripPropsSection(input);
        expect(result).not.toContain("## Props");
        expect(result).toContain("## Rules");
    });

    it("removes multiple ## Props sections", () => {
        const block2 = `## Props — \`BarProps\`\n\n| Prop | Type |\n| ---- | ---- |\n| \`id\` | \`string\` |`;
        const input = `# Foo\n\n${PROPS_BLOCK}\n\n${block2}\n\n## Rules\n\n- Rule one.`;
        const result = stripPropsSection(input);
        expect(result).not.toContain("## Props");
        expect(result).toContain("## Rules");
    });

    it("is a no-op when no ## Props section is present", () => {
        const result = stripPropsSection(BASE_WITH_RULES);
        expect(result).toContain("## Rules");
        expect(result).not.toContain("## Props");
    });

    it("collapses excess blank lines left by removal", () => {
        const input = `# Foo\n\n\n\n${PROPS_BLOCK}\n\n\n\n## Rules\n\n- Rule one.`;
        const result = stripPropsSection(input);
        expect(result).not.toMatch(/\n{3,}/);
    });
});

// =============================================================================
// insertPropsSection
// =============================================================================

describe("insertPropsSection", () => {
    it("inserts before ## Rules when present", () => {
        const result = insertPropsSection(BASE_WITH_RULES, PROPS_BLOCK);
        const propsIdx = result.indexOf("## Props");
        const rulesIdx = result.indexOf("## Rules");
        expect(propsIdx).toBeGreaterThan(-1);
        expect(propsIdx).toBeLessThan(rulesIdx);
    });

    it("inserts before ## Anti-patterns when ## Rules is absent", () => {
        const result = insertPropsSection(BASE_WITH_ANTIPATTERNS, PROPS_BLOCK);
        const propsIdx = result.indexOf("## Props");
        const apIdx = result.indexOf("## Anti-patterns");
        expect(propsIdx).toBeGreaterThan(-1);
        expect(propsIdx).toBeLessThan(apIdx);
    });

    it("appends at end when neither ## Rules nor ## Anti-patterns is present", () => {
        const result = insertPropsSection(BASE_NO_SECTIONS, PROPS_BLOCK);
        expect(result.trimEnd().endsWith(PROPS_BLOCK.trimEnd())).toBe(true);
    });

    it("strips an existing ## Props section before inserting", () => {
        const withExisting = `# Foo\n\n## Props — \`OldProps\`\n\n| Prop | Type |\n| ---- | ---- |\n\n## Rules\n\n- Rule one.`;
        const result = insertPropsSection(withExisting, PROPS_BLOCK);
        expect(result).not.toContain("OldProps");
        expect(result).toContain("FooProps");
    });
});

// =============================================================================
// idempotency
// =============================================================================

describe("idempotency", () => {
    it("produces identical output when run twice on a file with ## Rules", () => {
        const firstRun = insertPropsSection(BASE_WITH_RULES, PROPS_BLOCK);
        const secondRun = insertPropsSection(firstRun, PROPS_BLOCK);
        expect(secondRun).toBe(firstRun);
    });

    it("produces identical output when run twice on a file with ## Anti-patterns", () => {
        const firstRun = insertPropsSection(
            BASE_WITH_ANTIPATTERNS,
            PROPS_BLOCK
        );
        const secondRun = insertPropsSection(firstRun, PROPS_BLOCK);
        expect(secondRun).toBe(firstRun);
    });

    it("produces identical output when run twice on a file with no sections", () => {
        const firstRun = insertPropsSection(BASE_NO_SECTIONS, PROPS_BLOCK);
        const secondRun = insertPropsSection(firstRun, PROPS_BLOCK);
        expect(secondRun).toBe(firstRun);
    });

    it("produces identical output when run twice on a file with multiple existing Props sections", () => {
        const block2 = `## Props — \`BarProps\`\n\n| Prop | Type |\n| ---- | ---- |\n| \`id\` | \`string\` |`;
        const multiProps = `# Foo\n\n${PROPS_BLOCK}\n\n${block2}\n\n## Rules\n\n- Rule one.`;
        const firstRun = insertPropsSection(multiProps, PROPS_BLOCK);
        const secondRun = insertPropsSection(firstRun, PROPS_BLOCK);
        expect(secondRun).toBe(firstRun);
    });
});
