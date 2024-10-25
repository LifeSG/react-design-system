/* eslint-disable react/display-name */
import camelCase from "lodash/camelCase";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { LocalNavPropsBase, NavItemProps } from "../types";
import {
    Backdrop,
    LabelText,
    NavIcon,
    NavItem,
    NavItemList,
    NavLabel,
    NavWrapper,
} from "./local-nav-dropdown.styles";

const DropdownNavItem = (props: NavItemProps) => {
    const { handleClick, isSelected, section } = props;
    return (
        <NavItem
            isSelected={isSelected}
            onClick={() => {
                handleClick();
            }}
        >
            <LabelText isSelected={isSelected}>
                {section.sectionTitle}
            </LabelText>
        </NavItem>
    );
};

export interface LocalNavDropdownProps extends LocalNavPropsBase {
    defaultLabelText: string;
    stickyOffset?: number;
    mastheadHeight?: number; //to show the scroll bar if the dropdown list is too big.
}

export const LocalNavDropdown = React.forwardRef<
    HTMLElement,
    LocalNavDropdownProps
>(
    (
        {
            defaultLabelText,
            stickyOffset = 0,
            onNavItemClickCb,
            sections,
            visibleSectionIndex,
            mastheadHeight = 0,
        }: LocalNavDropdownProps,
        ref
    ) => {
        const detectStickyRef = useRef<HTMLSpanElement>(null);
        const dropdownRef = useRef<HTMLLabelElement>(null);
        const [isStickied, setIsStickied] = useState<boolean>(false);
        const [labelText, setLabelText] = useState(defaultLabelText);
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
                visibleSectionIndex >= 0 && isStickied
                    ? sections[visibleSectionIndex].sectionTitle
                    : defaultLabelText;
            setLabelText(visibleSectionTitle);
        }, [visibleSectionIndex, isStickied, sections, defaultLabelText]);

        useEffect(() => {
            document.body.style.overflow =
                isDropdownExpanded && isStickied ? "hidden" : "auto";
        }, [isDropdownExpanded, isStickied]);

        const handleNavItemClick = (index: number) => {
            if (onNavItemClickCb) {
                onNavItemClickCb(index)();
            }
            setIsDropdownExpanded(false);
        };

        const handleDismissBackdrop = useCallback(() => {
            setIsDropdownExpanded(false);
        }, []);

        return (
            <>
                <span ref={detectStickyRef} />
                <NavWrapper
                    isStickied={isStickied}
                    stickyOffset={stickyOffset}
                    ref={ref}
                >
                    <NavLabel
                        htmlFor="dropdownNavShouldExpand"
                        ref={dropdownRef}
                        onClick={handleToggleDropdown}
                    >
                        <LabelText weight="bold">{labelText}</LabelText>
                        <NavIcon />
                    </NavLabel>
                    {isDropdownExpanded && (
                        <NavItemList
                            viewportHeight={
                                viewportHeight -
                                mastheadHeight -
                                dropdowntHeight
                            }
                        >
                            {sections.map((section, i) => (
                                <DropdownNavItem
                                    key={`${camelCase(
                                        section.sectionTitle
                                    )}__dropdownNavItem--${i}`}
                                    handleClick={() => handleNavItemClick(i)}
                                    isSelected={
                                        i === visibleSectionIndex && isStickied
                                    }
                                    section={section}
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
