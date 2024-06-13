import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import { useEffect, useMemo, useRef, useState } from "react";
import { ToggleIcon, ToggleIconType } from "../shared/toggle-icon/toggle-icon";
import { TextList } from "../text-list";
import { SimpleIdGenerator } from "../util";
import {
    AlertContainer,
    Children,
    ChildrenContainer,
    Container,
    ErrorContainer,
    ErrorListItem,
    ErrorText,
    ExpandButton,
    HeaderContainer,
    IndicatorLabelContainer,
    Input,
    Label,
    RemoveButton,
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
    const [expanded, setExpanded] = useState<boolean>(initialExpanded);
    const showErrors = useMemo(() => {
        const showErrorIfString = Array.isArray(errors) && errors?.length > 0;
        const showErrorIfElement = !Array.isArray(errors) && !!errors;
        return showErrorIfString || showErrorIfElement;
    }, [errors]);
    const [uniqueId] = useState(SimpleIdGenerator.generate());
    const generatedId = id ? `${id}` : `tg-${uniqueId}`;

    const inputRef = useRef<HTMLInputElement>();

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
        event?.preventDefault();
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
            <ToggleIcon
                type={toggleIconType}
                active={selected}
                disabled={disabled}
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

        return (
            <SubLabel
                data-id="toggle-sublabel"
                $disabled={disabled}
                $selected={selected}
            >
                {component}
            </SubLabel>
        );
    };

    const renderCompositeChildren = () => {
        return (
            (!collapsible || expanded) && (
                <Children $isFinalItem={!collapsible} $disabled={disabled}>
                    {compositeSectionChildren}
                </Children>
            )
        );
    };

    const renderExpandButton = () => {
        const collapsedWithoutErrors = !expanded && !showErrors;
        return (
            collapsible && (
                <ExpandButton
                    $paddingTopRequired={collapsedWithoutErrors}
                    disabled={disabled}
                    onClick={handleExpandCollapseClick}
                    data-testid={expanded ? "collapse-button" : "expand-button"}
                >
                    {expanded ? "Show less" : "Show more"}
                    {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </ExpandButton>
            )
        );
    };

    const renderToggleWithRemoveButton = () => {
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
                    <Input
                        ref={inputRef}
                        name={name}
                        id={`${generatedId}-input`}
                        type={type === "checkbox" ? "checkbox" : "radio"}
                        data-testid="toggle-input"
                        disabled={disabled}
                        onChange={handleOnChange}
                        checked={selected}
                    />
                    {indicator && renderIndicator()}
                    <TextContainer>
                        <Label
                            htmlFor={`${generatedId}-input`}
                            $selected={selected}
                            $indicator={indicator}
                            $disabled={disabled}
                            data-testid={`${generatedId}-toggle-label`}
                            $maxLines={childrenMaxLines}
                        >
                            {children}
                        </Label>
                        {subLabel && renderSubLabel()}
                    </TextContainer>
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
                <TextList.Ul>
                    {errors?.map((item, index) => {
                        return (
                            <ErrorListItem
                                $disabled={disabled}
                                key={index}
                                id={`${generatedId}-list-item-${index}`}
                            >
                                <ErrorText
                                    weight="semibold"
                                    $disabled={disabled}
                                >
                                    {item}
                                </ErrorText>
                            </ErrorListItem>
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
            showErrors && (
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
                <ChildrenContainer>
                    {renderCompositeChildren()}
                    {renderError()}
                    {renderExpandButton()}
                </ChildrenContainer>
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
            id={id}
            data-testid={testId}
        >
            {renderToggleWithRemoveButton()}
            {renderCompositeSection()}
        </Container>
    );
};
