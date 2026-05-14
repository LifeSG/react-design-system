import { ExclamationTriangleIcon } from "@lifesg/react-icons/exclamation-triangle";
import { EyeIcon } from "@lifesg/react-icons/eye";
import { EyeSlashIcon } from "@lifesg/react-icons/eye-slash";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { Alert } from "../alert";
import { FormLabel } from "../form/form-label";
import { VisuallyHidden } from "../shared/accessibility";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner";
import { Typography } from "../typography";
import { StringHelper } from "../util/string-helper";
import * as styles from "./section-item.styles";
import type {
    UneditableSectionItemMaskState,
    UneditableSectionItemProps,
} from "./types";

export interface UneditableSectionItemComponentProps
    extends UneditableSectionItemProps {
    onMask?: (() => void) | undefined;
    onUnmask?: (() => void) | undefined;
    onTryAgain?: (() => void) | undefined;
    fullWidth?: boolean | undefined;
}

export const UneditableSectionItem = ({
    label,
    value,
    displayWidth = "full",
    maskState,
    maskLoadingState,
    maskChar = "•",
    maskRange,
    unmaskRange,
    maskRegex,
    disableMaskUnmask,
    alert,
    maskTransformer,
    onMask,
    onUnmask,
    onTryAgain,
    fullWidth,
}: UneditableSectionItemComponentProps) => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const [displayMaskState, setMaskState] = useState<
        UneditableSectionItemMaskState | undefined
    >(maskState);

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        setMaskState(maskState);
    }, [maskState]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleClickableClick = () => {
        if (maskLoadingState === "fail") {
            if (onTryAgain) onTryAgain();
        }

        switch (displayMaskState) {
            case "masked": {
                if (onUnmask) {
                    onUnmask();
                }
                setMaskState("unmasked");
                break;
            }
            case "unmasked": {
                if (onMask) {
                    onMask();
                }
                setMaskState("masked");
                break;
            }
        }
    };

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const getValue = () => {
        if (typeof value !== "string") {
            return value;
        }

        return displayMaskState === "masked"
            ? StringHelper.maskValue(value, {
                  maskChar,
                  maskRange,
                  unmaskRange,
                  maskRegex,
                  maskTransformer,
              })
            : value;
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderMaskingState = () => {
        switch (maskLoadingState) {
            case "fail":
                return (
                    <>
                        <ExclamationTriangleIcon className={styles.errorIcon} />
                        <span className={styles.errorLabel}>Error</span>
                        <span className={styles.tryAgainLabel}>
                            Try again?
                            <VisuallyHidden>{label}</VisuallyHidden>
                        </span>
                    </>
                );
            case "loading":
                return (
                    <>
                        <ComponentLoadingSpinner className={styles.spinner} />
                        <span className={styles.loadingLabel}>
                            Retrieving...
                        </span>
                    </>
                );
            default:
                return (
                    <>
                        {getValue()}
                        <div
                            className={styles.iconContainer}
                            aria-label={
                                displayMaskState === "masked"
                                    ? `Display ${label}`
                                    : `Hide ${label}`
                            }
                        >
                            {displayMaskState === "masked" ? (
                                <EyeIcon data-testid="masked-icon" />
                            ) : (
                                <EyeSlashIcon data-testid="unmasked-icon" />
                            )}
                        </div>
                    </>
                );
        }
    };

    const renderContent = () => {
        if (typeof value !== "string") {
            return value;
        }

        if (!displayMaskState) {
            return <Typography.BodyBL>{value}</Typography.BodyBL>;
        }

        if (disableMaskUnmask) {
            return <Typography.BodyBL>{getValue()}</Typography.BodyBL>;
        }

        return (
            <button
                className={styles.clickable}
                data-testid="clickable-label"
                onClick={handleClickableClick}
                aria-busy={maskLoadingState === "loading"}
                aria-live="polite"
                type="button"
                aria-label={StringHelper.getMaskedDescription(
                    value,
                    displayMaskState,
                    maskRange
                )}
            >
                {renderMaskingState()}
            </button>
        );
    };

    return (
        <li
            data-width={displayWidth}
            className={clsx(
                styles.container,
                fullWidth && styles.containerFullWidth
            )}
        >
            <FormLabel>{label}</FormLabel>
            {renderContent()}
            {alert && (
                <Alert className={styles.alert} sizeType="small" {...alert} />
            )}
        </li>
    );
};
