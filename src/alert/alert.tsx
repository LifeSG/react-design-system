import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";
import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { ExclamationTriangleFillIcon } from "@lifesg/react-icons/exclamation-triangle-fill";
import { ICircleFillIcon } from "@lifesg/react-icons/i-circle-fill";
import { TickCircleFillIcon } from "@lifesg/react-icons/tick-circle-fill";
import { useEffect, useRef, useState } from "react";
import {
    ActionLinkText,
    AlertIconWrapper,
    ShowMoreButton,
    TextContainer,
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
    collapsedHeight,
    ...otherProps
}: AlertProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [showHiddenContent, setShowHiddenContent] = useState(false);
    const contentContainerHeightRef = useRef<HTMLDivElement>(null);
    const [renderShowMore, setRenderShowMore] = useState<boolean>(false);

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
        console.log("test");
        // forces line-clamp to trigger so that we can determine if content is collapsible
        setShowHiddenContent(!collapsedHeight);
        setRenderShowMore(!!collapsedHeight);
        if (!collapsedHeight || !contentContainerHeightRef.current) return;

        // calculate whether to show more after line-clamp is triggered
        const clientHeight = contentContainerHeightRef.current.clientHeight;
        const scrollHeight = contentContainerHeightRef.current.scrollHeight;

        // Note: when using DS Text.H3 or Text.H1, the calculated scrollHeight and clientHeight differs by 1 without any overflow

        setRenderShowMore(scrollHeight - clientHeight > 1);
    }, [children]);

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const renderShowMoreButton = () => (
        <ShowMoreButton
            onClick={() => setShowHiddenContent(!showHiddenContent)}
        >
            {showHiddenContent ? (
                <>
                    Show less
                    <ChevronUpIcon />
                </>
            ) : (
                <>
                    Show more
                    <ChevronDownIcon />
                </>
            )}
        </ShowMoreButton>
    );

    const renderLinkType = () => {
        if (actionLinkIcon) {
            return actionLinkIcon;
        }
        return <ArrowRightIcon />;
    };

    const renderLink = () => {
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
            <TextContainer>
                <TextWrapperContainer
                    ref={contentContainerHeightRef}
                    $collapsedHeight={collapsedHeight}
                    $showMore={showHiddenContent}
                >
                    {children}
                </TextWrapperContainer>
                {renderShowMore && renderShowMoreButton()}
                {actionLink && renderLink()}
            </TextContainer>
        </Wrapper>
    );
};
