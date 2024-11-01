/* eslint-disable react/display-name */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { LocalNavItemComponentProps } from "../internal-types";
import { LocalNavItemProps, LocalNavPropsBase } from "../types";
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
    const { handleClick, isSelected, item } = props;
    const renderTitle = () => {
        if (typeof item.title === "string") {
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

export interface LocalNavDropdownProps extends LocalNavPropsBase {
    defaultLabel: string | React.ReactNode;
    stickyOffset?: number | undefined;
}

export const LocalNavDropdown = React.forwardRef<
    HTMLElement,
    LocalNavDropdownProps
>(
    (
        {
            defaultLabel,
            stickyOffset = 0,
            onNavItemSelect,
            titleList,
            selectedItemIndex,
            id,
            "data-testid": testId,
            className,
        }: LocalNavDropdownProps,
        ref
    ) => {
        const detectStickyRef = useRef<HTMLSpanElement>(null);
        const dropdownRef = useRef<HTMLLabelElement>(null);
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
                selectedItemIndex >= 0 && isStickied
                    ? titleList[selectedItemIndex]
                    : defaultLabel;
            setLabelText(visibleSectionTitle);
        }, [selectedItemIndex, isStickied, titleList, defaultLabel]);

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

        const navId = id || "local-nav-dropdown";
        const navTestId = testId || "local-nav-dropdown";
        const navClassName = className || "local-nav-dropdown";

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
                    id={`${navId}-wrapper`}
                    data-testid={`${navTestId}-wrapper`}
                    className={`${navClassName}-wrapper`}
                >
                    <NavLabel
                        htmlFor="dropdownNavShouldExpand"
                        ref={dropdownRef}
                        onClick={handleToggleDropdown}
                        id={`${navId}-label`}
                        data-testid={`${navTestId}-label`}
                        className={`${navClassName}-label`}
                    >
                        <LabelText weight="bold">{labelText}</LabelText>
                        <NavIcon />
                    </NavLabel>
                    {isDropdownExpanded && (
                        <NavItemList
                            id={`${navId}-dropdown-list`}
                            data-testid={`${navTestId}-dropdown-list`}
                            className={`${navClassName}-dropdown-list`}
                            viewportHeight={
                                viewportHeight - dropdowntHeight - stickyOffset
                            }
                        >
                            {titleList.map((title, i) => (
                                <DropdownNavItem
                                    key={i}
                                    data-test-id={`dropdownNavItem--${i}`}
                                    handleClick={(e) =>
                                        handleNavItemClick(e, { title, id }, i)
                                    }
                                    isSelected={
                                        i === selectedItemIndex && isStickied
                                    }
                                    item={{ title, id }}
                                />
                            ))}
                        </NavItemList>
                    )}
                    {isDropdownExpanded && isStickied && (
                        <Backdrop onClick={handleDismissBackdrop} />
                    )}
                </NavWrapper>
            </>
        );
    }
);
