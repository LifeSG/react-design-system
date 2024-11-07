/* eslint-disable react/display-name */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { LocalNavItemComponentProps } from "../internal-types";
import { LocalNavDropdownProps, LocalNavItemProps } from "../types";
import {
    Backdrop,
    LabelText,
    NavIcon,
    NavItem,
    NavItemList,
    NavLabel,
    NavWrapper,
    StyledTickIcon,
} from "./local-nav-dropdown.styles";

const Component = (
    {
        defaultLabel,
        stickyOffset = 0,
        onNavItemSelect,
        items,
        selectedItemIndex,
        id,
        "data-testid": testId,
        className,
        renderItem,
    }: LocalNavDropdownProps,
    ref: React.Ref<HTMLElement>
): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const detectStickyRef = useRef<HTMLSpanElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isStickied, setIsStickied] = useState<boolean>(false);
    const [labelText, setLabelText] = useState(defaultLabel);
    const [isDropdownExpanded, setIsDropdownExpanded] =
        useState<boolean>(false);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
    const [dropdowntHeight, setDropdownHeight] = useState(window.innerHeight);
    const navTestId = testId || "local-nav-dropdown";

    // =============================================================================
    // EFFECTS, EVENT LISTENERS
    // ============================================================================

    useEffect(() => {
        if (dropdownRef.current) {
            const dropdownHeight =
                dropdownRef.current.getBoundingClientRect().height;
            setDropdownHeight(dropdownHeight);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setViewportHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const callback = (entries: IntersectionObserverEntry[]) => {
            const [entry] = entries;
            setIsStickied(!entry.isIntersecting);
        };

        const observer = new IntersectionObserver(callback, {
            threshold: 1,
            rootMargin: `-${stickyOffset}px 0px 0px 0px`,
        });

        if (detectStickyRef.current) {
            observer.observe(detectStickyRef.current);
        }

        return () => observer.disconnect();
    }, [stickyOffset]);

    useEffect(() => {
        const visibleSectionTitle =
            selectedItemIndex >= 0
                ? items[selectedItemIndex].title
                : defaultLabel;
        setLabelText(visibleSectionTitle);
    }, [selectedItemIndex, isStickied, items, defaultLabel]);

    useEffect(() => {
        document.body.style.overflow =
            isDropdownExpanded && isStickied ? "hidden" : "auto";
    }, [isDropdownExpanded, isStickied]);

    const handleToggleDropdown = useCallback(() => {
        console.log("came int here");
        setIsDropdownExpanded((prev) => !prev);
    }, []);

    const handleDismissBackdrop = useCallback(() => {
        setIsDropdownExpanded(false);
    }, []);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleNavItemClick = (
        e: MouseEvent,
        item: LocalNavItemProps,
        index: number
    ) => {
        if (onNavItemSelect) {
            onNavItemSelect(e, item, index);
        }
        setIsDropdownExpanded(false);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const renderDropdownNavItem = ({
        handleClick,
        isSelected,
        item,
        renderItem,
    }: LocalNavItemComponentProps) => {
        const { id = "local-nav-dropdown", title } = item;

        const renderTitle = () => {
            if (renderItem) {
                return renderItem(item, { selected: isSelected });
            } else if (typeof title === "string") {
                return (
                    <>
                        {isSelected && <StyledTickIcon />}
                        <LabelText id={`${id}-label`} isSelected={isSelected}>
                            {title}
                        </LabelText>
                    </>
                );
            } else if (React.isValidElement(title)) {
                return title;
            }
            return null;
        };

        return (
            <NavItem id={id} isSelected={isSelected} onClick={handleClick}>
                {renderTitle()}
            </NavItem>
        );
    };

    return (
        <>
            <span
                ref={detectStickyRef}
                id={id || "sticky-ref"}
                data-testid={testId || "sticky-ref"}
                className={className || "sticky-ref"}
            />
            <NavWrapper
                isStickied={isStickied}
                stickyOffset={stickyOffset}
                ref={ref}
                id={`${navTestId}-wrapper`}
                data-testid={`${navTestId}-wrapper`}
                className={`${navTestId}-wrapper`}
            >
                <NavLabel
                    ref={dropdownRef}
                    onClick={handleToggleDropdown}
                    data-testid={`${navTestId}-label`}
                >
                    <LabelText weight="bold">{labelText}</LabelText>
                    <NavIcon isDropdownExpanded={isDropdownExpanded} />
                </NavLabel>
                {isDropdownExpanded && (
                    <NavItemList
                        data-testid={`${navTestId}-dropdown-list`}
                        viewportHeight={
                            viewportHeight - dropdowntHeight - stickyOffset
                        }
                    >
                        {items.map((item, i) =>
                            renderDropdownNavItem({
                                handleClick: (e) =>
                                    handleNavItemClick?.(
                                        e.nativeEvent as MouseEvent,
                                        { title: item.title, id: item.id },
                                        i
                                    ),
                                isSelected:
                                    i === selectedItemIndex && isStickied,
                                item: { title: item.title, id: item.id },
                                renderItem,
                            })
                        )}
                    </NavItemList>
                )}
                {isDropdownExpanded && isStickied && (
                    <Backdrop onClick={handleDismissBackdrop} />
                )}
            </NavWrapper>
        </>
    );
};

export const LocalNavDropdown = React.forwardRef(Component);
