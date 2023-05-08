export namespace SimpleIdGenerator {
    /**
     * Generates a simple generator for element ids
     */
    export const generate = (): string => {
        return Math.random().toString(36).substring(2, 9);
    };
}
