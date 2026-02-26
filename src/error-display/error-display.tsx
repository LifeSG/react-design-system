import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "styled-components";
import { LifeSGTheme } from "../theme";
import { getErrorDisplayData } from "./error-display-data";
import {
    ActionButton,
    Container,
    DescriptionContainer,
    Img,
    TextContainer,
    Title,
} from "./error-display.style";
import {
    ErrorDisplayProps,
    InactivityAdditionalAttributes,
    MaintenanceAdditionalAttributes,
} from "./types";
import { VisuallyHidden } from "../shared/accessibility";

export const ErrorDisplay = ({
    type,
    img,
    title,
    description,
    actionButton,
    additionalProps,
    imageOnly,
    illustrationScheme,
    ...otherProps
}: ErrorDisplayProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const theme = useContext(ThemeContext);
    const defaultAssets = getErrorDisplayData(
        type,
        illustrationScheme || (theme || LifeSGTheme).resourceScheme,
        theme
    );

    const testId = otherProps["data-testid"] || "error-display";

    // use effect, if provided inactivity plus seconds left
    const [liveReminderText, setLiveReminderText] = useState<string>("");

    const inactivityAttrs =
        type === "inactivity"
            ? (additionalProps as InactivityAdditionalAttributes | undefined)
            : undefined;

    const secondsLeft = inactivityAttrs?.secondsLeft;
    const reminderInterval =
        inactivityAttrs?.reminderInterval != null
            ? inactivityAttrs.reminderInterval
            : 120;

    const shouldEnableInactivityReminder =
        type === "inactivity" &&
        !imageOnly &&
        !description &&
        typeof secondsLeft === "number" &&
        secondsLeft >= 0;

    const prevSecondsLeftRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (!shouldEnableInactivityReminder) {
            prevSecondsLeftRef.current = undefined;
            setLiveReminderText("");
            return;
        }

        if (typeof secondsLeft !== "number") return;

        const prev = prevSecondsLeftRef.current;
        prevSecondsLeftRef.current = secondsLeft;
        const interval = Math.max(1, reminderInterval);

        if (prev == null) {
            setLiveReminderText(buildReminderSentence(secondsLeft));
            return;
        }

        if (secondsLeft >= prev) return;

        const prevBucket = Math.floor(prev / interval);
        const currBucket = Math.floor(secondsLeft / interval);

        if (prevBucket !== currBucket) {
            setLiveReminderText(buildReminderSentence(secondsLeft));
        }
    }, [shouldEnableInactivityReminder, secondsLeft, reminderInterval]);

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const getCustomDescription = (): string | JSX.Element | undefined => {
        switch (type) {
            case "maintenance": {
                const typecastProps =
                    additionalProps as MaintenanceAdditionalAttributes;
                return additionalProps && typecastProps.dateString
                    ? defaultAssets?.renderDescription?.(typecastProps)
                    : description || undefined;
            }
            case "inactivity": {
                const typecastProps =
                    additionalProps as InactivityAdditionalAttributes;
                return additionalProps && typecastProps.secondsLeft
                    ? defaultAssets?.renderDescription?.(typecastProps)
                    : description || undefined;
            }
            default:
                return description || undefined;
        }
    };

    const buildReminderSentence = (s: number): string => {
        const min = Math.floor(s / 60);
        const sec = s % 60;
        return `You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ${min} minutes ${sec} seconds.`;
    };
    // =============================================================================
    // RENDER
    // =============================================================================
    if (!defaultAssets) {
        return null;
    }

    const renderActionButton = () => {
        const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
            children: "Proceed",
            ...actionButton,
        };

        return <ActionButton {...buttonProps} />;
    };

    const updatedAssets = {
        ...defaultAssets,
        ...(img && { img }),
        ...(title && { title }),
        ...(getCustomDescription() && { description: getCustomDescription() }),
    };

    const renderContentDisplay = () => {
        if (updatedAssets.title || updatedAssets.description) {
            return (
                <TextContainer>
                    {updatedAssets.title &&
                        (typeof updatedAssets.title === "string" ? (
                            <Title
                                data-testid={`${testId}--title`}
                                data-id="error-display-title"
                                weight="semibold"
                            >
                                {updatedAssets.title}
                            </Title>
                        ) : (
                            updatedAssets.title
                        ))}
                    {updatedAssets.description && (
                        <DescriptionContainer
                            data-testid={`${testId}--description`}
                            data-id="error-display-description"
                        >
                            {typeof updatedAssets.description === "string" ? (
                                <p>{updatedAssets.description}</p>
                            ) : (
                                updatedAssets.description
                            )}
                        </DescriptionContainer>
                    )}
                </TextContainer>
            );
        }

        return null;
    };

    return (
        <Container {...otherProps} data-testid={testId}>
            <Img {...updatedAssets.img} alt="" data-id="error-display-image" />
            {!imageOnly && renderContentDisplay()}
            {actionButton && renderActionButton()}
            {shouldEnableInactivityReminder && liveReminderText && (
                <VisuallyHidden
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {liveReminderText}
                </VisuallyHidden>
            )}
        </Container>
    );
};
