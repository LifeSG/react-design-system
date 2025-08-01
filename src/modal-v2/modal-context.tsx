import { createContext } from "react";

interface IModalContext {
    onClose: () => void;
}

export const ModalContext = createContext<IModalContext>({
    onClose: () => {
        // default does nothing
    },
});
