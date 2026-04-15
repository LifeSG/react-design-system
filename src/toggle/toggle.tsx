import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";

import { Markup } from "../markup";
import type { ToggleIconType } from "../shared/toggle-icon/toggle-icon";
import { SimpleIdGenerator } from "../util";
import * as styles from "./toggle.styles";
import type { ToggleProps } from "./types";

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
    onRemove,
    "data-testid": testId,
    onChange,
    useContentWidth,
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
    const [uniqueId] = useState(SimpleIdGenerator.generate());
    const generatedId = id ? `${id}` : `tg-${uniqueId}`;

    const inputRef = useRef<HTMLInputElement>(null);

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
        if (!disabled) {
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
                    {
                        if (!selected) {
                            setSelected(true);
                        }
                    }
                    break;
            }
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

    const containerStateClass = (() => {
        if (styleType === "no-border") {
            if (error) {
                return disabled
                    ? "toggleContainerNoBorderErrorDisabled"
                    : "toggleContainerNoBorderError";
            }

            if (disabled) {
                return selected
                    ? "toggleContainerNoBorderDisabledSelected"
                    : "toggleContainerNoBorderDisabled";
            }

            if (selected) {
                return "toggleContainerNoBorderSelected";
            }

            return "toggleContainerNoBorderDefault";
        }

        if (error) {
            return disabled
                ? "toggleContainerDefaultErrorDisabled"
                : "toggleContainerDefaultError";
        }

        if (disabled) {
            return selected
                ? "toggleContainerDefaultDisabledSelected"
                : "toggleContainerDefaultDisabled";
        }

        if (selected) {
            return "toggleContainerDefaultSelected";
        }

        return "toggleContainerDefault";
    })();

    const textContainerStateClass = (() => {
        if (disabled) {
            return selected
                ? "toggleTextContainerDisabledSelected"
                : "toggleTextContainerDisabled";
        }

        if (selected) {
            return "toggleTextContainerSelected";
        }

        return "toggleTextContainerDefault";
    })();

    const styledToggleIconStateClass = (() => {
        if (disabled) {
            return selected
                ? "toggleStyledToggleIconDisabledSelected"
                : "toggleStyledToggleIconDisabled";
        }

        if (selected) {
            return "toggleStyledToggleIconSelected";
        }

        return "toggleStyledToggleIconDefault";
    })();

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
            <styles.StyledToggleIcon
                type={toggleIconType}
                active={selected}
                disabled={disabled}
                className={clsx(styledToggleIconStateClass)}
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
            <styles.SubLabel
                data-id="toggle-sublabel"
                id={`${generatedId}-sublabel`}
                aria-hidden
            >
                {component}
            </styles.SubLabel>
        );
    };

    const renderCompositeChildren = () => {
        return (
            (!collapsible || expanded) && (
                <styles.Children
                    data-id="toggle-composite-children"
                    className={clsx(
                        !collapsible && "childrenIsFinalItem",
                        disabled
                            ? "childrenDisabled"
                            : selected && "childrenSelected"
                    )}
                >
                    <Markup baseTextSize="body-md">
                        {compositeSectionChildren}
                    </Markup>
                </styles.Children>
            )
        );
    };

    const renderExpandButton = () => {
        const collapsedWithoutErrors = !expanded && !hasCompositeSectionError;
        return (
            collapsible && (
                <styles.ExpandButton
                    className={clsx(
                        disabled && "expandButtonDisabled",
                        collapsedWithoutErrors &&
                            "expandButtonPaddingTopRequired"
                    )}
                    disabled={disabled}
                    onClick={handleExpandCollapseClick}
                    data-testid={expanded ? "collapse-button" : "expand-button"}
                >
                    {expanded ? "Show less" : "Show more"}
                    {expanded ? (
                        <ChevronUpIcon aria-hidden />
                    ) : (
                        <ChevronDownIcon aria-hidden />
                    )}
                </styles.ExpandButton>
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
            <styles.HeaderContainer id={`${generatedId}-header-container`}>
                <styles.IndicatorLabelContainer
                    className={clsx(
                        removable && "indicatorLabelContainerAddPadding"
                    )}
                >
                    <styles.InputContainer
                        id={`${generatedId}-input-container`}
                        onClick={handleContainerClick}
                    >
                        <styles.Input
                            ref={inputRef}
                            name={name}
                            id={`${generatedId}-input`}
                            type={type === "checkbox" ? "checkbox" : "radio"}
                            data-testid="toggle-input"
                            className={clsx(
                                disabled
                                    ? "toggleInputDisabled"
                                    : "toggleInputEnabled"
                            )}
                            disabled={disabled}
                            onChange={handleOnChange}
                            onClick={handleInputClick}
                            checked={selected}
                            aria-describedby={ariaDescriptions}
                            {...otherProps}
                        />
                        {indicator && renderIndicator()}
                        <styles.TextContainer
                            className={clsx(textContainerStateClass)}
                        >
                            <styles.Label
                                htmlFor={`${generatedId}-input`}
                                data-testid={`toggle-label`}
                                id={`${generatedId}-label`}
                                $maxLines={childrenMaxLines}
                                className={clsx(
                                    selected
                                        ? "toggleLabelSelected"
                                        : "toggleLabelDefault"
                                )}
                            >
                                {children}
                            </styles.Label>
                            {subLabel && renderSubLabel()}
                        </styles.TextContainer>
                    </styles.InputContainer>
                </styles.IndicatorLabelContainer>
                {removable && (
                    <styles.RemoveButton
                        type="button"
                        className={clsx(disabled && "removeButtonDisabled")}
                        onClick={handleOnRemove}
                        id={`${generatedId}-remove-button`}
                    >
                        Remove
                    </styles.RemoveButton>
                )}
            </styles.HeaderContainer>
        );
    };

    const renderErrorList = (errors: string[]) => {
        const errorStateClass = disabled ? "errorTextDisabled" : "";
        const errorListStateClass = disabled ? "errorListDisabled" : "";
        return (
            <>
                <styles.ErrorText
                    weight="semibold"
                    className={clsx(errorStateClass)}
                >
                    Error
                </styles.ErrorText>
                <styles.ErrorList className={clsx(errorListStateClass)}>
                    {errors?.map((item, index) => {
                        return (
                            <li
                                key={index}
                                id={`${generatedId}-error-list-item-${index}`}
                            >
                                <styles.ErrorText
                                    weight="semibold"
                                    className={clsx(errorStateClass)}
                                >
                                    {item}
                                </styles.ErrorText>
                            </li>
                        );
                    })}
                </styles.ErrorList>
            </>
        );
    };

    const renderError = () => {
        return (
            collapsible &&
            !expanded &&
            hasCompositeSectionError && (
                <styles.ErrorContainer
                    className={clsx(disabled && "errorContainerDisabled")}
                    onClick={handleExpandCollapseClick}
                    id={`${generatedId}-error-alert`}
                >
                    <styles.AlertContainer
                        type={disabled ? "description" : "error"}
                        className={clsx(className)}
                        showIcon
                    >
                        {Array.isArray(errors)
                            ? renderErrorList(errors)
                            : errors}
                    </styles.AlertContainer>
                </styles.ErrorContainer>
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
        <styles.Container
            className={clsx(
                containerStateClass,
                !indicator && "noIndicator",
                useContentWidth && "useContentWidth",
                className
            )}
            id={id}
            data-testid={testId}
        >
            {renderToggleWithRemoveButton()}
            {renderCompositeSection()}
        </styles.Container>
    );
};
