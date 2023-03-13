import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useSpring } from "react-spring";
import { Button } from "../button/button";
import { Overlay } from "../overlay/overlay";
import {
    ChevronIcon,
    Divider,
    Expandable,
    FilterItemBody,
    FilterItemExpandButton,
    FilterItemHeader,
    FilterItemTitle,
    FilterItemWrapper,
    FullscreenContainer,
} from "./filter-item.styles";
import { FilterBody, FilterFooter, FilterHeaderButton } from "./filter.styles";
import { FilterItemProps } from "./types";

interface FilterItemComponentProps extends FilterItemProps {
    mode: "default" | "mobile";
    first?: boolean | undefined;
}

export const FilterItem = ({
    allowFullscreen = false,
    collapsible: desktopCollapsible = true,
    mode,
    title,
    first = false,
    render,
    onItemDismiss,
    onItemDone,
}: FilterItemComponentProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [expanded, setExpanded] = useState(
        mode === "default" ? !desktopCollapsible : true
    );
    const [active, setActive] = useState(false);
    const collapsible = mode === "default" && desktopCollapsible;
    const showDivider = !first || collapsible;

    const resizeDetector = useResizeDetector();
    const expandableStyles = useSpring({
        height: expanded ? resizeDetector.height : 0,
    });

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleInteraction = () => {
        if (mode === "mobile" && allowFullscreen) {
            setActive(true);
        }
    };

    const handleItemDismiss = () => {
        if (onItemDismiss) {
            onItemDismiss();
        }
        setActive(false);
    };

    const handleItemDone = () => {
        if (onItemDone) {
            onItemDone();
        }
        setActive(false);
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderFullscreen = () => {
        return (
            <Overlay show>
                <FullscreenContainer>
                    <FilterHeaderButton
                        onClick={handleItemDismiss}
                        focusOutline="browser"
                        focusHighlight={false}
                    >
                        <ChevronLeftIcon />
                    </FilterHeaderButton>
                    <FilterBody>{render("fullscreen")}</FilterBody>
                    <FilterFooter>
                        <Button.Default onClick={handleItemDone}>
                            Done
                        </Button.Default>
                    </FilterFooter>
                </FullscreenContainer>
            </Overlay>
        );
    };

    return (
        <FilterItemWrapper $collapsible={collapsible}>
            {showDivider && <Divider />}
            {(title || collapsible) && (
                <FilterItemHeader>
                    {title && (
                        <FilterItemTitle weight="semibold">
                            {title}
                        </FilterItemTitle>
                    )}
                    {collapsible && (
                        <FilterItemExpandButton
                            onClick={() => {
                                setExpanded(!expanded);
                            }}
                        >
                            <ChevronIcon $expanded={expanded} />
                        </FilterItemExpandButton>
                    )}
                </FilterItemHeader>
            )}
            <Expandable style={expandableStyles} onClick={handleInteraction}>
                <FilterItemBody
                    ref={resizeDetector.ref}
                    tabIndex={-1}
                    onFocus={handleInteraction}
                >
                    {render(mode)}
                </FilterItemBody>
            </Expandable>
            {active && renderFullscreen()}
        </FilterItemWrapper>
    );
};
