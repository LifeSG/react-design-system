export class SimpleIdGenerator {
    /**
     * Generates a simple generator for element ids
     */
    public static generate(): string {
        return Math.random().toString(36).substring(2, 9);
    }
}
