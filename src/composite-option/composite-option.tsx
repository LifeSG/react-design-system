import { ChevronDownIcon, ChevronUpIcon } from "@lifesg/react-icons";
import { MouseEvent, useEffect, useState } from "react";
import { ToggleIcon } from "../shared/toggle-icon/toggle-icon";
import {
    AlertContainer,
    ButtonContainer,
    ButtonLabel,
    Children,
    ChildrenContainer,
    CompositeOptionSelector,
    Container,
    ErrorListContainer,
    ErrorListItem,
    ErrorListli,
    ErrorMessage,
    HeaderContainer,
    HeadingText,
    Label,
    SubLabel,
    ViewMoreOrLessButtonContainer,
    ViewMoreOrLessButtonLabel,
} from "./compositeOption.styles";
import { TextList } from "../text-list";
import { CompositeOptionProps } from "./types";

export type CompositeOptionType = "checkbox" | "radio";

export type ToggleIconType = "checkbox" | "radio";

export const CompositeOption = ({
    type = "checkbox",
    checked,
    disabled,
    children,
    title,
    subtitle,
    remove,
    id,
    hideMoreOrLessButton,
    titleMaxLines,
    className,
    error,
    errorMessage,
    "data-testid": testId,
    onClick,
    showChildren,
    errorList,
    onRemove,
}: CompositeOptionProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [selected, setSelected] = useState<boolean | undefined>(checked);
    const [showMore, setShowMore] = useState<boolean>(!!showChildren);
    const [showErrorList, setShowErrorList] = useState<boolean>(false);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setSelected(checked);
    }, [checked]);

    useEffect(() => {
        if (selected !== undefined && showChildren === undefined) {
            setShowMore(selected);
        }
    }, [selected, showChildren]);

    useEffect(() => {
        if (errorList) {
            const showErrorIfString =
                !showMore && Array.isArray(errorList) && errorList?.length > 0;
            const showErrorIfElement = !showMore && !Array.isArray(errorList);
            if (!selected) {
                setShowErrorList(!selected);
            } else {
                setShowErrorList(showErrorIfString || showErrorIfElement);
            }
        }
    }, [showMore, errorList, selected]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleOnClick = (
        event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) => {
        event?.preventDefault();
        if (!disabled) {
            if (onClick) {
                onClick(event);
                return;
            }

            switch (type) {
                case "checkbox":
                    setSelected((prevSelected) => {
                        return !prevSelected;
                    });
                    break;
                case "radio":
                    {
                        if (!selected) {
                            setSelected(true);
                        }
                    }
                    break;
            }
        }
    };
    const handleView = () => {
        if (!disabled) {
            setShowMore(!showMore);
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

    const renderTitleOrSubtitle = (item, headerValue: "label" | "subLabel") => {
        if (!item) {
            return null;
        }

        const Component = headerValue === "label" ? Label : SubLabel;
        return (
            <Component
                id={headerValue}
                $maxLines={titleMaxLines}
                $selected={selected}
                $disabled={disabled}
                data-testid={headerValue}
            >
                {item}
            </Component>
        );
    };

    const renderChildren = () => {
        if (!children) {
            return null;
        }
        const ChildrenisFinalItem = hideMoreOrLessButton || remove;
        return (
            <Children
                $selected={showMore}
                $isNotFinalItem={
                    ChildrenisFinalItem ? !ChildrenisFinalItem : selected
                }
                $disabled={disabled}
            >
                {children}
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
                                : "0.688rem",
                    }}
                ></div>
                <ViewMoreOrLessButtonContainer
                    $show={hideMoreOrLessButton ? false : selected}
                    $disabled={disabled}
                    onClick={() => handleView()}
                    data-testid="toggle-button"
                >
                    <ViewMoreOrLessButtonLabel
                        weight="semibold"
                        $disabled={disabled}
                        data-testid="toggle-button-label"
                    >
                        {showMore ? "Show less" : "Show more"}
                    </ViewMoreOrLessButtonLabel>
                    {showMore ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </ViewMoreOrLessButtonContainer>
            </>
        );
    };

    const renderErrorsList = () => {
        return (
            !showMore &&
            showErrorList && (
                <ErrorListContainer
                    $show={hideMoreOrLessButton ? false : selected}
                    $disabled={disabled}
                    onClick={() => handleView()}
                    data-testid="error-alert"
                >
                    <AlertContainer
                        type={!disabled ? "error" : "description"}
                        className={className}
                        showIcon
                    >
                        {Array.isArray(errorList) ? (
                            <>
                                <ErrorListItem $disabled={disabled}>
                                    Error
                                </ErrorListItem>
                                <TextList.Ul>
                                    {errorList?.map((item, index) => {
                                        return (
                                            <ErrorListli
                                                $disabled={disabled}
                                                key={index}
                                            >
                                                <ErrorListItem
                                                    $disabled={disabled}
                                                >
                                                    {item}
                                                </ErrorListItem>
                                            </ErrorListli>
                                        );
                                    })}
                                </TextList.Ul>
                            </>
                        ) : (
                            errorList
                        )}
                    </AlertContainer>
                </ErrorListContainer>
            )
        );
    };

    return (
        <>
            <Container
                $error={error}
                $disabled={disabled}
                $selected={selected}
                className={className}
                id={id}
                data-testid={testId}
            >
                <HeaderContainer
                    id={"header-container"}
                    $disabled={disabled}
                    $error={error}
                    $selected={selected}
                >
                    <CompositeOptionSelector
                        $disabled={disabled}
                        onClick={(e) => handleOnClick(e)}
                        id={`selector-${id}`}
                        role={type}
                        aria-checked={selected}
                    >
                        <ToggleIcon
                            type={type}
                            active={selected}
                            disabled={disabled}
                        />
                        <HeadingText>
                            {renderTitleOrSubtitle(title, "label")}
                            {renderTitleOrSubtitle(subtitle, "subLabel")}
                        </HeadingText>
                    </CompositeOptionSelector>
                    {remove && (
                        <>
                            <ButtonContainer
                                $disabled={disabled}
                                onClick={handleOnRemove}
                                id={`remove-${id}`}
                            >
                                <ButtonLabel $disabled={disabled}>
                                    Remove
                                </ButtonLabel>
                            </ButtonContainer>
                        </>
                    )}
                </HeaderContainer>

                {children && (
                    <ChildrenContainer>
                        {renderChildren()}
                        {!remove && (
                            <>
                                {renderErrorsList()}
                                {renderViewMoreOrLessButton()}
                            </>
                        )}
                    </ChildrenContainer>
                )}
            </Container>
            {errorMessage && (
                <ErrorMessage
                    id={"error-message"}
                    weight="semibold"
                    tabIndex={0}
                    data-testid={"error-message"}
                >
                    {errorMessage}
                </ErrorMessage>
            )}
        </>
    );
};

export default CompositeOption;
