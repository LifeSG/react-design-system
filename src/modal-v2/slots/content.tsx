import { ModalContentProps } from "../types";

export const Content = ({ children, ...otherProps }: ModalContentProps) => {
    return <div {...otherProps}>{children}</div>;
};
