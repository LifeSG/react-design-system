import { CrossIcon } from "@lifesg/react-icons/cross";
import clsx from "clsx";
import { useContext } from "react";

import { ClickableIcon } from "../../shared/clickable-icon";
import { ModalContext } from "../modal-context";
import type { ModalHeaderProps } from "../types";
import * as styles from "./slot-styles";

export const Header = ({
    "data-testid": testId = "modal-header",
    title,
    closeButtonPosition = "right",
    className,
    ...otherProps
}: ModalHeaderProps) => {
    const { onClose } = useContext(ModalContext);

    return (
        <div
            data-testid={testId}
            data-close-button-position={closeButtonPosition}
            className={clsx(styles.headerContainer, className)}
            {...otherProps}
        >
            <ClickableIcon
                onClick={onClose}
                data-testid="close-button"
                focusHighlight={false}
                focusOutline="browser"
                aria-label="Close button"
                className={styles.headerCloseButton}
            >
                <CrossIcon aria-hidden />
            </ClickableIcon>
            {title && <span className={styles.headerTitle}>{title}</span>}
            {title && <div className={styles.headerSpacer} aria-hidden />}
        </div>
    );
};

Header.displayName = "ModalV2.Header";
