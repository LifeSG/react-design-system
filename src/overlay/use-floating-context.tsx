import { useFloatingTree } from "@floating-ui/react";
import { useEffect, useState } from "react";

enum OverlayContextEvent {
    Ready = "overlay-context-ready",
    Change = "overlay-context-change",
}

interface OverlayContextChangeData {
    zIndex: number;
}

/**
 * Called by the component that renders modal or overlay content, and expects
 * to have floating elements as children
 * @param zIndex - the z-index of the main container
 */
export const useFloatingParent = (zIndex: number) => {
    const tree = useFloatingTree();

    useEffect(() => {
        if (!tree) {
            return;
        }
        const data: OverlayContextChangeData = { zIndex };
        tree.events.emit(OverlayContextEvent.Change, data);
    }, [tree, zIndex]);

    useEffect(() => {
        if (!tree) {
            return;
        }

        const handleOverlayContextReady = () => {
            const data: OverlayContextChangeData = { zIndex };
            tree.events.emit(OverlayContextEvent.Change, data);
        };

        tree?.events.on(OverlayContextEvent.Ready, handleOverlayContextReady);

        return () =>
            tree?.events.off(
                OverlayContextEvent.Ready,
                handleOverlayContextReady
            );
    }, [tree, zIndex]);
};

/**
 * Called by the component that renders a floating element
 * @returns parentZIndex - the z-index of the parent container, if present
 */
export const useFloatingChild = () => {
    const [parentZIndex, setParentZIndex] = useState<number | undefined>(
        undefined
    );
    const tree = useFloatingTree();

    useEffect(() => {
        if (!tree) {
            setParentZIndex(undefined);
            return;
        }

        const handleOverlayContextChange = (data: OverlayContextChangeData) => {
            setParentZIndex(data.zIndex);
        };

        tree.events.on(OverlayContextEvent.Change, handleOverlayContextChange);
        tree.events.emit(OverlayContextEvent.Ready);

        return () =>
            tree.events.off(
                OverlayContextEvent.Change,
                handleOverlayContextChange
            );
    }, [tree]);

    return parentZIndex;
};
