import { CrossIcon } from "@lifesg/react-icons/cross";
import clsx from "clsx";
import { useContext } from "react";

import { ClickableIcon } from "../../shared/clickable-icon";
import { ModalContext } from "../modal-context";
import type { ModalCloseButtonProps } from "../types";
import * as styles from "./slot-styles";

export const CloseButton = ({
    "data-testid": testId = "modal-close-button",
    className,
    ...otherProps
}: ModalCloseButtonProps) => {
    const { onClose } = useContext(ModalContext);

    return (
        <div
            data-testid={testId}
            {...otherProps}
            className={clsx(styles.closeButtonContainer, className)}
        >
            <ClickableIcon
                onClick={onClose}
                data-testid="close-button"
                focusHighlight={false}
                focusOutline="browser"
                aria-label="Close button"
                className={styles.styledClickableIcon}
            >
                <CrossIcon aria-hidden />
            </ClickableIcon>
        </div>
    );
};

CloseButton.displayName = "ModalV2.CloseButton";
