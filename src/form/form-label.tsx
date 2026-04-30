import { ExclamationCircleFillIcon } from "@lifesg/react-icons";
import clsx from "clsx";
import type React from "react";

import { Markup } from "../markup";
import * as styles from "./form-label.styles";
import { PopoverAddon } from "./form-label-addon";
import type { FormLabelProps } from "./types";

export const FormLabel = ({
    id,
    children,
    addon,
    subtitle,
    "data-testid": testId,
    className,
    style,
    ...otherProps
}: FormLabelProps): JSX.Element => {
    // -------------------------------------------------------------------------
    // RENDER FUNCTIONS
    // -------------------------------------------------------------------------
    const renderAddon = () => {
        switch (addon?.type) {
            case "popover":
                return <PopoverAddon addon={addon} />;
            default:
                return null;
        }
    };

    return (
        <div
            className={clsx(styles.labelContainer, className)}
            style={style}
            data-testid={testId}
        >
            <label id={id} className={styles.label} {...otherProps}>
                <Markup inline>
                    {children}
                    {addon?.type && renderAddon()}
                </Markup>
            </label>
            {typeof subtitle === "string" ? (
                <span
                    id={id ? `${id}-subtitle` : undefined}
                    className={styles.subtitle}
                    data-testid={testId ? `${testId}-subtitle` : "subtitle"}
                >
                    {subtitle}
                </span>
            ) : (
                subtitle
            )}
        </div>
    );
};

export const FormErrorMessage = ({
    className,
    ...otherProps
}: React.HTMLAttributes<HTMLElement>): JSX.Element => {
    return (
        <div className={clsx(styles.errorMessageContainer, className)}>
            <ExclamationCircleFillIcon
                className={styles.errorIcon}
                aria-hidden
            />
            <p className={styles.errorMessage} {...otherProps} />
        </div>
    );
};
