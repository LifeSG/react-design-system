import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { ExclamationTriangleFillIcon } from "@lifesg/react-icons/exclamation-triangle-fill";
import { ICircleFillIcon } from "@lifesg/react-icons/i-circle-fill";
import { TickCircleFillIcon } from "@lifesg/react-icons/tick-circle-fill";
import { useEffect, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
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
    ...otherProps
}: AlertProps): React.JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [showHiddenContent, setShowHiddenContent] = useState<boolean>(false);
    const [renderShowMore, setRenderShowMore] = useState<boolean>(false);
    const { height: contentHeight, ref: contentRef } =
        useResizeDetector<HTMLDivElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
        setCollapsedState();
    }, [maxCollapsedHeight, contentHeight]);

    // =============================================================================
    // HELPERS
    // =============================================================================

    const setCollapsedState = () => {
        setShowHiddenContent(!maxCollapsedHeight);
        setRenderShowMore(isContentOutsideCollapsibleZone());
    };

    const isContentOutsideCollapsibleZone = () => {
        if (contentHeight && maxCollapsedHeight) {
            return contentHeight > maxCollapsedHeight;
        }
        return false;
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const renderShowMoreButton = () => (
        <ShowMoreButton
            $sizeType={sizeType}
            $type={type}
            type="button"
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
                return <TickCircleFillIcon />;
            case "warning":
                return <ExclamationTriangleFillIcon />;
            case "error":
                return <ExclamationCircleFillIcon />;
            case "info":
                return <ICircleFillIcon />;
            case "description":
                return <ICircleFillIcon />;
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
            data-testid={otherProps["data-testid"]}
        >
            {showIcon && (
                <AlertIconWrapper $sizeType={sizeType} $type={type}>
                    {renderIcon()}
                </AlertIconWrapper>
            )}
            <ContentContainer>
                {renderContent()}
                {renderShowMore && renderShowMoreButton()}
            </ContentContainer>
        </Wrapper>
    );
};
