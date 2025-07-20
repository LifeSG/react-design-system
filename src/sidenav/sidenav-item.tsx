import {
    FloatingFocusManager,
    FloatingPortal,
    OpenChangeReason,
    safePolygon,
    size,
    useClick,
    useDismiss,
    useFloating,
    useFocus,
    useHover,
    useInteractions,
    useTransitionStyles,
} from "@floating-ui/react";
import { HTMLAttributes, useContext, useEffect, useState } from "react";
import { SidenavContext } from "./sidenav-context";
import {
    Container,
    DefaultButton,
    DesktopDrawer,
    IconContainer,
    TitleText,
} from "./sidenav-item.styles";
import { SidenavItemProps } from "./types";
import { useResizeDetector } from "react-resize-detector";

export const SidenavItem = ({
    children,
    icon,
    title,
    onClick,
    selected,
    ...otherProps
}: SidenavItemProps) => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const {
        internalId,
        menuRef,
        currentItem,
        previouslySelectedItemId,
        selectedItem,
        setCurrentItem,
        setPreviouslySelectedItemId,
        setSelectedItem,
    } = useContext(SidenavContext);

    const id = otherProps.id || title.toLowerCase().replaceAll(" ", "-");
    const drawerId = `${internalId}-drawer`;
    const isSelected = !!selectedItem && selectedItem.itemId === id;
    const isCurrent = !!currentItem && currentItem.itemId === id;
    const [isOpen, setIsOpen] = useState(false);

    const [anchorRef, setAnchorRef] = useState<HTMLButtonElement | null>(null);
    const [drawerRef, setDrawerRef] = useState<HTMLDivElement | null>(null);

    // =========================================================================
    // FLOATING UI
    // =========================================================================
    const { floatingStyles, refs, context } = useFloating({
        open: isOpen,
        onOpenChange: (open: boolean, _event, reason: OpenChangeReason) => {
            if (open) {
                if (menuRef.current) {
                    refs.setPositionReference(menuRef.current);
                }

                if (children) {
                    setIsOpen(true);
                }

                if (reason === "click") {
                    handleSelect();
                } else if (reason === "focus" || reason === "hover") {
                    handleHover();
                }
            } else {
                setIsOpen(false);
                handleDismiss();
            }
        },
        placement: "right",
        middleware: [
            size({
                apply({ elements }) {
                    const height =
                        elements.reference.getBoundingClientRect().height;
                    const value = `${Math.max(0, height)}px`;

                    elements.floating.style.height = value;
                },
            }),
        ],
        elements: {
            reference: anchorRef,
            floating: drawerRef,
        },
    });

    const click = useClick(context, {
        toggle: false,
        stickIfOpen: false,
    });
    const hover = useHover(context, {
        handleClose: safePolygon(),
    });
    const focus = useFocus(context, { visibleOnly: false });
    const dismiss = useDismiss(context, { enabled: !!children });

    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
        focus,
        hover,
        dismiss,
    ]);

    const { isMounted, styles } = useTransitionStyles(context);

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        if (selected) {
            setSelectedItem({ itemId: id, content: undefined });
        }
    }, [id, selected, setSelectedItem]);

    useResizeDetector({
        onResize: () => {
            // Sync the drawer height with menu height
            refs.setPositionReference(menuRef.current);
        },
        targetRef: menuRef,
        refreshMode: "throttle",
        refreshRate: 300,
    });

    // =========================================================================
    // HELPERS
    // =========================================================================
    const getPreviousSelectedItemId = (): string | undefined => {
        if (!children || !selectedItem) return undefined;
        if (previouslySelectedItemId) {
            return previouslySelectedItemId;
        }
        return selectedItem.itemId;
    };

    const handleSelect = () => {
        setPreviouslySelectedItemId(getPreviousSelectedItemId());
        setCurrentItem({ itemId: id, content: children });
        setSelectedItem({
            itemId: id,
            content: children,
        });
        if (onClick && !children) {
            onClick(id);
        }
    };

    const handleHover = () => {
        setCurrentItem({ itemId: id, content: children });
    };

    const handleDismiss = () => {
        setCurrentItem((current) => {
            if (current?.itemId === id) {
                return undefined;
            }
            return current;
        });
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const ariaControlProps: HTMLAttributes<HTMLButtonElement> = children
        ? {
              "aria-controls": drawerId,
              "aria-haspopup": true,
              "aria-expanded":
                  (isCurrent && !!currentItem.content) ||
                  (isSelected && !!selectedItem.content),
          }
        : {};

    return (
        <Container>
            <DefaultButton
                type="button"
                ref={setAnchorRef}
                aria-current={isSelected ? "page" : undefined}
                {...ariaControlProps}
                {...otherProps}
                $highlight={isSelected || isCurrent}
                {...getReferenceProps()}
            >
                <IconContainer aria-hidden>{icon}</IconContainer>
                <TitleText inline>{title}</TitleText>
            </DefaultButton>
            {isMounted && (
                <FloatingPortal>
                    <FloatingFocusManager
                        context={context}
                        modal={false}
                        initialFocus={-1}
                    >
                        <div
                            id={drawerId}
                            data-testid="sidenav-drawer"
                            ref={setDrawerRef}
                            style={floatingStyles}
                            {...getFloatingProps()}
                        >
                            <DesktopDrawer
                                style={styles}
                                $showDrawer={isOpen}
                                $showShadow={
                                    isCurrent || (isSelected && !currentItem)
                                }
                            >
                                {children}
                            </DesktopDrawer>
                        </div>
                    </FloatingFocusManager>
                </FloatingPortal>
            )}
        </Container>
    );
};
