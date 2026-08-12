import { ExclamationCircleFillIcon } from "@lifesg/react-icons";
import type React from "react";

import * as styles from "./textarea-error-message.styles";

interface Props {
    children: React.ReactNode;
    "data-testid"?: string | undefined;
}

export const TextareaErrorMessage = ({
    children,
    "data-testid": testId,
}: Props): JSX.Element => {
    return (
        <div className={styles.container}>
            <ExclamationCircleFillIcon className={styles.icon} aria-hidden />
            <p className={styles.message} data-testid={testId}>
                {children}
            </p>
        </div>
    );
};
