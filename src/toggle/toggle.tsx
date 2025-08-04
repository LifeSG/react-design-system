import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import { useEffect, useMemo, useRef, useState } from "react";
import { ToggleIconType } from "../shared/toggle-icon/toggle-icon";
import { SimpleIdGenerator } from "../util";
import {
    AlertContainer,
    Children,
    Container,
    ErrorContainer,
    ErrorList,
    ErrorText,
    ExpandButton,
    HeaderContainer,
    IndicatorLabelContainer,
    Input,
    InputContainer,
    Label,
    RemoveButton,
    StyledToggleIcon,
    SubLabel,
    TextContainer,
} from "./toggle.styles";
import { ToggleProps } from "./types";

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
            <StyledToggleIcon
                type={toggleIconType}
                active={selected}
                disabled={disabled}
                $selected={selected}
                $disabled={disabled}
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
            <SubLabel
                data-id="toggle-sublabel"
                id={`${generatedId}-sublabel`}
                aria-hidden
            >
                {component}
            </SubLabel>
        );
    };

    const renderCompositeChildren = () => {
        return (
            (!collapsible || expanded) && (
                <Children
                    data-id="toggle-composite-children"
                    $isFinalItem={!collapsible}
                    $disabled={disabled}
                >
                    {compositeSectionChildren}
                </Children>
            )
        );
    };

    const renderExpandButton = () => {
        const collapsedWithoutErrors = !expanded && !hasCompositeSectionError;
        return (
            collapsible && (
                <ExpandButton
                    $paddingTopRequired={collapsedWithoutErrors}
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
                </ExpandButton>
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
            <HeaderContainer
                id={`${generatedId}-header-container`}
                $disabled={disabled}
                $error={error}
                $selected={selected}
                $indicator={indicator}
                $styleType={styleType}
            >
                <IndicatorLabelContainer $addPadding={removable}>
                    <InputContainer
                        id={`${generatedId}-input-container`}
                        onClick={() => {
                            inputRef?.current?.click();
                        }}
                    >
                        <Input
                            ref={inputRef}
                            name={name}
                            id={`${generatedId}-input`}
                            type={type === "checkbox" ? "checkbox" : "radio"}
                            data-testid="toggle-input"
                            disabled={disabled}
                            onChange={handleOnChange}
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                            checked={selected}
                            aria-describedby={ariaDescriptions}
                            aria-labelledby={`${generatedId}-toggle-label`}
                            {...otherProps}
                        />
                        {indicator && renderIndicator()}
                        <TextContainer
                            $selected={selected}
                            $disabled={disabled}
                        >
                            <Label
                                htmlFor={`${generatedId}-input`}
                                data-testid={`${generatedId}-toggle-label`}
                                id={`${generatedId}-toggle-label`}
                                $maxLines={childrenMaxLines}
                            >
                                {children}
                            </Label>
                            {subLabel && renderSubLabel()}
                        </TextContainer>
                    </InputContainer>
                </IndicatorLabelContainer>

                {removable && (
                    <RemoveButton
                        type="button"
                        $disabled={disabled}
                        onClick={handleOnRemove}
                        id={`${generatedId}-remove-button`}
                    >
                        Remove
                    </RemoveButton>
                )}
            </HeaderContainer>
        );
    };

    const renderErrorList = (errors: string[]) => {
        return (
            <>
                <ErrorText weight="semibold" $disabled={disabled}>
                    Error
                </ErrorText>
                <ErrorList $disabled={disabled}>
                    {errors?.map((item, index) => {
                        return (
                            <li
                                key={index}
                                id={`${generatedId}-error-list-item-${index}`}
                            >
                                <ErrorText
                                    weight="semibold"
                                    $disabled={disabled}
                                >
                                    {item}
                                </ErrorText>
                            </li>
                        );
                    })}
                </ErrorList>
            </>
        );
    };

    const renderError = () => {
        return (
            collapsible &&
            !expanded &&
            hasCompositeSectionError && (
                <ErrorContainer
                    $disabled={disabled}
                    onClick={handleExpandCollapseClick}
                    id={`${generatedId}-error-alert`}
                >
                    <AlertContainer
                        type={disabled ? "description" : "error"}
                        className={className}
                        showIcon
                    >
                        {Array.isArray(errors)
                            ? renderErrorList(errors)
                            : errors}
                    </AlertContainer>
                </ErrorContainer>
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
        <Container
            $selected={selected}
            $disabled={disabled}
            className={className}
            $styleType={styleType}
            $error={error}
            $indicator={indicator}
            $useContentWidth={useContentWidth}
            id={id}
            data-testid={testId}
        >
            {renderToggleWithRemoveButton()}
            {renderCompositeSection()}
        </Container>
    );
};
