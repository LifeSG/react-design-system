/* eslint-disable react/display-name */
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { LocalNavDropdownItemComponentProps } from "../internal-types";
import { LocalNavDropdownProps, LocalNavItemProps } from "../types";
import {
    Backdrop,
    NavItem,
    NavItemLabel,
    NavItemList,
    NavSelect,
    NavSelectIcon,
    NavWrapper,
    StyledTickIcon,
} from "./local-nav-dropdown.styles";
import { Typography } from "../../typography";

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
    const navWrapperRef = useRef<HTMLElement>(null);
    const [isStickied, setIsStickied] = useState<boolean>(false);
    const [isDropdownExpanded, setIsDropdownExpanded] =
        useState<boolean>(false);
    const [viewportHeight, setViewportHeight] = useState(0);
    const [dropdowntHeight, setDropdownHeight] = useState(0);
    const [dynamicMargin, setDynamicMargin] = useState(0);
    const navTestId = testId || "local-nav-dropdown";

    useImperativeHandle(ref, () => navWrapperRef.current!);

    const labelText =
        typeof selectedItemIndex === "number" &&
        selectedItemIndex >= 0 &&
        isStickied
            ? items[selectedItemIndex].title
            : defaultLabel;

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
        addStylesheetForDocumentBody();
        return () => {
            applyBodyStyleClass("remove");
        };
    }, []);

    useEffect(() => {
        if (isDropdownExpanded && isStickied) {
            applyBodyStyleClass("add");
        } else {
            applyBodyStyleClass("remove");
        }
    }, [isDropdownExpanded, isStickied]);

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
        const adjustPadding = () => {
            const dropdown = navWrapperRef?.current;
            if (dropdown) {
                const dropdownRect = dropdown.getBoundingClientRect();
                const spaceToRight =
                    document.body.clientWidth - dropdownRect.right;
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
    // HELPER FUNCTIONS
    // =============================================================================

    const addStylesheetForDocumentBody = () => {
        /**
         * This stylesheet is to manipulate the <body>. We only add once
         */
        if (!document.getElementById(STYLESHEET_ID)) {
            const overlayStyleSheet = document.createElement("style");
            overlayStyleSheet.id = STYLESHEET_ID;

            const documentWidth = document.documentElement.clientWidth;
            const windowWidth = window.innerWidth;
            const scrollBarWidth = windowWidth - documentWidth;

            overlayStyleSheet.innerHTML = `
				.${DROPDOWN_OPEN_CLASSNAME} {
					overflow: hidden;
					padding-right: ${scrollBarWidth}px !important;
					-ms-overflow-style: none;
					scrollbar-width: none;
				}

				.${DROPDOWN_OPEN_CLASSNAME}::-webkit-scrollbar {
					display: none;
				}
			`;

            document.body.appendChild(overlayStyleSheet);
        }
    };

    const applyBodyStyleClass = (action: "add" | "remove") => {
        const isOverlayStyleClassApplied = document.body.classList.contains(
            DROPDOWN_OPEN_CLASSNAME
        );

        if (action === "add" && !isOverlayStyleClassApplied) {
            document.body.classList.add(DROPDOWN_OPEN_CLASSNAME);
        } else if (action === "remove" && isOverlayStyleClassApplied) {
            document.body.classList.remove(DROPDOWN_OPEN_CLASSNAME);
        }
    };

    const focusFirstMenuItem = () => {
        const firstMenuItem = navWrapperRef.current?.querySelector(
            '[role="menuitem"]'
        ) as HTMLElement;
        firstMenuItem?.focus();
    };

    const focusLastMenuItem = () => {
        const menuItems = navWrapperRef.current?.querySelectorAll(
            '[role="menuitem"]'
        ) as NodeListOf<HTMLElement>;
        const lastMenuItem = menuItems[menuItems.length - 1];
        lastMenuItem?.focus();
    };

    const handleNavItemKeyDown = (
        e: React.KeyboardEvent<HTMLElement>,
        handleClick: (
            e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
        ) => void
    ) => {
        const { key } = e;

        if (key === "Enter" || key === " ") {
            e.preventDefault();
            handleClick(e);
        }
    };

    const handleNavSelectKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        const { key } = e;

        if (key === "ArrowDown") {
            e.preventDefault();
            if (!isDropdownExpanded) {
                setIsDropdownExpanded(true);
            }
            setTimeout(focusFirstMenuItem, 0);
        } else if (key === "ArrowUp") {
            e.preventDefault();
            if (!isDropdownExpanded) {
                setIsDropdownExpanded(true);
            }
            setTimeout(focusLastMenuItem, 0);
        } else if (key === "Enter" || key === " ") {
            e.preventDefault();
            setIsDropdownExpanded(true);
            setTimeout(focusFirstMenuItem, 0);
        } else if (key === "Tab") {
            setIsDropdownExpanded(false);
        } else if (key === "Escape") {
            setIsDropdownExpanded(false);
        }
    };

    const handleNavItemListKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        const { key } = e;

        const menuItems = Array.from(
            e.currentTarget.querySelectorAll('[role="menuitem"]')
        ) as HTMLElement[];

        const currentIndex = menuItems.indexOf(
            document.activeElement as HTMLElement
        );

        if (key === "ArrowDown") {
            e.preventDefault();
            const nextIndex =
                currentIndex < menuItems.length - 1 ? currentIndex + 1 : 0;
            menuItems[nextIndex]?.focus();
        } else if (key === "ArrowUp") {
            e.preventDefault();
            const prevIndex =
                currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1;
            menuItems[prevIndex]?.focus();
        } else if (key === "Tab") {
            setIsDropdownExpanded(false);
        } else if (key === "Escape") {
            setIsDropdownExpanded(false);
            dropdownRef.current?.focus();
        }
    };

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
        e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
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
    }: LocalNavDropdownItemComponentProps) => {
        const { id, title } = item;

        if (renderItem) {
            return (
                <li id={id} onClick={handleClick} role="none">
                    {renderItem(item, {
                        selected: isSelected,
                        stickied: isStickied,
                    })}
                </li>
            );
        }

        return (
            <NavItem
                id={id}
                role="menuitem"
                $isSelected={isSelected && isStickied}
                onClick={handleClick}
                onKeyDown={(e) => handleNavItemKeyDown(e, handleClick)}
                aria-current={isSelected ? true : undefined}
                tabIndex={-1}
            >
                {isSelected && <StyledTickIcon />}
                <NavItemLabel $isSelected={isSelected}>{title}</NavItemLabel>
            </NavItem>
        );
    };

    return (
        <>
            <span ref={detectStickyRef} data-testid={"sticky-ref"} />
            <NavWrapper
                $isStickied={isStickied}
                $sideMargin={dynamicMargin}
                $stickyOffset={stickyOffset}
                ref={navWrapperRef}
                id={id}
                data-testid={navTestId}
                className={className}
            >
                <NavSelect
                    ref={dropdownRef}
                    role="button"
                    onClick={handleToggleDropdown}
                    onKeyDown={handleNavSelectKeyDown}
                    data-testid={`${navTestId}-label`}
                    $isDropdownExpanded={isDropdownExpanded}
                    aria-haspopup="true"
                    aria-expanded={isDropdownExpanded}
                    tabIndex={0}
                >
                    <Typography.BodyBL weight="semibold">
                        {labelText}
                    </Typography.BodyBL>
                    <NavSelectIcon $isDropdownExpanded={isDropdownExpanded} />
                </NavSelect>
                {isDropdownExpanded && (
                    <NavItemList
                        role="menu"
                        onKeyDown={handleNavItemListKeyDown}
                        data-testid={`${navTestId}-dropdown-list`}
                        $viewportHeight={
                            viewportHeight - dropdowntHeight - stickyOffset
                        }
                    >
                        {items.map((item, i) =>
                            renderDropdownNavItem({
                                handleClick: (e) =>
                                    handleNavItemClick(e, item, i),
                                isSelected: i === selectedItemIndex,
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

// =============================================================================
// CONSTANTS
// =============================================================================
const STYLESHEET_ID = "lifesg-ds-local-nav-dropdown-stylesheet";
const DROPDOWN_OPEN_CLASSNAME = "lifesg-ds-local-nav-dropdown-open";
