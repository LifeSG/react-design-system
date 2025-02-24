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
        selectedItemIndex >= 0 && isStickied
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
    }: LocalNavDropdownItemComponentProps) => {
        const { id, title } = item;

        if (renderItem) {
            return (
                <li id={id} onClick={handleClick}>
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
                $isSelected={isSelected && isStickied}
                onClick={handleClick}
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
                    onClick={handleToggleDropdown}
                    data-testid={`${navTestId}-label`}
                    $isDropdownExpanded={isDropdownExpanded}
                >
                    <Typography.BodyBL weight="semibold">
                        {labelText}
                    </Typography.BodyBL>
                    <NavSelectIcon $isDropdownExpanded={isDropdownExpanded} />
                </NavSelect>
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
