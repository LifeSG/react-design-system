import { EyeIcon } from "@lifesg/react-icons/eye";
import { EyeSlashIcon } from "@lifesg/react-icons/eye-slash";
import { useEffect, useState } from "react";
import { FormLabel } from "../form/form-label";
import { Typography } from "../typography";
import { StringHelper } from "../util/string-helper";
import {
    Clickable,
    Container,
    ErrorIcon,
    ErrorLabel,
    IconContainer,
    LoadingLabel,
    Spinner,
    StyledAlert,
    TryAgainLabel,
} from "./section-item.styles";
import {
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
                        <ErrorIcon />
                        <ErrorLabel>Error</ErrorLabel>
                        <TryAgainLabel>Try again?</TryAgainLabel>
                    </>
                );
            case "loading":
                return (
                    <>
                        <Spinner />
                        <LoadingLabel>Retrieving...</LoadingLabel>
                    </>
                );
            default:
                return (
                    <>
                        {getValue()}
                        <IconContainer>
                            {displayMaskState === "masked" ? (
                                <EyeIcon data-testid="masked-icon" />
                            ) : (
                                <EyeSlashIcon data-testid="unmasked-icon" />
                            )}
                        </IconContainer>
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
            <Clickable
                data-testid="clickable-label"
                onClick={handleClickableClick}
                aria-busy={maskLoadingState === "loading"}
                aria-live="polite"
                type="button"
            >
                {renderMaskingState()}
            </Clickable>
        );
    };

    return (
        <Container $widthStyle={displayWidth} $fullWidth={fullWidth}>
            <FormLabel>{label}</FormLabel>
            {renderContent()}
            {alert && <StyledAlert sizeType="small" {...alert} />}
        </Container>
    );
};
