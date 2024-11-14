/* eslint-disable react/display-name */
import React, { useEffect, useRef, useState } from "react";
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
    // const [labelText, setLabelText] = useState(defaultLabel);
    const [isDropdownExpanded, setIsDropdownExpanded] =
        useState<boolean>(false);
    const [viewportHeight, setViewportHeight] = useState(0);
    const [dropdowntHeight, setDropdownHeight] = useState(0);
    const [dynamicMargin, setDynamicMargin] = useState(0);
    const navTestId = testId || "local-nav-dropdown";

    const visibleSectionTitle =
        selectedItemIndex >= 0 && isStickied
            ? items[selectedItemIndex].title
            : defaultLabel;
    const labelText = visibleSectionTitle;

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
        setViewportHeight(window.innerHeight);
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
        document.body.style.overflow =
            isDropdownExpanded && isStickied ? "hidden" : "auto";
    }, [isDropdownExpanded, isStickied]);

    useEffect(() => {
        const adjustPadding = () => {
            const dropdown = document.querySelector(
                `[data-testid="${navTestId}"]`
            );
            if (dropdown) {
                const dropdownRect = dropdown.getBoundingClientRect();
                const spaceToRight = window.innerWidth - dropdownRect.right;
                const spaceToLeft = dropdownRect.left;
                // Calculate the padding needed to balance the dropdown in the viewport
                const sidePadding = Math.max(spaceToRight, spaceToLeft);
                setDynamicMargin(sidePadding);
            }
        };
        adjustPadding();

        window.addEventListener("resize", adjustPadding);

        return () => {
            window.removeEventListener("resize", adjustPadding);
        };
    }, []);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleToggleDropdown = () => {
        setIsDropdownExpanded((prev) => !prev);
    };

    const handleDismissBackdrop = () => {
        setIsDropdownExpanded(false);
    };

    const handleNavItemClick = (
        e: React.MouseEvent,
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
        const { id, title } = item;

        const renderTitle = () => {
            if (renderItem) {
                return renderItem(item, { selected: isSelected });
            }
            return (
                <>
                    {isSelected && <StyledTickIcon />}
                    <LabelText $isSelected={isSelected}>{title}</LabelText>
                </>
            );
        };

        return (
            <NavItem id={id} $isSelected={isSelected} onClick={handleClick}>
                {renderTitle()}
            </NavItem>
        );
    };

    console.log("sideMargin: ", dynamicMargin);
    return (
        <>
            <span ref={detectStickyRef} data-testid={"sticky-ref"} />
            <NavWrapper
                $isStickied={isStickied}
                $sideMargin={dynamicMargin}
                $stickyOffset={stickyOffset}
                ref={ref}
                id={id}
                data-testid={navTestId}
                className={className}
            >
                <NavLabel
                    ref={dropdownRef}
                    onClick={handleToggleDropdown}
                    data-testid={`${navTestId}-label`}
                >
                    <LabelText weight="bold">{labelText}</LabelText>
                    <NavIcon $isDropdownExpanded={isDropdownExpanded} />
                </NavLabel>
                {isDropdownExpanded && (
                    <NavItemList
                        data-testid={`${navTestId}-dropdown-list`}
                        $viewportHeight={
                            viewportHeight - dropdowntHeight - stickyOffset
                        }
                    >
                        {items.map((item, i) =>
                            renderDropdownNavItem({
                                handleClick: (e) =>
                                    handleNavItemClick(e, item, i),
                                isSelected:
                                    i === selectedItemIndex && isStickied,
                                item,
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
