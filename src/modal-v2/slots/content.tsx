import { ModalContentProps } from "../types";

export const Content = ({
    "data-testid": testId = "modal-content",
    children,
    ...otherProps
}: ModalContentProps) => {
    return (
        <div data-testid={testId} {...otherProps}>
            {children}
        </div>
    );
};
