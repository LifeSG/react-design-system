import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";

import { Alert } from "../alert";
import { Markup } from "../markup";
import { TextList } from "../text-list";
import { useApplyStyle } from "../theme";
import { Typography } from "../typography";
import { useId } from "../util";
import * as styles from "./toggle.styles";
import type { ToggleIconType } from "./toggle-icon";
import { ToggleIcon } from "./toggle-icon";
import type { ToggleProps } from "./types";

// @catalog
/**
 * A selectable control for checkbox and radio interaction patterns.
 *
 * Use `Toggle` to present a labeled option that the user can select or
 * deselect.
 */
export const Toggle = ({
    type = "checkbox",
    indicator,
    checked,
    styleType = "default",
    children,
    childrenMaxLines,
    subLabel,
    disabled,
    error,
    name,
    id,
    className,
    compositeSection,
    removable,
    focusableWhenDisabled,
    useContentWidth,
    onRemove,
    onChange,
    "data-testid": testId,
    "aria-describedby": ariaDescribedBy,
    ...otherProps
}: ToggleProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const {
        collapsible = true,
        errors,
        children: compositeSectionChildren,
        initialExpanded,
    } = compositeSection || {};
    const [selected, setSelected] = useState<boolean | undefined>(checked);
    const [expanded, setExpanded] = useState<boolean>(!!initialExpanded);
    const hasCompositeSectionError = useMemo(() => {
        const hasErrorList = Array.isArray(errors) && errors?.length > 0;
        const hasErrorElement = !Array.isArray(errors) && !!errors;
        return hasErrorList || hasErrorElement;
    }, [errors]);
    const uniqueId = useId();
    const generatedId = id ? `${id}` : `tg-${uniqueId}`;

    const inputRef = useRef<HTMLInputElement>(null);
    const labelRef = useRef<HTMLLabelElement>(null);

    useApplyStyle(labelRef, {
        [styles.tokens.label.desktopLineClamp]:
            childrenMaxLines?.desktop == null
                ? null
                : `${childrenMaxLines.desktop}`,
        [styles.tokens.label.tabletLineClamp]:
            childrenMaxLines?.tablet == null
                ? null
                : `${childrenMaxLines.tablet}`,
        [styles.tokens.label.mobileLineClamp]:
            childrenMaxLines?.mobile == null
                ? null
                : `${childrenMaxLines.mobile}`,
    });

    const isFocusableWhenDisabled = !!disabled && !!focusableWhenDisabled;
    const isNativeDisabled = !!disabled && !focusableWhenDisabled;
    const isInteractionBlocked = !!disabled;

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setSelected(checked);
    }, [checked]);

    useEffect(() => {
        if (selected) {
            setExpanded(initialExpanded ?? true);
        }
    }, [selected]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isInteractionBlocked) {
            event.preventDefault();
            return;
        }

        if (onChange) {
            onChange(event);
            return;
        }

        switch (type) {
            case "checkbox":
                setSelected((prevSelected) => {
                    return !prevSelected;
                });
                break;
            case "radio":
            case "yes":
            case "no":
                if (!selected) {
                    setSelected(true);
                }
                break;
        }
    };

    const handleExpandCollapseClick = () => {
        if (!disabled) {
            setExpanded(!expanded);
        }
    };

    const handleOnRemove = () => {
        if (!disabled) {
            if (onRemove) {
                onRemove();
                return;
            }
        }
    };

    const handleContainerClick = () => {
        inputRef?.current?.click();
    };

    const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.stopPropagation();
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================

    const getContainerBorderClass = () => {
        if (!selected && error) return styles.borderError;
        if (styleType === "no-border") return styles.borderNone;
        if (selected && disabled) return styles.borderSelectedDisabled;
        if (disabled) return styles.borderDisabled;
        if (error) return styles.borderError;
        if (selected) return styles.borderSelected;
        return styles.borderDefault;
    };

    const getContainerBgClass = () => {
        if (selected) {
            if (error) return styles.bgError;
            return disabled ? styles.bgSelectedDisabled : styles.bgSelected;
        }

        if (disabled && styleType !== "no-border") return styles.bgDisabled;
        return styles.bgDefault;
    };

    const getContainerHoverClass = () => {
        if (disabled) return null;
        if (selected)
            return error
                ? styles.toggleContainerHoverError
                : styles.toggleContainerHoverSelected;
        return styles.toggleContainerHoverDefault;
    };

    const getTextContainerClass = () => {
        if (selected) {
            if (error) return styles.colorTextError;

            if (disabled) return styles.toggleTextContainerDisabledSelected;

            return styles.toggleTextContainerSelected;
        }

        if (disabled) return styles.colorTextDisabled;
        return styles.colorTextDefault;
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderIndicator = () => {
        let toggleIconType: ToggleIconType;

        switch (type) {
            case "yes":
                toggleIconType = "tick";
                break;
            case "no":
                toggleIconType = "cross";
                break;
            case "checkbox":
            case "radio":
                toggleIconType = type;
                break;
        }

        return (
            <ToggleIcon
                type={toggleIconType}
                active={selected}
                disabled={disabled}
                error={error}
            />
        );
    };

    const renderSubLabel = () => {
        if (!subLabel) {
            return null;
        }

        let component: string | JSX.Element;

        if (typeof subLabel === "function") {
            component = subLabel();
        } else {
            component = subLabel;
        }

        // Hide sublabel from screen readers as the main input already has aria-describedby that points to the sublabel
        return (
            <div
                data-id="toggle-sublabel"
                id={`${generatedId}-sublabel`}
                aria-hidden
                className={styles.subLabel}
            >
                {component}
            </div>
        );
    };

    const renderCompositeChildren = () => {
        return (
            (!collapsible || expanded) && (
                <div
                    data-id="toggle-composite-children"
                    className={clsx(
                        styles.children,
                        !collapsible && styles.childrenIsFinalItem,
                        disabled && styles.colorTextDisabled
                    )}
                >
                    <Markup baseTextSize="body-md">
                        {compositeSectionChildren}
                    </Markup>
                </div>
            )
        );
    };

    const renderExpandButton = () => {
        const collapsedWithoutErrors = !expanded && !hasCompositeSectionError;

        return (
            collapsible && (
                <button
                    className={clsx(
                        styles.expandButton,
                        disabled && styles.disabledColorCursor,
                        collapsedWithoutErrors &&
                            styles.expandButtonPaddingTopRequired
                    )}
                    disabled={disabled}
                    onClick={handleExpandCollapseClick}
                    data-testid={expanded ? "collapse-button" : "expand-button"}
                >
                    {expanded ? (
                        <>
                            Show less
                            <ChevronUpIcon aria-hidden />
                        </>
                    ) : (
                        <>
                            Show more
                            <ChevronDownIcon aria-hidden />
                        </>
                    )}
                </button>
            )
        );
    };

    const renderToggleWithRemoveButton = () => {
        const ariaDescriptions =
            [
                typeof subLabel === "string" ? `${generatedId}-sublabel` : null,
                ariaDescribedBy,
            ]
                .filter(Boolean)
                .join(" ") || undefined;

        return (
            <div
                id={`${generatedId}-header-container`}
                className={styles.headerContainer}
            >
                <div
                    className={clsx(
                        styles.indicatorLabelContainer,
                        removable && styles.indicatorLabelContainerAddPadding
                    )}
                >
                    <div
                        id={`${generatedId}-input-container`}
                        onClick={handleContainerClick}
                        className={styles.inputContainer}
                    >
                        <input
                            ref={inputRef}
                            name={name}
                            id={`${generatedId}-input`}
                            type={type === "checkbox" ? "checkbox" : "radio"}
                            data-testid="toggle-input"
                            className={clsx(
                                styles.input,
                                disabled && styles.disabledColorCursor
                            )}
                            disabled={isNativeDisabled}
                            aria-disabled={isFocusableWhenDisabled}
                            onChange={handleOnChange}
                            onClick={handleInputClick}
                            checked={selected}
                            tabIndex={isFocusableWhenDisabled ? 0 : undefined}
                            aria-describedby={ariaDescriptions}
                            {...otherProps}
                        />
                        {indicator && renderIndicator()}
                        <div
                            className={clsx(
                                styles.textContainer,
                                getTextContainerClass()
                            )}
                        >
                            <label
                                ref={labelRef}
                                htmlFor={`${generatedId}-input`}
                                data-testid={`toggle-label`}
                                id={`${generatedId}-label`}
                                className={clsx(
                                    styles.label,
                                    selected
                                        ? styles.toggleLabelSelected
                                        : styles.toggleLabelDefault
                                )}
                            >
                                {children}
                            </label>
                            {subLabel && renderSubLabel()}
                        </div>
                    </div>
                </div>
                {removable && (
                    <button
                        type="button"
                        className={clsx(
                            styles.removeButton,
                            disabled && styles.disabledColorCursor
                        )}
                        onClick={handleOnRemove}
                        id={`${generatedId}-remove-button`}
                    >
                        Remove
                    </button>
                )}
            </div>
        );
    };

    const renderErrorList = (errors: string[]) => {
        const className = clsx(
            styles.colorTextError,
            disabled && styles.colorTextDisabled
        );

        return (
            <>
                <Typography.BodyMD weight="semibold" className={className}>
                    Error
                </Typography.BodyMD>
                <TextList.Ul className={className}>
                    {errors?.map((item, index) => {
                        return (
                            <li
                                key={index}
                                id={`${generatedId}-error-list-item-${index}`}
                            >
                                <Typography.BodyMD
                                    weight="semibold"
                                    className={className}
                                >
                                    {item}
                                </Typography.BodyMD>
                            </li>
                        );
                    })}
                </TextList.Ul>
            </>
        );
    };

    const renderError = () => {
        return (
            collapsible &&
            !expanded &&
            hasCompositeSectionError && (
                <div
                    className={clsx(
                        styles.errorContainer,
                        disabled && styles.disabledColorCursor
                    )}
                    onClick={handleExpandCollapseClick}
                    id={`${generatedId}-error-alert`}
                >
                    <Alert
                        type={disabled ? "description" : "error"}
                        className={styles.alertContainer}
                        showIcon
                    >
                        {Array.isArray(errors)
                            ? renderErrorList(errors)
                            : errors}
                    </Alert>
                </div>
            )
        );
    };

    const renderCompositeSection = () => {
        return (
            compositeSectionChildren && (
                <div>
                    {renderCompositeChildren()}
                    {renderError()}
                    {renderExpandButton()}
                </div>
            )
        );
    };

    return (
        <div
            className={clsx(
                styles.container,
                getContainerBorderClass(),
                getContainerBgClass(),
                getContainerHoverClass(),
                !indicator && styles.containerNoIndicator,
                useContentWidth && styles.containerUseContentWidth,
                className
            )}
            id={id}
            data-testid={testId}
        >
            {renderToggleWithRemoveButton()}
            {renderCompositeSection()}
        </div>
    );
};
