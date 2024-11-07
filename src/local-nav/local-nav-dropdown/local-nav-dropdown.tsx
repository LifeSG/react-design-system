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

const DropdownNavItem = (props: LocalNavItemComponentProps) => {
    const { handleClick, isSelected, item, renderItem } = props;

    const renderTitle = () => {
        if (renderItem) {
            return renderItem(item, { selected: isSelected });
        } else if (typeof item.title === "string") {
            return (
                <>
                    {isSelected && <StyledTickIcon />}
                    <LabelText id={`${item.id}-label`} isSelected={isSelected}>
                        {item.title}
                    </LabelText>
                </>
            );
        } else if (React.isValidElement(item.title)) {
            return item.title;
        }
        return null;
    };

    return (
        <NavItem id={item.id} isSelected={isSelected} onClick={handleClick}>
            {renderTitle()}
        </NavItem>
    );
};

export const LocalNavDropdown = React.forwardRef<
    HTMLElement,
    LocalNavDropdownProps
>(
    (
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
        ref
    ) => {
        const detectStickyRef = useRef<HTMLSpanElement>(null);
        const dropdownRef = useRef<HTMLDivElement>(null);
        const [isStickied, setIsStickied] = useState<boolean>(false);
        const [labelText, setLabelText] = useState(defaultLabel);
        const [isDropdownExpanded, setIsDropdownExpanded] =
            useState<boolean>(false);
        const [viewportHeight, setViewportHeight] = useState(
            window.innerHeight
        );
        const [dropdowntHeight, setDropdownHeight] = useState(
            window.innerHeight
        );

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

        const handleToggleDropdown = useCallback(() => {
            setIsDropdownExpanded((prev) => !prev);
        }, []);

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

        const handleDismissBackdrop = useCallback(() => {
            setIsDropdownExpanded(false);
        }, []);

        const navTestId = testId || "local-nav-dropdown";

        return (
            <div
                id={`${navTestId}-container`}
                data-testid={`${navTestId}-container`}
                className={`${navTestId}-container`}
            >
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
                            {items.map((item, i) => (
                                <DropdownNavItem
                                    key={i}
                                    data-testid={`${navTestId}-item--${i}`}
                                    handleClick={(e) =>
                                        handleNavItemClick(
                                            e.nativeEvent as MouseEvent,
                                            { title: item.title, id },
                                            i
                                        )
                                    }
                                    isSelected={
                                        i === selectedItemIndex && isStickied
                                    }
                                    item={{ title: item.title, id }}
                                    renderItem={renderItem}
                                />
                            ))}
                        </NavItemList>
                    )}
                    {isDropdownExpanded && isStickied && (
                        <Backdrop onClick={handleDismissBackdrop} />
                    )}
                </NavWrapper>
            </div>
        );
    }
);
