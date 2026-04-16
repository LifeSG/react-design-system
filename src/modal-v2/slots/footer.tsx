import clsx from "clsx";

import type { ModalFooterProps } from "../types";
import * as styles from "./slot-styles";

export const Footer = ({
    "data-testid": testId = "modal-footer",
    primaryButton,
    secondaryButton,
    className,
    ...otherProps
}: ModalFooterProps) => {
    return (
        <div
            data-testid={testId}
            {...otherProps}
            className={clsx(styles.footerContainer, className)}
        >
            {primaryButton}
            {secondaryButton}
        </div>
    );
};

Footer.displayName = "ModalV2.Footer";
