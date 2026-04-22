import {
    waitForElementToBeRemoved as waitForElementToBeRemovedOriginal,
    waitForOptions,
} from "@testing-library/react";

const isRemoved = <T>(result: T) =>
    !result || (Array.isArray(result) && !result.length);

/**
 * An alternative to the `@testing-library` waitForElementToBeRemoved
 * which does not throw when the elements are already removed
 */
export const waitForElementToBeRemoved = async <T>(
    callback: T | (() => T),
    options?: waitForOptions
): Promise<void> => {
    if (typeof callback !== "function") {
        if (isRemoved(callback)) {
            return;
        }
    } else {
        const result = (callback as () => T)();
        if (isRemoved(result)) {
            return;
        }
    }

    await waitForElementToBeRemovedOriginal(callback, options);
};
