import { createContext } from "react";

interface IModalContext {
    onClose?: (() => void) | undefined;
}

export const ModalContext = createContext<IModalContext>({
    onClose: () => {
        // default does nothing
    },
});
