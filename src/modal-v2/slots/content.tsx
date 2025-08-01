import { ModalContentProps } from "../types";

export const Content = ({ customStyle, children }: ModalContentProps) => {
    return <div style={customStyle}>{children}</div>;
};
