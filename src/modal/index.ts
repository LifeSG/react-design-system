import { Modal as Base } from "./modal";
import { ModalBox as Box } from "./modal-box";

/**
 * A full-screen overlay modal with a slide animation.
 *
 * Use `Modal` to present content that requires the user's immediate attention
 * or a focused interaction. Use `ModalV2` for built-in scroll handling and improved accessibility.
 *
 * Sub-components:
 * - `Modal.Box` — a styled content box with an optional close button.
 */
export const Modal = Object.assign(Base, {
    /**
     * A styled content container for use inside `Modal`. Renders an optional
     * close button and stops click events from propagating to the overlay.
     */
    Box,
});

export * from "./types";
