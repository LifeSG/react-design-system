import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import { useEffect, useRef, useState } from "react";
import { ToggleIcon, ToggleIconType } from "../shared/toggle-icon/toggle-icon";
import { TextList } from "../text-list";
import { SimpleIdGenerator } from "../util";
import {
    AlertContainer,
    ButtonContainer,
    ButtonLabel,
    Children,
    ChildrenContainer,
    Container,
    ErrorListContainer,
    ErrorListItem,
    ErrorListli,
    ErrorMessage,
    HeaderContainer,
    IndicatorLabelContainer,
    Input,
    Label,
    SubLabel,
    TextContainer,
    ViewMoreOrLessButtonContainer,
    ViewMoreOrLessButtonLabel,
} from "./toggle.styles";
import { ToggleProps } from "./types";

export const Toggle = ({
    type = "checkbox",
    indicator,
    checked,
    styleType = "default",
    children,
    subLabel,
    disabled,
    error,
    name,
    id,
    className,
    compositeSection,
    errorMessage,
    "data-testid": testId,
    onChange,
}: ToggleProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const {
        collapsible = true,
        errors,
        removable,
        onRemove,
        children: compositeOptionSection,
        show: showCompositeOptionSection,
    } = compositeSection || {};
    const [selected, setSelected] = useState<boolean | undefined>(checked);
    const [showMore, setShowMore] = useState<boolean>(
        !!showCompositeOptionSection
    );

    const [showErrorList, setShowErrorList] = useState<boolean>(false);
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
        if (
            selected !== undefined &&
            showCompositeOptionSection === undefined
        ) {
            setShowMore(selected);
        }
    }, [selected, showCompositeOptionSection]);

    useEffect(() => {
        if (errors) {
            const showErrorIfString =
                !showMore && Array.isArray(errors) && errors?.length > 0;
            const showErrorIfElement = !showMore && !Array.isArray(errors);
            if (!selected) {
                setShowErrorList(!selected);
            } else {
                setShowErrorList(showErrorIfString || showErrorIfElement);
            }
        }
    }, [showMore, errors, selected]);

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
            setShowMore(!showMore);
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
    const handleOnRemove = () => {
        if (!disabled) {
            if (onRemove) {
                onRemove();
                return;
            }
        }
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

    const renderCompositeOptionSection = () => {
        if (!compositeOptionSection) {
            return null;
        }
        const ChildrenisFinalItem = !collapsible || removable;
        return (
            <Children
                $selected={showMore}
                $isNotFinalItem={
                    ChildrenisFinalItem ? !ChildrenisFinalItem : selected
                }
                $disabled={disabled}
            >
                {compositeOptionSection}
            </Children>
        );
    };

    const renderViewMoreOrLessButton = () => {
        const errorMssgOrChildrenShown = showMore || showErrorList;
        return (
            <>
                <div
                    style={{
                        paddingTop:
                            !selected || errorMssgOrChildrenShown
                                ? "0rem"
                                : "0.6875rem",
                    }}
                ></div>
                <ViewMoreOrLessButtonContainer
                    $show={!collapsible ? false : selected}
                    $disabled={disabled}
                    onClick={() => handleExpandCollapseClick()}
                    data-testid="toggle-button"
                >
                    <ViewMoreOrLessButtonLabel
                        weight="semibold"
                        $disabled={disabled}
                        data-testid="toggle-button-label"
                    >
                        {showMore ? "Show less" : "Show more"}
                    </ViewMoreOrLessButtonLabel>
                    {showMore ? (
                        <ChevronUpIcon height={18} width={18} />
                    ) : (
                        <ChevronDownIcon height={18} width={18} />
                    )}
                </ViewMoreOrLessButtonContainer>
            </>
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
                        >
                            {children}
                        </Label>
                        {subLabel && renderSubLabel()}
                    </TextContainer>
                </IndicatorLabelContainer>

                {removable && (
                    <ButtonContainer
                        $disabled={disabled}
                        onClick={handleOnRemove}
                        id={`${generatedId}-remove-button`}
                    >
                        <ButtonLabel $disabled={disabled}>Remove</ButtonLabel>
                    </ButtonContainer>
                )}
            </HeaderContainer>
        );
    };

    const renderErrorList = (errors: string[]) => {
        return (
                            <>
                <ErrorListItem weight="semibold" $disabled={disabled}>
                                    Error
                                </ErrorListItem>
                                <TextList.Ul>
                                    {errors?.map((item, index) => {
                                        return (
                                            <ErrorListli
                                                $disabled={disabled}
                                                key={index}
                                                id={`list-item-${index}`}
                                            >
                                                <ErrorListItem
                                                    weight="semibold"
                                                    $disabled={disabled}
                                                >
                                                    {item}
                                                </ErrorListItem>
                                            </ErrorListli>
                                        );
                                    })}
                                </TextList.Ul>
                            </>
        );
    };

    const renderError = () => {
        return (
            !showMore &&
            showErrorList && (
                <ErrorListContainer
                    $show={!collapsible ? false : selected}
                    $disabled={disabled}
                    onClick={() => handleExpandCollapseClick()}
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
                </ErrorListContainer>
            )
        );
    };

    const renderCompositeSection = () => {
        return (
            compositeOptionSection && (
                <ChildrenContainer>
                    {renderCompositeOptionSection()}
                    {!removable && (
                        <>
                            {renderError()}
                            {renderViewMoreOrLessButton()}
                        </>
                    )}
                </ChildrenContainer>
            )
        );
    };

    return (
        <>
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
            {errorMessage && (
                <ErrorMessage
                    id={`${generatedId}-error-message`}
                    weight="semibold"
                    tabIndex={0}
                    data-testid={`${generatedId}-error-message`}
                >
                    {errorMessage}
                </ErrorMessage>
            )}
        </>
    );
};
