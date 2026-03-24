import { ModalV2 as Base } from "./modal-v2";
import { Card, CloseButton, Content, Footer } from "./slots";

export const ModalV2 = Object.assign(Base, {
    Card,
    CloseButton,
    Content,
    Footer,
});

export * from "./types";
