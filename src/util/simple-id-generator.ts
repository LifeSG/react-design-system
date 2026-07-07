import React from "react";

export class SimpleIdGenerator {
    /**
     * Generates a simple generator for element ids
     */
    public static generate(): string {
        return Math.random().toString(36).substring(2, 9);
    }
}

const useSimpleId = () => {
    const [id] = React.useState(() => SimpleIdGenerator.generate());
    return id;
};

// TODO: can be removed when React 17 support is dropped
// @ts-expect-error useId is only available in React 18+
export const useId: () => string = React.useId ?? useSimpleId;
