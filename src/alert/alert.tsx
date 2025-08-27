import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { ExclamationTriangleFillIcon } from "@lifesg/react-icons/exclamation-triangle-fill";
import { ICircleFillIcon } from "@lifesg/react-icons/i-circle-fill";
import { TickCircleFillIcon } from "@lifesg/react-icons/tick-circle-fill";
import { useCallback, useEffect, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { inertValue } from "../shared/accessibility";
import {
    ActionLinkText,
    AlertIconWrapper,
    ChevronIcon,
    ContentContainer,
    ShowMoreButton,
    TextWrapperContainer,
    Wrapper,
} from "./alert.style";
import { AlertProps } from "./types";

export const Alert = ({
    type,
    className,
    children,
    actionLink,
    actionLinkIcon,
    sizeType = "default",
    showIcon = false,
    customIcon,
    maxCollapsedHeight,
    role,
    ...otherProps
}: AlertProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [showHiddenContent, setShowHiddenContent] = useState<boolean>(false);
    const [renderShowMore, setRenderShowMore] = useState<boolean>(false);
    const { height: contentHeight, ref: contentRef } =
        useResizeDetector<HTMLDivElement>();

    // =============================================================================
    // HELPERS
    // =============================================================================

    const getAlertLabel = () => {
        switch (type) {
            case "success":
                return "Success";
            case "warning":
                return "Warning";
            case "error":
                return "Error";
            case "info":
                return "Information";
            case "description":
                return "Description";
            default:
                return "Alert";
        }
    };

    const setCollapsedState = useCallback(() => {
        setShowHiddenContent(!maxCollapsedHeight);
        setRenderShowMore(isContentOutsideCollapsibleZone());
    }, [maxCollapsedHeight, contentHeight]);

    const isContentOutsideCollapsibleZone = () => {
        if (contentHeight && maxCollapsedHeight) {
            return contentHeight > maxCollapsedHeight;
        }
        return false;
    };

    const isInert = () => {
        return !!maxCollapsedHeight && !showHiddenContent;
    };

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
        setCollapsedState();
    }, [maxCollapsedHeight, contentHeight, setCollapsedState]);

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const renderShowMoreButton = () => (
        <ShowMoreButton
            $sizeType={sizeType}
            $type={type}
            type="button"
            aria-expanded={showHiddenContent}
            onClick={() => setShowHiddenContent(!showHiddenContent)}
        >
            Show {showHiddenContent ? "less" : "more"}
            <ChevronIcon $expanded={showHiddenContent} />
        </ShowMoreButton>
    );

    const renderLinkType = () => {
        if (actionLinkIcon) {
            return actionLinkIcon;
        }
        return <ArrowRightIcon />;
    };

    const renderLink = () => {
        if (!actionLink) return null;

        return (
            <ActionLinkText
                data-testid="action-link"
                $type={type}
                $sizeType={sizeType}
                inert={inertValue(isInert())}
                {...actionLink}
            >
                {actionLink.children}
                {renderLinkType()}
            </ActionLinkText>
        );
    };

    const renderIcon = () => {
        if (type && customIcon) return customIcon;
        switch (type) {
            case "success":
                return <TickCircleFillIcon aria-hidden />;
            case "warning":
                return <ExclamationTriangleFillIcon aria-hidden />;
            case "error":
                return <ExclamationCircleFillIcon aria-hidden />;
            case "info":
                return <ICircleFillIcon aria-hidden />;
            case "description":
                return <ICircleFillIcon aria-hidden />;
            default:
                return null;
        }
    };

    const renderContent = () => (
        <TextWrapperContainer
            $maxCollapsedHeight={
                isContentOutsideCollapsibleZone()
                    ? maxCollapsedHeight
                    : undefined
            }
            $showMore={showHiddenContent}
            $hasActionLink={!!actionLink}
            inert={inertValue(isInert())}
        >
            <div ref={contentRef}>{children}</div>
            {renderLink()}
        </TextWrapperContainer>
    );

    return (
        <Wrapper
            className={className}
            $type={type}
            $sizeType={sizeType}
            aria-label={`${getAlertLabel()}`}
            data-testid={otherProps["data-testid"]}
            role={role}
        >
            {showIcon && (
                <AlertIconWrapper $sizeType={sizeType} $type={type}>
                    {renderIcon()}
                </AlertIconWrapper>
            )}
            <ContentContainer>
                {/* 
                    CSS-BASED TAB ORDER IMPLEMENTATION:
                    - DOM order: button → link → content (natural tab order)
                    - Visual order: content → button (via CSS order property)
                */}
                {renderShowMore && renderShowMoreButton()}
                {renderContent()}
            </ContentContainer>
        </Wrapper>
    );
};
