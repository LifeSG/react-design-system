import { PropsWithChildren } from "react";
import { VirtuosoMockContext } from "react-virtuoso";

const viewportHeight = 600;
const itemHeight = 1; // NOTE: Mock as 1px item height due to test environment not scrolling properly
export const MockVirtuosoContextWrapper: React.FC = ({
    children,
}: PropsWithChildren<unknown>) => {
    return (
        <VirtuosoMockContext.Provider value={{ viewportHeight, itemHeight }}>
            {children}
        </VirtuosoMockContext.Provider>
    );
};
