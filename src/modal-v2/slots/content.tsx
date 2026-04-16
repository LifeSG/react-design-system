import clsx from "clsx";

import type { ModalContentProps } from "../types";
import * as styles from "./slot-styles";

export const Content = ({
    "data-testid": testId = "modal-content",
    children,
    className,
    ...otherProps
}: ModalContentProps) => {
    return (
        <div
            data-testid={testId}
            {...otherProps}
            className={clsx(styles.contentContainer, className)}
        >
            {children}
        </div>
    );
};

Content.displayName = "ModalV2.Content";
